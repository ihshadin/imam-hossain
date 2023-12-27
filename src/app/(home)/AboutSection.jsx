import SectionTitle from "@/components/Titles/SectionTitle";
import React from "react";
import aboutImg from "@/assets/images/soft.png";
import Image from "next/image";
import Experties from "@/components/Typing/Experties";
import ContactSectionTabs from "./ContactSectionTabs";

const AboutSection = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="shadin-container">
        <div>
          <SectionTitle
            title={"Why You Hire Me?"}
            subTitle={"About Me"}
            btnText={"View More"}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center mt-8 lg:mt-14">
          <div className="w-full md:w-[45%] self-start">
            <Image className="w-full" src={aboutImg} />
          </div>
          <div className="w-full md:w-[55%]">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold capitalize">
                Imam hossain Shadin
              </h1>
              <h2 className="text-xl lg:text-2xl font-semibold capitalize min-h-[1.2em]">
                <Experties />
              </h2>
              <p className="mt-3">
                I’m Imam Hossain Shadin. I’m a Web developer who is passionate
                about making error-free websites with 100% client satisfaction.
                Let’s collaborate to build a strong online presence you’re
                excited to share with the world.
              </p>
            </div>
            <div className="flex w-full flex-col mt-8">
              <ContactSectionTabs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
