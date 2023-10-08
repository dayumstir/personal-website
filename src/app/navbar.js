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
        className={`flex w-full cursor-pointer justify-end gap-2 ${
          !isSelected ? "opacity-50" : ""
        }`}
      >
        {section}
        {isSelected ? <LuCircleDot size={24} /> : <LuCircle size={24} />}
      </div>
    );
  };

  return (
    <nav className="fixed right-16 top-0 flex flex-col items-end gap-8">
      <vertical className="h-32 border-l-2 border-white pr-3" />
      {sections.map((sect) => (
        <Link to={sect.toLowerCase()} smooth={true} duration={500}>
          <NavIcon section={sect} />
        </Link>
      ))}
    </nav>
  );
}

const sections = ["About", "Experience", "Projects", "Resume"];
