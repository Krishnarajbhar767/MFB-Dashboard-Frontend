import { Route, Routes, Outlet } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";

// Lazy Loaded Components
const StudentDashboard_Page = lazy(() =>
    import("../Pages/Student_Dashboard/StudentDashboard_Page")
);
const StudentPerformanceLayout = lazy(() =>
    import("../Pages/Student_Dashboard/Performance/StudentPerformanceLayout")
);
const StudentDiscussionFormIndex = lazy(() =>
    import(
        "../Pages/Student_Dashboard/Discussion Forum/StudentDiscussionForumIndex"
    )
);
const StudentDiscussionForumPost = lazy(() =>
    import(
        "../Pages/Student_Dashboard/Discussion Forum/StudentDiscussionForumPost"
    )
);
const StudentSettingIndex = lazy(() =>
    import("../Pages/Student_Dashboard/Setting/StudentSettingIndex")
);
const StudentSupportIndex = lazy(() =>
    import("../Pages/Student_Dashboard/Support/StudentSupportIndex")
);
const StudentSupportTicketDetail = lazy(() =>
    import("../Pages/Student_Dashboard/Support/StudentSupportTicketDetail")
);
const StudentDiscoverIndex = lazy(() =>
    import("../Pages/Student_Dashboard/Discover/StudentDiscoverIndex")
);
const StudentMyCoursesIndex = lazy(() =>
    import("../Pages/Student_Dashboard/My Courses/StudentMyCoursesIndex")
);

const StudentDashboardIndex = lazy(() =>
    import("../Pages/Student_Dashboard/Dashboard/StudentDashboardIndex")
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
    {
        path: "dashboard",
        element: (
            <Suspense>
                <StudentDashboardIndex />
            </Suspense>
        ),
    },
    {
        path: "courses",
        element: (
            <Suspense>
                <StudentMyCoursesIndex />
            </Suspense>
        ),
    },

    {
        path: "performance",
        element: (
            <Suspense>
                <StudentPerformanceLayout />
            </Suspense>
        ),
    },
    {
        path: "discussion_forums/*",
        children: [
            {
                path: "",
                element: (
                    <Suspense>
                        <StudentDiscussionFormIndex />
                    </Suspense>
                ),
            },
            {
                path: "post/:id",
                element: (
                    <Suspense>
                        <StudentDiscussionForumPost />
                    </Suspense>
                ),
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
