import { Route, Routes, Outlet } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";

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
    { path: "dashboard", element: <h1>Dashboard Student</h1> },
    {
        path: "courses/*",
        children: [
            {
                path: "",
                element: <h1>Student Course Main Page</h1>,
            },
            {
                path: "course_details",
                element: (
                    <Suspense fallback={<Loader />}>
                        <StudentCourseDetailsAfterEnrolled />
                    </Suspense>
                ),
            },
        ],
    },
    { path: "classroom_&_module", element: <h1>ClassRoom & Modules</h1> },
    { path: "performance", element: <h1>Performance</h1> },
    { path: "discussion_forums", element: <h1>Discussion Forums</h1> },
    { path: "calender", element: <h1>Calendar</h1> },
    { path: "support", element: <h1>Support</h1> },
    {
        path: "profile_settings",
        element: (
            <Suspense fallback={<Loader />}>
                <StudentSetting />
            </Suspense>
        ),
    },
    {
        path: "discover",
        element: (
            <Suspense fallback={<Loader />}>
                <StudentDiscoverCourseDetailsIndex />
            </Suspense>
        ),
    },
];

export default StudentRoute;
