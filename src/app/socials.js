import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const links = {
  github: "https://www.github.com/dayumstir",
  linkedin: "https://www.linkedin.com/in/dempstertay/",
  email: "mailto:dempstertay123@gmail.com",
};

export default function Socials() {
  return (
    <socials className="flex items-center gap-8 sm:fixed sm:bottom-0 sm:left-16 sm:flex-col">
      <a href={links.github} target="_blank">
        <LuGithub
          size={24}
          className="cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:stroke-primary"
        />
      </a>
      <a href={links.linkedin} target="_blank">
        <LuLinkedin
          size={24}
          className="cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:stroke-primary"
        />
      </a>
      <a href={links.email} target="_blank">
        <LuMail
          size={24}
          className="cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:stroke-primary"
        />
      </a>
      <vertical className="hidden h-32 border-l-2 border-white sm:block" />
    </socials>
  );
}
