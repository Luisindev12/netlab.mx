import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categories: [],
	brands: [],
};

export const productSlice = createSlice({
	name: "filterData",
	initialState,
	reducers: {
		setCategories: (state, action) => {
			state.categories = action.payload;
		},
		setBrands: (state, action) => {
			state.brands = action.payload;
		},
	},
});

export const { setCategories, setBrands } = productSlice.actions;

export default productSlice.reducer;
