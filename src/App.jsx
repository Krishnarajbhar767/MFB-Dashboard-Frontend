import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    useNavigate,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
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
import { useSelector } from "react-redux";
import AboutUsPage from "./Pages/About Us/AboutUsPage";

import HomePageNavbar from "./Home_PageComponents/HomePageNavbar";
import GlobalFooter from "./Common_Components/GlobalFooter";
import LoginForm from "./Pages/Login/LoginForm";
import SignUpForm from "./Pages/SignUp/SIgnUpForm";
import ContactUsPage from "./Pages/Contact Us/ContactUsPage";

import UseAnimations from "react-useanimations";
import CustomCursor from "./Common_Components/CustomCursor";
import LocomotiveScrollProvider from "./Common_Components/LocomotiveScrollProvider";

function App() {
    const location = useLocation();

    const { authCheck, setAuthCheck, isAdmin, setIsAdmin } =
        useParentContextValue();
    const { user } = useSelector((state) => state.auth);
    // Memoizing Routes Configs
    const memoizedAdminRoutesConfig = useMemo(() => adminRoutesConfig, []);
    const memoizedStudentRoutesConfig = useMemo(() => StudentRoutesConfig, []);
    const memoizedTeacherRoutesConfig = useMemo(() => TeacherRoutesConfig, []);
    return (
        <>
            <div className="hidden md:hidden  lg:block">
                <CustomCursor
                    targets={[
                        "button",
                        "span",
                        "li",
                        ".hoverTarget",
                        "input",

                        "option",
                        "select",
                    ]}
                    customClass="custom-cursor"
                    dimensions={30}
                    opacity={0.5}
                    strokeColor="#8ED1FC"
                    fill="#0076CE"
                    hoverScale={1.4}
                    smoothness={{ movement: 1 }}
                    targetOpacity={0.2}
                />
            </div>
            {/* Make All ROutes SMooth */}
            {/* <LocomotiveScrollProvider> */}
            <div className="w-full min-h-screen flex flex-col  justify-between cursor-none">
                {!location.pathname?.split("/").includes("admin") &&
                    !location.pathname?.split("/").includes("student") && (
                        <div className="">
                            <HomePageNavbar />
                        </div>
                    )}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="aboutus" element={<AboutUsPage />} />
                    <Route path="/user/login" element={<LoginForm />} />
                    <Route path="/user/signup" element={<SignUpForm />} />
                    <Route path="/contactus" element={<ContactUsPage />} />
                    <Route
                        path="/forgot-password"
                        element={"Hiii This Is FOrgot Page"}
                    />
                    {/* Admin All Routes with auth check  */}
                    {/* Admin Login */}
                    <Route
                        path="/admin"
                        element={
                            user?.accoutType === "Admin" ? (
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
                            user?.accoutType === "Admin" ? (
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
                        {memoizedAdminRoutesConfig.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.element}
                            >
                                {route.children?.map(
                                    (childRoute, childIndex) => (
                                        <Route
                                            key={childIndex}
                                            path={childRoute.path}
                                            element={childRoute.element}
                                        />
                                    )
                                )}
                            </Route>
                        ))}
                    </Route>

                    {/* Student all routes */}

                    <Route
                        path="/student"
                        element={
                            user?.accoutType !== "Admin" ? (
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
                            user?.accoutType === "Admin" ? (
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
                        {memoizedStudentRoutesConfig.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.element}
                            >
                                {route.children?.map(
                                    (childRoute, childIndex) => (
                                        <Route
                                            key={childIndex}
                                            path={childRoute.path}
                                            element={childRoute.element}
                                        />
                                    )
                                )}
                            </Route>
                        ))}
                    </Route>

                    {/* Teacher all routes  */}

                    <Route
                        path="/teacher"
                        element={
                            user?.accoutType !== "Admin" ? (
                                <TeacherLogin />
                            ) : (
                                <Navigate to="teacher" replace />
                            )
                        }
                    />

                    <Route
                        path="/teacher/*"
                        element={
                            user?.accoutType === "Admin" ? (
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
                        {memoizedTeacherRoutesConfig.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.element}
                            />
                        ))}
                    </Route>
                </Routes>
                <Routes>
                    <Route path="/admin/login" element={<LoginForm />} />
                    <Route path="/admin/signup" element={<SignUpForm />} />
                </Routes>
                {!location.pathname?.split("/").includes("admin") &&
                    !location.pathname?.split("/").includes("student") && (
                        <div>
                            <GlobalFooter />
                        </div>
                    )}
            </div>
            {/* </LocomotiveScrollProvider> */}
        </>
    );
}

export default App;
