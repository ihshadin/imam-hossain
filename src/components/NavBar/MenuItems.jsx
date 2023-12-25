import React from "react";
import { usePathname } from "next/navigation";
import { NavbarItem, Link } from "@nextui-org/react";

const MenuItems = () => {
  const pathname = usePathname();

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About Me", path: "/about-us" },
    { text: "Services", path: "/services" },
    { text: "My Portfolio", path: "/my-portfolio" },
    { text: "Blog", path: "/blog" },
    // { text: "Contact", path: "/contact" },
  ];
  return (
    <>
      {menuItems.map((item) => (
        <NavbarItem key={item.path} isActive={pathname === item.path}>
          <Link className="text-base text-inherit" href={item.path}>
            {item.text}
          </Link>
        </NavbarItem>
      ))}
    </>
  );
};

export default MenuItems;
