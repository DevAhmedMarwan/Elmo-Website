import SidebarLeft from "./SidebarLeft";
import { SidebarProvider } from "./ui/sidebar";

const Header = () => {
  return (
    <div className="!h-[75px]">
      <SidebarProvider>
        <div>
          <SidebarLeft />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Header;
