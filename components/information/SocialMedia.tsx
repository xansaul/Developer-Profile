import Image from "next/image";
import React from "react";

export const SocialMedia = ({ className = "" }:{className?: string}) => {
  return (
    <div className="flex justify-center mt-2 gap-2">
      
      <a
        href="https://github.com/xansaul"
        target="_blank"
        title="Github xansaul"

      >
        <Image
        className={className}
          src="/svg/github.svg"
          alt="logo github"
          width={0}
          height={0}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/alejandro-saul-huerta-murillo-a0a32b221/"
        target="_blank"
        title="Linkedin xansaul"
      >
        <Image
        className={className}
          src="/svg/linkedin.svg"
          alt="logo linkedin"
          width={0}
          height={0}
        />
      </a>

      <a
        href="https://www.instagram.com/xansaul/"
        target="_blank"
        title="Instagram xansaul"
      >
        <Image
        className={className}
          src="/svg/instagram.svg"
          alt="logo instagram"
          width={0}
          height={0}
        />
      </a>
    </div>
  );
};
