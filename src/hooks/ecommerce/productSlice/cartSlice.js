import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: {},
};

export const cartData = createSlice({
	name: "cartData",
	initialState,
	reducers: {
		setData: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const { setData } = cartData.actions;
export default cartData.reducer;
