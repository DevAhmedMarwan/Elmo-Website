"use client";
import "@fullcalendar/common/main.css";
import SidebarTop from "./../components/SidebarTop";
import ResetFilterAndCombobox from "@/components/ResetFilterAndCombobox";
import Calendar from "@/components/Calendar";
import NewAppointment from "@/components/NewAppointment";
import { useState, useEffect, useRef } from "react";
import {
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function Appointments() {
  const [open, setOpen] = useState(false);

  const emptyRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (emptyRef.current && !emptyRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {/* Sidebar + Top */}
      <SidebarTop title="Appointments">
        <div className="flex justify-end w-[1160px] ">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex cursor-pointer items-center gap-2 px-3 py-2 text-[#CF9F02] border-2 border-[#CF9F02] rounded-full"
          >
            <span>
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
                className="lucide lucide-mail-warning"
              >
                <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                <path d="M20 14v4" />
                <path d="M20 22v.01" />
              </svg>
            </span>
            <span>Appointment Requests</span>
          </button>
        </div>
      </SidebarTop>
      {/* Sidebar + Top */}

      {open && (
        <div
          ref={emptyRef}
          className="absolute top-[70px] right-4 z-50 bg-white p-4 rounded-lg shadow-lg w-[450px] h-[680px] !mt-[10px]"
        >
          <div className="p-4 border-b flex">
            <EmptyHeader>
              <EmptyTitle className={"font-[700] text-[25px]"}>
                Pending Requests
              </EmptyTitle>
            </EmptyHeader>
          </div>
          <div className="flex flex-col gap-4 p-4 pt-3 pb-2">
            <div className="flex justify-center">
              <EmptyMedia variant="icon">
                <img
                  className=""
                  src="public\image\not-found-requists.webp"
                  alt=""
                />
              </EmptyMedia>
            </div>
            <div className="text-center">
              <EmptyDescription>
                <h2 className="text-2xl font-bold text-center !pb-[10px] text-black">
                  No Pending Requests have been added yet.
                </h2>
                <p className="text-base text-center text-muted-foreground font-medium">
                  Once your clients send their requests, they will appear here.
                </p>
              </EmptyDescription>
            </div>
          </div>
        </div>
      )}

      <div className="w-[1680px] !pl-[300px] !mt-[10px]">
        <div className="flex items-center justify-between">
          <ResetFilterAndCombobox />
          <NewAppointment />
        </div>
        <Calendar />
      </div>
    </>
  );
}
