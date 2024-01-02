"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import { RiSendPlaneFill } from "react-icons/ri";
import BrandArea from "./BrandArea";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import MenuItems from "./MenuItems";
import ToggleIcon from "./ToggleIcon";

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="">
        <Navbar
          classNames={{
            base: "base-class-shadin bg-transparent backdrop-blur-none",
            wrapper: "wrapper-class-shadin shadin-container px-0 py-3 h-auto",
            content: "content-class-shadin",
            toggle: "toggle-class-shadin",
            toggleIcon: "toggleIcon-class-shadin",
            brand: "brand-class-shadin",
            item: "item-class-shadin text-secondary dark:text-white font-medium data-[active=true]:text-primary dark:data-[active=true]:text-primary data-[active=true]:font-bold",
            mainWrapper: "bg-secondary",
            input: "input-class-shadin",
            inputWrapper: "inputWrapper-class-shadin",
            menu: "menu-class-shadin",
            menuItem: "menu-class-shadin",
          }}
          maxWidth={"full"}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden h-6 w-7"
              icon={<ToggleIcon isMenuOpen={isMenuOpen} />}
            />
            <NavbarBrand>
              <Link href="/">
                <BrandArea />
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden md:flex gap-4" justify="center">
            <MenuItems />
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="flex items-center gap-2">
              <ThemeSwitcher />
              <Link
                className="bg-primary text-white font-medium text-base py-1 pr-1 pl-4 rounded-full gap-2"
                href="/contact"
              >
                <span>Hire Me </span>
                <RiSendPlaneFill className="w-6 h-6 text-secondary bg-white p-1 rounded-full" />
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            <MenuItems />
          </NavbarMenu>
        </Navbar>
      </div>
    </div>
  );
};

export default MenuBar;
