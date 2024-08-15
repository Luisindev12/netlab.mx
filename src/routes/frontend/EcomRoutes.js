import EcomLayout from "../../layout/ecommerce/EcomLayout";
import EcomLogin from "../../views/ecommerce/auth/EcomLogin";
import EcomRegister from "../../views/ecommerce/auth/EcomRegister";
import Cart from "../../views/ecommerce/cart/Cart";
import Checkout from "../../views/ecommerce/checkout/Checkout";
import EcomDashboard from "../../views/ecommerce/dashboard/Index";
import Home from "../../views/ecommerce/home/Home";
import Product from "../../views/ecommerce/product/Index";
import SingleProduct from "../../views/ecommerce/singleProduct/SingleProduct";
import AuthRoute from "./auth/AuthRoute";
import PrivateRoute from "./private/PrivateRoute";

const EcomRoutes = {
	path: "/",
	element: <EcomLayout />,
	children: [
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/product/:id/:product_name",
			element: <SingleProduct />,
		},
		{
			path: "/login",
			element: <AuthRoute element={<EcomLogin />} />,
		},
		{
			path: "/register",
			element: <AuthRoute element={<EcomRegister />} />,
		},
		{
			path: "/dashboard",
			element: <PrivateRoute element={<EcomDashboard />} />, // Protect this route
		},
		{
			path: "/product",
			element: <Product />,
		},

		{
			path: "/cart",
			element: <Cart />,
		},
		{
			path: "/checkout",
			element: <Checkout />,
		},
	],
};

export default EcomRoutes;
