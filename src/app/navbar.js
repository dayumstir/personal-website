"use client";

import { LuCircleDot, LuCircle } from "react-icons/lu";
import { useState } from "react";
import { Link } from "react-scroll";
import { useEffect } from "react";

export default function NavBar() {
  const [selected, setSelected] = useState("about");

  useEffect(() => {
    const options = {
      threshold: 0.55,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll("section");
    sections.forEach((sect) => observer.observe(sect));
  }, []);

  const NavIcon = ({ section }) => {
    const isSelected = section.toLowerCase() === selected;

    return (
      <div
        className={`flex w-full cursor-pointer justify-end gap-2 text-gray-400 transition-all duration-300 hover:opacity-100 
        ${!isSelected ? "opacity-50" : "opacity-100"}`}
      >
        {section}
        {isSelected ? <LuCircleDot size={24} /> : <LuCircle size={24} />}
      </div>
    );
  };

  return (
    <nav className="fixed right-16 top-0 z-10 -mt-8 hidden flex-col items-end gap-8 sm:flex">
      <Link to={"about"} smooth={true} duration={500}>
        <div className="fixed left-16 top-8 hidden cursor-pointer text-3xl sm:block">
          🧑🏻‍💻
        </div>
      </Link>
      <vertical className="hidden h-32 border-l-2 border-gray-400 pr-3 sm:block" />
      {sections.map((section) => (
        <Link
          key={section}
          to={section.toLowerCase()}
          smooth={true}
          duration={500}
        >
          <NavIcon section={section} />
        </Link>
      ))}
    </nav>
  );
}

const sections = ["About", "Experience", "Projects", "Resume"];
