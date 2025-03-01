import { Route, Outlet } from "react-router-dom";
import React, { useState, useMemo, lazy, Suspense } from "react";
import AdminDashboard from "../Pages/Admin_Dashboard/AdminDashboard_Page";

const Admin_Dashboard = lazy(() =>
    import("../Pages/Admin_Dashboard/Admin_Components/Admin_Dashboard")
);
const Admin_Add_Resource = lazy(() =>
    import(
        "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Upload_New_Course/Add Resource/Admin_Add_Resource"
    )
);
const Admin_User_Managements = lazy(() =>
    import(
        "../Pages/Admin_Dashboard/Admin_Components/Admin_User_Management_Components/Admin_User_Managements"
    )
);
const Admin_Content_Management = lazy(() =>
    import("../Pages/Admin_Dashboard/Admin_Components/Admin_Content_Management")
);
const Admin_Settings = lazy(() =>
    import("../Pages/Admin_Dashboard/Admin_Components/Admin_Settings")
);
const Admin_Report_Analytics = lazy(() =>
    import("../Pages/Admin_Dashboard/Admin_Components/Admin_Report_Analytics")
);
const Admin_Payment_Management = lazy(() =>
    import("../Pages/Admin_Dashboard/Admin_Components/Admin_Payment_Management")
);
const Admin_Support = lazy(() =>
    import("../Pages/Admin_Dashboard/Admin_Components/Admin_Support")
);
const Admin_Add_New_Lesson = lazy(() =>
    import(
        "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Upload_New_Course/Add_New Lesson/Admin_Add_New_Lesson"
    )
);
const Admin_Upload_New_Course = lazy(() =>
    import(
        "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Upload_New_Course/Admin_Upload_New_Course"
    )
);
const Admin_My_Courses = lazy(() =>
    import(
        "../Pages/Admin_Dashboard/Admin_Components/Course_Management/My Courses/Admin_My_Courses"
    )
);
const Admin_Course_Management_Index = lazy(() =>
    import(
        "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Admin_Course_Management_Index/Admin_Course_Management_Index"
    )
);
const Admin_Course_Managemnet_Add_Quize = lazy(() =>
    import(
        "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Admin_Course_Management_Quize/Add_Quize/Admin_Course_Managemnet_Add_Quize"
    )
);
const Admin_Course_Management_Quize_Dashboard = lazy(() =>
    import(
        "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Admin_Course_Management_Quize/Quize Dashboard/Admin_Course_Management_Quize_Dashboard"
    )
);
const Admin_Add_Question_To_Quize = lazy(() =>
    import(
        "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Admin_Course_Management_Quize/Add Question/Admin_Add_Question_To_Quize"
    )
);
const Admin_View_Quize = lazy(() =>
    import(
        "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Admin_Course_Management_Quize/View Quize/Admin_View_Quize"
    )
);
const Admin_Add_Module = lazy(() =>
    import(
        "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Upload_New_Course/Add_Module/Admin_Add_Module"
    )
);
const Admin_Course_Preview = lazy(() =>
    import(
        "../Pages/Admin_Dashboard/Admin_Components/Course_Management/Admin_Course_Preview/Admin_Course_Preview"
    )
);

const AdminRoutes = () => {
    return (
        <div className="w-full overflow-hidden">
            <Suspense
                fallback={
                    <div className="flex w-full h-full items-center justify-center">
                        <span className="loader text-xl"></span>
                    </div>
                }
            >
                <AdminDashboard />
            </Suspense>
        </div>
    );
};

// Helper component for Suspense fallback
const LazyElement = ({ children }) => (
    <Suspense
        fallback={
            <div className="w-full h-full flex items-center justify-center text-center p-4">
                <span className="loader"></span>
            </div>
        }
    >
        {children}
    </Suspense>
);

export const adminRoutesConfig = [
    {
        path: "dashboard",
        element: (
            <LazyElement>
                <Admin_Dashboard />
            </LazyElement>
        ),
    },
    {
        path: "user_management",
        element: (
            <LazyElement>
                <Admin_User_Managements />
            </LazyElement>
        ),
    },
    {
        path: "course_management/*",
        children: [
            {
                path: "",
                element: (
                    <LazyElement>
                        <Admin_Course_Management_Index />
                    </LazyElement>
                ),
            },
            {
                path: "my_courses/course_preview/:id",
                element: (
                    <LazyElement>
                        <Admin_Course_Preview />
                    </LazyElement>
                ),
            },
            {
                path: "my_courses/",
                element: (
                    <LazyElement>
                        <Admin_My_Courses />
                    </LazyElement>
                ),
            },
            {
                path: "upload_new_course/:edit?",
                element: (
                    <LazyElement>
                        <Admin_Upload_New_Course />
                    </LazyElement>
                ),
            },
            {
                path: "add_new_module/:edit?",
                element: (
                    <LazyElement>
                        <Admin_Add_Module />
                    </LazyElement>
                ),
            },
            {
                path: "add_new_lesson/:edit?",
                element: (
                    <LazyElement>
                        <Admin_Add_New_Lesson />
                    </LazyElement>
                ),
            },
            {
                path: "add_resource/:edit?",
                element: (
                    <LazyElement>
                        <Admin_Add_Resource />
                    </LazyElement>
                ),
            },
            {
                path: "quizes",
                element: (
                    <LazyElement>
                        <Admin_Course_Management_Quize_Dashboard />
                    </LazyElement>
                ),
            },
            {
                path: "add_new_quize/:quizeId?",
                element: (
                    <LazyElement>
                        <Admin_Course_Managemnet_Add_Quize />
                    </LazyElement>
                ),
            },
            {
                path: "add_new_quize_questions/:quizeId?",
                element: (
                    <LazyElement>
                        <Admin_Add_Question_To_Quize />
                    </LazyElement>
                ),
            },
            {
                path: "quizes/view_quize/:quizeId",
                element: (
                    <LazyElement>
                        <Admin_View_Quize />
                    </LazyElement>
                ),
            },
        ],
    },
    {
        path: "content_management",
        element: (
            <LazyElement>
                <Admin_Content_Management />
            </LazyElement>
        ),
    },
    {
        path: "repost_&_analytics",
        element: (
            <LazyElement>
                <Admin_Report_Analytics />
            </LazyElement>
        ),
    },
    {
        path: "payment_management",
        element: (
            <LazyElement>
                <Admin_Payment_Management />
            </LazyElement>
        ),
    },
    {
        path: "support_management",
        element: (
            <LazyElement>
                <Admin_Support />
            </LazyElement>
        ),
    },
    {
        path: "settings",
        element: (
            <LazyElement>
                <Admin_Settings />
            </LazyElement>
        ),
    },
];

export default AdminRoutes;
