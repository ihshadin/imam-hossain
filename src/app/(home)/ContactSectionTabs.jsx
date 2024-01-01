"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, Progress } from "@nextui-org/react";
import { TbBriefcaseFilled } from "react-icons/tb";
import { IoIosBulb } from "react-icons/io";

const ContactSectionTabs = () => {
  return (
    <Tabs
      aria-label="Options"
      color="primary"
      variant="light"
      radius="full"
      fullWidth="true"
      classNames={{
        base: "base-class-shadin mb-3",
        tab: "h-auto py-1 border border-primary bg-secondary",
        tabList: "p-0",
        tabContent: "lg:text-lg font-medium capitalize block text-white",
        panel: "rounded-none px-0",
      }}
    >
      <Tab
        key="my-experience"
        title={
          <div className="flex items-center space-x-2">
            <TbBriefcaseFilled />
            <span>My Experience</span>
          </div>
        }
      >
        <Card className="bg-transparent rounded-none">
          <div className="flex flex-col gap-3 lg:gap-5">
            <div className="flex gap-3 lg:gap-5 items-center justify-between">
              <div className="flex flex-col items-center w-1/2 bg-secondary p-3 md:p-5 border border-primary rounded-2xl">
                <h3 className="text-3xl lg:text-4xl font-bold capitalize">
                  4&#43;
                </h3>
                <h4 className="text-lg lg:text-2xl text-center font-semibold whitespace-nowrap">
                  Years Experience
                </h4>
              </div>
              <div className="flex flex-col items-center w-1/2 bg-secondary p-3 md:p-5 border border-primary rounded-2xl">
                <h3 className="text-2xl lg:text-4xl font-bold capitalize">
                  24&#43;
                </h3>
                <h4 className="text-lg lg:text-2xl text-center font-semibold">
                  Happy Clients
                </h4>
              </div>
            </div>
            <div className="flex flex-col items-center w-full bg-secondary p-5 md:p-7 border border-primary rounded-2xl">
              <h3 className="text-2xl lg:text-4xl font-bold capitalize">
                150&#43;
              </h3>
              <h4 className="text-lg lg:text-2xl text-center font-semibold">
                Projects Completed
              </h4>
            </div>
          </div>
        </Card>
      </Tab>
      <Tab
        key="my-skills"
        title={
          <div className="flex items-center space-x-2">
            <IoIosBulb />
            <span>My Skills</span>
          </div>
        }
      >
        <Card className="bg-transparent rounded-none text-emerald-500 gap-4">
          <Progress
            radius="sm"
            classNames={{
              base: "!gap-1",
              track: "drop-shadow-md border border-default h-[6px]",
              indicator: "bg-gradient-to-r from-emerald-200 to-emerald-400",
              label: "tracking-wider font-medium text-default-600 text-lg",
            }}
            label="WordPress"
            value={95}
          />
          <Progress
            radius="sm"
            classNames={{
              base: "!gap-1",
              track: "drop-shadow-md border border-default h-[6px]",
              indicator: "bg-gradient-to-r from-emerald-200 to-emerald-400",
              label: "tracking-wider font-medium text-default-600 text-lg",
            }}
            label="Elementor"
            value={99}
          />
          <Progress
            radius="sm"
            classNames={{
              base: "!gap-1",
              track: "drop-shadow-md border border-default h-[6px]",
              indicator: "bg-gradient-to-r from-emerald-200 to-emerald-400",
              label: "tracking-wider font-medium text-default-600 text-lg",
            }}
            label="Node JS"
            value={75}
          />
          <Progress
            radius="sm"
            classNames={{
              base: "!gap-1",
              track: "drop-shadow-md border border-default h-[6px]",
              indicator: "bg-gradient-to-r from-emerald-200 to-emerald-400",
              label: "tracking-wider font-medium text-default-600 text-lg",
            }}
            label="MondoDB"
            value={85}
          />
          <Progress
            radius="sm"
            classNames={{
              base: "!gap-1",
              track: "drop-shadow-md border border-default h-[6px]",
              indicator: "bg-gradient-to-r from-emerald-200 to-emerald-400",
              label: "tracking-wider font-medium text-default-600 text-lg",
            }}
            label="Next JS"
            value={80}
          />
          <Progress
            radius="sm"
            classNames={{
              base: "!gap-1",
              track: "drop-shadow-md border border-default h-[6px]",
              indicator: "bg-gradient-to-r from-emerald-200 to-emerald-400",
              label: "tracking-wider font-medium text-default-600 text-lg",
            }}
            label="React JS"
            value={90}
          />
        </Card>
      </Tab>
    </Tabs>
  );
};

export default ContactSectionTabs;
