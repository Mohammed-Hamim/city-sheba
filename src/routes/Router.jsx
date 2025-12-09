import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/homePage/Homepage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        hydrateFallbackElement: <span className="loading loading-ball">loading</span>,
        children: [
            {
                index : true,
                Component: Homepage
            }
        ]

    },
]);