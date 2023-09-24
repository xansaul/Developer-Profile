import React from 'react'
import { Link } from 'react-scroll'

export const Navbar = () => {
  return (
    <nav className="h-full md:py-4 py-4 px-5 top-0  md:px-28 backdrop-blur-sm bg-gradient-to-b from-[#00013D]/80 to-transparent flex justify-between">
      <h1 className="font-bold text-2xl">XanSaul</h1>
    <ul className="flex gap-5 text-lg md:justify-end sm:justify-start flex-wrap">
      <li className="cursor-pointer">
        <Link smooth spy to="experience" href="#experience">
          Experiencia
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link smooth spy to="skills"  href="#skills">
          Skills
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link smooth spy to="contacts"  href="#experience">
          Contacto
        </Link>
      </li>
    </ul>
  </nav>
  )
}
