import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ProfileForm from "./ProfileForm";
const   NewAppointment = () => {
  return (
    <div>
      <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex border text-[oklch(83.98%_.195_124.9)] text-[1rem] font-[500] bg-[oklch(22.37%_.0486_157.09)] cursor-pointer items-center gap-3 h-[2.75rem] rounded-[10px] !px-[10px]">
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
                  className="lucide lucide-file-check"
                >
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                  <path d="m9 15 2 2 4-4" />
                </svg>
                NEW APPOINTMENT
              </Button>
            </DialogTrigger>
            <DialogContent className="min-w-[600px] min-h-[500px]">
              <ProfileForm />
            </DialogContent>
          </Dialog>
      </div>
    </div>
  );
};

export default NewAppointment;
