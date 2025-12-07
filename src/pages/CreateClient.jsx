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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PhoneInput } from "react-international-phone";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import "react-international-phone/style.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { StarIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
const CreateClient = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState([]);
  const [mainPhone, setMainPhone] = useState("");
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [address, setAddress] = useState([]);
  const addEmail = () => {
    setEmail([...email, ""]);
  };
  const addPhoneNumber = () => {
    setPhoneNumber([...phoneNumber, ""]);
  };
  const addAddress = () => {
    setAddress([...address, ""]);
  };
  const updateEmail = (index, value) => {
    const newEmail = [...email];
    newEmail[index] = value;
    setEmail(newEmail);
  };
  const updatePhoneNumber = (index, value) => {
    const newPhoneNumber = [...phoneNumber];
    newPhoneNumber[index] = value;
    setPhoneNumber(newPhoneNumber);
  };
  const updateaddress = (index, value) => {
    const newaddress = [...address];
    newaddress[index] = value;
    setAddress(newaddress);
  };
  return (
    <div>
      <div className="w-full h-0">
        <SidebarTop>
          <div className="">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <div className="text-xl font-bold capitalize">
                      <Link
                        className="text-2xl font-bold capitalize text-muted-foreground"
                        to="/Clients"
                      >
                        Clients
                      </Link>
                    </div>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator
                  size={"3xl"}
                  className={
                    "text-3xl font-bold capitalize text-muted-foreground"
                  }
                />{" "}
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      className="text-2xl font-bold capitalize text-black"
                      to="/CreateClient"
                    >
                      Create Client
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </SidebarTop>
      </div>
      <div className="!pl-[300px] !mt-[25px]">
        <div className="flex justify-between gap-6">
          <div className="border w-fit p-4 rounded-[12px] transition-all duration-300 h-[200px]">
            <div className="flex flex-wrap w-fit items-center gap-2 flex-col">
              <button className="flex items-center cursor-pointer bg-[#f6fafd] gap-2 px-3 py-2 text-lg font-bold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0 w-[250px]">
                Information
              </button>
              <button className="flex items-center cursor-pointer bg-[#f6fafd] gap-2 px-3 py-2 text-lg font-bold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0 w-[250px]">
                Contact
              </button>
              <button className="flex items-center cursor-pointer bg-[#f6fafd] gap-2 px-3 py-2 text-lg font-bold transition-colors duration-100 outline-none focus:z-10 focus-visible:z-10 rounded-xl shadow-none border-[2px] data-[state=on]:bg-[#C3EA4C] data-[state=on]:border-[#1A2C36] data-[state=on]:text-[#1A2C36] data-[state=off]:bg-[#F6FAFD] data-[state=off]:border-[#E3EAF2] data-[state=off]:text-[#1A2C36] hover:bg-[#E6F7B2] hover:border-[#1A2C36] hover:text-[#1A2C36] data-[state=off]:hover:bg-[#E6F7B2] first:ml-0 ml-0 w-[250px]">
                Address
              </button>
            </div>
          </div>
          <div className="">
            <h1 className="mb-2 font-bold text-2xl">Informations</h1>
            <p className="text-muted-foreground font-[600] text-[18px] mb-10">
              Enter the client&apos;s basic details such as name, type...etc.
            </p>
            <div className="flex items-center gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <label className="font-bold !pb-[10px] flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive">
                    Name
                  </label>
                  <span className="text-destructive">*</span>
                </div>
                <Input
                  className={
                    "w-[520px] file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                  }
                  type="text"
                  placeholder="Ahmed Marwan"
                />
              </div>
              <div>
                <label className="font-bold !pb-[10px] flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive">
                  Type
                </label>
                <div className="">
                  <Select>
                    <SelectTrigger
                      className={
                        "w-[520px] file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                      }
                    >
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="1خدمة">خدمة1</SelectItem>
                        <SelectItem value="2خدمة">2خدمة</SelectItem>
                        <SelectItem value="مؤقت">مؤقت</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="!pb-[20px]">
              <div className="flex flex-col gap-3 mt-4">
                <FieldSet>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="feedback" className={"font-bold"}>
                        Note
                      </FieldLabel>
                      <textarea
                        className={
                          "border-input placeholder:text-muted-foreground aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full rounded-md border bg-muted-foreground/6 px-3 py-2 text-base outline-none disabled:cursor-not-allowed disabled:opacity-50 min-h-[300px]"
                        }
                        placeholder="Write Here..."
                      ></textarea>
                    </Field>
                  </FieldGroup>
                </FieldSet>
              </div>
            </div>
            <div className="!pb-[100px]">
              <h1 className="mb-1 font-bold text-2xl">Contact</h1>
              <p className="text-muted-foreground font-[600] text-[18px] mb-10">
                Add the client&apos;s contact details such as email, phone
                numbers.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-[700] text-[20px]">Emails</h2>
                </div>
                <div>
                  <button
                    onClick={addEmail}
                    className="justify-center cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-10 squircle squircle-2xl text-[1rem] bg-[oklch(22.37%_.0486_157.09)] squircle-teal-400 px-5 has-[>svg]:px-4 flex items-center gap-1 rounded-full text-[oklch(83.98%_.195_124.9)]"
                  >
                    {" "}
                    + Add New Email
                  </button>
                </div>
              </div>
              <div className="flex !my-[20px] items-center gap-3 p-4 rounded-[12px] bg-white border border-[#E2E8F0]">
                <div>
                  {" "}
                  <Input
                    className={
                      "w-[850px] file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                    }
                    type="email"
                    placeholder="Ahmed Marwan @outlook.com"
                  />
                </div>
                <div className="flex items-center">
                  <div>
                    <button>
                      <Toggle
                        aria-label="Toggle bookmark"
                        size="sm"
                        variant="outline"
                        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
                      >
                        <StarIcon />
                        Primary
                      </Toggle>
                    </button>
                  </div>
                  <div className="!ml-[10px] inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-destructive/10 text-destructive border-none hover:bg-destructive/10 hover:text-destructive/80 focus-visible:ring-red-200 dark:bg-red-950/60 dark:text-red-400 dark:hover:bg-red-900/80 dark:hover:text-red-300 size-9 rounded-full">
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
              {email.map((email, index) => (
                <div
                  key={index}
                  className="flex !my-[20px] items-center gap-3 p-4 rounded-[12px] bg-white border border-[#E2E8F0]"
                >
                  <div>
                    {" "}
                    <Input
                      value={email}
                      onChange={(e) => updateEmail(index, e.target.value)}
                      className={
                        "w-[850px] file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                      }
                      type="email"
                      placeholder="Ahmed Marwan @outlook.com"
                    />
                  </div>
                  <div className="flex items-center">
                    <div>
                      <button>
                        <Toggle
                          aria-label="Toggle bookmark"
                          size="sm"
                          variant="outline"
                          className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
                        >
                          <StarIcon />
                          Primary
                        </Toggle>
                      </button>
                    </div>
                    <div className="!ml-[10px] inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-destructive/10 text-destructive border-none hover:bg-destructive/10 hover:text-destructive/80 focus-visible:ring-red-200 dark:bg-red-950/60 dark:text-red-400 dark:hover:bg-red-900/80 dark:hover:text-red-300 size-9 rounded-full">
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-[700] text-[20px]">Phone numbers</h2>
                </div>
                <div>
                  <button
                    onClick={addPhoneNumber}
                    className="justify-center cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-10 squircle squircle-2xl text-[1rem] bg-[oklch(22.37%_.0486_157.09)] squircle-teal-400 px-5 has-[>svg]:px-4 flex items-center gap-1 rounded-full text-[oklch(83.98%_.195_124.9)]"
                  >
                    {" "}
                    + Add New Phone
                  </button>
                </div>
              </div>
              <div className="flex !my-[20px] items-center gap-3 p-4 rounded-[12px] bg-white border border-[#E2E8F0]">
                <div className="flex items-center">
                  {" "}
                  <PhoneInput
                    defaultCountry="ua"
                    value={mainPhone}
                    onChange={(value) => setMainPhone(value)}
                  />
                  <Input
                    className={
                      "w-[640px] file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                    }
                    type="phone"
                    placeholder="Phone Numbers"
                  />
                </div>
                <div className="flex items-center">
                  <div>
                    <button>
                      <Toggle
                        aria-label="Toggle bookmark"
                        size="sm"
                        variant="outline"
                        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
                      >
                        <StarIcon />
                        Primary
                      </Toggle>
                    </button>
                  </div>
                  <div className="!ml-[10px] inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-destructive/10 text-destructive border-none hover:bg-destructive/10 hover:text-destructive/80 focus-visible:ring-red-200 dark:bg-red-950/60 dark:text-red-400 dark:hover:bg-red-900/80 dark:hover:text-red-300 size-9 rounded-full">
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
              {phoneNumber.map((phoneNumber, index) => (
                <div
                  key={index}
                  className="flex !my-[20px] items-center gap-3 p-4 rounded-[12px] bg-white border border-[#E2E8F0]"
                >
                  <div className="flex items-center">
                    {" "}
                    <PhoneInput
                      defaultCountry="ua"
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                    />
                    <Input
                      className={
                        "w-[640px] file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                      }
                      value={phoneNumber}
                      onChange={(e) => updatePhoneNumber(index, e.target.value)}
                      type="phone"
                      placeholder="Phone Numbers"
                    />
                  </div>
                  <div className="flex items-center">
                    <div>
                      <button>
                        <Toggle
                          aria-label="Toggle bookmark"
                          size="sm"
                          variant="outline"
                          className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
                        >
                          <StarIcon />
                          Primary
                        </Toggle>
                      </button>
                    </div>
                    <div className="!ml-[10px] inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-destructive/10 text-destructive border-none hover:bg-destructive/10 hover:text-destructive/80 focus-visible:ring-red-200 dark:bg-red-950/60 dark:text-red-400 dark:hover:bg-red-900/80 dark:hover:text-red-300 size-9 rounded-full">
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
              ))}
              <div>
                <h1 className="font-bold text-[20px] mb-2">Addresses</h1>
                <p className="text-muted-foreground font-[600] text-base md:text-[18px] mb-3">
                  Enter the client's addresses, including the main address and
                  any additional ones.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-[700] text-[20px]">Addresses</h2>
                </div>
                <div>
                  <button
                    onClick={addAddress}
                    className="justify-center cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-10 squircle squircle-2xl text-[1rem] bg-[oklch(22.37%_.0486_157.09)] squircle-teal-400 px-5 has-[>svg]:px-4 flex items-center gap-1 rounded-full text-[oklch(83.98%_.195_124.9)]"
                  >
                    {" "}
                    + Add New Addresses
                  </button>
                </div>
              </div>
              <div className="flex !my-[20px] items-center gap-3 p-4 rounded-[12px] bg-white border border-[#E2E8F0]">
                <div className="flex">
                  <Input
                    className={
                      "w-[200px] file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                    }
                    type="text"
                    placeholder="City*"
                  />{" "}
                  <Input
                    className={
                      "w-[650px] file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                    }
                    type="text"
                    placeholder="Detailed address*"
                  />
                </div>
                <div className="flex items-center">
                  <div>
                    <button>
                      <Toggle
                        aria-label="Toggle bookmark"
                        size="sm"
                        variant="outline"
                        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
                      >
                        <StarIcon />
                        Primary
                      </Toggle>
                    </button>
                  </div>
                  <div className="!ml-[10px] inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-destructive/10 text-destructive border-none hover:bg-destructive/10 hover:text-destructive/80 focus-visible:ring-red-200 dark:bg-red-950/60 dark:text-red-400 dark:hover:bg-red-900/80 dark:hover:text-red-300 size-9 rounded-full">
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
              {address.map((address, index) => (
                <div
                  key={index}
                  className="flex !my-[20px] items-center gap-3 p-4 rounded-[12px] bg-white border border-[#E2E8F0]"
                >
                  <div className="flex">
                    <Input
                      className={
                        "w-[200px] file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                      }
                      type="text"
                      placeholder="City*"
                    />{" "}
                    <Input
                      value={address}
                      onChange={(e) => updateaddress(index, e.target.value)}
                      className={
                        "w-[650px] file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                      }
                      type="text"
                      placeholder="Detailed address*"
                    />
                  </div>
                  <div className="flex items-center">
                    <div>
                      <button>
                        <Toggle
                          aria-label="Toggle bookmark"
                          size="sm"
                          variant="outline"
                          className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
                        >
                          <StarIcon />
                          Primary
                        </Toggle>
                      </button>
                    </div>
                    <div className="!ml-[10px] inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-destructive/10 text-destructive border-none hover:bg-destructive/10 hover:text-destructive/80 focus-visible:ring-red-200 dark:bg-red-950/60 dark:text-red-400 dark:hover:bg-red-900/80 dark:hover:text-red-300 size-9 rounded-full">
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-4 bg-muted/40 py-6 w-[1410px] fixed bottom-0 right-0 backdrop-blur-sm border-t z-20 px-6 mt-auto">
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
        </div>
      </div>
    </div>
  );
};

export default CreateClient;
