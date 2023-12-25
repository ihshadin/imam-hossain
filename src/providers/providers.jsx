"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
};

export default Providers;
