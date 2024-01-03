import SectionTitle from "@/components/Titles/SectionTitle";
import React from "react";

const AddNewPortfolio = () => {
  return (
    <section>
      <div>
        <SectionTitle
          title={"Showcase Your Brilliance"}
          subTitle={"Add New Portfolio"}
          btnText={"View Portfolios"}
        />
      </div>
      <div className="mt-10 lg:mt-16">content</div>
    </section>
  );
};

export default AddNewPortfolio;
