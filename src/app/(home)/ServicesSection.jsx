import SectionTitle from "@/components/Titles/SectionTitle";
import React from "react";
import serviceImg from "@/assets/images/ser-1.png";
import serviceImg2 from "@/assets/images/ser-2.png";
import Image from "next/image";
import ecommerce from "@/assets/images/ecommerce.png";
import resturant from "@/assets/images/resturant1.png";
import corporate from "@/assets/images/corporate.png";
import portfolio from "@/assets/images/portfolio.png";
import blog from "@/assets/images/blog.png";
import hotel from "@/assets/images/hotel.png";

const ServicesSection = () => {
  const serItems = [
    {
      id: 1,
      title: "Ecommerce Website",
      exerpt: "Figma, XD, PSD design provide",
      image: ecommerce,
    },
    {
      id: 2,
      title: "Restaurants website",
      exerpt: "Figma, XD, PSD design provide",
      image: resturant,
    },
    {
      id: 3,
      title: "Corporate Website",
      exerpt: "Figma, XD, PSD design provide",
      image: corporate,
    },
    {
      id: 4,
      title: "Portfolio Website",
      exerpt: "Figma, XD, PSD design provide",
      image: portfolio,
    },
    {
      id: 5,
      title: "Blog/Magazine Website",
      exerpt: "Figma, XD, PSD design provide",
      image: blog,
    },
    {
      id: 6,
      title: "Hotel Website",
      exerpt: "Figma, XD, PSD design provide",
      image: hotel,
    },
  ];

  console.log(serviceImg.src);

  return (
    <section className="py-12 lg:py-24">
      <div className="shadin-container">
        <div>
          <SectionTitle title={"My Services"} subTitle={"What I Do?"} />
        </div>
        <div
          className={`flex flex-col-reverse md:flex-row items-center gap-8 md:gap-0 mt-8 lg:mt-14 bg-[url("")]`}
        >
          <div className="w-full md:w-[70%] lg:w-[60%]">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10">
              We Provide
              <br />
              <span className="text-primary">Best IT Solutions</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-x-3 gap-y-6 md:gap-y-10">
              {serItems.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <Image
                    width={45}
                    height={45}
                    className="bg-white object-cover object-center p-0.5 rounded-full"
                    src={item.image}
                    alt="Services Icon"
                  />
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold capitalize">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-none">{item.exerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[30%] lg:w-[40%]">
            <Image src={serviceImg} alt="Services Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
