import { Archivo } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import TestMode from "./TestMode";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "Imam Hossain Shadin",
  description: "Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Providers>
          <NavBar />
          <main>{children}</main>
          <TestMode />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
