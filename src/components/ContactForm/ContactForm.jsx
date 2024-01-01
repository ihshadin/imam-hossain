import { Input, Textarea } from "@nextui-org/react";
import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import PrimaryBtn from "../Buttons/PrimaryBtn";

const ContactForm = () => {
  return (
    <div className="bg-[#081d3a] p-2">
      <div className="flex flex-row justify-between flex-wrap gap-2 px-2 md:px-3 py-4 bg-secondary">
        <div className="flex gap-2 items-center">
          <GoArrowUpRight className="text-lg text-primary" />
          <p className="leading-none">Web Design</p>
        </div>
        <div className="flex gap-2 items-center">
          <GoArrowUpRight className="text-lg text-primary" />
          <p className="leading-none">Web Development</p>
        </div>
        <div className="flex gap-2 items-center">
          <GoArrowUpRight className="text-lg text-primary" />
          <p className="leading-none">SEO and Marketing</p>
        </div>
      </div>
      <h3 className="text-xl md:text-3xl font-semibold capitalize px-2 md:px-3 py-4">
        Get in touch
      </h3>
      <div className="px-2 md:px-3 flex flex-col gap-3">
        <div className="flex justify-between gap-3">
          <Input
            isRequired
            type="text"
            label="Name"
            classNames={{
              base: "base-class-shdain",
              label:
                "label-shadin bg-[#081d3a] group-data-[filled-within=true]:pl-1 group-data-[filled-within=true]:border-l group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2)]",
              inputWrapper:
                "inputWrapper-shadin bg-transparent data-[hover=true]:bg-transparent h-auto border border-1 data-[focus=true]:border-2 group-data-[focus=true]:bg-transparent group-data-[focus=true]:border rounded-md py-0",
              innerWrapper: "innerWrapper-shadin",
              mainWrapper: "mainWrapper-shadin",
              input: "input-shadin h-full pt-2",
              clearButton: "clearButton-shadin",
              helperWrapper: "helperWrapper-shadin",
              description: "description-shadin",
              errorMessage: "errorMessage-shadin",
            }}
          />
          <Input
            isRequired
            type="email"
            label="Email"
            classNames={{
              base: "base-class-shdain",
              label:
                "label-shadin bg-[#081d3a] group-data-[filled-within=true]:pl-1 group-data-[filled-within=true]:border-l group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2)]",
              inputWrapper:
                "inputWrapper-shadin bg-transparent data-[hover=true]:bg-transparent h-auto border border-1 data-[focus=true]:border-2 group-data-[focus=true]:bg-transparent group-data-[focus=true]:border rounded-md py-0",
              innerWrapper: "innerWrapper-shadin",
              mainWrapper: "mainWrapper-shadin",
              input: "input-shadin h-full pt-2",
              clearButton: "clearButton-shadin",
              helperWrapper: "helperWrapper-shadin",
              description: "description-shadin",
              errorMessage: "errorMessage-shadin",
            }}
          />
        </div>
        <div className="flex justify-between gap-3">
          <Input
            isRequired
            type="number"
            label="Phone Number"
            classNames={{
              base: "base-class-shdain",
              label:
                "label-shadin bg-[#081d3a] group-data-[filled-within=true]:pl-1 group-data-[filled-within=true]:border-l group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2)]",
              inputWrapper:
                "inputWrapper-shadin bg-transparent data-[hover=true]:bg-transparent h-auto border border-1 data-[focus=true]:border-2 group-data-[focus=true]:bg-transparent group-data-[focus=true]:border rounded-md py-0",
              innerWrapper: "innerWrapper-shadin",
              mainWrapper: "mainWrapper-shadin",
              input: "input-shadin h-full pt-2",
              clearButton: "clearButton-shadin",
              helperWrapper: "helperWrapper-shadin",
              description: "description-shadin",
              errorMessage: "errorMessage-shadin",
            }}
          />
          <Input
            isRequired
            type="text"
            label="Business Name"
            classNames={{
              base: "base-class-shdain",
              label:
                "label-shadin bg-[#081d3a] group-data-[filled-within=true]:pl-1 group-data-[filled-within=true]:border-l group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2)]",
              inputWrapper:
                "inputWrapper-shadin bg-transparent data-[hover=true]:bg-transparent h-auto border border-1 data-[focus=true]:border-2 group-data-[focus=true]:bg-transparent group-data-[focus=true]:border rounded-md py-0",
              innerWrapper: "innerWrapper-shadin",
              mainWrapper: "mainWrapper-shadin",
              input: "input-shadin h-full pt-2",
              clearButton: "clearButton-shadin",
              helperWrapper: "helperWrapper-shadin",
              description: "description-shadin",
              errorMessage: "errorMessage-shadin",
            }}
          />
        </div>
        <div className="flex justify-between gap-3">
          <Input
            isRequired
            type="date"
            label="Project Date"
            classNames={{
              base: "base-class-shdain",
              label:
                "label-shadin bg-[#081d3a] group-data-[filled-within=true]:pl-1 group-data-[filled-within=true]:border-l group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2)]",
              inputWrapper:
                "inputWrapper-shadin bg-transparent data-[hover=true]:bg-transparent h-auto border border-1 data-[focus=true]:border-2 group-data-[focus=true]:bg-transparent group-data-[focus=true]:border rounded-md py-0",
              innerWrapper: "innerWrapper-shadin",
              mainWrapper: "mainWrapper-shadin",
              input: "input-shadin h-full pt-2",
              clearButton: "clearButton-shadin",
              helperWrapper: "helperWrapper-shadin",
              description: "description-shadin",
              errorMessage: "errorMessage-shadin",
            }}
          />
          <Input
            isRequired
            type="text"
            label="Type of Project"
            classNames={{
              base: "base-class-shdain",
              label:
                "label-shadin bg-[#081d3a] group-data-[filled-within=true]:pl-1 group-data-[filled-within=true]:border-l group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2)]",
              inputWrapper:
                "inputWrapper-shadin bg-transparent data-[hover=true]:bg-transparent h-auto border border-1 data-[focus=true]:border-2 group-data-[focus=true]:bg-transparent group-data-[focus=true]:border rounded-md py-0",
              innerWrapper: "innerWrapper-shadin",
              mainWrapper: "mainWrapper-shadin",
              input: "input-shadin h-full pt-2",
              clearButton: "clearButton-shadin",
              helperWrapper: "helperWrapper-shadin",
              description: "description-shadin",
              errorMessage: "errorMessage-shadin",
            }}
          />
        </div>
        <div>
          <Textarea
            isRequired
            label="Tell me more about this project"
            disableAutosize
            classNames={{
              base: "base-class-shdain",
              label:
                "label-shadin bg-[#081d3a] top-2 group-data-[filled-within=true]:pl-1 group-data-[filled-within=true]:border-l group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2)]",
              inputWrapper:
                "inputWrapper-shadin bg-transparent pr-0 data-[hover=true]:bg-transparent h-auto border border-1 data-[focus=true]:border-2 group-data-[focus=true]:bg-transparent group-data-[focus=true]:border rounded-md py-0",
              innerWrapper: "innerWrapper-shadin",
              mainWrapper: "mainWrapper-shadin",
              input: "input-shadin resize-y min-h-[100px]",
              clearButton: "clearButton-shadin",
              helperWrapper: "helperWrapper-shadin",
              description: "description-shadin",
              errorMessage: "errorMessage-shadin",
            }}
          />
        </div>
        <div className="self-end">
          <PrimaryBtn btnText="Get Quote" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
