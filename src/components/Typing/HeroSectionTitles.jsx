"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const HeroSectionTitles = () => {
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  let strings = [
    'Cost-effective <span class="text-primary">web solutions</span> within the fastest timeline',
    'Smart, Affordable, and <span class="text-primary">Yours Crafting Dreams,</span> One Pixel at a Time',
    'Transforming Visions into <span class="text-primary">Pixel Perfection,</span> Without the Price Shock',
  ];

  strings = shuffle(strings);

  return (
    <>
      <Typewriter
        options={{
          // strings: [
          //   'Cost-effective <span class="text-primary">web solutions</span> within the fastest timeline',
          //   'Smart, Affordable, and <span class="text-primary">Yours Crafting Dreams,</span> One Pixel at a Time',
          //   'Transforming Visions into <span class="text-primary">Pixel Perfection,</span> Without the Price Shock',
          //   '<span class="text-primary">WordPress</span> Developer',
          // ],
          strings: strings,
          autoStart: true,
          loop: true,
          deleteSpeed: 20,
          pauseFor: 5000,
        }}
      />
    </>
  );
};

export default HeroSectionTitles;
