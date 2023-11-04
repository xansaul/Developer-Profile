import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const Banner = () => {
  return (
    <div>
      <div className="flex md:justify-center justify-center md:h-screen h-[40rem] flex-col gap-7">
        <h1 className="md:text-6xl text-5xl font-bold md:text-start text-center">
          XanSaul
        </h1>
        <span className="md:text-3xl text-2xl font-semibold md:text-start text-center">
          Ingeniero de software, 
          <Typewriter
            words={[" desarrollador fullstack y aventurero."]}
            typeSpeed={60}
            cursor
          />
        </span>
      </div>
    </div>
  );
};
