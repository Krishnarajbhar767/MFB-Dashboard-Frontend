import { Route, Outlet } from "react-router-dom";
import StudentDashboard_Page from "../Pages/Student_Dashboard/StudentDashboard_Page";
import Student_Discover_Course_Index from "../Pages/Student_Dashboard/Components/Student Discover Courses/Student_Discover_Course_Index";

const StudentRoute = () => {
    return (
        <div className="w-full overflow-hidden  ">
            {/* Parent Route */}
            {/* Student Routes  */}
            <StudentDashboard_Page />
        </div>
    );
};

export const StudentRoutesConfig = [
    { path: "dashboard", element: <h1>Dashboard Student</h1> },
    { path: "courses", element: <h1>Course</h1> },
    { path: "classroom_&_module", element: <h1>ClassRoom & Modules</h1> },
    { path: "performance", element: <h1>Performance</h1> },
    { path: "discussion_forums", element: <h1>Discussion Forums </h1> },
    { path: "calender", element: <h1>Calender</h1> },
    { path: "support", element: <h1>Support</h1> },
    { path: "profile_settings", element: <h1>Profile Settings</h1> },
    {
        path: "discover",
        element: <Student_Discover_Course_Index />,
    },
];

export default StudentRoute;
