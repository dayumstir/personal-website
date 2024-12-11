"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Badge } from "@/components/badge";

export default function Experience() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Hover effect for the cards
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

  return (
    <section
      id="experience"
      className="flex min-h-screen max-w-sm flex-col justify-center px-3 sm:max-w-xl"
    >
      <h1 className="w-full bg-gradient-to-r from-violet-200 via-violet-400 to-violet-600 bg-clip-text py-8 text-4xl font-semibold text-transparent sm:text-5xl">
        Experience
      </h1>

      <div className="flex flex-col gap-8">
        {
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="hover-effect rounded-lg border border-violet-800/40 p-8 backdrop-blur-sm transition-colors hover:border-violet-600/40"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="mb-4 flex flex-col justify-between md:flex-row md:items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-violet-100">
                      {exp.company}
                    </h3>
                    <h4 className="text-lg text-violet-300/80">{exp.title}</h4>
                  </div>
                  <p className="mt-2 text-violet-400/60 md:mt-0">{exp.date}</p>
                </div>

                <p className="mb-6 leading-relaxed text-gray-400">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-violet-800/30 bg-violet-950/30 text-violet-200 hover:bg-violet-900/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </section>
  );
}

const experiences = [
  {
    company: "SISTIC Singapore",
    role: "Product Engineer Intern",
    date: "Mar 2023 - Dec 2023",
    description:
      "Revamped the SISTIC portal using React, Sass, and MUI to implement new features and improve the user experience. Refactored core backend modules for the STiX Cloud ticketing system with Spring Boot, enhancing performance and reliability.",
    tech: ["React", "JavaScript", "MUI", "Sass", "Spring Boot"],
  },
  {
    company: "Webacy",
    role: "Data Analyst Intern",
    date: "May 2024 - Jul 2024",
    description:
      "Utilised unsupervised machine learning with Python, TensorFlow, and Scikit-learn to analyse smart contracts, identifying key risk clusters to improve security. Designed and optimized SQL queries, integrating them into Tableau dashboards to automate reporting workflows.",
    tech: ["Python", "SQL", "Tableau", "TensorFlow", "Scikit-learn"],
  },
  {
    company: "NUS School of Computing",
    role: "Teaching Assistant",
    date: "Aug 2023 - Nov 2023",
    description:
      "Conducted weekly tutorial sessions for 14 students, enhancing grasp of Java fundamentals. Devised and taught classes on problem-solving methodologies, data structures and algorithms, sorting, recursion,testing and debugging.",
    tech: ["Java"],
  },
];
