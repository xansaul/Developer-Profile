import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const Banner = () => {
  return (
    <div>
      <div className="flex md:justify-center justify-center md:h-screen h-[40rem] flex-col gap-7">
        <h2 className="md:text-6xl text-5xl font-bold md:text-start text-center">
          
          <Typewriter
            words={["Ingeniero de software,"]}
            typeSpeed={60}
            cursor
          />
        </h2>
        <h3 className="md:text-3xl text-2xl font-semibold md:text-start text-center">Desarrollador fullstack y aventurero.</h3>
      </div>
    </div>
  );
};
