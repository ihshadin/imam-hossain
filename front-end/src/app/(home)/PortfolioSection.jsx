import SectionTitle from "@/components/Titles/SectionTitle";
import React from "react";
import portfolioImg from "@/assets/images/res_image.jpg";
import Image from "next/image";

const PortfolioSection = () => {
  const portItems = [
    {
      id: 1,
      name: "Personal Portfolio Website",
      category: "Ecommerce Website",
      typeOfWork: "Full Website Create",
    },
    {
      id: 2,
      name: "Personal Portfolio Website",
      category: "LMS Website",
      typeOfWork: "Full Website Create",
    },
    {
      id: 3,
      name: "Personal Portfolio Website",
      category: "LMS Website",
      typeOfWork: "Full Website Create",
    },
    {
      id: 4,
      name: "Personal Portfolio Website",
      category: "LMS Website",
      typeOfWork: "Full Website Create",
    },
    {
      id: 5,
      name: "Personal Portfolio Website",
      category: "LMS Website",
      typeOfWork: "Full Website Create",
    },
    {
      id: 6,
      name: "Personal Portfolio Website",
      category: "LMS Website",
      typeOfWork: "Full Website Create",
    },
  ];

  return (
    <section className="py-8 lg:py-16">
      <div className="shadin-container">
        <div>
          <SectionTitle
            title={"My Latest Projects"}
            subTitle={"Portfolio"}
            btnText={"View All"}
            btnLink={"/portfolio"}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center mt-8 lg:mt-14">
          {portItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#23303f] hover:bg-1 duration-200 transition-all rounded-lg shadow-md hover:shadow-lg shadow-primary hover:shadow-primary"
            >
              <div>
                <Image src={portfolioImg} alt="Latest Works photo" />
              </div>
              <div className="px-4 pb-4 pt-2">
                <div className="text-sm font-thin flex items-center gap-2">
                  <span>{item.typeOfWork}</span>
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  <span>{item.category}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-extrabold">
                  {item.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
