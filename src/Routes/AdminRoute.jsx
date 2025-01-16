import { Route, Outlet } from "react-router-dom";
import AdminDashboard from "../Pages/Admin_Dashboard/AdminDashboard_Page";
// import Admin_User_Managements from "../Pages/Admin_Dashboard/Admin_Components/Admin_User_Managements";
// import Admin_Course_Management from "../Pages/Admin_Dashboard/Admin_Components/Admin_Course_Management";
import Admin_Course_Management from "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Admin_Course_Management";
import Admin_Content_Management from "../Pages/Admin_Dashboard/Admin_Components/Admin_Content_Management";
import Admin_Dashboard from "../Pages/Admin_Dashboard/Admin_Components/Admin_Dashboard";
import Admin_Settings from "../Pages/Admin_Dashboard/Admin_Components/Admin_Settings";
import Admin_Report_Analytics from "../Pages/Admin_Dashboard/Admin_Components/Admin_Report_Analytics";
import Admin_Payment_Management from "../Pages/Admin_Dashboard/Admin_Components/Admin_Payment_Management";
import Admin_Support from "../Pages/Admin_Dashboard/Admin_Components/Admin_Support";
import Admin_User_Managements from "../Pages/Admin_Dashboard/Admin_Components/Admin_User_Management_Components/Admin_User_Managements";

const AdminRoutes = () => {
    return (
        <div className="w-full overflow-hidden  ">
            {/* Render All Child Routes inside the AdminDashboard */}
            <AdminDashboard />
        </div>
    );
};

export const adminRoutesConfig = [
    { path: "dashboard", element: <Admin_Dashboard /> },
    { path: "user_management", element: <Admin_User_Managements /> },
    { path: "course_management", element: <Admin_Course_Management /> },
    { path: "content_management", element: <Admin_Content_Management /> },
    { path: "repost_&_analytics", element: <Admin_Report_Analytics /> },
    { path: "payment_management", element: <Admin_Payment_Management /> },
    { path: "support_management", element: <Admin_Support /> },
    { path: "settings", element: <Admin_Settings /> },
];

export default AdminRoutes;
