import Head from "next/head";
import React, { FC, ReactNode } from "react";
import { ParticlesStars } from "../effects/ParticlesStars";


interface Props {
  children?: ReactNode;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>XanSaul</title>
        <meta name="author" content="Saul Huerta" />
        <meta name="keywords" content="desarrollador, developer, Saul Huerta, xansaul, Alejandro Saul Huerta Murillo, Saul" />
        <meta name="description" content="Sitio web de Alejandro Saul Huerta Murillo, ingeniero de software." />
        <meta
          property="og:title"
          content="XanSaul ingeniero de software"
        />
        <meta
          property="og:description"
          content="Mira el perfil de Saul Huerta como ingeniero de software"
        />
        <meta property="og:image" content={`${origin}/banner.png`} />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
      </Head>
      
      <ParticlesStars />

      <main className="lg:w-8/12 md:w-9/12 m-auto">{children}</main>


   
    </>
  );
};
