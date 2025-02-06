import { Route, Outlet } from "react-router-dom";
import AdminDashboard from "../Pages/Admin_Dashboard/AdminDashboard_Page";
// import Admin_User_Managements from "../Pages/Admin_Dashboard/Admin_Components/Admin_User_Managements";
// import Admin_Course_Management from "../Pages/Admin_Dashboard/Admin_Components/Admin_Course_Management";

import Admin_Content_Management from "../Pages/Admin_Dashboard/Admin_Components/Admin_Content_Management";
import Admin_Dashboard from "../Pages/Admin_Dashboard/Admin_Components/Admin_Dashboard";
import Admin_Settings from "../Pages/Admin_Dashboard/Admin_Components/Admin_Settings";
import Admin_Report_Analytics from "../Pages/Admin_Dashboard/Admin_Components/Admin_Report_Analytics";
import Admin_Payment_Management from "../Pages/Admin_Dashboard/Admin_Components/Admin_Payment_Management";
import Admin_Support from "../Pages/Admin_Dashboard/Admin_Components/Admin_Support";
import Admin_User_Managements from "../Pages/Admin_Dashboard/Admin_Components/Admin_User_Management_Components/Admin_User_Managements";
import Admin_Add_New_Lesson from "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Upload_New_Course/Add_New Lesson/Admin_Add_New_Lesson";
import Admin_Upload_New_Course from "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Upload_New_Course/Admin_Upload_New_Course";
import Admin_My_Courses from "../Pages/Admin_Dashboard/Admin_Components/Course_Management/My Courses/Admin_My_Courses";
import Admin_Course_Management_Index from "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Admin_Course_Management_Index/Admin_Course_Management_Index";
import Admin_Course_Managemnet_Add_Quize from "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Admin_Course_Management_Quize/Add_Quize/Admin_Course_Managemnet_Add_Quize";
import Admin_Course_Management_Quize_Dashboard from "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Admin_Course_Management_Quize/Quize Dashboard/Admin_Course_Management_Quize_Dashboard";
import Admin_Course_Management_Single_Course from "../Pages/Admin_Dashboard/Admin_Components/Course_Management/My Courses/Admin_Course_Management_Single_Course/Admin_Course_Management_Single_Course";
import Admin_Add_Question_To_Quize from "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Admin_Course_Management_Quize/Add Question/Admin_Add_Question_To_Quize";

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
    {
        path: "course_management/*", // This will be the base for nested routes
        children: [
            {
                path: "",
                element: <Admin_Course_Management_Index />,
            },
            {
                path: "my_courses/",
                element: <Admin_My_Courses />,
                // element: <Admin_Course_Management_Single_Course />,
            },
            {
                path: "upload_new_course/:edit?",
                // element: <h2>Upload new course</h2>,
                element: <Admin_Upload_New_Course />,
            },
            {
                path: "quizes",
                element: <Admin_Course_Management_Quize_Dashboard />,
            },
            {
                path: "add_new_quize/:edit?",
                // element: <h2>Upload new course</h2>,
                element: <Admin_Course_Managemnet_Add_Quize />,
            },
            {
                path: "add_new_quize_questions/:edit?",
                // element: <h2>Upload new course</h2>,
                element: <Admin_Add_Question_To_Quize />,
            },
            {
                path: "add_new_lesson/",
                // element: <h2>Upload new course</h2>,
                element: <Admin_Add_New_Lesson />,
            },
        ],
    },
    { path: "content_management", element: <Admin_Content_Management /> },
    { path: "repost_&_analytics", element: <Admin_Report_Analytics /> },
    { path: "payment_management", element: <Admin_Payment_Management /> },
    { path: "support_management", element: <Admin_Support /> },
    { path: "settings", element: <Admin_Settings /> },
];

export default AdminRoutes;
