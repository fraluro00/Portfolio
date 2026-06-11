import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DigitalTwin from "@/components/DigitalTwin";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Journey />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <DigitalTwin />
    </>
  );
}
