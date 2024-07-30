
import Image from "next/image";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <div className="flex justify-center mt-2 gap-2">


        <a
          href="https://github.com/xansaul"
          target="_blank"
          title="Github xansaul"
          aria-label="Perfil de Github de XanSaul"
        >
          <FaGithub size={26} />
          
        </a>

      <a
        href="https://www.linkedin.com/in/alejandro-saul-huerta-murillo-a16a32b221/"
        target="_blank"
        title="Linkedin xansaul"
        aria-label="Perfil de LinkedIn de XanSaul"
      >
        <FaLinkedin size={26} />
      </a>

      <a
        href="https://www.instagram.com/xansaul/"
        target="_blank"
        title="Instagram xansaul"
        aria-label="Perfil de Instagram de XanSaul"
      >
        <FaInstagram size={26} />
      </a>
    </div>
  );
};
