"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="flex h-screen flex-col justify-center">
      <motion.div
        className="relative flex h-screen w-screen items-center justify-center bg-black bg-grid-white/[0.2]"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-20 flex flex-col items-center">
          <motion.p
            className="text-3xl font-semibold text-neutral-400 sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Hi, my name is
          </motion.p>
          <motion.p
            className="bg-gradient-to-b from-neutral-100 to-neutral-400 bg-clip-text pt-4 text-5xl font-bold text-transparent sm:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Dempster Tay
          </motion.p>
          <div className="flex flex-col items-center text-center">
            <motion.p
              className="max-w-xs pt-6 text-neutral-400 sm:max-w-lg sm:pt-10 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              I'm an aspiring software engineer focusing on full stack
              development as I enjoy creating beautiful yet performant software
              experiences for the masses.
            </motion.p>
            <motion.p
              className="max-w-xs pt-6 text-neutral-400 sm:max-w-lg sm:pt-3 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              Outside of coding, I enjoy rock climbing and the problem solving
              aspect of tackling challenging routes.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
