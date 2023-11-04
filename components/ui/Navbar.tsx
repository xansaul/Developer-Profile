import React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {0
  return (
    <nav 
      className="md:py-4 py-6 sm:px-8 px-4 top-0 md:px-28 
        backdrop-blur-md bg-[#000128]/70
        fixed w-full 
        "
    >
      
      <ul className="flex gap-5 md:text-lg md:justify-end sm:justify-start flex-wrap">
        <li className="cursor-pointer">
          <Link smooth spy to="experience" href="#experience" title="experiencia">
            Experiencia
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link smooth spy to="skills" href="#skills" title="skills">
            Skills
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link smooth spy to="contacto" href="#contacto" title="contacto">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};
