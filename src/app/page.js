import Image from "next/image";
import bannerImg from "@/assets/images/banner-img.png";
import PrimaryBtn from "@/components/Buttons/PrimaryBtn";

export default function Home() {
  return (
    <section className="pt-10">
      <div className="shadin-container flex items-center gap-10 h-[80vh] min-h-fit">
        <div className="lg:w-[45%]">
          {/* <h2>Full Stack Developer</h2> */}
          <h1 className="text-5xl font-bold capitalize mb-5">
            Cost-effective web solutions within the fastest timeline
          </h1>
          <p>
            Feel free to use or modify this content to suit your preferences.
            The goal is to create a banner that not only communicates your
            services and commitment but does so in a way that captures attention
            and leaves a memorable impression.
          </p>
          <div className="flex gap-5 mt-10">
            <PrimaryBtn
              btnPath={"/latest-works"}
              btnText={"Latest Works"}
              btnWidth={"180px"}
            />
            <PrimaryBtn btnPath={"/about-me"} btnText={"About Me"} />
          </div>
        </div>
        <div className="lg:w-[55%] self-end">
          <Image className="w-full" src={bannerImg} alt="Banner Image" />
        </div>
      </div>
    </section>
  );
}
