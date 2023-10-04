import Image from "next/image";
import Link from "next/link";

export const Experience = () => {
  return (
    <div className="text-white h-auto sm:my-10" id="experience">
      <h2 className="text-3xl font-semibold block mb-4">2 Años de Experiencia</h2>
      <article>
        <section className="grid md:grid-cols-2">
          <Image src="/outdev.jpg" alt="outdev logo" width={250} height={250} className="self-center place-self-center" />
          <div>
            <p className="mt-4 sm:text-xl">
              Trabajé como desarrollador web del 2021 de enero al 2022 de noviembre
              en OutDev una empresa emergente de Guadalajara, Jalisco, en la
              cual me encargaba de dar mantenimiento a aplicaciones web, desde
              iniciarlas hasta darles mantenimiento. Estas aplicaciones estaban
              desarrolladas en React y Django. Además, en algunas ocasiones
              realizaba despliegues en los servidores.
            </p>
            <p className="mt-4 sm:text-xl">
              {" "}
              Después de quedar en la universidad, renuncié a la empresa, pero
              regresé tiempo después debido a necesidades económicas. En mi
              regreso, me encargué de desarrollar aplicaciones de realidad
              virtual en Unity, las cuales estaban destinadas a brindar
              experiencias inmersivas para exponer arte.
            </p>
            <p className="mt-4 sm:text-xl">
              {" "}
              Actualmente, ya no trabajo en OutDev debido a circunstancias
              externas.
            </p>
          </div>
        </section>
        <section className="md:mt-4 mt-20">
          
          <h3 className="text-3xl font-semibold block mb-4">Proyectos personales</h3>

          <div className="grid md:grid-cols-2 gap-4 ">

            <p className="mt-4 sm:text-xl self-center ">
            Pequeño proyecto, el cual simula la fuerza de aceleración la gravedad de los cuerpos celestes con la ley de gravitación universal, y otra manera mas simplificada.
            </p>

            <div className="w-auto m-auto mt-2">
              <Link
                href="https://fanciful-mandazi-f672f4.netlify.app/"
                target="_blank"
              >
                <Image
                  src="/planets.png"
                  alt="Planetas"
                  width={600}
                  height={600}
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center "></div>

          <div className="grid md:grid-cols-2 gap-4 mt-5">

            <div className="w-auto m-auto mt-2 row-start-2 row-end-3 md:row-start-1 md:row-end-2">
              <Link
                href="https://population-calc-front.vercel.app/"
                target="_blank"
              >
                <Image
                  src="/calc-population.png"
                  alt="Calc Population page"
                  width={600}
                  height={600}
                />
              </Link>
            </div>

            <p className="mt-4 sm:text-xl self-center ">
              Proyecto que usa ecuaciones diferenciales para, calcular el crecimiento exponencial de sistemas de población.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};
