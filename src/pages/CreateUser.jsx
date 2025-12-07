import React, { useState } from "react";
import SidebarTop from "./../components/SidebarTop";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
const CreateUser = () => {
  const [state , setState] = useState({
    name : "",
    email : "",
    password : "",
    phone : "",
    address : "",

  })
  const handleSubmit = async() => {
    try {
      const response = await axios.post("https://appoint-api.testingelmo.com/api/v1/en/admin/users",state);
      console.log(response);
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className="!pl-[300px]">
      <div className="w-full h-0">
        <SidebarTop>
          <div className="flex items-center justify-start w-full">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      className="text-2xl font-bold capitalize text-muted-foreground"
                      to="/Users"
                    >
                      Users
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator
                  size={"3xl"}
                  className={"text-3xl font-bold capitalize text-muted-foreground"}
                />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      to="/CreateUser"
                      className="text-2xl font-bold capitalize text-black"
                    >
                      Create User
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </SidebarTop>
      </div>
      <div>
        <form action="" className="space-y-8" onSubmit={(e) => {e.preventDefault(); handleSubmit}}>
          <div className="flex flex-col gap-8 p-6">
            <div className="flex flex-col items-center gap-2 w-[1350px]">
              <div className="size-[128px] rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-user-icon lucide-circle-user"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                </svg>
              </div>
              <div className="gap-2 w-full flex flex-col items-center">
                <button className="font-bold text-[oklch(83.98%_.195_124.9)] inline-flex items-center justify-center cursor-pointer whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary hover:bg-primary/90 h-8 gap-1.5 px-3 text-[15px] rounded-full">
                  Edit
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <label className="font-bold flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive">
                    Name
                  </label>
                  <span className="text-red-500">*</span>
                </div>
                <div className="relative">
                  <input
                    name="name"
                    value={state.name}
                    onChange={(e) => setState({...state, name : e.target.value})}
                    type="text"
                    placeholder="Ahmed Marwan"
                    className="file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-sm leading-none font-bold select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                  >
                    Email
                  </label>
                  <span className="text-red-500">*</span>
                </div>
                <div className="relative">
                  <input
                    name="email"
                    type="text"
                    placeholder="AhmedMarwan@gmail.com"
                    className="file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-sm leading-none font-bold select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                  >
                    Phone Number
                  </label>
                  <span className="text-red-500">*</span>
                </div>
                <div className="relative">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+0545362873"
                    className="file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-sm leading-none font-bold select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                  >
                    Address
                  </label>
                  <span className="text-red-500">*</span>
                </div>
                <div className="relative">
                  <input
                    name="address"
                    type="text"
                    placeholder="Saudi Arabia"
                    className="file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <div className="">
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-sm leading-none font-bold select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                  >
                    State
                  </label>
                </div>
                <div className="">
                  <Select className="">
                    <SelectTrigger className="!h-[45px] w-[665px] file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex min-w-0 rounded-md border px-3 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1 py-[10px]">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem name="Active" value="Active">Active</SelectItem>
                        <SelectItem name="InActive" value="InActive">InActive</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-sm leading-none font-bold select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                  >
                    Address
                  </label>
                  <span className="text-red-500">*</span>
                </div>
                <div className="flex flex-col gap-3 items-stretch sm:flex-row sm:items-center">
                  <div className="flex flex-wrap items-center gap-2 w-full flex-col sm:flex-row">
                    <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-bold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0 w-full sm:w-auto capitalize">
                      admin
                    </button>
                    <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-bold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0 w-full sm:w-auto capitalize">
                      super admin
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-sm leading-none font-bold select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                  >
                    Password
                  </label>
                  <span className="text-red-500">*</span>
                </div>
                <div className="relative">
                  <div className="relative">
                    <input
                      name = "password"
                      type="text"
                      placeholder="•••••••••••"
                      className="file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                    />
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-black gap-1.5 text-[15px] absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-eye-closed-icon lucide-eye-closed"
                    >
                      <path d="m15 18-.722-3.25" />
                      <path d="M2 8a10.645 10.645 0 0 0 20 0" />
                      <path d="m20 15-1.726-2.05" />
                      <path d="m4 15 1.726-2.05" />
                      <path d="m9 18 .722-3.25" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-sm leading-none font-bold select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="relative">
                  <div className="relative">
                    <input
                      name = "confirmPassword"
                      type="text"
                      placeholder="•••••••••••"
                      className="file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                    />
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-black gap-1.5 text-[15px] absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-eye-closed-icon lucide-eye-closed"
                    >
                      <path d="m15 18-.722-3.25" />
                      <path d="M2 8a10.645 10.645 0 0 0 20 0" />
                      <path d="m20 15-1.726-2.05" />
                      <path d="m4 15 1.726-2.05" />
                      <path d="m9 18 .722-3.25" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 bg-muted/40 py-6 sticky bottom-0 backdrop-blur z-50 px-4">
            <a href="">
              <button className="inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 squircle squircle-2xl squircle-teal-400 px-5 has-[>svg]:px-4">
                Cancel
              </button>
            </a>
            <button
            className="text-[oklch(83.98%_.195_124.9)] inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary hover:bg-primary/90 h-10 squircle squircle-2xl squircle-teal-400 px-5 has-[>svg]:px-4">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
