import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";

interface Props {
  imageSrc: string;
  imageAlt: string;
  description: string;
  githubUrl: string;
}

export const ProjectCard = ({
  description,
  imageAlt,
  imageSrc,
  githubUrl,
}: Props) => {
  return (
    <div className="h-full justify-self-center w-full">
      <div className="flex flex-col justify-between h-full rounded-xl bg-[#0d1032] shadow-md p-4">
        <div>
          <div className="w-full overflow-hidden rounded-t-xl h-48">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm mt-4">{description}</p>
        </div>
        <div className="flex justify-end mt-4">
          <a
            href={githubUrl}
            target="_blank"
            className="transition-all duration-150 text-center p-2 rounded-xl text-white w-11 h-11
                      bg-[#131c46] hover:bg-[#192646] hover:shadow-md flex justify-center"
          >
            <FaGithub size={26} />
          </a>
        </div>
      </div>
    </div>
  );
};
