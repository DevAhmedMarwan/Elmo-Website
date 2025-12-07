import SidebarTop from "./../components/SidebarTop";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";
import AddNewClients from "@/components/AddNewClients";
import CardsWithPagination from "@/components/CardsWithPagination";
import ClientsCombobox from "@/components/ClientsCombobox";
import { useState } from "react";

const Services = () => {
  const [value1, setValue1] = useState([]); // Status
  const [value2, setValue2] = useState([]); // Type

  return (
    <>
      <div className="w-full h-0">
        <SidebarTop>
          <div className="flex items-center justify-start w-full">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      className="text-xl font-bold capitalize text-black"
                      to="/Services"
                    >
                      Services
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <div className="hidden">
                  <BreadcrumbSeparator size={"3xl"} />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/AddNewService">Add New Service</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </div>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </SidebarTop>
      </div>

      <div className="!pl-[300px]">
        <div className="flex items-center justify-between !pt-[20px]">

          {/* ================= Search ================= */}
          <div className="relative">
            <Input
              placeholder="Search"
              className="w-[450px]"
            />
            <span className="lucide lucide-search absolute top-[50%] right-3 transform-[translateY(-50%)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
            </span>
          </div>

          {/* ================= Filters ================= */}
          <div className="flex items-center gap-3">
            {/* Reset */}
            <button
              className="cursor-pointer text-lg text-red-600 font-bold"
              onClick={() => {
                setValue1([]);
                setValue2([]);
              }}
            >
              Reset Filters
            </button>

            {/* Status */}
            <ClientsCombobox
              title2="Status"
              title3="Active"
              title4="Inactive"
              value={value1}
              onChange={setValue1}
            />

            {/* Type */}
            <ClientsCombobox
              title2="Type"
              title3="Online"
              title4="Offline"
              value={value2}
              onChange={setValue2}
            />

            {/* Add New Service */}
            <Link to="/AddNewService">
              <AddNewClients title={"Add New Service"} />
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-4">
          <CardsWithPagination />
        </div>
      </div>
    </>
  );
};

export default Services;
