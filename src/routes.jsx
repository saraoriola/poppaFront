import { createBrowserRouter } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Register from "./components/User/Register/Register";
import ErrorPage from "./components/Error/ErrorPage";
import Home from "./components/Home/Home";
import Login from "./components/User/Login/Login";
import Logout from "./components/User/Logout/Logout";
import Layout from "./components/Layout/Layout";
import PrivateRoutes from "./components/Layout/PrivateRoutes";
import Location from "./components/Location/LocationRender/LocationRender";
import Dashboard from "./components/EventUser/Dashboard/Dashboard";
import EventDetail from "./components/Event/EventDetail/EventDetail";
import Counter from "./components/Counter/Counter";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [{ index: true, element: <Home /> }],
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
        path: "eventdetail/:id",
        element: <EventDetail />,
        errorElement: <ErrorPage />,
    },
    {
        path: "counter",
        element: <Counter />,
        errorElement: <ErrorPage />,
    },
    {
        element: <PrivateRoutes />,
        errorElement: <ErrorPage />,
        children: [
            { path: "logout", element: <Logout /> },
            { path: "admin", element: <Admin /> },
        ],
    },
]);

export default routes;
