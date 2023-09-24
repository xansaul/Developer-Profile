import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full h-auto p-3 mt-6">
      <div className="flex flex-wrap gap-5 sm:justify-end items-center justify-center sm:mx-32">
        <h2 className="text-white">Encuentro Cercano Del Tercer Tipo</h2>
        <div className="flex gap-6">
          <a href="https://github.com/XanSaulDev" target="_blank">
            <Image
              src="/svg/github.svg"
              alt="logo github"
              width={25}
              height={25}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/alejandro-saul-huerta-murillo-a0a32b221/"
            target="_blank"
          >
            <Image
              src="/svg/linkedin.svg"
              alt="logo linkedin"
              width={25}
              height={25}
            />
          </a>

          <a href="https://www.instagram.com/xansaul/" target="_blank">
            <Image
              src="/svg/instagram.svg"
              alt="logo instagram"
              width={25}
              height={25}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
