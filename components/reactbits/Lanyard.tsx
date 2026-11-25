"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, Environment, Lightformer } from "@react-three/drei";
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";
import "./Lanyard.css";

extend({ MeshLineGeometry, MeshLineMaterial } as unknown as never);

const BLANK_PIXEL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  frontImage = null,
  backImage = null,
  imageFit = "cover",
  lanyardImage = null,
  lanyardWidth = 1,
  groupPosition = [0, 4, 0],
  cardScale = 2.25,
}: {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  frontImage?: string | null;
  backImage?: string | null;
  imageFit?: "cover" | "contain";
  lanyardImage?: string | null;
  lanyardWidth?: number;
  groupPosition?: [number, number, number];
  cardScale?: number;
}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position: position as unknown as THREE.Vector3, fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band
            isMobile={isMobile}
            frontImage={frontImage}
            backImage={backImage}
            imageFit={imageFit}
            lanyardImage={lanyardImage}
            lanyardWidth={lanyardWidth}
            groupPosition={groupPosition}
            cardScale={cardScale}
          />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  frontImage = null,
  backImage = null,
  imageFit = "cover",
  lanyardImage = null,
  lanyardWidth = 1,
  groupPosition = [0, 4, 0],
  cardScale = 2.25,
}: {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
  frontImage?: string | null;
  backImage?: string | null;
  imageFit?: string;
  lanyardImage?: string | null;
  lanyardWidth?: number;
  groupPosition?: [number, number, number];
  cardScale?: number;
}) {
  const band = useRef<THREE.Mesh>(null);
  const fixed = useRef<never>(null);
  const j1 = useRef<never>(null);
  const j2 = useRef<never>(null);
  const j3 = useRef<never>(null);
  const card = useRef<never>(null);
  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const segmentProps = { type: "dynamic" as const, canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  const { nodes, materials } = useGLTF("/card.glb") as unknown as { nodes: { card: THREE.Mesh; clip: THREE.Mesh; clamp: THREE.Mesh }; materials: { base: THREE.MeshPhysicalMaterial & { map: THREE.Texture }; metal: THREE.Material } };
  const sourceTexture = useTexture(lanyardImage || "/lanyard.png");
  const texture = useMemo(() => {
    const mapped = sourceTexture.clone();
    mapped.wrapS = THREE.RepeatWrapping;
    mapped.wrapT = THREE.RepeatWrapping;
    mapped.needsUpdate = true;
    return mapped;
  }, [sourceTexture]);
  const frontTex = useTexture(frontImage || BLANK_PIXEL);
  const backTex = useTexture(backImage || BLANK_PIXEL);

  const cardMap = useMemo(() => {
    const baseMap = (materials.base as unknown as { map: THREE.Texture }).map;
    if (!frontImage && !backImage) return baseMap;
    const baseImg = baseMap.image as HTMLImageElement & { width: number; height: number };
    if (!baseImg || !baseImg.width) return baseMap;
    const W = baseImg.width;
    const H = baseImg.height;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    if (!ctx) return baseMap;
    ctx.drawImage(baseImg, 0, 0, W, H);
    const drawFitted = (img: HTMLImageElement, rect: typeof FRONT_UV_RECT) => {
      const rx = rect.x * W;
      const ry = rect.y * H;
      const rw = rect.w * W;
      const rh = rect.h * H;
      const pick = imageFit === "contain" ? Math.min : Math.max;
      const scale = pick(rw / (img.width || 1), rh / (img.height || 1));
      const dw = img.width * scale;
      const dh = img.height * scale;
      const dx = rx + (rw - dw) / 2;
      const dy = ry + (rh - dh) / 2;
      ctx.save();
      ctx.beginPath();
      ctx.rect(rx, ry, rw, rh);
      ctx.clip();
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.restore();
    };
    if (frontImage && (frontTex as unknown as { image: HTMLImageElement }).image?.width) drawFitted((frontTex as unknown as { image: HTMLImageElement }).image, FRONT_UV_RECT);
    if (backImage && (backTex as unknown as { image: HTMLImageElement }).image?.width) drawFitted((backTex as unknown as { image: HTMLImageElement }).image, BACK_UV_RECT);
    const composite = new THREE.CanvasTexture(canvas);
    composite.colorSpace = THREE.SRGBColorSpace;
    composite.flipY = baseMap.flipY;
    composite.anisotropy = 16;
    composite.needsUpdate = true;
    return composite;
  }, [frontImage, backImage, imageFit, frontTex, backTex, materials.base]);

  const [curve] = useState(() => {
    const next = new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]);
    next.curveType = "chordal";
    return next;
  });
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed as never, j1 as never, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1 as never, j2 as never, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2 as never, j3 as never, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3 as never, card as never, [[0, 0, 0], [0, 1.5, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => (ref.current as unknown as { wakeUp: () => void })?.wakeUp?.());
      (card.current as unknown as { setNextKinematicTranslation: (v: { x: number; y: number; z: number }) => void }).setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current && j1.current && j2.current && j3.current && card.current && band.current) {
      [j1, j2].forEach((ref) => {
        const r = ref.current as unknown as { lerped?: THREE.Vector3; translation: () => THREE.Vector3 };
        if (!r.lerped) r.lerped = new THREE.Vector3().copy(r.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, r.lerped.distanceTo(r.translation())));
        r.lerped.lerp(r.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
      });
      const j3t = (j3.current as unknown as { translation: () => THREE.Vector3 }).translation();
      const j2l = (j2.current as unknown as { lerped: THREE.Vector3 }).lerped;
      const j1l = (j1.current as unknown as { lerped: THREE.Vector3 }).lerped;
      const fixt = (fixed.current as unknown as { translation: () => THREE.Vector3 }).translation();
      curve.points[0].copy(j3t);
      curve.points[1].copy(j2l);
      curve.points[2].copy(j1l);
      curve.points[3].copy(fixt);
      (band.current.geometry as unknown as { setPoints: (p: THREE.Vector3[]) => void }).setPoints(curve.getPoints(isMobile ? 16 : 32));
      const angvel = (card.current as unknown as { angvel: () => THREE.Vector3 }).angvel();
      const rotation = (card.current as unknown as { rotation: () => THREE.Vector3 }).rotation();
      ang.copy(angvel);
      rot.copy(rotation);
      (card.current as unknown as { setAngvel: (v: { x: number; y: number; z: number }) => void }).setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  return (
    <>
      <group position={groupPosition}>
        {/* @ts-expect-error rapier types */}
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        {/* @ts-expect-error rapier types */}
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        {/* @ts-expect-error rapier types */}
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        {/* @ts-expect-error rapier types */}
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        {/* @ts-expect-error rapier types */}
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? "kinematicPosition" : "dynamic"}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={cardScale}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => ((e.target as unknown as { releasePointerCapture: (id: number) => void }).releasePointerCapture((e as unknown as { pointerId: number }).pointerId), drag(false))}
            onPointerDown={(e) => {
              (e.target as unknown as { setPointerCapture: (id: number) => void }).setPointerCapture((e as unknown as { pointerId: number }).pointerId);
              const point = (e as unknown as { point: THREE.Vector3 }).point;
              drag(new THREE.Vector3().copy(point).sub(vec.copy((card.current as unknown as { translation: () => THREE.Vector3 }).translation())));
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardMap as THREE.Texture}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band as never}>
        <meshLineGeometry />
        <meshLineMaterial color="white" depthTest={false} resolution={isMobile ? [1000, 2000] : [1000, 1000]} useMap map={texture} repeat={[-4, 1]} lineWidth={lanyardWidth} />
      </mesh>
    </>
  );
}
