import { createBrowserRouter } from "react-router";
import Layout from './../layout/Layout';
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Appointments from "@/pages/Appointments";

const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
        {  path: "/Dashboard", 
            element: <Dashboard /> 
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/Appointments",
            element: <Appointments />
        }
        
    ]
}]);
export default router;