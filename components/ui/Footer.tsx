import Image from "next/image";
import { SocialMedia } from "../information/SocialMedia";

export const Footer = () => {
  return (
    <footer className="w-full h-auto p-2 ">
      <div className="flex flex-wrap gap-5 items-center justify-center sm:mx-32 flex-col">
        <SocialMedia />
        <h2 className="mb-6 text-xl font-semibold">
          XanSaul
        </h2>
      </div>
    </footer>
  );
};
