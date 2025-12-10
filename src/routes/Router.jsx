import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/homePage/Homepage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AllIssuePage from "../pages/allIssue/AllIssuePage";
import Loading from "../components/Loading";
import ErrorPage from "../pages/errorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <Loading></Loading>,
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