import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import DemoPage from "../pages/DemoPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/demo",
        element: <DemoPage />,
    },
]);

export default router;
