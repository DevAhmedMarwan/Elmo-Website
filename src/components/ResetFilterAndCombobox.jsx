import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { ChevronsUpDownIcon, CheckIcon } from "lucide-react";
const ResetFilterAndCombobox = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);
  const Clients = [
    { value: "Ahmed Marwan", label: "Ahmed Marwan" },
    { value: "Mohamed marwan", label: "Mohamed marwan" },
  ];

  const Services = [
    { value: "خدمة 1", label: "خدمة 1" },
    { value: "خدمة 2", label: "خدمة 2" },
    { value: "خدمة 3", label: "خدمة 3" },
  ];
  return (
    <div className="w-full flex itmems-center gap-8">
      {/* Reset Filters Button */}
      <div>
        <button
          className="cursor-pointer text-lg text-red-600 font-bold"
          onClick={() => {
            setValue1([]);
            setValue2([]);
          }}
        >
          Reset Filters
        </button>
      </div>
      {/* Reset Filters Button */}
      {/* Clients Popover */}
      <div className="relative">
        <Popover open={open1} onOpenChange={setOpen1}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open1}
              className="w-[120px] gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Clients</span>
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search client..." />
              <CommandList>
                <CommandEmpty>No client found.</CommandEmpty>
                <CommandGroup>
                  {Clients.map((Client) => (
                    <CommandItem
                      key={Client.value}
                      value={Client.value}
                      onSelect={(currentValue) => {
                        const valueStr = String(currentValue);
                        setValue1((prev) => {
                          const prevArr = Array.isArray(prev) ? prev : [];
                          if (prevArr.includes(valueStr)) {
                            return prevArr.filter((v) => v !== valueStr);
                          } else {
                            return [...prevArr, valueStr];
                          }
                        });
                        setOpen1(false);
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          "mr-2 h-4 w-4",
                          value1.includes(Client.value)
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
        {value1.length > 0 && (
          <div className="absolute -top-2 -right-2">
            <span className="flex justify-center items-center w-5 h-5 text-[11px] font-semibold rounded-full text-[oklch(83.98%_.195_124.9)] bg-[oklch(22.37%_.0486_157.09)]">
              {value1.length}
            </span>
          </div>
        )}
      </div>
      {/* Clients Popover */}
      {/* Services Popover */}
      <div className="relative">
        <Popover open={open2} onOpenChange={setOpen2}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open2}
              className="w-[120px] gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-notepad-text"
              >
                <path d="M8 2v4" />
                <path d="M12 2v4" />
                <path d="M16 2v4" />
                <rect width="16" height="18" x="4" y="4" rx="2" />
                <path d="M8 10h6" />
                <path d="M8 14h8" />
                <path d="M8 18h5" />
              </svg>
              Services
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search service..." />
              <CommandList>
                <CommandEmpty>No service found.</CommandEmpty>
                <CommandGroup>
                  {Services.map((Service) => (
                    <CommandItem
                      key={Service.value}
                      value={Service.value}
                      onSelect={(currentValue) => {
                        const valueStr = String(currentValue);
                        setValue2((prev) => {
                          const prevArr = Array.isArray(prev) ? prev : [];
                          if (prevArr.includes(valueStr)) {
                            // لو اختار نفس الخدمة تاني نشيلها
                            return prevArr.filter((v) => v !== valueStr);
                          } else {
                            // نضيف الخدمة الجديدة للقائمة
                            return [...prevArr, valueStr];
                          }
                        });
                        setOpen2(false);
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          "mr-2 h-4 w-4",
                          value2.includes(Service.value)
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {Service.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {/* ✅ البادج اللي بيظهر فوق الزرار بعدد الخدمات المختارة */}
        {value2.length > 0 && (
          <div className="absolute -top-2 -right-2">
            <span className="flex justify-center items-center w-5 h-5 text-[11px] font-semibold rounded-full text-[oklch(83.98%_.195_124.9)] bg-[oklch(22.37%_.0486_157.09)]">
              {value2.length}
            </span>
          </div>
        )}
      </div>
      {/* Services Popover */}
    </div>
  );
};

export default ResetFilterAndCombobox;
