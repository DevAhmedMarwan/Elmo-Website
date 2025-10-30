import  SidebarLeft  from "./SidebarLeft";
import SidebarTop from "./SidebarTop";
import { SidebarProvider } from "./ui/sidebar";

const Header = () => {
  return (
    <div className="!h-[75px]">
    <SidebarProvider>
      <div className="flex w-full items-start !pt-[20px]">
        <SidebarLeft />

        <div className="w-full h-0">
          <SidebarTop />
        </div>
      </div>
    </SidebarProvider>
    </div>
  );
};

export default Header;
