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
        <meta name="description" content="Saul Huerta software engineer" />
        <meta name="keywords" content="desarrollador, developer, saul, huerta, xansaul" />
        <meta
          property="og:title"
          content="Saul Huerta software engineer"
        />
        <meta
          property="og:description"
          content="Mira el perfil de Saul Huerta como software engineer"
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
