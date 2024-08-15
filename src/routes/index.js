import { createBrowserRouter } from "react-router-dom";
import AdminRoutes from "./backend/AdminRoutes";
import EcomRoutes from "./frontend/EcomRoutes";

const router = createBrowserRouter([AdminRoutes, EcomRoutes]);

export default router;
