import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ element }) => {
	const token = localStorage.getItem("token");

	return token ? <Navigate to='/dashboard' /> : element;
};

export default AuthRoute;
