import Link from "next/link";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { BsChevronDoubleRight } from "react-icons/bs";
import PrimaryBtn from "../Buttons/PrimaryBtn";

const SectionTitle = ({ title, subTitle, btnText, btnLink }) => {
  return (
    <div className="py-5">
      <div className="relative flex flex-col md:flex-row gap-10 justify-between items-start md:items-center z-0 pl-5">
        <div className="pr-5 md:pr-10 py-2 relative inline-block skew-x-[-20deg] bg-secondary dark:bg-white">
          <div className="absolute left-2 lg:left-3 top-1/2 -translate-y-1/2 z-10 h-20 lg:h-24 w-3 lg:w-4 bg-primary"></div>
          <div className="absolute -left-4 top-0 h-full w-2 bg-primary"></div>
          <h2 className="pl-7 lg:pl-10 font-bold text-2xl lg:text-4xl leading-[1em] skew-x-[20deg] whitespace-nowrap line-clamp-1 text-white dark:text-secondary">
            {title}
          </h2>
          <div className="absolute right-0 translate-x-[40%] bottom-0 translate-y-1/2 bg-primary">
            <p className="px-5 text-center font-medium text-sm tracking-wider line-clamp-1 skew-x-[20deg] text-white">
              {subTitle}
            </p>
          </div>
          <div className="absolute bottom-0 right-0 translate-x-full -z-20 h-[2px] w-1/2 lg:w-full opacity-0 md:opacity-30 bg-primary hidden md:block"></div>
        </div>
        {/* {btnText && (
          <Link
            href={btnLink || "#"}
            className="rounded-md flex items-center justify-end gap-1 font-semibold"
          >
            <span className="hidden md:block">{btnText}</span>
            <BsChevronDoubleRight className="w-6 h-6 md:w-4 md:h-4" />
          </Link>
        )} */}
        <div className="self-end">
          {btnText && (
            <PrimaryBtn
              btnPath={"/about-me"}
              btnText={"View More"}
              btnWidth={150}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
