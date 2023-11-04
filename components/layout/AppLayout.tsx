import Head from "next/head";
import React, { FC, ReactNode } from "react";
import { ParticlesStars } from "../effects/ParticlesStars";
import { Link } from "react-scroll";
import { Footer, Navbar } from "../ui";

interface Props {
  children?: ReactNode;
}

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>XanSaul</title>
        <meta name="author" content="Saul Huerta" />
        <meta name="description" content="Saul Huerta ingeniero de software" />
        <meta name="keywords" content="desarrollador, developer, Saul Huerta, xansaul" />
        <meta
          property="og:title"
          content="XanSaul ingeniero de software"
        />
        <meta
          property="og:description"
          content="Mira el perfil de Saul Huerta como ingeniero de software"
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <ParticlesStars />

      <main className="md:px-10 md:py-2 px-4 py-2">{children}</main>


      <Footer />
    </>
  );
};
