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
      } z-10 h-20 w-screen bg-[#21262c] duration-300 sm:hidden`}
    >
      <div className="absolute left-7 top-7 font-semibold">
        Dempster 🧑🏻‍💻
      </div>
      <LuMenu
        size={30}
        className="absolute right-7 top-7 cursor-pointer"
        onClick={handleClick}
      />
      <div
        className={`fixed top-0 z-50 flex h-screen w-9/12 flex-col items-center justify-center gap-3 bg-[#2c323a] duration-300 ${
          isOpen ? "right-0" : "-right-3/4"
        }`}
      >
        <LuX
          size={30}
          className="absolute right-8 top-8 cursor-pointer"
          onClick={handleClick}
        />
        <div className="flex cursor-pointer flex-col items-center gap-5">
          {sections.map((sect) => (
            <Link to={sect.toLowerCase()} smooth={true} duration={500}>
              <p className="text-xl transition-all duration-300 hover:text-primary">
                {sect}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

const sections = ["About", "Experience", "Projects", "Resume"];
