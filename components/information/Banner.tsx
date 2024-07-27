import React from "react";
import { ProfileCard } from "../cards/ProfileCard";

export const Banner = () => {
  return (
    <>
      <div className="2xl:w-4/12 xl:w-5/12 lg:w-6/12 md:w-6/12 sm:w-7/12 w-11/12 m-auto">
        <ProfileCard />
      </div>
    </>
  );
};
