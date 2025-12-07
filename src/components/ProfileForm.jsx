import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckIcon, ChevronsUpDownIcon, ChevronDownIcon } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
const ProfileForm = () => {
  const [openForm, SetOpenForm] = useState(false);
  const [valueForm, setValueForm] = useState([]);
  // const [date, setDate] = useState(new Date(2025, 5, 12));
  const ClientForm = [
    { value: "Ahmed Marwan", label: "Ahmed Marwan" },
    { value: "Mohamed Marwan", label: "Mohamed Marwan" },
  ];
  const [open4, setOpen4] = useState(false);
  const [date3, setDate3] = useState(undefined);
  const [open5, setOpen5] = useState(false);
  const [date5, setDate5] = useState(undefined);
  const [open6, setOpen6] = useState(false);

  const [selectedTime, setSelectedTime] = useState("10:00");

  const timeSlots = Array.from({ length: 20 }, (_, i) => {
    const totalMinutes = i * 15;
    const hour = Math.floor(totalMinutes / 60) + 4;
    const minute = totalMinutes % 60;
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  });
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = () => {
    // console.log({ name, email, phone })
    setOpen(false);
    setName("");
    setEmail("");
    setPhone("");
    setCity("");
    setAddress("");
  };
  return (
    <>
      <div>
        <form>
          <div className="flex gap-2">
            <div>
              <div className="flex items-center gap-3">
                <label className="!pb-[10px] flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive">
                  Service
                </label>
                <span className="text-destructive">*</span>
              </div>
              <Select>
                <SelectTrigger
                  className={
                    "w-[240px] !h-[40px] file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
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

            <div>
              <div className="flex items-center gap-3">
                <label className="!pb-[10px] flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive">
                  Client
                </label>
                <span className="text-destructive">*</span>
              </div>
              <Popover open={openForm} onOpenChange={SetOpenForm}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openForm}
                    className={
                      "w-[150px] justify-start file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                    }
                  >
                    {valueForm.length > 0
                      ? ClientForm.find((c) => c.value === valueForm[0])?.label
                      : "Select...."}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search client..." />
                    <CommandList>
                      <CommandEmpty>No client found.</CommandEmpty>
                      <CommandGroup>
                        {ClientForm.map((Client) => (
                          <CommandItem
                            key={Client.value}
                            value={Client.value}
                            onSelect={(currentValue) => {
                              const valueStr = String(currentValue);
                              setValueForm((prev) => {
                                const prevArr = Array.isArray(prev) ? prev : [];
                                if (prevArr.includes(valueStr)) {
                                  return [];
                                } else {
                                  return [valueStr];
                                }
                              });
                              SetOpenForm(false);
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "mr-2 h-4 w-4",
                                valueForm.includes(Client.value)
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {Client.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* <div>
          <button className="!mt-[20px] flex text-[oklch(83.98%_.195_124.9)] text-[1rem] font-[500] bg-[oklch(22.37%_.0486_157.09)] cursor-pointer rounded-[20px] !px-[20px] !py-[8px]">
            Add Client
          </button>
        </div> */}

            <div>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <div className="">
                    <button
                      type="button"
                      className="!mt-[30px] flex text-[oklch(83.98%_.195_124.9)] text-[1rem] font-[500] bg-[oklch(22.37%_.0486_157.09)] cursor-pointer rounded-[20px] !px-[20px] !py-[8px]"
                    >
                      Add Client
                    </button>
                  </div>
                </DialogTrigger>

                <DialogContent className="p-6 rounded-lg">
                  <form className="space-y-4 mt-4">
                    <div className="flex gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 !pb-[10px]">
                          Name
                        </label>
                        <Input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ahmed Marwan"
                          className={"w-[220px]"}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 !pb-[10px]">
                          Phone
                        </label>
                        <Input
                          type="email"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="0545362873"
                          className={"w-[220px]"}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 !pb-[10px]">
                        Email
                      </label>
                      <Input
                        type="tel"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="AhmedMarwan@gmail.com"
                        required
                      />
                    </div>
                    <div className="flex gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 !pb-[10px]">
                          City
                        </label>
                        <Input
                          type="tel"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Saudi Arabia"
                          className={"w-[150px]"}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 !pb-[10px]">
                          Address
                        </label>
                        <Input
                          type="tel"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Riyadh, Olaya St."
                          className={"w-[290px]"}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-3">
                      <Button
                        onClick={handleSave}
                        type="button"
                        className="mt-4 font-[500] text-[1rem] text-black bg-[oklch(100%_0_0)] rounded-[10px] border hover:text-[oklch(20.8%_.042_265.755)] hover:bg-[oklch(96.8%_.007_247.896)] cursor-pointer"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="button"
                        className="mt-4 font-[500] text-[1rem] text-[oklch(83.98%_.195_124.9)] bg-[oklch(22.37%_.0486_157.09)] rounded-[10px] border hover:text-[oklch(83.98%_.195_124.9)] hover:bg-[oklch(22.37%_.0486_157.09)] cursor-pointer"
                      >
                        Save
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <div className="w-[50%]">
              <div className="flex items-center gap-3">
                <label className="!pb-[10px] flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive">
                  Month
                </label>
                <span className="text-destructive">*</span>
              </div>
              <div className="flex flex-col gap-3">
                <Popover open={open4} onOpenChange={setOpen4}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date"
                      className={
                        "w-[270px] justify-start file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                      }
                    >
                      {date3
                        ? date3.toLocaleDateString()
                        : "Select month and year..."}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                  >
                    {/* <Calendar
                  mode="single"
                  selected={date3}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate3(date);
                    setOpen4(false);
                  }}
                /> */}
                    <Calendar
                      mode="single"
                      defaultMonth={date3}
                      selected={date3}
                      onSelect={setDate3}
                      className="rounded-lg border shadow-sm"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="">
              <div className="flex items-center gap-3">
                <label className="!pb-[10px] flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive">
                  Available Days
                </label>
                <span className="text-destructive">*</span>
              </div>
              <div className="flex flex-col gap-3">
                <Popover open={open5} onOpenChange={setOpen5}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date"
                      className={
                        "w-[250px] justify-start file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                      }
                    >
                      {date5 ? date5.toLocaleDateString() : "Select day..."}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={date5}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        setDate5(date);
                        setOpen5(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          <div>
            <div className="!mt-[10px]">
              {/* ////////////////////////////////// */}
              <div className="">
                <div className="flex items-center gap-3">
                  <label className="!pb-[10px] flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive">
                    Time
                  </label>
                  <span className="text-destructive">*</span>
                </div>
                <div className="flex flex-col gap-3">
                  <Popover open={open6} onOpenChange={setOpen6}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="time"
                        className={
                          "justify-start file:text-foreground placeholder:text-muted-foreground bg-muted-foreground/6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 min-w-0 rounded-md border px-3 py-2 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-[#07391C] focus-visible:shadow-none m-1"
                        }
                      >
                        {selectedTime ? selectedTime : "Select Time..."}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-[300px] overflow-hidden"
                      align="start"
                    >
                      <CardContent className="w-auto relative p-0">
                        <div className="flex flex-wrap gap-2">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={
                                selectedTime === time ? "default" : "outline"
                              }
                              onClick={() => {
                                setSelectedTime(time);
                                setOpen6(false);
                              }}
                              className="text-sm px-3"
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </CardContent>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            {/* /////////////////////////////////////// */}
          </div>
          <div className="">
            <div className="flex flex-col gap-3 mt-4">
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="feedback">Note</FieldLabel>
                    <textarea
                      className={
                        "border-input placeholder:text-muted-foreground aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full rounded-md border bg-muted-foreground/6 px-3 py-2 text-base outline-none disabled:cursor-not-allowed disabled:opacity-50 min-h-[250px] resize-none"
                      }
                      placeholder="Write Here..."
                    ></textarea>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button
              type="submit"
              className="mt-4 font-[500] text-[1rem] text-black bg-[oklch(100%_0_0)] rounded-[10px] border hover:text-[oklch(20.8%_.042_265.755)] hover:bg-[oklch(96.8%_.007_247.896)] cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="mt-4 font-[500] text-[1rem] text-[oklch(83.98%_.195_124.9)] bg-[oklch(22.37%_.0486_157.09)] rounded-[10px] border hover:text-[oklch(83.98%_.195_124.9)] hover:bg-[oklch(22.37%_.0486_157.09)] cursor-pointer"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileForm;
