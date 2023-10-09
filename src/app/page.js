import NavBar from "./navbar";
import NavBarMobile from "./navbarmobile";
import Socials from "./socials";
import About from "./about";
import Experience from "./experience";
import Projects from "./projects";
import Resume from "./resume";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <NavBar />
      <NavBarMobile />
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Socials />
      <footer className="max-w-xs py-8 text-center text-xs text-slate-400">
        This website was built using Next.js and Tailwind CSS. Deployed with
        Vercel. Loosely designed in Figma.
      </footer>
    </main>
  );
}
