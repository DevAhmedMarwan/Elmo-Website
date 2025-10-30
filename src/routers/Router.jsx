import { createBrowserRouter } from "react-router";
import Layout from "./../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Appointments from "@/pages/Appointments";
import ProtectedRoutes from "./ProtectedRoutes";

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
    ],
  },
]);
export default router;
