import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, LogOut } from "lucide-react";
const SidebarTop = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar:
      "https://appoint-api.testingelmo.com/storage/avatars/1760405098_WhatsApp%20Image%202025-09-30%20at%2014.38.05.jpg",
  };
  return (
          <div className="!h-auto">
            <header className="flex justify-between items-center px-6 pb-4 border-b border-gray-200 bg-white">
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold capitalize">Dashboard</h1>
              </div>

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
                    className="flex items-center gap-2 cursor-pointer text-red-500 focus:text-red-600"
                    onClick={() => console.log("Signing out...")}
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
          </div>
  );
};

export default SidebarTop;
