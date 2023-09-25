import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const Banner = () => {
  return (
    <div>
      <div className="flex md:justify-start justify-center items-center md:h-[43rem] h-[33rem]">
        <h2 className="md:text-6xl text-5xl font-bold md:text-start text-center">
          
          <Typewriter
            words={["Estudiante autodidacta y desarrollador de software."]}
            typeSpeed={60}
            cursor
          />
        </h2>
      </div>
    </div>
  );
};
