"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);

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
    const { company, role, date, desc, tech } = data;

    return (
      <div
        className="hover-effect relative flex rounded-xl bg-[#282D33] p-8"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="flex min-w-[100px] justify-end pr-8 pt-0.5 text-sm font-light text-slate-400 sm:min-w-[170px]">
          {date}
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold">{company}</div>
          <div className="font-semibold">{role}</div>
          <div className="text-sm text-slate-400">{desc}</div>
          <div className="flex flex-wrap gap-2 pt-4">
            {tech.map((tech) => {
              return (
                <div className="rounded-3xl border-2 border-secondary px-3 py-1 text-sm text-secondary">
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
      className="flex min-h-screen max-w-sm flex-col justify-center px-3 sm:max-w-xl"
    >
      <div className="w-full py-8 text-4xl font-semibold text-primary sm:text-5xl">
        Experience
      </div>

      <div className="flex flex-col gap-8">
        {list.map((exp) => {
          return <Exp data={exp} />;
        })}
      </div>
    </section>
  );
}

const list = [
  {
    company: "SISTIC Singapore",
    role: "Product Engineer Intern",
    date: "May 2023 - Present",
    desc: " Facilitated the revamp of the company portal and implemented new features such as an events visit planner and fixed numerous bugs. Automated processes to boost operational efficiency by aggregating real time data into a pivot table.",
    tech: ["React", "Javascript", "REST APIs", "Material UI", "SCSS"],
  },
  {
    company: "National University of Singapore",
    role: "Teaching Assistant",
    date: "Aug 2023 - Present",
    desc: "Lead weekly tutorial sessions for 14 students, enhancing their grasp of Java Fundamentals. Developed and taught classes on problem-solving methodologies, algorithm design, testing, debugging, programming constructs, data structures, sorting, and recursion",
    tech: ["Java"],
  },
];
