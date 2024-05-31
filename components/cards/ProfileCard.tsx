import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { SocialMedia } from "../information/SocialMedia";

export const ProfileCard = () => {
  return (
    <div className="w-full mx-auto mt-10 mb-5 backdrop-blur-[2px] text-white bg-[#000735]/70 rounded-xl shadow-md p-5 h-96">
      <Image
        className="w-32 h-32 rounded-full mx-auto"
        src="/me.jpg"
        alt="Profile picture"
        width={120}
        height={120}
      />
      <h1 className="text-2xl font-bold text-center">XanSaul</h1>
      <p className="text-center mt-1">Ingeniero de software</p>
      <SocialMedia />
      <div className="mt-2">
        <article>
          <h3 className="text-xl font-semibold">Sobre mi.</h3>
          <p>
            <span className="font-semibold md:text-start text-center">
              Mi nombre es Saul 👋, soy ingeniero de software,
              <Typewriter
                words={[" desarrollador fullstack y aventurero."]}
                typeSpeed={60}
                cursor
                loop
              />
            </span>
          </p>
        </article>
      </div>
    </div>
  );
};
