import React, { useState, useEffect } from "react";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import AdminDashboard from "./Pages/Admin_Dashboard/AdminDashboard_Page";
import AdminLogin from "./Pages/Admin_Dashboard/AdminLogin_SignIn/AdminLogin";
import StudentDashboard from "./Pages/Student_Dashboard/StudentDashboard_Page";
import TeacherDashboard from "./Pages/Teacher_Dashboard/TeacherDashboard_Page";
import { useParentContextValue } from "./Utils/Context/Parent_Context";
import AdminRoutes, { adminRoutesConfig } from "./Routes/AdminRoute";
import StudentRoute, { StudentRoutesConfig } from "./Routes/StudentRoute";
import StudentLogin from "./Pages/Student_Dashboard/Components/StudentLogin";
import TeacherLogin from "./Pages/Teacher_Dashboard/Components/TeacherLogin";
import TeacherRoute, { TeacherRoutesConfig } from "./Routes/TeacherRoute";

function App() {
    const { authCheck, setAuthCheck, isAdmin, setIsAdmin } =
        useParentContextValue();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* Admin All Routes with auth check  */}
                {/* Admin Login */}
                <Route
                    path="/admin"
                    element={
                        !isAdmin ? (
                            <AdminLogin />
                        ) : (
                            // <AdminLogin
                            <Navigate to="/admin" replace />
                        )
                    }
                />

                <Route
                    path="/admin/*"
                    element={
                        isAdmin ? (
                            <AdminRoutes />
                        ) : (
                            <Navigate to="/admin" replace />
                        )
                    }
                >
                    {/* Nested Admin Routes */}
                    {/* Default route: Redirect to dashboard */}
                    <Route
                        index
                        element={<Navigate to="dashboard" replace />}
                    />

                    {/* Dynamically render admin-specific child routes with nested structure */}
                    {adminRoutesConfig.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}
                        >
                            {route.children?.map((childRoute, childIndex) => (
                                <Route
                                    key={childIndex}
                                    path={childRoute.path}
                                    element={childRoute.element}
                                />
                            ))}
                        </Route>
                    ))}
                </Route>

                {/* Student all routes */}

                <Route
                    path="/student"
                    element={
                        !isAdmin ? (
                            <StudentLogin />
                        ) : (
                            // <AdminLogin
                            <Navigate to="/student" replace />
                        )
                    }
                />

                <Route
                    path="/student/*"
                    element={
                        isAdmin ? (
                            <StudentRoute />
                        ) : (
                            <Navigate to="/student" replace />
                        )
                    }
                >
                    {/* Nested Admin Routes */}
                    <Route
                        index
                        element={<Navigate to="dashboard" replace />}
                    />
                    {StudentRoutesConfig.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Route>

                {/* Teacher all routes  */}

                <Route
                    path="/teacher"
                    element={
                        !isAdmin ? (
                            <TeacherLogin />
                        ) : (
                            <Navigate to="teacher" replace />
                        )
                    }
                />

                <Route
                    path="/teacher/*"
                    element={
                        isAdmin ? (
                            <TeacherRoute />
                        ) : (
                            <Navigate to="/teacher" replace />
                        )
                    }
                >
                    <Route
                        index
                        element={<Navigate to="dashboard" replace />}
                    />
                    {TeacherRoutesConfig.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Route>
            </Routes>
        </>
    );
}

export default App;
