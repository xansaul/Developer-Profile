import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full h-auto p-3 ">
      <div className="flex flex-wrap gap-5 items-center justify-center sm:mx-32">
        <div className="flex gap-6 md:mb-16 mb-6 ">
          <a href="https://github.com/XanSaulDev" target="_blank">
            <Image
              src="/svg/github.svg"
              alt="logo github"
              width={35}
              height={35}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/alejandro-saul-huerta-murillo-a0a32b221/"
            target="_blank"
          >
            <Image
              src="/svg/linkedin.svg"
              alt="logo linkedin"
              width={35}
              height={35}
            />
          </a>

          <a href="https://www.instagram.com/xansaul/" target="_blank">
            <Image
              src="/svg/instagram.svg"
              alt="logo instagram"
              width={35}
              height={35}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
