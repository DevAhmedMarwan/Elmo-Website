import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import BuildIcon from "@mui/icons-material/Build";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router";
import { Menu } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

function SidebarToggleButton() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="p-2 transition"
      title="Toggle Sidebar"
    >
      <Menu className="h-5 w-5 text-[oklch(83.98%_.195_124.9)]" />
    </button>
  );
}

const data = {
  teams: [
    { name: "ElmoTech", url: "https://booking.testingelmo.com/icons/logo.svg" },
  ],
  navMain: [
    { title: "Dashboard", url: "/dashboard", icon: HomeIcon },
    { title: "Appointments", url: "/appointments", icon: EventIcon },
    { title: "Clients", url: "/clients", icon: PeopleIcon },
    { title: "Services", url: "/services", icon: BuildIcon },
    { title: "Users", url: "/users", icon: GroupIcon },
  ],
};

export function SidebarLeft(props) {
  const { open, toggleSidebar } = useSidebar();

  return (
    <div className="!bg-[#0F3B2E] h-full">
      <Sidebar
        collapsible="icon"
        className="!bg-[#032212] text-white h-full"
        {...props}
      >
        {/* ====== Header ====== */}
        <SidebarHeader className="!bg-[#032212] !text-white">
          <div className="flex items-center justify-between px-3 py-4">
            <div
              onClick={toggleSidebar}
              className="flex items-center justify-center h-12 w-full cursor-pointer"
            >
              {open ? (
                <img
                  src={data.teams[0].url}
                  alt="Logo"
                  className="object-contain transition-all duration-300 h-10 w-auto"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </div>

            {open && <SidebarToggleButton />}
          </div>
        </SidebarHeader>

        {/* ====== Sidebar Content ====== */}
        <SidebarContent className="!bg-[#032212] !text-white">
          <div className={`px-3 mb-2 transition-all duration-300 ${open ? "" : "h-6"}`}>
            {open && <h2 className="text-sm text-white font-semibold">Main</h2>}
          </div>

          <div
            className={`flex flex-col gap-1 ${open ? "px-3 py-2" : ""} transition-all duration-300`}
          >
{data.navMain.map((item, index) => {
  const isActive = index === 0;
  const Icon = item.icon;

  return (
    <Link
      key={item.title}
      to={item.url}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-300
        ${
          isActive
            ? "text-[oklch(83.98%_.195_124.9)]"
            : "text-white hover:text-[oklch(83.98%_.195_124.9)]"
        }`}
    >
      <Icon
        fontSize="small"
        className={`transition-colors duration-300 ${
          isActive
            ? "text-[oklch(83.98%_.195_124.9)]"
            : "text-white hover:text-[oklch(83.98%_.195_124.9)]"
        }`}
      />
      {open && (
        <span
          className={`transition-colors duration-300 ${
            isActive
              ? "text-[oklch(83.98%_.195_124.9)]"
              : "text-white hover:text-[oklch(83.98%_.195_124.9)]"
          }`}
        >
          {item.title}
        </span>
      )}
    </Link>
  );
})}

          </div>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </div>
  );
}
