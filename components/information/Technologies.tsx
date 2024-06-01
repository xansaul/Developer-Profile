import { technologies } from "@/config/data/technologies";
import { TechnologyCard } from "../cards/TechnologyCard";

export const Technologies = () => {
  return (
    <div className="text-white m-auto">
      <div 
        className=" flex flex-wrap justify-center
                    gap-y-4 md:gap-x-5 gap-x-3  "
      >
        {technologies.map((technology) => (
          <TechnologyCard key={technology.src} {...technology} />
        ))}
      </div>
    </div>
  );
};
