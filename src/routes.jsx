import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./components/Error/ErrorPage";
import Home from "./components/Home/Home";
import Login from "./components/User/Login/Login";
import Logout from "./components/User/Logout/Logout";
import Layout from "./components/Layout/Layout";
import PrivateRoutes from "./components/Layout/PrivateRoutes";
import Register from "./components/User/Register/Register";
import Location from "./components/Location/LocationRender/LocationRender";
import Dashboard from "./components/EventUser/Dashboard/Dashboard";
import ApproverView from "./components/ApproverView/ApproverView";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            // { path: "childrenExample", element: <childrenExample /> },
        ],
    },
    {
        path: "login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "register",
        element: <Register />,
        errorElement: <ErrorPage />,
    },
    {
        path: "location",
        element: <Location />,
        errorElement: <ErrorPage />,
    },
    {
        path: "dashboard/:id",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
    },
    {
        path: "approverview",
        element: <ApproverView />,
        errorElement: <ErrorPage />,
    },
    {
        element: <PrivateRoutes />,
        errorElement: <ErrorPage />,
        children: [
            { path: "logout", element: <Logout /> },
            // NOTE: La ruta segura/privada/guard
            // { path: "childrenExample", element: <childrenExample /> },
        ],
        //     children: [
        //         {
        //             path: "profile",
        //             element: <Profile />,
        //         },
        //         {
        //             path: "admin",
        //             element: <Admin />,
        //         },
        //     ],
    },
]);

export default routes;
