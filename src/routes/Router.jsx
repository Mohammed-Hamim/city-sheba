import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/homePage/Homepage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AllIssuePage from "../pages/allIssue/AllIssuePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        hydrateFallbackElement: <span className="loading loading-ball">loading</span>,
        children: [
            {
                index : true,
                Component: Homepage
            },
            {
                path: 'login',
                Component: Login

            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'all-issue',
                Component: AllIssuePage
            }
        ]

    },
]);