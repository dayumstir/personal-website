import Image from "next/image";
import Socials from "./socials";
import About from "./about";
import NavBar from "./navbar";
import Experience from "./experience";
import Projects from "./projects";
import Resume from "./resume";
import DarkMode from "./darkmode";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <NavBar />
      <Socials />
      <DarkMode />
      <About />
      <Experience />
      <Projects />
      <Resume />
      <footer className="max-w-lg py-8 text-slate-400">
        Loosely designed in Figma and coded in Visual Studio Code by yours
        truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All
        text is set in the Inter typeface.
      </footer>
    </main>
  );
}
