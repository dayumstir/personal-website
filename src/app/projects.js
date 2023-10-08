import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";

export default function Projects() {
  const Proj = ({ data }) => {
    const { name, desc, tech, img, link } = data;

    return (
      <a
        href={link}
        target="_blank"
        className="group transition-all duration-300 hover:-translate-y-2"
      >
        <div
          className="relative flex h-full flex-col rounded-xl bg-[#282D33] p-8"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <LuExternalLink
            className="absolute right-5 top-5 transition-all duration-300 group-hover:stroke-primary"
            size={20}
          />
          <Image src={img} width={70} height={70} alt="Project Icon" />
          <div className="pt-8 font-semibold">{name}</div>
          <div className="pt-4 text-sm text-slate-400">{desc}</div>
          <div className="flex flex-wrap gap-2 pt-4">
            {tech.map((tech) => (
              <div className="rounded-3xl border-2 border-secondary px-3 py-1 text-sm text-secondary">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </a>
    );
  };
  return (
    <section
      id="projects"
      className="flex h-screen flex-col items-end justify-center"
    >
      <div className="w-full py-8 text-left text-right text-5xl font-semibold text-primary">
        Projects
      </div>
      <div className="grid max-w-3xl grid-cols-3 gap-4">
        {list.map((proj) => (
          <Proj data={proj} />
        ))}
      </div>
    </section>
  );
}

const list = [
  {
    name: "Infinite Carpool",
    desc: "A web application that connects employees within a company, facilitating easy coordination and group formation for carpooling.",
    tech: ["React", "Javascript", "CSS", "Firebase"],
    img: "/infinite-carpool-icon.png",
    link: "https://github.com/adityajirafe/InfiniteIteratorsLifeHack",
  },
  {
    name: "flash!",
    desc: "A rock climbing social media mobile application for climbers to post videos of their rock climbing betas (instructions), follow other users, like and comment on posts.",
    tech: ["React Native", "CSS", "Firebase", "Jest"],
    img: "/flash-icon.png",
    link: "https://github.com/dayumstir/flash",
  },
  {
    name: "eVenn",
    desc: "A social media event finder web application for students to easily post, discover, comment, and indicate attendance to events.",
    tech: ["Java", "PrimeFaces", "Glassfish", "MySQL"],
    img: "/evenn-icon.png",
    link: "https://github.com/springljy/eVenn",
  },
];
