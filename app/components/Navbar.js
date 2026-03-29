"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToPosition = (value) => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: value, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About", icon: "https://cdn.lordicon.com/ssartdnc.json", scroll: 650 },
    { label: "Skills", icon: "https://cdn.lordicon.com/fiyxtklr.json", scroll: 1370 },
    { label: "Contact", icon: "https://cdn.lordicon.com/ozlkyfxg.json", scroll: 2650 },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md h-16 lg:h-24 flex items-center justify-between px-6 lg:px-16">
      <script src="https://cdn.lordicon.com/lordicon.js"></script>

      {/* Logo */}
      <button
        className="flex items-center justify-center flex-col cursor-pointer font-bold hover:text-purple-400"
        onClick={() => handleScrollToPosition(0)}
      >
        <lord-icon
          src="https://cdn.lordicon.com/obyhgzls.json"
          trigger="loop"
          stroke="bold"
          state="loop-cycle"
          colors="primary:#848484,secondary:#e88c30,tertiary:#ffc738,quaternary:#ebe6ef"
          className="w-[40px] h-[40px] lg:w-[70px] lg:h-[70px]"
        ></lord-icon>
        <span className="text-[6px] tracking-widest lg:text-[8px]">ADITYA DEV X</span>
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-12">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex flex-col items-center cursor-pointer font-bold hover:text-purple-400"
            onClick={() => handleScrollToPosition(item.scroll)}
          >
            <lord-icon
              src={item.icon}
              trigger="hover"
              stroke="bold"
              colors="primary:#ffffff,secondary:#a866ee"
              className="w-[30px] h-[30px]"
            ></lord-icon>
            <span className="text-[16px]">{item.label}</span>
          </button>
        ))}
        <button className="flex flex-col items-center cursor-pointer font-bold hover:text-purple-400">
          <lord-icon
            src="https://cdn.lordicon.com/jdgfsfzr.json"
            trigger="hover"
            stroke="bold"
            colors="primary:#ffffff,secondary:#a866ee"
            className="w-[30px] h-[30px]"
          ></lord-icon>
          <Link href="/project"><span className="text-[16px]">Projects</span></Link>
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 z-50">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-3 cursor-pointer font-bold hover:text-purple-400 text-[18px]"
              onClick={() => handleScrollToPosition(item.scroll)}
            >
              {item.label}
            </button>
          ))}
          <Link href="/project" onClick={() => setMenuOpen(false)}>
            <span className="font-bold hover:text-purple-400 text-[18px]">Projects</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;