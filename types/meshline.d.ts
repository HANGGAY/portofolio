declare module "meshline" {
  export const MeshLineGeometry: unknown;
  export const MeshLineMaterial: unknown;
}
declare module "*.glb";
declare module "*.png";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        meshLineGeometry: any;
        meshLineMaterial: any;
      }
    }
  }
}
export {};
