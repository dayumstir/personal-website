"use client";

import { useEffect } from "react";

const list = [
  {
    company: "SISTIC Singapore",
    role: "Product Engineer Intern",
    date: "May 2023 - Present",
    description:
      "Helped with this  Helped with this Helped with this Helped with this Helped with this Helped with this Helped with this Helped with this Helped with this",
    techstack: ["React", "Javascript", "Material UI", "SCSS", "REST APIs"],
  },
  {
    company: "National University of Singapore",
    role: "Teaching Assistant",
    date: "Aug 2023 - Present",
    description: "Helped with this",
    techstack: ["Java"],
  },
  {
    company: "NUS Computing Club",
    role: "Director of Partnerships (Student Life)",
    date: "Aug 2022 - Jul 2023",
    description: "Helped with this",
    techstack: ["React", "Express.js"],
  },
];

export default function Experience() {
  useEffect(() => {
    const handleOnMouseMove = (e) => {
      const { currentTarget: target } = e;

      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    const cards = document.querySelectorAll(".hover-effect");
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleOnMouseMove);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleOnMouseMove);
      });
    };
  }, []);

  const Exp = ({ data }) => {
    const { company, role, date, description, techstack } = data;

    return (
      <div className="hover-effect relative flex max-w-xl rounded-xl bg-[#282D33] p-8">
        <div className="flex min-w-[170px] justify-end pr-8 pt-0.5 text-sm font-light text-slate-400">
          {date}
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-">{company}</div>
          <div className="">{role}</div>
          <div className="text-sm text-slate-400">{description}</div>
          <div className="flex flex-wrap gap-2 pt-4">
            {techstack.map((tech) => {
              return (
                <div className="min-w-fit rounded-3xl border-2 border-secondary px-3 py-1 text-sm text-secondary">
                  {tech}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="experience"
      className="flex min-h-screen flex-col justify-center"
    >
      <div className="w-full py-8 text-5xl font-semibold text-primary">
        Experience
      </div>

      <div className="max-w-l flex flex-col gap-8">
        {list.map((data) => {
          return <Exp data={data} />;
        })}
      </div>
    </section>
  );
}
