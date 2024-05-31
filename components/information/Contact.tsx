import React from "react";

export const Contact = () => {
  return (
    <div className="flex justify-center items-center mb-4 mt-10" id="contacto">
      <div
        className="md:py-14 py-10 px-6 top-0 md:px-14 w-12/12lg:w-[38rem]
                backdrop-blur-[2px]    bg-[#00073D]/70 
                "
      >
        <h3 className="mb-3 md:text-3xl text-2xl font-bold">Contáctame</h3>
        <p className=" font-medium md:text-xl text-base">
          Si te interesa mi perfil como ingeniero de software y quieres que
          desarrolle algún proyecto para ti, o si necesitas alguna asesoría,
          ofrezco mi servicio como freelance. Te dejo mis redes sociales en la
          parte de abajo.
        </p>
      </div>
    </div>
  );
};
