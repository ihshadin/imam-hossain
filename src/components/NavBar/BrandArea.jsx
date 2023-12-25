import React from "react";
import Image from "next/image";
import logoDark from "@/assets/siteInfo/logo.png";
import logoLight from "@/assets/siteInfo/logo-light.png";
import { useTheme } from "next-themes";

const BrandArea = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex gap-2 items-center leading-5">
      <Image
        width={32}
        src={theme === "light" ? logoDark : logoLight}
        alt="Logo"
      />
      <h1 className="text-1 dark:text-white hidden xs:block font-bold text-base md:text-lg !leading-none">
        Imam Hossain
        <span className="font-light text-sm md:text-base block !leading-none tracking-[0.88em]">
          Shadin
        </span>
      </h1>
    </div>
  );
};

export default BrandArea;
