import Header from "../components/Header";
import { Outlet, useLocation } from "react-router";
import { SidebarProvider } from "@/components/ui/sidebar";

const Layout = () => {
  const location = useLocation();
  const hide = ["/login"];
  const shouldHide = hide.includes(location.pathname.toLowerCase());

  return (
    <SidebarProvider>
      <div>
        {!shouldHide && <Header />}
        <Outlet />
      </div>
    </SidebarProvider>
  );
};

export default Layout;
