import React from "react";
import AdminSidebar from "../../components/admin/sidebar/AdminSidebar";
import AdminHeader from "../../components/admin/header/AdminHeader";
import { Outlet } from "react-router";

const AdminLayout = () => {
	return (
		<div className='flex'>
			<AdminSidebar />
			<Outlet />
			<AdminHeader />
		</div>
	);
};

export default AdminLayout;
