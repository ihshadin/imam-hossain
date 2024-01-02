import React from "react";
import Chart_fill from "@/assets/images/dashboard/Chart_fill.png";
import Chat from "@/assets/images/dashboard/Chat.png";
import User from "@/assets/images/dashboard/User.png";
import Calendar from "@/assets/images/dashboard/Calendar.png";
import Search from "@/assets/images/dashboard/Search.png";
import Chart from "@/assets/images/dashboard/Chart.png";
import Folder from "@/assets/images/dashboard/Folder.png";
import Setting from "@/assets/images/dashboard/Setting.png";
import { HiChevronDoubleLeft } from "react-icons/hi";
import MenuItems from "@/components/Dashboard/MenuItems";
import SiteInfo from "@/components/Dashboard/SiteInfo";

const DashboardSection = ({ expanded, setExpanded }) => {
  const Menus = [
    { title: "Dashboard", src: Chart_fill.src, alert },
    { title: "Inbox", src: Chat.src },
    { title: "Accounts", src: User.src, gap: true, alert },
    { title: "Schedule ", src: Calendar.src },
    { title: "Search", src: Search.src },
    { title: "Analytics", src: Chart.src },
    { title: "Files ", src: Folder.src, gap: true },
    { title: "Setting", src: Setting.src },
  ];

  return (
    <>
      <HiChevronDoubleLeft
        className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 transition-all duration-200 bg-primary p-1 border-primary
           border-2 rounded-full  ${
             !expanded && "rotate-180 -right-8 md:-right-3"
           }`}
        onClick={() => setExpanded(!expanded)}
      />
      <SiteInfo expanded={expanded} />
      <ul className="pt-3">
        {Menus.map((Menu, index) => (
          <MenuItems
            Menu={Menu}
            expanded={expanded}
            index={index}
            key={index}
          />
        ))}
      </ul>
    </>
  );
};

export default DashboardSection;
