import { ParticlesStars } from "@/components/effects/ParticlesStars"
import { Footer } from "@/components"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

 
const inter = Inter({ subsets: ['latin'] })

const origin = typeof window === "undefined" ? "" : window.location.origin;
 
export const metadata: Metadata = {
  title: 'XanSaul',
  description: 'Sitio web de Alejandro Saul Huerta Murillo, ingeniero de software.',
  keywords: ["desarrollador", "developer", "Saul Huerta", "xansaul", "Alejandro Saul Huerta Murillo"],
  authors: {
    name: "Saul Huerta",
  },
  openGraph: {
    type: "website",
    title: "XanSaul ingeniero de software",
    description: "Mira el perfil de Saul Huerta como ingeniero de software",
    url: origin,
    images: [{url: `${origin}/banner.png`}]
  },
  
}
 
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <ParticlesStars />
                <main className="lg:w-8/12 md:w-9/12 m-auto">{children}</main>
                <Footer />
            </body>
        </html>
    )
}