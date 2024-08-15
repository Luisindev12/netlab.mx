import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../ecommerce/productSlice/productSlice";
import userReducer from "../ecommerce/productSlice/userSlice";
import cartReducer from "../ecommerce/productSlice/cartSlice";

export const store = configureStore({
	reducer: {
		filterData: productReducer,
		userInfo: userReducer,
		cartData: cartReducer,
	},
});
