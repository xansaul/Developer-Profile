import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { ProfileCard } from "../cards/ProfileCard";

export const Banner = () => {
  return (
    <>
      <div className="xl:w-4/12 lg:w-6/12 md:w-6/12 sm:w-7/12 w-11/12 m-auto">
        <ProfileCard />
      </div>
    </>
  );
};
