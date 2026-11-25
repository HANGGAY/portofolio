import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Expertise } from "@/components/sections/expertise";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Impact } from "@/components/sections/impact";
import { Skills } from "@/components/sections/skills";
import { Architecture } from "@/components/sections/architecture";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Research />
        <Impact />
        <Skills />
        <Architecture />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
