"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Button,
} from "@nextui-org/react";
import { BsEye, BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/Titles/SectionTitle";
// import image1 from "@/assets/images/banner-img3.png";

const columns = [
  { name: "Actions", uid: "actions" },
  { name: "Image", uid: "image" },
  { name: "Project Title", uid: "projectTitle" },
  { name: "Category", uid: "category" },
  { name: "Path", uid: "path" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

const PortfoliosPage = () => {
  return (
    <section>
      <div>
        <SectionTitle
          title={"My Latest Projects"}
          subTitle={"Explore Showcase"}
        />
      </div>
      <div className="mt-10 lg:mt-16">
        <Table
          aria-label="Example table static collection"
          classNames={{
            base: "shadin-base",
            table: "shadin-table min-w-[800px]",
            thead: "shadin-thead [&>tr]:first:bg-primary",
            tbody: "shadin-tbody",
            tfoot: "shadin-tfoot",
            emptyWrapper: "shadin-emptyWrapper",
            loadingWrapper: "shadin-loadingWrapper",
            wrapper: "shadin-wrapper bg-transparent p-2 border border-1",
            tr: "shadin-tr even:bg-primary even:bg-opacity-30",
            th: "bg-transparent px-1 first:pl-2 py-3 h-auto text-white text-center",
            td: "shadin-td px-1",
            sortIcon: "shadin-sortIcon",
          }}
        >
          <TableHeader>
            <TableColumn>Actions</TableColumn>
            <TableColumn>Image</TableColumn>
            <TableColumn className="text-left">Project Title</TableColumn>
            <TableColumn>Category</TableColumn>
            <TableColumn>Pathe</TableColumn>
            {/* <TableColumn>Live Link</TableColumn> */}
          </TableHeader>
          <TableBody>
            <TableRow key={1}>
              <TableCell>
                <div className="relative flex justify-center items-center">
                  <Dropdown className="bg-secondary border border-1">
                    <DropdownTrigger>
                      <Button
                        isIconOnly
                        radius="full"
                        size="sm"
                        variant="light"
                      >
                        <BsThreeDotsVertical className="text-default-400" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem>View Details</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </TableCell>
              <TableCell>
                <Image
                  width={60}
                  height={70}
                  className="min-w-[60px] w-[60px] h-[70px] object-cover"
                  src={"https://i.ibb.co/rpZNfzK/sharoon.webp"}
                  alt="Product Image"
                />
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-bold text-base">
                    Men’s Early Winter Premium Jacket – Sheroon
                  </p>
                  <p className="line-clamp-2 mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae perferendis dolore reiciendis dolorem, quam aliquid
                    enim voluptate maxime nam quaerat nesciunt rerum culpa esse
                    nulla omnis eaque temporibus aut. Accusantium cum, ad odit
                    harum porro consectetur enim ipsum ducimus, laborum ut
                    tenetur necessitatibus inventore fugiat, aperiam sapiente
                    voluptatibus vero et.
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <p className="min-w-[120px] text-center">Ecommerce</p>
              </TableCell>
              <TableCell>
                <p className="min-w-[100px] text-center">MERN Stack</p>
              </TableCell>
            </TableRow>
            <TableRow key={2}>
              <TableCell>
                <div className="relative flex justify-center items-center">
                  <Dropdown className="bg-secondary border border-1">
                    <DropdownTrigger>
                      <Button
                        isIconOnly
                        radius="full"
                        size="sm"
                        variant="light"
                      >
                        <BsThreeDotsVertical className="text-default-400" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem>View Details</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </TableCell>
              <TableCell>
                <Image
                  width={60}
                  height={70}
                  className="min-w-[60px] w-[60px] h-[70px] object-cover"
                  src={"https://i.ibb.co/rpZNfzK/sharoon.webp"}
                  alt="Product Image"
                />
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-bold text-base">
                    Men’s Early Winter Premium Jacket – Sheroon
                  </p>
                  <p className="line-clamp-2 mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae perferendis dolore reiciendis dolorem, quam aliquid
                    enim voluptate maxime nam quaerat nesciunt rerum culpa esse
                    nulla omnis eaque temporibus aut. Accusantium cum, ad odit
                    harum porro consectetur enim ipsum ducimus, laborum ut
                    tenetur necessitatibus inventore fugiat, aperiam sapiente
                    voluptatibus vero et.
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <p className="min-w-[120px] text-center">Ecommerce</p>
              </TableCell>
              <TableCell>
                <p className="min-w-[100px] text-center">MERN Stack</p>
              </TableCell>
            </TableRow>
            <TableRow key={3}>
              <TableCell>
                <div className="relative flex justify-center items-center">
                  <Dropdown className="bg-secondary border border-1">
                    <DropdownTrigger>
                      <Button
                        isIconOnly
                        radius="full"
                        size="sm"
                        variant="light"
                      >
                        <BsThreeDotsVertical className="text-default-400" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem>View Details</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </TableCell>
              <TableCell>
                <Image
                  width={60}
                  height={70}
                  className="min-w-[60px] w-[60px] h-[70px] object-cover"
                  src={"https://i.ibb.co/rpZNfzK/sharoon.webp"}
                  alt="Product Image"
                />
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-bold text-base">
                    Men’s Early Winter Premium Jacket – Sheroon
                  </p>
                  <p className="line-clamp-2 mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae perferendis dolore reiciendis dolorem, quam aliquid
                    enim voluptate maxime nam quaerat nesciunt rerum culpa esse
                    nulla omnis eaque temporibus aut. Accusantium cum, ad odit
                    harum porro consectetur enim ipsum ducimus, laborum ut
                    tenetur necessitatibus inventore fugiat, aperiam sapiente
                    voluptatibus vero et.
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <p className="min-w-[120px] text-center">Ecommerce</p>
              </TableCell>
              <TableCell>
                <p className="min-w-[100px] text-center">MERN Stack</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default PortfoliosPage;
