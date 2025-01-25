import React from "react";
import { Route, Outlet } from "react-router-dom";
import Navbar from "../../DashBoard_Componets/Navbar";
import { RiDashboardHorizontalFill, RiGlobalLine } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { GiDiscussion } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { SiDiscover, SiGoogleclassroom } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoBook } from "react-icons/io5";
import Sidebar from "../../DashBoard_Componets/Sidebar";

function StudentDashboard_Page() {
    const sidebarList = [
        {
            id: 1,
            lable: "Dashboard",
            icon: <RiDashboardHorizontalFill />,
            route: "/student/dashboard",
        },
        {
            id: 3,
            lable: "courses",
            icon: <IoBook />,
            route: "/student/courses",
        },
        {
            id: 2,
            lable: "classroom/module",
            icon: <SiGoogleclassroom />,
            route: "/student/classroom_&_module",
        },
        {
            id: 4,
            lable: "performance",
            icon: <BsGraphUpArrow />,
            route: "/student/performance",
        },
        {
            id: 5,
            lable: "discussion forums",
            icon: <GiDiscussion />,
            route: "/student/discussion_forums",
        },
        {
            id: 6,
            lable: "calender",
            icon: <IoCalendarOutline />,
            route: "/student/calender",
        },
        {
            id: 6,
            lable: "Support",
            icon: <BiSupport />,
            route: "/student/support",
        },

        {
            id: 6,
            lable: "profile settings",
            icon: <IoSettingsOutline />,
            route: "/student/profile_settings",
        },
        {
            id: 7,
            lable: "Discover",
            icon: <RiGlobalLine />,
            route: "/student/discover",
        },
    ];

    return (
        <div className="flex flex-col h-screen ">
            {/* our Navbar  */}
            <Navbar />

            <div className="flex flex-row h-screen ">
                <div className=" h-full lg:w-[250px] text-black px-2 pb-20 pt-4">
                    <div className="w-full px-2 h-full overflow-scroll scroller ">
                        <Sidebar sidebarList={sidebarList} />
                    </div>
                </div>

                <div className="flex flex-col flex-1 h-screen bg-gray-100">
                    <div className="w-full px-10  py-3 h-fit overflow-scroll scroller ">
                        {/* <h1 className="text-1xl font-semibold border-b-2 border-blue-500 mb-5 text-blue-600 cursor-pointer uppercase  ">
                            Welcome to Media Fleetblue Course Platform - Teacher
                        </h1> */}

                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard_Page;
