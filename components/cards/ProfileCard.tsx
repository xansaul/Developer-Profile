
import Image from "next/image";
import React from "react";
import { SocialMedia } from "../information/SocialMedia";
import { MessageTypeWrite } from "../information/MessageTypeWrite";

export const ProfileCard = () => {
  return (
    <div 
      className="w-full mx-auto mt-10 mb-8 backdrop-blur-[2px] text-white bg-[#000735]/70
                  rounded-xl p-5 h-96 shadow-2xl shadow-[#302c64]/70"
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
              <MessageTypeWrite message=" desarrollador fullstack y aventurero." />
            </span>
          </p>
        </article>
      </div>
    </div>
  );
};
