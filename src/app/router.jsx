import { createHashRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LandingPage from "../pages/LandingPage";
import DemoPage from "../pages/DemoPage";

const router = createHashRouter([
    {
        path: "/",
        element: (
            <Layout>
                <LandingPage />
            </Layout>
        ),
    },
    {
        path: "/demo",
        element: (
            <Layout>
                <DemoPage />
            </Layout>
        ),
    },
]);

export default router;
