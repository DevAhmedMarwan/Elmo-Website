import SidebarTop from "./../components/SidebarTop";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router";
import DataTableUser from "@/components/DataTableUser";
const Users = () => {
  return (
    <div>
      <div className="w-full h-0">
        <SidebarTop>
          <div className="flex items-center justify-start w-full">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      className="text-2xl font-bold capitalize text-black"
                      to="/Users"
                    >
                      Users
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <div className="hidden">
                  <BreadcrumbSeparator
                    size={"3xl"}
                    className={"text-3xl font-bold capitalize text-black"}
                  />{" "}
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/CreateUser">Create User</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </div>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </SidebarTop>
      </div>
      <div>
        <div className="w-[1680px] h-[550px] !pl-[300px]">
          <DataTableUser title={"Search"} />
        </div>
      </div>
    </div>
  );
};

export default Users;
