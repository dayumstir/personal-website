"use client";

import { Link } from "react-scroll";
import { LuMenu, LuX } from "react-icons/lu";
import { useState, useEffect } from "react";

export default function NavBarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return (
    <nav
      className={`sticky ${
        scrollDirection === "down" ? "-top-20" : "top-0"
      } z-10 h-20 w-screen border-b border-b-secondary bg-neutral-900 duration-300 sm:hidden`}
    >
      <div className="absolute left-7 top-7 text-lg font-semibold text-gray-300">
        Dempster 🧑🏻‍💻
      </div>
      <LuMenu
        size={30}
        className="absolute right-7 top-7 cursor-pointer text-gray-300"
        onClick={handleClick}
      />
      <div
        className={`fixed top-0 z-50 flex h-screen w-9/12 flex-col items-center justify-center gap-3 bg-neutral-900 duration-300 ${
          isOpen ? "right-0" : "-right-3/4"
        }`}
      >
        <LuX
          size={30}
          className="absolute right-8 top-8 cursor-pointer text-gray-300"
          onClick={handleClick}
        />
        <div className="flex cursor-pointer flex-col items-center gap-5">
          {sections.map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              <p className="text-xl text-gray-300 transition-all duration-300 hover:text-primary">
                {section}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

const sections = ["About", "Experience", "Projects", "Resume"];
