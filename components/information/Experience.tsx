import Image from "next/image";
import Link from "next/link";
import { TimeLine } from "../timeline/TimeLine";
import { ProjectCard } from "../cards/ProjectCard";
import { projects } from "@/config/data/projects";

export const Experience = () => {
  return (
    <div className="text-white mt-10 m-auto xl:w-full w-11/12">
      <h2 className="text-3xl font-semibold block mb-4">
        Experiencia
      </h2>
      <article>
        <TimeLine />
        <section className="md:mt-4 mt-20">
          <h3 className="text-3xl font-semibold block mb-4">
            Proyectos personales
          </h3>
          <div 
          className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4
              m-auto w-full 
            "
          >
            {
              projects.map(project=>(
                <ProjectCard key={project.imageSrc} {...project} />
              ))
            }
          </div>
        </section>
      </article>
    </div>
  );
};
