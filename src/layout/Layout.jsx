import Header from "../components/Header";
import { Outlet, useLocation } from "react-router";
const Layout = () => {
  const location = useLocation();
  // console.log(location.pathname);
  const hide = ["/login"];

  const shouldHide = hide.includes(location.pathname.toLowerCase());
  return (
      <div>
        {!shouldHide && <Header />}
          <Outlet />
      </div>
  );
};

export default Layout;
