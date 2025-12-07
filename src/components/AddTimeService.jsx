import React from "react";
import { useEffect, useRef, useState } from "react";
const AddTimeService = () => {
  const [open, setOpen] = useState(false);
  const [hour, setHour] = useState("09");
  const [minute, setMinute] = useState("01");
  const popoverRef = useRef(null);

  // يقفل القايمة لو ضغطت براها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleSelect = (type, value) => {
    if (type === "hour") setHour(value);
    if (type === "minute") {
      setMinute(value);
      setOpen(false); // يقفل بعد اختيار الدقايق
    }
  };

  return (
    <div>
      <div className="mt-4 space-y-3">
        <div className="flex flex-col gap-2 rounded-[12px] relative">
          {/* ✅ هنا أهم نقطة: type="button" */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault(); // يمنع أي ريفريش أو submit
              setOpen(!open);
            }}
            className="w-[280px] items-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-md font-medium transition-all border hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 px-4 flex justify-between bg-muted-foreground/6 py-2 leading-6 h-10"
          >
            {hour}:{minute}
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
              class="lucide lucide-clock3-icon lucide-clock-3"
            >
              <path d="M12 6v6h4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </button>

          {open && (
            <div
              ref={popoverRef}
              className="absolute top-full mt-2 left-0 flex gap-3 bg-white border rounded-md p-2 shadow-md z-50"
            >
              {/* الساعات */}
              <div className="h-56 w-16 border rounded-md overflow-y-scroll">
                {Array.from({ length: 24 }, (_, i) => (
                  <div
                    key={i}
                    onClick={() =>
                      handleSelect("hour", i.toString().padStart(2, "0"))
                    }
                    className={`p-2 cursor-pointer text-center hover:bg-gray-100 ${
                      hour === i.toString().padStart(2, "0")
                        ? "bg-blue-500 text-white"
                        : ""
                    }`}
                  >
                    {i.toString().padStart(2, "0")}
                  </div>
                ))}
              </div>

              {/* الدقايق */}
              <div className="h-56 w-16 border rounded-md overflow-y-scroll">
                {Array.from({ length: 60 }, (_, i) => (
                  <div
                    key={i}
                    onClick={() =>
                      handleSelect("minute", i.toString().padStart(2, "0"))
                    }
                    className={`p-2 cursor-pointer text-center hover:bg-gray-100 ${
                      minute === i.toString().padStart(2, "0")
                        ? "bg-blue-500 text-white"
                        : ""
                    }`}
                  >
                    {i.toString().padStart(2, "0")}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTimeService;
