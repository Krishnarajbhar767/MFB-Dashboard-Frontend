import { Route, Outlet } from "react-router-dom";
import StudentDashboard_Page from "../Pages/Student_Dashboard/StudentDashboard_Page";
import Student_Discover_Course_Index from "../Pages/Student_Dashboard/Components/Student Discover Courses/Student_Discover_Course_Index";
import StudentDiscoverCourseDetailsIndex from "../Pages/Student_Dashboard/Components/Student Discover Courses/StudentDiscoverCourseDetails/StudentDiscoverCourseDetailsIndex";
import StudentCourseDetailsAfterEnrolled from "../Pages/Student_Dashboard/Components/StudentCourseDetailsAfterEnrolled/StudentCourseDetailsAfterEnrolledIndex";
import StudentSetting from "../Pages/Student_Dashboard/Setting/StudentSetting";
import { useMemo } from "react";

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
    {
        path: "courses/*",
        children: [
            {
                path: "",
                element: <h1>Student Course Main Page </h1>,
            },
            {
                path: "course_details",
                element: <StudentCourseDetailsAfterEnrolled />,
                // element: <Admin_Course_Management_Single_Course />,
            },
        ],
    },
    { path: "classroom_&_module", element: <h1>ClassRoom & Modules</h1> },
    { path: "performance", element: <h1>Performance</h1> },
    { path: "discussion_forums", element: <h1>Discussion Forums </h1> },
    { path: "calender", element: <h1>Calender</h1> },
    { path: "support", element: <h1>Support</h1> },
    { path: "profile_settings", element: <StudentSetting /> },
    {
        path: "discover",
        // element: <Student_Discover_Course_Index />,
        element: <StudentDiscoverCourseDetailsIndex />,
    },
];

export default StudentRoute;
