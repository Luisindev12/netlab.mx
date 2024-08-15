import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

// Function to load initial state from localStorage and decode token
const loadInitialState = () => {
	const token = localStorage.getItem("token");
	if (token) {
		try {
			const decodeToken = jwtDecode(token);
			return {
				userName: decodeToken.full_name || "",
				userId: decodeToken.id || "",
			};
		} catch (error) {
			console.error("Error decoding token:", error);
			return {
				userName: "",
				userId: "",
			};
		}
	}
	return {
		userName: "",
		userId: "",
	};
};

const initialState = loadInitialState();

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userInfo: (state) => {
			const token = localStorage.getItem("token");
			if (token) {
				try {
					const decodeToken = jwtDecode(token);
					state.userName = decodeToken.full_name || "";
					state.userId = decodeToken.id || "";
				} catch (error) {
					console.error("Error decoding token:", error);
				}
			} else {
				state.userName = "";
				state.userId = "";
			}
		},

		clearUser: (state) => {
			state.userName = "";
			state.userId = "";
			localStorage.removeItem("userState");
		},
	},
});

export const { userInfo, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
