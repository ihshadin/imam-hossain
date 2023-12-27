import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700">
      <div className="shadin-container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-2 py-6">
          <div className="text-1 dark:text-2 text-sm text-center">
            Copyright @ 2024 by{" "}
            <Link
              href={"/"}
              className="font-semibold text-secondary dark:text-slate-300 hover:text-primary duration-200 transition-all"
            >
              <h2 className="inline">Imam Hossain Shadin</h2>
            </Link>
            {". "}
            All rights reserved.
          </div>
          <div className="flex gap-6 items-center text-lg text-1 dark:text-2">
            <a href="#!">
              <FaLinkedinIn />
            </a>
            <a href="#!">
              <FaGithub />
            </a>
            <a href="#!">
              <FaFacebookF />
            </a>
            <a href="#!">
              <BsTwitterX />
            </a>
            <a href="#!">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* <div className="p-6 text-center">
          <span>© 2023 Copyright:</span>
          <a
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            href="https://tw-elements.com/"
          >
            TW elements
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
