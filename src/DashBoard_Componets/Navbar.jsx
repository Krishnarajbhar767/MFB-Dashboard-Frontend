import React, { useState, useMemo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import {
    IoBook,
    IoCalendarOutline,
    IoSearch,
    IoSettingsOutline,
} from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1, RxDashboard } from "react-icons/rx";
import { useSelector } from "react-redux";
import { RiDashboardHorizontalFill, RiGlobalLine } from "react-icons/ri";
import { VscFolderLibrary } from "react-icons/vsc";
import { SiGoogleclassroom } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiDiscussion } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";
import { MdOutlineCloudUpload, MdSupportAgent } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { GrDocumentStore } from "react-icons/gr";
import { PiMoneyLight } from "react-icons/pi";

/**
 * Memoized Navigation List Component
 */
const NavbarList = React.memo(({ list }) => {
    return (
        <div className="space-y-4">
            {list.map((item) => (
                <NavLink
                    key={item.id}
                    to={item.route}
                    className={({ isActive }) =>
                        `flex items-center gap-4 text-2xl font-normal capitalize pl-4 ${
                            isActive ? "text-emerald-600" : "text-gray-700"
                        }`
                    }
                >
                    <span className="text-3xl">{item.icon}</span>
                    <span>{item.lable}</span>
                </NavLink>
            ))}
        </div>
    );
});

function Navbar() {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const isLoggedIn = true; // state for user login

    // Memoized navigation lists to avoid recalculations
    const studentNavList = useMemo(
        () => [
            {
                id: 1,
                lable: "Dashboard",
                icon: <RiDashboardHorizontalFill />,
                route: "/student/dashboard",
            },
            {
                id: 2,
                lable: "My Courses",
                icon: <IoBook />,
                route: "/student/courses",
            },
            {
                id: 3,
                lable: "Classroom/Module",
                icon: <SiGoogleclassroom />,
                route: "/student/classroom_&_module",
            },
            {
                id: 4,
                lable: "Performance",
                icon: <BsGraphUpArrow />,
                route: "/student/performance",
            },
            {
                id: 5,
                lable: "Discussion Forums",
                icon: <GiDiscussion />,
                route: "/student/discussion_forums",
            },
            {
                id: 6,
                lable: "Calendar",
                icon: <IoCalendarOutline />,
                route: "/student/calender",
            },
            {
                id: 7,
                lable: "Support",
                icon: <BiSupport />,
                route: "/student/support",
            },
            {
                id: 8,
                lable: "Profile Settings",
                icon: <IoSettingsOutline />,
                route: "/student/profile_settings",
            },
            {
                id: 9,
                lable: "Discover",
                icon: <RiGlobalLine />,
                route: "/student/discover",
            },
        ],
        []
    );

    const adminNavList = useMemo(
        () => [
            {
                id: 1,
                lable: "Dashboard",
                icon: <RxDashboard />,
                route: "/admin/dashboard",
            },
            {
                id: 2,
                lable: "User Management",
                icon: <FaRegUser />,
                route: "/admin/user_management",
            },
            {
                id: 3,
                lable: "Course Management",
                icon: <FiBookOpen />,
                route: "/admin/course_management/",
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
                route: "/admin/reports_&_analytics",
            },
            {
                id: 6,
                lable: "Payment Management",
                icon: <PiMoneyLight />,
                route: "/admin/payment_management",
            },
            {
                id: 7,
                lable: "Support Management",
                icon: <MdSupportAgent />,
                route: "/admin/support_management",
            },
            {
                id: 8,
                lable: "Settings",
                icon: <IoSettingsOutline />,
                route: "/admin/settings",
            },
        ],
        []
    );

    return (
        <div>
            {/* Mobile Menu */}
            {!isMobileMenuOpen && (
                <div className="h-[80px] w-full bg-[#77B254] flex items-center px-3 justify-between md:hidden">
                    <img
                        src="https://www.mediafleetblue.com/images/logo-v1.png"
                        className="h-full w-full object-cover"
                        alt="Logo"
                    />
                    <div onClick={() => setIsMobileMenuOpen(true)}>
                        <span className="cursor-pointer text-6xl text-gray-800">
                            <CiMenuFries />
                        </span>
                    </div>
                </div>
            )}

            {/* Fullscreen Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="h-[100vh] w-full p-4">
                    <div
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="cursor-pointer text-4xl text-gray-700 flex justify-end"
                    >
                        <span>
                            <RxCross1 />
                        </span>
                    </div>

                    {isLoggedIn && user?.accountType === "Admin" ? (
                        <NavbarList list={adminNavList} />
                    ) : (
                        <NavbarList list={studentNavList} />
                    )}

                    {!isLoggedIn && (
                        <div className="flex flex-col items-center gap-2 text-2xl font-medium capitalize">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/courses">Our Courses</Link>
                        </div>
                    )}
                </div>
            )}

            {/* Desktop Navigation Bar */}
            <div className="w-full px-10 py-2 border-b-2 border-gray-300 hidden md:flex justify-between items-center">
                <div className="flex gap-5 items-center w-[40%]">
                    <img
                        className="h-[50px] w-[140px] bg-blue-800 px-5 py-2 rounded-lg"
                        src="/mfbcourses-white-logo-1536x590.png.webp"
                        alt="Logo"
                    />
                    <div className="ml-10 relative px-5 py-1 flex items-center gap-4 rounded-2xl border bg-[#F5F9FA] text-sm">
                        <button>
                            <IoSearch />
                        </button>
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none"
                        />
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-5 items-center text-[0.9rem]">
                    <button
                        onClick={() => navigate("/")}
                        className="bg-blue-900 text-white px-5 py-2 rounded-lg font-semibold uppercase"
                    >
                        HOME
                    </button>
                    <button className="bg-red-500 text-white flex gap-2 rounded-lg px-5 py-2 font-semibold uppercase">
                        Logout <HiOutlineLogout className="text-[20px]" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
