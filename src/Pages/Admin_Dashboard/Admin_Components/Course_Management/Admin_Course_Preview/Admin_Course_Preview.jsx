import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { BsBook, BsClock, BsPerson } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import Admin_Course_Modules_Preview from "./Course Module/Admin_Course_Modules_Preview";
import ConfirmationModal from "../../../../../Common_Components/modal/ConfirmationModal";
import { adminCourseManagementApis } from "../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
import { setIsCoursesModified } from "../../../../../Redux/Slices/All_Courses";
import { customApiErrorHandler } from "../../../../../Utils/Error/cutomApiErrorHandler";

/**
 * Admin Course Preview Component
 *
 * A modern, clean interface for previewing course details and managing modules/lessons.
 * This component serves as the main dashboard for a specific course.
 *
 * Features:
 * - Course information display (title, description, thumbnail)
 * - Instructor details
 * - Module and lesson management
 * - Edit and delete functionality
 */
const Admin_Course_Preview = React.memo(function Admin_Course_Preview() {
    // Redux state access for course data
    const { isLoaded, allCourses } = useSelector((state) => state.allCourses);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Initialize course state from navigation or set to null
    const [course, setCourse] = useState(useLocation()?.state?.course ?? null);

    // Extract course ID from URL parameters
    const courseId = useParams()?.id?.split("+")?.at(0);

    // State for confirmation modal
    const [confirmationModal, setConfirmationModal] = useState(null);

    /**
     * Handles the course deletion process
     * - Shows confirmation modal
     * - Calls API to delete course
     * - Handles success/error states
     * - Navigates back to courses list on success
     */
    const deleteCourseHandler = () => {
        setConfirmationModal({
            text1: "Delete Course",
            text2: "This action cannot be undone. All modules and lessons will be permanently deleted.",
            btn1Handler: async () => {
                const toastId = toast.loading("Deleting course...");
                try {
                    const response =
                        await adminCourseManagementApis.deleteCourseById(
                            courseId
                        );
                    if (!response) {
                        toast.error("Failed to delete course");
                        return;
                    }
                    toast.success("Course successfully deleted");
                    dispatch(setIsCoursesModified(true));
                    setConfirmationModal(null);
                    navigate("/admin/course_management/my_courses");
                } catch (error) {
                    const err = customApiErrorHandler(
                        error,
                        "Course deletion error"
                    );
                    toast.error(err);
                } finally {
                    toast.dismiss(toastId);
                }
            },
            btn1Text: "Delete",
            btn2Handler: () => setConfirmationModal(null),
            btn2Text: "Cancel",
        });
    };

    // Update course data when course ID changes or courses are reloaded
    useEffect(() => {
        if (courseId && allCourses?.length) {
            const updatedCourse = allCourses.find(
                (course) => course._id === courseId
            );
            if (updatedCourse) {
                setCourse(updatedCourse);
            }
        }
    }, [courseId, allCourses]);

    // Display message if no course is found
    if (!course || !courseId) {
        return (
            <div className="flex items-center justify-center h-screen bg-white">
                <div className="text-center p-8 rounded-xl bg-gray-50">
                    <p className="text-xl text-gray-600">No Course Found</p>
                    <p className="text-sm text-gray-500 mt-2">
                        The requested course could not be located
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white  p-6 rounded-lg border shadow-sm">
            {/* Course header section */}
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 ">
                    {/* Course title and action buttons */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold text-gray-800 capitalize mb-4 md:mb-0">
                            {course?.courseTitle}
                        </h1>

                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                className="px-5 py-2.5 rounded-full bg-blue-50 text-blue-600 font-medium text-sm hover:bg-blue-100 transition-colors flex items-center gap-2"
                                onClick={() =>
                                    navigate(
                                        "/admin/course_management/upload_new_course/edit",
                                        {
                                            state: {
                                                isEditingCourse: true,
                                                currentlyEditingCourse: course,
                                            },
                                        }
                                    )
                                }
                            >
                                <FiEdit size={16} />
                                <span className="text-nowrap">Edit Course</span>
                            </button>
                            <button
                                type="button"
                                className="w-fit px-5 py-2.5 rounded-full bg-red-50 text-red-600 font-medium text-sm hover:bg-red-100 transition-colors flex items-center gap-2 "
                                onClick={deleteCourseHandler}
                            >
                                <RiDeleteBin6Line size={16} />
                                <span className="text-nowrap">
                                    Delete Course
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main content area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  bg-white">
                    {/* Left column: Course details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Course thumbnail */}
                        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                            <img
                                className="w-full h-80 object-cover"
                                alt="Course Thumbnail"
                                src={
                                    course?.coursethumbnailurl ||
                                    "/placeholder.svg"
                                }
                            />
                        </div>

                        {/* Course metadata */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
                                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                                    <BsBook size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Modules
                                    </p>
                                    <p className="text-lg font-semibold text-gray-800">
                                        {course?.modules?.length || 0}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
                                <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                                    <BsClock size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Duration
                                    </p>
                                    <p className="text-lg font-semibold text-gray-800">
                                        {course?.duration || "Not specified"}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
                                <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                                    <BsPerson size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Instructor
                                    </p>
                                    <p className="text-lg font-semibold text-gray-800">
                                        Admin
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Course description */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                About This Course
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {course?.courseDescription}
                            </p>
                        </div>

                        {/* Instructor information */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Instructor
                            </h2>
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://www.mediafleetblue.com/images/di.png"
                                    alt="Instructor"
                                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Admin
                                    </h3>
                                    <p className="text-gray-600">
                                        Mentor • Teacher At Media FleetBlue
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column: Course modules */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-6">
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
                                    <span>Course Content</span>
                                    <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                                        {course?.modules?.length || 0} module
                                        {course?.modules?.length !== 1
                                            ? "s"
                                            : ""}
                                    </span>
                                </h2>

                                {/* Modules list */}
                                {course?.modules?.length > 0 ? (
                                    <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                                        <Admin_Course_Modules_Preview
                                            course={course}
                                        />
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <p className="text-gray-500">
                                            No modules available
                                        </p>
                                        <p className="text-sm text-gray-400 mt-1">
                                            Add modules to build your course
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirmation modal */}
            {confirmationModal && (
                <ConfirmationModal modalData={confirmationModal} />
            )}
        </div>
    );
});

export default Admin_Course_Preview;
