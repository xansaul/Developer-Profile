import Image from "next/image";

export const Technologies = () => {
  return (
    <div className="text-white h-full py-4" id="skills">
      <div className="w-11/12 m-auto">
        <h2 className="text-3xl font-semibold block mt-4">Tecnologías</h2>
        <div className="grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-4 md:gap-x-5 gap-x-3 w-11/12 m-auto mt-8 justify-center items-center">
          <div className="bg-white md:w-full sm:w-36 w-full rounded-md min-h-full grid place-items-center p-3">
            <Image width={300} height={300} src="/technologies/Django.png" className="w-auto"  alt="Django" />
          </div>
          <div className="bg-white md:w-full sm:w-36 w-full rounded-md min-h-full grid place-items-center p-3">
            <Image width={300} height={300} src="/technologies/github.png" className="w-auto"  alt="github" />
          </div>
          <div className="bg-white md:w-full sm:w-36 w-full rounded-md min-h-full grid place-items-center p-3">
            <Image width={300} height={300} src="/technologies/python.png" className="w-auto"  alt="python" />
          </div>
          <div className="bg-white md:w-full sm:w-36 w-full rounded-md min-h-full grid place-items-center p-3">
            <Image width={300} height={300} src="/technologies/react.png" className="w-auto"  alt="react js" />
          </div>
          <div className="bg-white md:w-full sm:w-36 w-full rounded-md min-h-full grid place-items-center p-3">
            <Image width={300} height={300} src="/technologies/threejs.png" className="w-auto"  alt="threejs" />
          </div>
          <div className="bg-white md:w-full sm:w-36 w-full rounded-md min-h-full grid place-items-center p-3">
            <Image width={300} height={300} src="/technologies/next.png" className="w-auto"  alt="unity" />
          </div>
          <div className="bg-white md:w-full sm:w-36 w-full rounded-md min-h-full grid place-items-center p-3">
            <Image width={300} height={300} src="/technologies/unity.png" className="w-auto"  alt="unity" />
          </div>
          <div className="bg-white md:w-full sm:w-36 w-full rounded-md min-h-full grid place-items-center p-3">
            <Image width={300} height={300} src="/technologies/js.png" className="w-auto"  alt="javascript" />
          </div>
        </div>
      </div>
    </div>
  );
};
