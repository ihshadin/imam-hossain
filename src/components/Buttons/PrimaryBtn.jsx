"use client";
import Link from "next/link";
import React from "react";
import "./primaryBtn.css";

const PrimaryBtn = ({ btnText, btnPath, btnWidth }) => {
  const handleMouseMove = (e) => {
    // let btns = document.querySelectorAll(".primaryBtn");
    // // for (let i = 0; i < btns.length; i++) {
    // //   let btn = btns[i];
    // //   if (btn.innerText == btnText) {
    // //     console.log("button text match");
    // //   }
    // // }
    // console.log(btns);
    // // const btn = btns.filter((b) => b.innerText === btnText);
    // btns.map((b) => console.log(b));
    // // console.log(btn);
    // // console.log(btn);

    let btn = document.querySelector(".primaryBtn");
    let rect = btn.getBoundingClientRect();
    let btnDeg = (e.clientY - e.clientX) * 3 - rect.left;
    btn.style.setProperty("--btnDeg", btnDeg + "deg");
  };

  return (
    <Link
      href={btnPath || "#"}
      onMouseMove={(e) => handleMouseMove(e)}
      className={`primaryBtn relative w-[${
        btnWidth || "150px"
      }]  h-14 inline-block rounded-md`}
    >
      <i className="absolute inset-[-2px] flex rounded-md"></i>
      <i className="absolute inset-[-2px] flex rounded-md blur-md"></i>
      {/* <span className="absolute top-0 left-0 w-full h-full flex justify-center items-center uppercase text-white border border-slate-800 rounded bg-1/65 overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-1/2 before:w-full before:h-full">
        Latest Task
      </span> */}
      {/* <i></i>
      <i></i> */}
      <span className="absolute top-0 left-0 w-full h-full bg-[#0e1538a6] flex justify-center items-center uppercase text-white font-semibold tracking-wider border border-[#040a29] rounded overflow-hidden before:absolute before:top-0 before:-left-1/2 before:w-full before:h-full before:bg-[rgba(255,255,255,0.075)] before:skew-x-[25deg]">
        {btnText || "Button Text"}
      </span>
    </Link>
  );
};

export default PrimaryBtn;
