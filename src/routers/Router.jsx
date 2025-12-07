import { createBrowserRouter } from "react-router";
import Layout from "./../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Appointments from "@/pages/Appointments";
import ProtectedRoutes from "./ProtectedRoutes";
import Clients from './../pages/Clients';
import Services from './../pages/Services';
import CreateClient from "@/pages/CreateClient";
import AddNewService from "@/pages/AddNewService";
import Users from "@/pages/Users";
import CreateUser from "@/pages/CreateUser";

const isAllowed = localStorage.getItem("token") == null ? false : true; // لو مش مسموح ليك الدخول يعني مفيش توكن
//isAllowed => معناها ان مفيش توكن يعني مش مسموح ليك الدخول 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Dashboard",
        element: (
          <ProtectedRoutes isAllowed={isAllowed} redirectPath="/login">
            <Dashboard />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedRoutes isAllowed={!isAllowed} redirectPath="/Dashboard">
            <Login />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/Appointments",
        element: (
          <ProtectedRoutes isAllowed={isAllowed} redirectPath="/login">
            <Appointments />
          </ProtectedRoutes>
        )
      },
      {
        path: "/services",
        element: (
          <ProtectedRoutes isAllowed={isAllowed} redirectPath="/login">
            <Services />
          </ProtectedRoutes>
        )
      },
      {
        path: "/clients",
        element: (
          <ProtectedRoutes isAllowed={isAllowed} redirectPath="/login">
            <Clients />
          </ProtectedRoutes>
        )
      },
      {
        path: "/createClient",
        element: (
          <ProtectedRoutes isAllowed={isAllowed} redirectPath="/login">
            <CreateClient />
          </ProtectedRoutes>
        )
      },
      {
        path: "/AddNewService",
        element: (
          <ProtectedRoutes isAllowed={isAllowed} redirectPath="/login">
            <AddNewService />
          </ProtectedRoutes>
        )
      },
      {
        path: "/users",
        element: (
          <ProtectedRoutes isAllowed={isAllowed} redirectPath="/login">
            <Users />
          </ProtectedRoutes>
        )
      },
      {
        path: "/createUser",
        element: (
          <ProtectedRoutes isAllowed={isAllowed} redirectPath="/login">
            <CreateUser />
          </ProtectedRoutes>
        )
      },
    ],
  },
]);
export default router;
