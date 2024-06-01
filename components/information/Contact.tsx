import React from "react";
import { SocialMedia } from "./SocialMedia";

export const Contact = () => {
  return (
    <footer className="flex justify-center items-center mb-4 mt-10 xl:w-8/12 w-11/12 m-auto">
      <div
        className="md:py-14 py-10 px-6 top-0 md:px-20 w-12/12lg:w-[38rem]
                backdrop-blur-[2px] rounded-xl bg-[#00073D]/60 
                "
      >
        <h3 className="mb-3 md:text-3xl text-2xl font-bold">Contáctame</h3>
        <SocialMedia className={"h-10 w-10"} />
        <div className="flex flex-wrap gap-5 items-center justify-center sm:mx-32 flex-col">
          <h2 className=" text-xl font-semibold">XanSaul</h2>
          <h2 className="mb-6 text-xl font-semibold">
            Alejandro Saul Huerta Murillo
          </h2>
        </div>
      </div>
    </footer>
  );
};
