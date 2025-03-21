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
import { customApiErrorHandler } from "../../Utils/Error/cutomApiErrorHandler";
import toast from "react-hot-toast";
import { setAllQuizzes } from "../../Redux/Slices/quizesSlice";
import {
    LayoutDashboard,
    UserCog,
    BookOpenText,
    FolderCog,
    GalleryHorizontalEnd,
    ImageUp,
    FilePlus,
    FolderPlus,
    GitBranchPlus,
    CircleHelp,
    ChartNoAxesCombined,
    Landmark,
    Headset,
    Settings,
} from "lucide-react";
function AdminDashboard() {
    const sidebarList = useMemo(() => [
        {
            id: 1,
            lable: "Dashboard",
            icon: <LayoutDashboard size={20} />,
            route: "/admin/dashboard",
        },
        {
            id: 3,
            lable: "User Management",
            icon: <UserCog size={20} />,
            route: "/admin/user_management",
        },
        {
            id: 2,
            lable: "Course Management",
            icon: <BookOpenText size={20} />,
            route: "/admin/course_management/",
            children: [
                {
                    path: "/admin/course_management/my_courses",
                    icon: <GalleryHorizontalEnd size={20} />,
                    lable: "My Courses",
                },
                {
                    path: "/admin/course_management/upload_new_course/",
                    lable: "Upload New Course",
                    icon: <ImageUp size={20} />,
                },
                {
                    path: "/admin/course_management/add_new_module/",
                    lable: "Add Module",
                    icon: <FolderPlus size={20} />,
                },
                {
                    path: "/admin/course_management/add_new_lesson/",
                    lable: "Add Lesson",
                    icon: <FilePlus size={20} />,
                },
                {
                    path: "/admin/course_management/add_resource/",
                    lable: "Add Resourse",
                    icon: <GitBranchPlus size={20} />,
                },
                {
                    path: "/admin/course_management/quizes/",
                    lable: "Quizes ",
                    icon: <CircleHelp size={20} />,
                },
            ],
        },
        {
            id: 4,
            lable: "Content Management",
            icon: <FolderCog size={20} />,
            route: "/admin/content_management",
        },
        {
            id: 5,
            lable: "Reports & Analytics",
            icon: <ChartNoAxesCombined size={20} />,
            route: "/admin/repost_&_analytics",
        },
        {
            id: 6,
            lable: "Payment Management",
            icon: <Landmark size={20} />,
            route: "/admin/payment_management",
        },
        {
            id: 6,
            lable: "Support Management",
            icon: <Headset size={20} />,
            route: "/admin/support_management",
        },
        {
            id: 6,
            lable: "Settings",
            icon: <Settings size={20} />,
            route: "/admin/settings",
        },
    ]);

    // Fetch Required Data From Api Call When The Admin Enter Admin Dashboard..
    const dispatch = useDispatch();
    const isCoursesLoaded = useSelector((state) => state.allCourses.isLoaded);
    const isQuizeLoaded = useSelector((state) => state.quize.isLoaded);
    // Fetch courses on first mount
    const fetchCourses = async () => {
        try {
            const all_course_data =
                await adminCourseManagementApis.getAllCourses();
            dispatch(setAllCourses(all_course_data));
        } catch (error) {
            const err = customApiErrorHandler(
                error,
                "Error While Fetching All Courses Api -->"
            );
            toast.error(`Can Not get All Course Data. Becouse ${err}`);
        }
    };
    //Fetch All Quizes From Backend
    const fetchQuizzes = async () => {
        try {
            const all_quizzes_data =
                await adminCourseManagementApis.getAllQuizzes();
            dispatch(setAllQuizzes(all_quizzes_data));
        } catch (error) {
            const err = customApiErrorHandler(
                error,
                "Error While Fetching All Courses Api -->"
            );
            toast.error(`Can Not get All Quizzes Data. Becouse ${err}`);
        }
    };

    // Fetch data once on mount
    useEffect(() => {
        if (!isCoursesLoaded) {
            fetchCourses();
        }
    }, [isCoursesLoaded]);

    useEffect(() => {
        if (!isQuizeLoaded) {
            fetchQuizzes();
        }
    }, [isQuizeLoaded]);

    return (
        <div className="flex flex-col h-screen w-[100vw]">
            {/* our Navbar  */}
            <Navbar />

            <div
                className="flex flex-row h-screen w-full"
                onMouseEnter={(e) => setIsMouseEnter(true)}
                onMouseLeave={(e) => setIsMouseEnter(false)}
            >
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
