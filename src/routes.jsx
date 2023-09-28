import { createBrowserRouter } from "react-router-dom";
import Register from "./components/User/Register/Register";
import ErrorPage from "./components/Error/ErrorPage";
import Home from "./components/Home/Home";
import Login from "./components/User/Login/Login";
import Logout from "./components/User/Logout/Logout";
import Layout from "./components/Layout/Layout";
import PrivateRoutes from "./components/Layout/PrivateRoutes";
import Location from "./components/Location/LocationRender/LocationRender";
import Dashboard from "./components/EventUser/Dashboard/Dashboard";
import ApproverView from "./components/ApproverView/ApproverView";
import EventDetail from "./components/Event/EventDetail/EventDetail";
import Counter from "./components/Counter/Counter";
import ApprovedAccepted from "./components/ApprovedAccepted/ApprovedAccepted";
import QrGenerator from "./components/Qr/Generator/QrGenerator";
import EventCard from "./components/Event/EventCard/EventCard";
import QrReader from "./components/Qr/Reader/QrReader";
import ProfileForm from "./components/Header/Profile/ProfileForm/ProfileForm";

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
        path: "approver/view",
        element: <ApproverView />,
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
        path: "approved/accepted",
        element: <ApprovedAccepted />,
        errorElement: <ErrorPage />,
    },

    {
        path: "qrgenerator",
        element: <QrGenerator />,
        errorElement: <ErrorPage />,
    },
    {
        path: "eventcard/:id",
        element: <EventCard />,
        errorElement: <ErrorPage />,
    },

    {
        path: "readerqr",
        element: <QrReader />,
        errorElement: <ErrorPage />,
    },

    {
        element: <PrivateRoutes />,
        errorElement: <ErrorPage />,
        children: [
            { path: "logout", element: <Logout /> },
            { path: "profile", element: <ProfileForm /> },
        ],
    },
]);

export default routes;
