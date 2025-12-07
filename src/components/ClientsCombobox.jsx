import React from "react";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
const ClientsCombobox = ({ title2, title3, title4, value, onChange }) => {
  const Clients = [
    { value: title3, label: title3 },
    { value: title4, label: title4 },
  ];
  const [open1, setOpen1] = useState(false);

  return (
    <div>
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
              <span>{title2}</span>
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
                        const v = String(currentValue);
                        
                        if (value.includes(v)) {
                          onChange(value.filter((item) => item !== v));
                        } else {
                          onChange([...value, v]);
                        }
                      
                        setOpen1(false);
                      }}
                      
                    >
                      <CheckIcon
                        className={cn(
                          "mr-2 h-4 w-4",
                          value.includes(Client.value)
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
        {value.length > 0 && (
          <div className="absolute -top-2 -right-2">
            <span className="flex justify-center items-center w-5 h-5 text-[11px] font-semibold rounded-full text-[oklch(83.98%_.195_124.9)] bg-[oklch(22.37%_.0486_157.09)]">
              {value.length}
            </span>
          </div>
        )}
      </div>
      {/* Clients Popover */}
    </div>
  );
};

export default ClientsCombobox;
