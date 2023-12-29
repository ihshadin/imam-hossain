import SectionTitle from "@/components/Titles/SectionTitle";
import React from "react";

const PortfolioSection = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="shadin-container">
        <div>
          <SectionTitle title={"My Latest Projects"} subTitle={"Portfolio"} />
        </div>
        <div className="flex flex-col md:flex-row gap-7 md:gap-2 items-center mt-8 lg:mt-14">
          content
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
