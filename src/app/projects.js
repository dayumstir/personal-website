"use client";
import { Badge } from "@/components/badge";
import { LuGithub } from "react-icons/lu";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-4 py-16">
      <h1 className="w-full bg-gradient-to-r from-teal-200 via-teal-400 to-teal-600  bg-clip-text py-8 text-4xl font-semibold text-transparent sm:text-5xl">
        Projects
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group rounded-lg border border-teal-600/40 p-6 backdrop-blur-sm transition-colors hover:border-teal-400/40"
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white">
                  <Image
                    src={project.img}
                    alt={`${project.name} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-teal-100">
                  {project.name}
                </h3>
              </div>
              <motion.button
                className="text-teal-400/60 transition-colors hover:text-teal-300"
                whileHover={{ scale: 1.1, rotate: 15 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => window.open(project.link, "_blank")}
              >
                <LuGithub className="h-5 w-5" />
              </motion.button>
            </div>

            <p className="mb-6 leading-relaxed text-gray-400">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="outline"
                  className="border-teal-800/30 bg-teal-950/30 text-teal-200 hover:bg-teal-900/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    name: "PandaPay",
    description:
      "Capstone BNPL e-Wallet application which offers diverse instalment plans tailored to users' credit scores, determined by an AI credit scoring system. Monorepo with three frontends (two web apps and one mobile app) and a single backend, earned the Best Capstone Project Award - Gold.",
    tech: [
      "React Native",
      "React",
      "Express.js",
      "PostgreSQL",
      "AWS RDS",
      "AWS S3",
      "AWS EC2",
      "Jest",
      "Stripe API",
    ],
    img: "/pandapay-icon.png",
    link: "https://github.com/dayumstir/IS4103-Capstone",
  },
  {
    name: "Infinite Carpool",
    description:
      "A web application that connects employees within a company, facilitating easy group formation for carpooling, and determines the shortest travel path to the office. Attained Top 4 at LifeHack 2023.",
    tech: ["React", "Javascript", "CSS", "Firebase"],
    img: "/infinite-carpool-icon.png",
    link: "https://github.com/adityajirafe/InfiniteIteratorsLifeHack",
  },
  {
    name: "flash!",
    description:
      "A rock climbing social media mobile application for climbers to post videos of their rock climbing betas (instructions), follow other users, and also like and comment on other users' posts.",
    tech: ["React Native", "CSS", "Firebase", "Jest"],
    img: "/flash-icon.png",
    link: "https://github.com/dayumstir/flash",
  },
];
