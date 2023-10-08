import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const links = {
  github: "https://www.github.com/dayumstir",
  linkedin: "https://www.linkedin.com/in/dempstertay/",
  email: "mailto:dempstertay123@gmail.com",
};

export default function Socials() {
  return (
    <socials className="fixed bottom-0 left-16 flex flex-col items-center gap-8">
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
      <vertical className="h-32 border-l-2 border-white" />
    </socials>
  );
}
