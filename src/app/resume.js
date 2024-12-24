"use client";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section
      id="resume"
      className="flex h-screen max-w-sm flex-col items-center justify-center px-6 sm:max-w-xl"
    >
      <h1 className="w-full bg-gradient-to-b from-neutral-100 to-neutral-500 bg-clip-text py-8 text-4xl font-semibold text-transparent sm:text-5xl">
        Resume
      </h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-gray-400">
          Feel free to take a look at my resume and reach out if you like what
          you see! Looking for new entry-level full time positions and
          opportunities to learn and grow. 😊
        </div>

        <motion.a
          className="rainbow-button transition-duration-300 mx-auto mt-12 max-w-max rounded-full px-8 py-4 font-semibold text-gray-800 transition-all"
          href="/Dempster_Resume.pdf"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
