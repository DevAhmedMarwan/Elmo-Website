import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import BuildIcon from "@mui/icons-material/Build";
import GroupIcon from "@mui/icons-material/Group";
import { Link, useLocation } from "react-router";
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

function SidebarLeft(props) {
  const { open, toggleSidebar } = useSidebar();
  const location = useLocation();

  return (
    <div className="!bg-[#0F3B2E] h-full">
      <Sidebar
        collapsible="icon"
        className={`!bg-[#032212] text-white h-full transition-all duration-300 ${
          open ? "w-[280px]" : "!w-[90px]"
        }`}
        {...props}
      >
        <SidebarHeader className="!bg-[#032212] !text-white">
          <div className="flex items-center justify-between px-3 py-4">
            <div
              onClick={toggleSidebar}
              className="flex items-center justify-center h-12 w-[200px] !pl-[20px] cursor-pointer"
            >
              {open ? (
                <img
                  src={data.teams[0].url}
                  alt="Logo"
                  className="object-contain transition-all duration-300 h-10 w-auto"
                />
              ) : (
                <img src="#" alt="Logo" />
              )}
            </div>

            {open && <SidebarToggleButton />}
          </div>
        </SidebarHeader>

        <SidebarContent className="!bg-[#032212] !text-white">
          <div
            className={'px-3 mb-2 transition-all duration-300'}
          >
            {open && (
              <h2 className="text-md text-white font-[700] !pl-[15px]">Main</h2>
            )}
          </div>

          <div
            className={`flex flex-col gap-1 ${
              open ? "px-3 py-2" : ""
            } transition-all duration-300`}
          >
            {data.navMain.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.url;

              return (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 !pl-[25px]
                    ${
                      isActive
                        ? "text-[oklch(83.98%_.195_124.9)]"
                        : "text-white hover:text-[oklch(83.98%_.195_124.9)]"
                    }`}
                >
                  <Icon
                    fontSize="medium"
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-[oklch(83.98%_.195_124.9)]"
                        : "text-white hover:text-[oklch(83.98%_.195_124.9)]"
                    }`}
                  />
                  {open && (
                    <span
                      className={`transition-colors duration-300 text-lg ${
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
export default SidebarLeft;