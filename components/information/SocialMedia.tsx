import Image from "next/image";
import React from "react";

export const SocialMedia = () => {
  return (
    <div className="flex justify-center mt-2 gap-2">
      <a
        href="https://github.com/xansaul"
        target="_blank"
        title="Github xansaul"
      >
        <Image src="/svg/github.svg" alt="logo github" width={24} height={24} />
      </a>

      <a
        href="https://www.linkedin.com/in/alejandro-saul-huerta-murillo-a0a32b221/"
        target="_blank"
        title="Linkedin xansaul"
      >
        <Image
          src="/svg/linkedin.svg"
          alt="logo linkedin"
          width={24}
          height={24}
        />
      </a>

      <a
        href="https://www.instagram.com/xansaul/"
        target="_blank"
        title="Instagram xansaul"
      >
        <Image
          src="/svg/instagram.svg"
          alt="logo instagram"
          width={24}
          height={24}
        />
      </a>
    </div>
  );
};
