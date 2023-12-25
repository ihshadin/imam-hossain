"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* <Switch
        defaultSelected
        size="sm"
        color="success"
        startContent={<BsSun />}
        endContent={<BsMoon />}
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        classNames={{
          base: "base-class-shadin",
          wrapper: "wrapper-class-shadin px-0.5 py-0.5 m-0 w-10 h-auto",
          thumb: "thumb-class-shadin",
          label: "label-class-shadin",
          startContent: "startContent-class-shadin",
          endContent: "endContent-class-shadin",
          thumbIcon: "thumbIcon-class-shadin",
        }}
      ></Switch> */}
      {
        <span
          className="duration-300 transition-all text-base cursor-pointer"
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {theme === "dark" ? (
            <BsSun className="text-inherit" />
          ) : (
            <BsMoon className="text-inherit" />
          )}
        </span>
      }
    </>
  );
};

export default ThemeSwitcher;
