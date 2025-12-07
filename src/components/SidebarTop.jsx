import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, LogOut } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";
const SidebarTop = ({ title, children }) => {
  const { open } = useSidebar();
  const navigate = useNavigate();

  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar:
    "http://localhost:5173/image/ahmed.jpg",
  };

  const handleLogout = async () => {
    // console.log("Logout clicked ✅");
    try {
      const token = localStorage.getItem("token");
      // console.log("Token before logout:", token);

      if (!token) {
        console.warn("No token found");
        navigate("/login");
        window.location.reload();
        return;
      }

      const response = await axios.post(
        "https://appoint-api.testingelmo.com/api/v1/en/admin/auth/logout",{},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Logout success:", response.data);

      localStorage.removeItem("token");
      toast.success("Logout Successfully!");

      setTimeout(() => {
        window.location.reload();
      }, 2000);

      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);

      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
        window.location.reload();
      }
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-[70px] bg-white border-b border-gray-200 flex items-center justify-between px-6 transition-all duration-500 ease-in-out z-50`}
      style={{
        marginLeft: open ? "280px" : "90px",
        width: open ? "calc(100% - 280px)" : "calc(100% - 90px)",
      }}
    >
      <div>
        <h1 className="text-xl font-bold capitalize text-[#032212]">{title}</h1>
      </div>
      <div className="flex items-center justify-between gap-6 w-full overflow-hidden">
        <div>{children}</div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 focus:outline-none">
                <Avatar className="h-9 w-9 cursor-pointer">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="w-47 rounded-lg p-1"
            >
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <User className="w-4 h-4" /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <Settings className="w-4 h-4" /> Settings
              </DropdownMenuItem>
              <hr />

              <DropdownMenuItem
                onClick={handleLogout}
                className="flex items-center gap-2 cursor-pointer text-red-500 focus:text-red-600 text-md font-[600]"
              >
                <LogOut className="w-4 h-4" /> sing out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SidebarTop;
