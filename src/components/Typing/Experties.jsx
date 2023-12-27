"use client";
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Typewriter from "typewriter-effect";

const Experties = () => {
  return (
    <>
      {/* <TypeAnimation
        sequence={[
          "Web Developer",
          1000,
          "MERN Stack Developer",
          1000,
          "Full Stack Developer",
          1000,
          <strong>
            only <span style="color: #27ae60;">5kb</span> Gzipped!
          </strong>,
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        deletionSpeed={120}
      /> */}
      <Typewriter
        options={{
          strings: [
            '<span class="text-primary">Web</span> Developer',
            '<span class="text-primary">MERN Stack</span> Developer',
            '<span class="text-primary">Full Stack</span> Developer',
            '<span class="text-primary">WordPress</span> Developer',
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 20,
          pauseFor: 2000,
        }}
      />
    </>
  );
};

export default Experties;
