import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { SocialMedia } from "../information/SocialMedia";

export const ProfileCard = () => {
  return (
    <div 
      className="w-full mx-auto mt-10 mb-7 backdrop-blur-[2px] text-white bg-[#000735]/50
                  rounded-xl p-5 h-96 shadow-xl shadow-[#040550]"
    >
      <Image
        className="w-32 h-32 rounded-full mx-auto"
        src="/me.jpg"
        alt="Profile picture"
        width={120}
        height={120}
        priority
      />
      <h1 className="text-2xl font-bold text-center">XanSaul</h1>
      <p className="text-center mt-1">Ingeniero de software</p>
      <SocialMedia />
      <div className="mt-2">
        <article>
          <h2 className="text-xl font-semibold">Sobre mi</h2>
          <p>
            <span className="font-semibold md:text-start text-center">
              Mi nombre es Saul 👋, soy ingeniero de software,
              <Typewriter
                words={[" desarrollador fullstack y aventurero."]}
                typeSpeed={100}
                deleteSpeed={100}
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
