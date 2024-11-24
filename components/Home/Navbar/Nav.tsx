"use client";
// because "Use Hooks" do not work in the Server Components.

import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

export default function Nav({ openNav }: Props) {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-white shadow-md" : "fixed"
      } w-full transition-all duration-200 h-[12vh] z-[1000]`}
    >
      <div className="flex items-center justify-between w-[90%] xl:w-[80%] h-full mx-auto">
        {/* Logo */}
        {/* hover:shadow-sm shadow-pink-100 rounded-sm */}
        <h1 className="text-xl md:text-2xl font-bold cursor-pointer bg-transparent">
          <span className="text-3xl md:text-4xl text-pink-700">A</span>ppify
        </h1>
        {/* navLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((item) => (
            <Link key={item.id} href={item.href}>
              <p className="nav__link">{item.label}</p>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-white text-base font-semibold bg-blue-700 p-2 rounded-full md:px-8 md:py-2.5 px-6 py-2 hover:bg-blue-900 transition-all duration-200">
            Join Now
          </button>

          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}
