import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
const AddNewClients = ({ title }) => {
  return (
    <div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              onclick={""}
              className="!ml-[20px] flex border text-[oklch(83.98%_.195_124.9)] text-[1rem] font-[500] bg-[oklch(22.37%_.0486_157.09)] cursor-pointer items-center gap-3 h-[2.75rem] rounded-[10px] !px-[10px]"
            >
              <span>
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
                  class="lucide lucide-user-round-icon lucide-user-round"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
              </span>
              {title}
            </Button>
          </DialogTrigger>
        </Dialog>
      </div>
    </div>
  );
};

export default AddNewClients;
