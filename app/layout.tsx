import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter, Poppins } from "next/font/google";
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

config.autoAddCss = false

//const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: '600' })

export const metadata: Metadata = {
  title: "BrandDebug Inc.",
  description: "Creating your Brands",
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={ poppins.className }>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
