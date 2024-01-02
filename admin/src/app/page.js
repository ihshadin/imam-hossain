"use client";
import React, { useState } from "react";
import DashboardSection from "@/components/Dashboard/Dashboard";

const HomePage = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section>
      <div className="flex">
        <div className="flex flex-col md:flex-row gap-4 w-full overflow-hidden">
          <div
            className={`bg-secondary rounded-lg p-4 pt-8 fixed md:relative transition-all duration-300 ${
              expanded ? "ml-0" : "-ml-20 md:ml-0"
            }`}
          >
            <DashboardSection expanded={expanded} setExpanded={setExpanded} />
          </div>
          <div className="h-screen w-full">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
