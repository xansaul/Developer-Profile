import Image from "next/image";
import React from "react";

interface Props {
  width: number;
  height: number;
  src: string;
  alt: string;
}

export const TechnologyCard = ({ alt, height, src, width }:Props) => {
  return (
    <div className="bg-white 2xl:w-20 w-16 rounded-md grid place-items-center p-2">
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        priority={false}
      />
    </div>
  );
};
