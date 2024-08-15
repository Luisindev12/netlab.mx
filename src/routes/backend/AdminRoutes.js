import AdminLayout from "../../layout/admin/AdminLayout";
import AdminDashboard from "../../views/admin/dashboard/AdminDashboard";
const AdminRoutes = {
	path: "/auth",
	element: <AdminLayout />,
	children: [
		{
			path: "/auth/dashboard",
			element: <AdminDashboard />,
		},
	],
};

export default AdminRoutes;
