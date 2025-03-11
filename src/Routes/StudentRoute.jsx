import { Route, Routes, Outlet } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";
import StudentDashboardLayout from "../Pages/Student_Dashboard/Dashboard/StudentDashboardLayout";
import StudentDashboardIndex from "../Pages/Student_Dashboard/Dashboard/StudentDashboardIndex";
import StudentPerformanceLayout from "../Pages/Student_Dashboard/Performance/StudentPerformanceLayout";
import StudentDiscussionFormIndex from "../Pages/Student_Dashboard/Discussion Forum/StudentDiscussionForumIndex";
import StudentDiscussionForumPost from "../Pages/Student_Dashboard/Discussion Forum/StudentDiscussionForumPost";
import StudentSettingIndex from "../Pages/Student_Dashboard/Setting/StudentSettingIndex";
import StudentSupportIndex from "../Pages/Student_Dashboard/Support/StudentSupportIndex";
import StudentSupportTicketDetail from "../Pages/Student_Dashboard/Support/StudentSupportTicketDetail";
import StudentDiscoverIndex from "../Pages/Student_Dashboard/Discover/StudentDiscoverIndex";
import StudentMyCoursesIndex from "../Pages/Student_Dashboard/My Courses/StudentMyCoursesIndex";

// Lazy Loaded Components
const StudentDashboard_Page = lazy(() =>
    import("../Pages/Student_Dashboard/StudentDashboard_Page")
);
const StudentDiscoverCourseIndex = lazy(() =>
    import(
        "../Pages/Student_Dashboard/Components/Student Discover Courses/Student_Discover_Course_Index"
    )
);
const StudentDiscoverCourseDetailsIndex = lazy(() =>
    import(
        "../Pages/Student_Dashboard/Components/Student Discover Courses/StudentDiscoverCourseDetails/StudentDiscoverCourseDetailsIndex"
    )
);
const StudentCourseDetailsAfterEnrolled = lazy(() =>
    import(
        "../Pages/Student_Dashboard/Components/StudentCourseDetailsAfterEnrolled/StudentCourseDetailsAfterEnrolledIndex"
    )
);
const StudentSetting = lazy(() =>
    import("../Pages/Student_Dashboard/Setting/StudentSetting")
);

// Loader Component
const Loader = () => (
    <div className="w-full h-screen flex items-center justify-center text-center p-4">
        <span className="loader"></span>
    </div>
);

const StudentRoute = () => {
    return (
        <div className="w-full overflow-hidden">
            <Suspense fallback={<Loader />}>
                <StudentDashboard_Page />
            </Suspense>
        </div>
    );
};

export const StudentRoutesConfig = [
    { path: "dashboard", element: <StudentDashboardIndex /> },
    {
        path: "courses",
        element: <StudentMyCoursesIndex />,
    },

    { path: "performance", element: <StudentPerformanceLayout /> },
    {
        path: "discussion_forums/*",
        children: [
            {
                path: "",
                element: <StudentDiscussionFormIndex />,
            },
            {
                path: "post/:id",
                element: <StudentDiscussionForumPost />,
            },
        ],
    },

    {
        path: "support/*",
        children: [
            {
                path: "",
                element: <StudentSupportIndex />,
            },
            {
                path: "ticket/:id",
                element: <StudentSupportTicketDetail />,
            },
        ],
    },
    {
        path: "profile_settings",
        element: <StudentSettingIndex />,
    },
    {
        path: "discover",
        element: (
            // <Suspense fallback={<Loader />}>
            //     <StudentDiscoverCourseDetailsIndex />
            // </Suspense>
            <StudentDiscoverIndex />
        ),
    },
];

export default StudentRoute;
