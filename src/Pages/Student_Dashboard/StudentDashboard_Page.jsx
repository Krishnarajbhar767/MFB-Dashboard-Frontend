import React, { useMemo } from "react";
import { Route, Outlet, useLocation } from "react-router-dom";
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
import { VscFolderLibrary } from "react-icons/vsc";
import { MdOutlineCloudUpload } from "react-icons/md";
import {
    BookOpenText,
    Telescope,
    Settings,
    Headset,
    ChartNoAxesCombined,
    LayoutDashboard,
    MessagesSquare,
    GalleryHorizontalEnd,
    Network,
    CircleDollarSign,
    Workflow,
    Wallet,
    SlidersHorizontal,
} from "lucide-react";
function StudentDashboard_Page() {
    const location = useLocation();
    const sidebarList = useMemo(() => [
        {
            id: 1,
            lable: "Dashboard",
            icon: <LayoutDashboard size={20} />,
            route: "/student/dashboard",
        },
        {
            id: 3,
            lable: "My Courses",
            icon: <BookOpenText size={20} />,
            route: "/student/my_courses",
        },

        {
            id: 4,
            lable: "performance",
            icon: <ChartNoAxesCombined size={20} />,
            route: "/student/performance",
        },
        {
            id: 5,
            lable: "discussion forums",
            icon: <MessagesSquare size={20} />,
            route: "/student/discussion_forums",
        },

        {
            id: 6,
            lable: "Support",
            icon: <Headset size={20} />,
            route: "/student/support",
        },

        {
            id: 6,
            lable: "profile settings",
            icon: <Settings size={20} />,
            route: "/student/profile_settings",
        },
        {
            id: 7,
            lable: "Discover",
            icon: <Telescope size={20} />,
            route: "/student/discover",
        },
        {
            id: 7,
            lable: "affiliate",
            icon: <Network size={20} />,
            route: "/student/affiliate",
            children: [
                {
                    path: "/student/affiliate/earning",
                    icon: <CircleDollarSign size={20} />,
                    lable: "earning",
                },
                {
                    path: "/student/affiliate/referral",
                    icon: <Workflow size={20} />,
                    lable: "referral",
                },
                {
                    path: "/student/affiliate/payout",
                    icon: <Wallet size={20} />,
                    lable: "payout",
                },
                {
                    path: "/student/affiliate/setting",
                    icon: <SlidersHorizontal size={20} />,
                    lable: "setting",
                },
            ],
        },
    ]);

    return (
        <div className="w-[100vw] flex flex-col h-full ">
            {/* our Navbar  */}
            <Navbar />

            <div className="w-full flex flex-row h-screen bg-green-400 ">
                {/* Sidebar */}
                <div className="lg:w-[250px] h-full  text-black px-2 pb-20 pt-4 hidden md:block bg-[#F8F8F8] border-2 shadow-md">
                    <div className="w-full px-2 h-full overflow-scroll scroller ">
                        {/* Side Bar For Laptop And Tablet */}
                        <Sidebar sidebarList={sidebarList} />
                    </div>
                </div>

                {/* main section where all outlet will be render  */}
                <div className="w-full flex flex-col  h-full bg-white  flex-shrink">
                    <div className="w-full  px-4  py-3 lg:py-3 h-auto overflow-y-scroll scroller overflow-x-hidden mx-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard_Page;
