"use client"

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function DarkMode() {
  return (
    <div className="fixed bottom-3 right-3 stroke-white">
      <MdOutlineDarkMode size={24} />
      <MdOutlineLightMode size={24} />
    </div>
  );
}
