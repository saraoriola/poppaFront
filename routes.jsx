import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./src/components/Error/ErrorPage";
import Login from "./src/components/User/Auth/Login";
import Layout from "./src/components/Layout/Layout";
import PrivateRoutes from "./src/components/Layout/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Login /> },
            // { path: "childrenExample", element: <childrenExample /> },
        ],
    },
    // ROUTE EXAMPLE
    // {
    //     path: "login",
    //     element: <Login />,
    //     errorElement: <ErrorPage />,
    // },

    {
        element: <PrivateRoutes />,
        errorElement: <ErrorPage />,
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

export default router;
