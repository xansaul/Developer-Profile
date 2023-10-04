import React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {0
  return (
    <nav 
      className="md:py-4 py-6 sm:px-8 px-4 top-0 md:px-28 
        backdrop-blur-md bg-[#000128]/70 flex justify-between items-center
        fixed w-full 
        "
    >
      <h1 className="font-bold md:text-3xl text-2xl">XanSaul</h1>
      <ul className="flex gap-5 md:text-lg md:justify-end sm:justify-start flex-wrap">
        <li className="cursor-pointer">
          <Link smooth spy to="experience" href="#experience">
            Experiencia
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link smooth spy to="skills" href="#skills">
            Skills
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link smooth spy to="contacto" href="#contacto">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};
