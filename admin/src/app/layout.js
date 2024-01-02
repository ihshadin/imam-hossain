import { Archivo } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default MainLayout;
