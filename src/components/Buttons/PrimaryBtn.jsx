"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./primaryBtn.css";

const PrimaryBtn = ({ btnText = "Button Text", btnPath, btnWidth = 150 }) => {
  const [btnDeg, setBtnDeg] = useState(45);

  const handleMouseMove = (e) => {
    let btns = document.querySelectorAll(".primaryBtn");
    for (let i = 0; i < btns.length; i++) {
      let btn = btns[i];
      if (
        btn.innerText.split(" ").join("-").toLowerCase() ==
        btnText.split(" ").join("-").toLowerCase()
      ) {
        let rect = btn.getBoundingClientRect();
        let degree = (e.clientY - e.clientX) * 3 - rect.left;
        setBtnDeg(degree);
      }
    }
  };

  return (
    <Link
      href={btnPath || "#"}
      style={{ "--btnDeg": `${btnDeg}deg` }}
      onMouseMove={(e) => handleMouseMove(e)}
      className={`primaryBtn relative w-[${btnWidth}px] min-w-[150px]  h-14 inline-block rounded-md`}
    >
      <i className="absolute inset-[-2px] flex rounded-md"></i>
      <i className="absolute inset-[-2px] flex rounded-md blur-md"></i>
      <span className="absolute top-0 left-0 w-full h-full bg-[#769f4fa6] dark:bg-[#0f172aa6] flex justify-center items-center uppercase text-white text-base font-semibold tracking-wider border border-[#769f4f] dark:border-[#0f122a] rounded overflow-hidden before:absolute before:top-0 before:-left-1/2 before:w-full before:h-full before:bg-[rgba(255,255,255,0.075)] before:skew-x-[25deg]">
        {btnText}
      </span>
    </Link>
  );
};

export default PrimaryBtn;
