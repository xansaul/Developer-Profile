import { TimeLine } from "../timeline/TimeLine";
import { ProjectCard } from "../cards/ProjectCard";
import { projects } from "@/config/data/projects";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Experience = () => {
  return (
    <div className="text-white mt-10 m-auto">
      <article>
        <h2 className="text-center md:text-start text-3xl font-semibold block mb-8">Experiencia</h2>
        <section className="w-11/12 md:w-full m-auto">
          <TimeLine />
        </section>
        <section >
          <h3 className="text-center md:text-start text-3xl font-semibold block mb-5 ">
            Proyectos personales
          </h3>
          <div className="flex flex-col items-center">
            <Carousel className="w-full lg:hidden">
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem key={project.imageSrc} className="basis-9/12 sm:basis-6/12 md:basis-5/12">
                    <ProjectCard {...project} />
                  </CarouselItem>
                ))}
              </CarouselContent>

            </Carousel>
          </div>
          <div
            className="hidden lg:grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4
              m-auto w-full lg:w-10/12 xl:w-11/12 2xl:w-10/12
            "
          >
            {projects.map((project) => (
              <ProjectCard key={project.imageSrc} {...project} />
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};
