import Image from "next/image";
import bannerImg from "@/assets/images/banner-img3.png";
import PrimaryBtn from "@/components/Buttons/PrimaryBtn";
import HeroSectionTitles from "@/components/Typing/HeroSectionTitles";

const HeroSection = () => {
  return (
    <section className="pt-10 pb-12 md:pb-0">
      <div className="shadin-container flex flex-col-reverse md:flex-row items-center gap-6 md:gap-0 md:h-[70vh] min-h-[500px]">
        <div className="md:w-[45%]">
          {/* <h2>Full Stack Developer</h2> */}
          <h1 className="text-3xl md:text-[34px] lg:text-5xl font-bold capitalize mb-3 md:mb-5">
            {/* Cost-effective <span className="text-primary">web solutions</span>{" "}
            within the fastest timeline */}
            <HeroSectionTitles />
          </h1>
          <p>
            Feel free to use or modify this content to suit your preferences.
            The goal is to create a banner that not only communicates your
            services and commitment but does so in a way that captures attention
            and leaves a memorable impression.
          </p>
          <div className="flex justify-center md:justify-start gap-2 md:gap-5 mt-6 md:mt-10">
            <PrimaryBtn
              btnPath={"/latest-works"}
              btnText={"Latest Works"}
              btnWidth={180}
            />
            <PrimaryBtn
              btnPath={"/about-me"}
              btnText={"About Me"}
              btnWidth={150}
              btnType={"secondaryBtn"}
            />
          </div>
        </div>
        <div className="w-full md:w-[55%] self-end">
          <Image className="w-full" src={bannerImg} alt="Banner Image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
