import "./globals.css";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <div
        className="w-full relative overflow-visible flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/hero/wood-grain.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <img
          src="/hero/laptop.svg"
          className="w-[400px] top-0 -mt-[200px] z-20"
        />

        <About />
      </div>
      <Experience />
      <Projects />
    </div>
  );
}
