"use client";

import DataTableClient from "@/components/DataTableClient";
import SidebarTop from "./../components/SidebarTop";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router";
export default function Clients() {
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
                      className="text-2xl font-bold capitalize text-black"
                      to="/Clients"
                    >
                      Clients
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <div className="hidden">
                  <BreadcrumbSeparator
                    size={"3xl"}
                    className={"text-3xl font-bold capitalize text-black"}
                  />{" "}
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/CreateClient">Create Client</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </div>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </SidebarTop>
      </div>
      <div className="w-[1680px] h-[550px] !pl-[300px]">
        <DataTableClient title={"Search Clients..."} />
      </div>
    </>
  );
}
