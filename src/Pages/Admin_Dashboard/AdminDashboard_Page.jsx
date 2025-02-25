import React, { useEffect, useMemo } from "react";
import { Route, Outlet } from "react-router-dom";
import Navbar from "../../DashBoard_Componets/Navbar";
import { IoBook } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { GiDiscussion, GiNotebook } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegUser, FaUserGraduate } from "react-icons/fa";
import { GrDocumentStore } from "react-icons/gr";
import {
    MdOutlineCloudUpload,
    MdPayments,
    MdPlayLesson,
    MdSupportAgent,
} from "react-icons/md";
import Sidebar from "../../DashBoard_Componets/Sidebar";
import Admin_Upload_New_Course from "./Admin_Components/Course_Management/Upload_New_Course/Admin_Upload_New_Course";
import Admin_Add_New_Lesson from "./Admin_Components/Course_Management/Upload_New_Course/Add_New Lesson/Admin_Add_New_Lesson";
import { RxDashboard } from "react-icons/rx";
import { FiBookOpen } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { PiMoneyLight } from "react-icons/pi";
import { GoQuestion } from "react-icons/go";
import { FaBookMedical } from "react-icons/fa6";
import { adminCourseManagementApis } from "../../services/apis/Admin/Course Management/adminCourseManagementApis";
import { useDispatch, useSelector } from "react-redux";
import { setAllCourses } from "../../Redux/Slices/All_Courses";

function AdminDashboard() {
    const sidebarList = useMemo(() => [
        {
            id: 1,
            lable: "Dashboard",
            icon: <RxDashboard />,
            route: "/admin/dashboard",
        },
        {
            id: 3,
            lable: "User Management",
            icon: <FaRegUser />,
            route: "/admin/user_management",
        },
        {
            id: 2,
            lable: "Course Management",
            icon: <FiBookOpen />,
            route: "/admin/course_management/",
            children: [
                {
                    path: "/admin/course_management/my_courses",
                    icon: <VscFolderLibrary />,
                    lable: "My Courses",
                },
                {
                    path: "/admin/course_management/upload_new_course/",
                    lable: "Upload New Course",
                    icon: <MdOutlineCloudUpload />,
                },
                {
                    path: "/admin/course_management/add_new_module/",
                    lable: "Add Module",
                    icon: <FaBookMedical />,
                },
                {
                    path: "/admin/course_management/add_new_lesson/",
                    lable: "Add Lesson",
                    icon: <MdPlayLesson />,
                },
                {
                    path: "/admin/course_management/add_resource/",
                    lable: "Add Resourse",
                    icon: <GiNotebook />,
                },
                {
                    path: "/admin/course_management/quizes/",
                    lable: "Quizes ",
                    icon: <GoQuestion />,
                },
            ],
        },
        {
            id: 4,
            lable: "Content Management",
            icon: <GrDocumentStore />,
            route: "/admin/content_management",
        },
        {
            id: 5,
            lable: "Reports & Analytics",
            icon: <BsGraphUpArrow />,
            route: "/admin/repost_&_analytics",
        },
        {
            id: 6,
            lable: "Payment Management",
            icon: <PiMoneyLight />,
            route: "/admin/payment_management",
        },
        {
            id: 6,
            lable: "Support Management",
            icon: <MdSupportAgent />,
            route: "/admin/support_management",
        },
        {
            id: 6,
            lable: "Settings",
            icon: <IoSettingsOutline />,
            route: "/admin/settings",
        },
    ]);

    // Fetch Required Data From Api Call When The Admin Enter Admin Dashboard..
    const dispatch = useDispatch();
    const isCoursesLoaded = useSelector((state) => state.allCourses.isLoaded);
    console.log("Printing Store --->", isCoursesLoaded);
    // Fetch courses on first mount
    const fetchCourses = async () => {
        const all_course_data = await adminCourseManagementApis.getAllCourses();

        dispatch(setAllCourses(all_course_data));
    };

    // // Fetch modules on first mount
    // const fetchModules = async () => {
    //     const response = await fetch("/api/modules");
    //     const data = await response.json();
    //     dispatch(setModules(data));
    // };

    // Fetch data once on mount
    useEffect(() => {
        if (!isCoursesLoaded) {
            fetchCourses();
            console.log(
                "First Render Of Amin Dashboard And Fetch All Course Api Called ---->"
            );
        }
        // if (!isModulesLoaded) {
        //     fetchModules();
        //     console.log(
        //         "First Render Of Amin Dashboard And Fetch All Module Api Called ---->"
        //     );
        // }
    }, [isCoursesLoaded]); // Runs only once

    return (
        <div className="flex flex-col h-screen w-[100vw]">
            {/* our Navbar  */}
            <Navbar />

            <div className="flex flex-row h-screen w-full">
                <div className=" h-full lg:w-[250px]  text-black  pb-20 w-[20%] py-3">
                    {/* <h1 className="font-semibold cursor-pointer px-4 py-2 text-center uppercase bg-gray-200 text-sm text-gray-800 ">
                        Welcome to Media Fleetblue Course Platform
                    </h1> */}

                    <div className=" h-full overflow-scroll scroller px-4">
                        <Sidebar sidebarList={sidebarList} />
                    </div>
                </div>

                <div className="flex flex-col flex-1 h-screen bg-[#F5F9FA] w-[80%]">
                    <div className="w-full px-5 pt-2 h-[88vh] overflow-scroll scroller flex flex-col gap-3 ">
                        {/* <h1
              className="text-1xl font-semibold border-b-2 border-blue-500 mb-5 text-blue-600 cursor-pointer uppercase  "
            >
              Welcome to Media Fleetblue Course Platform - Teacher
            </h1> */}

                        <Outlet />

                        {/* <footer className="w-full bg-gray-800 text-white text-center py-1 px-10  rounded-lg ">
              Footer - Media Fleetblue 
            </footer> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
