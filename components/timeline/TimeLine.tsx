import React from "react";

export const TimeLine = () => {
  return (
    <div className="m-auto xl:w-8/12 ">
      <ol className="relative border-l border-blue-900">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 rounded-full -left-1.5 border border-white dark:border-gray-900 bg-blue-900"></div>
          <time className="mb-1 text-sm font-normal leading-none text-slate-200">
            Enero 2021 - noviembre 2022
          </time>
          <h3 className="text-lg font-bold text-white my-2">
            Desarrollador web OutDev
          </h3>
          <p className="mb-4 text-base font-normal text-white">
            Trabajé como desarrollador web desde enero del 2021 hasta noviembre
            del 2022 en OutDev, una empresa emergente de Guadalajara, Jalisco.
            Durante mi tiempo en la empresa, trabajé en proyectos utilizando
            React y Django.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 rounded-full -left-1.5 border border-white dark:border-gray-900 bg-blue-900"></div>
          <time className="mb-1 text-sm font-normal leading-none text-slate-200">
            Enero 2021 - noviembre 2022
          </time>
          <h3 className="text-lg font-bold text-white my-2">
            Desarrollador VR OutDev
          </h3>
          <p className="mb-4 text-base font-normal text-white">
            Experiencias inmersivas con Unity.
          </p>
        </li>
      </ol>
    </div>
  );
};
