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
      className="flex min-h-screen flex-col justify-center px-3"
    >
      <div className="w-full pb-8 pt-24 text-right text-4xl font-semibold text-primary sm:pt-8 sm:text-5xl">
        Projects
      </div>
      <div className="grid max-w-sm grid-rows-3 gap-4 sm:max-w-3xl sm:grid-cols-3 sm:grid-rows-1">
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
    desc: "A web application that connects employees within a company, facilitating easy group formation for carpooling, and determines the shortest travel path to the office. Attained Top 4 at LifeHack 2023.",
    tech: ["React", "Javascript", "CSS", "Firebase"],
    img: "/infinite-carpool-icon.png",
    link: "https://github.com/adityajirafe/InfiniteIteratorsLifeHack",
  },
  {
    name: "flash!",
    desc: "A rock climbing social media mobile application for climbers to post videos of their rock climbing betas (instructions), follow other users, and also like and comment on other users' posts.",
    tech: ["React Native", "CSS", "Firebase", "Jest"],
    img: "/flash-icon.png",
    link: "https://github.com/dayumstir/flash",
  },
  {
    name: "eVenn",
    desc: "A social media event finder web application for students to easily post, discover, comment, and indicate attendance to school events.",
    tech: ["Java", "PrimeFaces", "Glassfish", "MySQL"],
    img: "/evenn-icon.png",
    link: "https://github.com/springljy/eVenn",
  },
];
