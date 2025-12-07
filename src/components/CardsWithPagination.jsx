import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Link } from 'react-router';
const CardsWithViewToggle = () => {
  const [openIcons, setOpenIcons] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const cards = [
    { id: 1, title: "اسنان" },
    { id: 2, title: "جلدية" },
    { id: 3, title: "عظام" },
    { id: 4, title: "عيون" },
    { id: 5, title: "قلب" },
    { id: 6, title: "مخ" },
    { id: 7, title: "أذن" },
    { id: 8, title: "أنف" },
    { id: 9, title: "أنف" },
    { id: 10, title: "أنف" },
    { id: 11, title: "أنف" },
  ];

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  return (
    <div className="w-full p-4">
      {/* أزرار تبديل العرض */}
      <div className="md:flex hidden justify-end mb-4">
        <div className="flex w-fit bg-[#F1F5F9] p-1 rounded-[8px] !py-[5px]">
          {/* زر الشبكة */}
          <button
            onClick={() => setViewMode("grid")}
            className={`inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-md font-medium transition-all h-9 px-4 py-2 ${
              viewMode === "grid"
                ? "bg-primary text-secondary"
                : "text-black hover:bg-slate-200"
            }`}
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
                class="lucide lucide-layout-grid-icon lucide-layout-grid"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            </span>
          </button>

          {/* زر القائمة */}
          <button
            onClick={() => setViewMode("list")}
            className={`inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-md font-medium transition-all h-9 px-4 py-2 ${
              viewMode === "list"
                ? "bg-primary text-secondary"
                : "text-black hover:bg-slate-200"
            }`}
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
                class="lucide lucide-layout-list-icon lucide-layout-list"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
                <path d="M14 4h7" />
                <path d="M14 9h7" />
                <path d="M14 15h7" />
                <path d="M14 20h7" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* الكروت */}
      <div
        className={
          viewMode === "grid"
            ? "!pt-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            : "flex flex-col gap-6"
        }
      >
        {currentCards.map((card) => (
          <div
            key={card.id}
            className={`text-card-foreground flex flex-col gap-6 relative rounded-xl border border-slate-200 bg-white overflow-hidden ${
              viewMode === "grid"
                ? "w-[320px] h-[330px]"
                : "w-[1330px] min-h-[330px]"
            }`}
          >
            <div className="relative h-[70px] w-full bg-[#7b4c4c]">
              <div className="absolute top-3 right-4">
                <DropdownMenu
                  open={openIcons === card.id}
                  onOpenChange={(open) =>
                    setOpenIcons(open ? card.id : null)
                  }
                >
                  <DropdownMenuTrigger asChild>
                    <button className="inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-md font-medium transition-all h-5 w-5 p-0 text-white hover:bg-white/20">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <Link to={"/AddNewService"}>
                    <DropdownMenuItem
                      onClick={() => setOpen(true)}
                      className="cursor-pointer text-black hover:text-blue-700"
                      >
                      ✏️ Edit
                    </DropdownMenuItem>
                      </Link>
                    <DropdownMenuItem
                      onClick={() => setOpen2(true)}
                      className="cursor-pointer text-red-600 hover:text-red-800"
                    >
                      🗑️ Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="absolute left-4 top-[35px] w-full">
              <div className="w-14 h-14 rounded-lg border-2 border-white overflow-hidden">
                <img src="public/image/ahmed.jpg" alt="" />
              </div>
              <div className="mt-2">
                <h3 className="text-blck font-medium text-base mb-4">
                  {card.title}
                </h3>
                <div className="flex items-center justify-between mb-3 w-[290px]">
                  <div className="flex items-center gap-1">
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
                      className="lucide lucide-globe-icon lucide-globe"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                    <span className="text-sm font-medium text-slate-500">
                      Status
                    </span>
                  </div>
                  <div className="inline-flex items-center justify-center border text-xs font-medium w-fit whitespace-nowrap shrink-0 rounded-full text-[#1F845A] bg-[#1F845A]/10 px-2 py-1">
                    active
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3 w-[290px]">
                  <div className="flex items-center gap-1">
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
                      className="lucide lucide-globe-icon lucide-globe"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                    <span className="text-sm font-medium text-slate-500">
                      Type
                    </span>
                  </div>
                  <div className="inline-flex items-center justify-center border text-xs font-medium w-fit whitespace-nowrap shrink-0 rounded-full text-[#1F845A] bg-[#1F845A]/10 px-2 py-1">
                    Offline
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-1">
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
                      className="lucide lucide-globe-icon lucide-globe"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                    <span className="text-sm font-medium text-slate-500">
                      Days
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 text-xs font-medium text-[#032212] !pt-[10px] !pl-[8px]">
                  <span className="opacity-50">Sun</span>
                  <span className="opacity-50">Mon</span>
                  <span className="opacity-50">Tue</span>
                  <span className="opacity-50">Wed</span>
                  <span className="text-nowrap">Thu</span>
                  <span className="opacity-50">Fri</span>
                  <span className="opacity-50">Sat</span>
                </div>

                <div className="flex items-center justify-between pt-3 w-[290px]">
                  <div>
                    <button className="w-[230px] inline-flex items-center justify-center cursor-pointer whitespace-nowrap font-medium transition-all border bg-background hover:bg-accent hover:text-accent-foreground h-8 gap-1.5 px-3 text-[15px] flex-1 mr-3 rounded-full border-slate-200">
                      More Details
                    </button>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-base font-medium text-[#032212]">
                      50.00
                    </span>
                    <span className="text-xs text-slate-500"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardsWithViewToggle;





