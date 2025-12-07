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
import { Switch } from "@/components/ui/switch";
import AddTimeService from "@/components/AddTimeService";
const AddNewService = () => {
  return (
    <>
      <div className="w-full h-0">
        <SidebarTop>
          <div className="flex items-center justify-start  w-full">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      className="text-xl font-bold capitalize text-muted-foreground"
                      to="/Services"
                    >
                      Services
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator
                  size={"2xl"}
                  className={
                    "text-3xl font-bold capitalize text-muted-foreground"
                  }
                />{" "}
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      className="text-xl font-bold capitalize text-black"
                      to="/AddNewService"
                    >
                      Add New Service
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </SidebarTop>
      </div>
      <div className="!pl-[300px] flex justify-center items-center">
        <div className="p-2">
          <div>
            <h1 className="text-2xl mb-2 font-bold">Information</h1>
            <p className="text-muted-foreground text-[18px] mb-10 font-[500]">
              Enter the basic information of the service such as name, price,
              status, color, or type.
            </p>
          </div>
          <form action="" className="overflow-y-hidden">
            <div className="flex justify-center items-center flex-col gap-3 mb-6 w-[1370px]">
              <div className="bg-muted/80 w-[217px] h-[217px] rounded-[8px] flex justify-center items-center ">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-image-plus-icon lucide-image-plus"
                >
                  <path d="M16 5h6" />
                  <path d="M19 2v6" />
                  <path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  <circle cx="9" cy="9" r="2" />
                </svg>
              </div>
              <div>
                {" "}
                <input type="file" className="hidden" />
                <button className="inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-secondary hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 rounded-full">
                  Upload Image
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="font-bold w-[700px]">
                <label
                  htmlFor=""
                  className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                >
                  Title
                </label>
                <div className="relative !pt-[10px]">
                  <input
                    type="text"
                    placeholder="service name"
                    className="file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <label
                  htmlFor=""
                  className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                >
                  Color
                </label>
                <div className="flex gap-8 justify-between">
                  <button className="bg-[rgb(255,_0,_0)] md:w-16 w-9 h-9 rounded-md flex items-center justify-center border ring-2 ring-offset-2 ring-blue-700 border-blue-700"></button>
                  <button className="bg-[rgb(0,_255,_0)] md:w-16 w-9 h-9 rounded-md flex items-center justify-center border border-transparent"></button>
                  <button className="bg-[rgb(0,_0,_255)] md:w-16 w-9 h-9 rounded-md flex items-center justify-center border border-transparent"></button>
                  <button className="bg-[rgb(255,_255,_0)] md:w-16 w-9 h-9 rounded-md flex items-center justify-center border border-transparent"></button>
                  <button className="bg-[rgb(0,_255,_255)] md:w-16 w-9 h-9 rounded-md flex items-center justify-center border border-transparent"></button>
                  <button className="bg-[rgb(255,_0,_255)] md:w-16 w-9 h-9 rounded-md flex items-center justify-center border border-transparent"></button>
                  <button className="bg-[rgb(255,_0,_0)] md:w-16 w-9 h-9 rounded-md flex items-center justify-center border ring-2 ring-offset-2 ring-blue-700 border-blue-700"></button>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[600px]">
                <div className="font-bold !pb-[10px]">
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                  >
                    Price
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="0.00"
                    className="h-[45px] file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1 py-[10px]"
                  />
                </div>
              </div>
              <div>
                <div className="!pb-[10px]">
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                  >
                    Status
                  </label>
                </div>
                <div className="">
                  <Select className="">
                    <SelectTrigger className="!h-[45px] w-[530px] file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex min-w-0 rounded-md border px-3 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1 py-[10px]">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="InActive">InActive</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                  >
                    Type
                  </label>
                  <span className="text-red-500">*</span>
                </div>
                <div className="flex flex-col gap-3 items-stretch sm:flex-row sm:items-center">
                  <div className="!mt-[5px] flex flex-wrap items-center gap-2 w-full flex-col sm:flex-row">
                    <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0 w-full sm:w-auto">
                      offline
                    </button>
                    <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0 w-full sm:w-auto">
                      online
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div>
                <h2 className="text-2xl mb-2 font-bold !pt-[20px]">
                  Standard Time
                </h2>
                <p className="text-muted-foreground font-[500] text-[18px] mb-10">
                  Select the working days, and for each day you can add multiple
                  available time.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <div className="flex gap-4 items-start">
                  <div className="p-4 border-2 border-[E2E8F0] rounded-[12px]">
                    <div className="flex justify-between items-center">
                      <h4 className="text-2xl font-bold">Sun</h4>
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                      </div>
                    </div>
                    <div className="border-2 flex flex-col gap-2 rounded-[12px] p-3 !my-[20px]">
                      <div className="flex gap-6 items-center justify-between">
                        <AddTimeService />
                        <span>-</span>
                        <AddTimeService />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Session time"
                            className="file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                          />
                        </div>
                        <div className="flex flex-wrap w-fit items-center gap-2">
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            30 m
                          </button>
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            60 m
                          </button>
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            120 m
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 md:rounded-md rounded-full">
                        + Another time
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-4 border-2 border-[E2E8F0] rounded-[12px]">
                    <div className="flex justify-between items-center">
                      <h4 className="text-2xl font-bold">Mon</h4>
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                      </div>
                    </div>
                    <div className="border-2 flex flex-col gap-2 rounded-[12px] p-3 !my-[20px]">
                      <div className="flex gap-6 items-center justify-between">
                        <AddTimeService />
                        <span>-</span>
                        <AddTimeService />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Session time"
                            className="file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                          />
                        </div>
                        <div className="flex flex-wrap w-fit items-center gap-2">
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            30 m
                          </button>
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            60 m
                          </button>
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            120 m
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 md:rounded-md rounded-full">
                        + Another time
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-4 border-2 border-[E2E8F0] rounded-[12px]">
                    <div className="flex justify-between items-center">
                      <h4 className="text-2xl font-bold">Tue</h4>
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                      </div>
                    </div>
                    <div className="border-2 flex flex-col gap-2 rounded-[12px] p-3 !my-[20px]">
                      <div className="flex gap-6 items-center justify-between">
                        <AddTimeService />
                        <span>-</span>
                        <AddTimeService />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Session time"
                            className="file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                          />
                        </div>
                        <div className="flex flex-wrap w-fit items-center gap-2">
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            30 m
                          </button>
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            60 m
                          </button>
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            120 m
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 md:rounded-md rounded-full">
                        + Another time
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-4 border-2 border-[E2E8F0] rounded-[12px]">
                    <div className="flex justify-between items-center">
                      <h4 className="text-2xl font-bold">Wed</h4>
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                      </div>
                    </div>
                    <div className="border-2 flex flex-col gap-2 rounded-[12px] p-3 !my-[20px]">
                      <div className="flex gap-6 items-center justify-between">
                        <AddTimeService />
                        <span>-</span>
                        <AddTimeService />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Session time"
                            className="file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                          />
                        </div>
                        <div className="flex flex-wrap w-fit items-center gap-2">
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            30 m
                          </button>
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            60 m
                          </button>
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            120 m
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 md:rounded-md rounded-full">
                        + Another time
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-4 border-2 border-[E2E8F0] rounded-[12px]">
                    <div className="flex justify-between items-center">
                      <h4 className="text-2xl font-bold">Thu</h4>
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                      </div>
                    </div>
                    <div className="border-2 flex flex-col gap-2 rounded-[12px] p-3 !my-[20px]">
                      <div className="flex gap-6 items-center justify-between">
                        <AddTimeService />
                        <span>-</span>
                        <AddTimeService />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Session time"
                            className="file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                          />
                        </div>
                        <div className="flex flex-wrap w-fit items-center gap-2">
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            30 m
                          </button>
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            60 m
                          </button>
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            120 m
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 md:rounded-md rounded-full">
                        + Another time
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-4 border-2 border-[E2E8F0] rounded-[12px]">
                    <div className="flex justify-between items-center">
                      <h4 className="text-2xl font-bold">Fri</h4>
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                      </div>
                    </div>
                    <div className="border-2 flex flex-col gap-2 rounded-[12px] p-3 !my-[20px]">
                      <div className="flex gap-6 items-center justify-between">
                        <AddTimeService />
                        <span>-</span>
                        <AddTimeService />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Session time"
                            className="file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                          />
                        </div>
                        <div className="flex flex-wrap w-fit items-center gap-2">
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            30 m
                          </button>
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            60 m
                          </button>
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            120 m
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 md:rounded-md rounded-full">
                        + Another time
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-4 border-2 border-[E2E8F0] rounded-[12px]">
                    <div className="flex justify-between items-center">
                      <h4 className="text-2xl font-bold">Sat</h4>
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                      </div>
                    </div>
                    <div className="border-2 flex flex-col gap-2 rounded-[12px] p-3 !my-[20px]">
                      <div className="flex gap-6 items-center justify-between">
                        <AddTimeService />
                        <span>-</span>
                        <AddTimeService />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Session time"
                            className="file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                          />
                        </div>
                        <div className="flex flex-wrap w-fit items-center gap-2">
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            30 m
                          </button>
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            60 m
                          </button>
                          <button className="flex items-center cursor-pointer gap-2 px-3 py-2 text-lg font-semibold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0">
                            120 m
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 md:rounded-md rounded-full">
                        + Another time
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="text-2xl mb-2 font-bold">Exceptional Time</h3>
                <p className="text-muted-foreground font-[500] md:text-[18px] text-base mb-10">
                  {" "}
                  Add or define special times when the team may attend or be
                  absent, outside the regular schedule.
                </p>
              </div>
              <button className="!mr-[20px] text-[oklch(83.98%_.195_124.9)] justify-center cursor-pointer whitespace-nowrap rounded-md text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary hover:bg-primary/90 h-10 squircle squircle-2xl squircle-teal-400 px-5 has-[>svg]:px-4 flex items-center gap-2">
                + Exceptional time
              </button>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div>
                <img
                  src="https://booking.testingelmo.com/_next/static/media/exceptional-time.0481f766.svg"
                  alt=""
                />
              </div>
              <h4 className="text-xl font-bold">No Exceptional Times</h4>
              <p className="md:w-[40%] w-full text-center font-[500] text-muted-foreground">
                No exceptional times have been added yet. You can create special
                attendance or absence times from here.
              </p>
            </div>
            <div className="!mt-[100px]">
              <div className="w-[1410px] flex justify-end gap-4 bg-muted/40 py-6 fixed bottom-0 right-0 backdrop-blur-sm border-t z-20 px-6 mt-auto">
                <a href="">
                  <button className="inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 squircle squircle-2xl squircle-teal-400 px-5 has-[>svg]:px-4">
                    Cancel
                  </button>
                </a>
                <button className="text-[oklch(83.98%_.195_124.9)] inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary hover:bg-primary/90 h-10 squircle squircle-2xl squircle-teal-400 px-5 has-[>svg]:px-4">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewService;
