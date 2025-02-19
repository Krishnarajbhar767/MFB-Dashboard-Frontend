import React, { useState } from "react";
// Importing React and useState for component state management
import { FaPeopleGroup } from "react-icons/fa6";
// Icon for representing group of students
import { MdAccessTime, MdDeleteForever } from "react-icons/md";
// Icons for time and delete actions
import IconBtn from "../../../../../Common_Components/IconBtn";
// Custom button component for consistent styling
import { FiEdit } from "react-icons/fi";
// Edit icon for edit functionality
import toast from "react-hot-toast";
// Library for displaying notifications
import ConfirmationModal from "../../../../../Common_Components/modal/ConfirmationModal";
// Modal component for confirmations like delete
import Admin_Upload_New_Course from "../Upload_New_Course/Admin_Upload_New_Course";
// Component for uploading or editing a course
import { useNavigate } from "react-router-dom";
// Hook for navigation within the app
import { useDispatch, useSelector } from "react-redux";
// Redux hooks for state management
import {
    setIsCoursesModified,
    setisEditingCourse,
} from "../../../../../Redux/Slices/All_Courses";
// Action creators for updating course-related states
import { adminCourseManagementApis } from "../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
// API calls specific to course management
import { customApiErrorHandler } from "../../../../../Utils/Error/cutomApiErrorHandler";
// Custom error handler for API errors

function Admin_Course_Management_Course_Card({ course }) {
    // State for confirmation modal
    const [confirmationModal, setConfirmationModal] = useState(null);
    // State for loading indicator
    const [loading, setLoading] = useState(false);
    // Selector to check if a course is being edited
    const { isEditingCourse } = useSelector((state) => state.allCourses);
    // Dispatch function for Redux actions
    const dispatch = useDispatch();
    // Navigation function
    const navigate = useNavigate();

    return (
        <div
            className="
        relative
        w-[32%]  h-fit p-3 rounded-md shadow-sm admin_my_course_card text-gray-800"
        >
            {/* Image Container */}
            <div className="h-[150px] w-full bg-blue-400 rounded-lg">
                <img
                    src={course?.thumbnail}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            {/* Card Title */}
            <h1 className="my-2 text-base tracking-wide font-medium text-gray-800 capitalize">
                {course?.courseTitle?.length > 30
                    ? course?.courseTitle.slice(0, 30) + "..."
                    : course?.courseTitle}
            </h1>
            {/* Publish Date And Active Student DIv */}
            <div className="flex text-xs font-medium items-center gap-6 lowercase">
                {/* Card Time Container */}
                <div className=" flex gap-1 items-center">
                    <span>
                        <MdAccessTime />
                    </span>
                    <span>12 Weeks</span>
                </div>
                {/* Card Active Student Container */}
                <div className="flex items-center gap-1">
                    <span>
                        <FaPeopleGroup />
                    </span>
                    <span>16 Students</span>
                </div>
            </div>
            {/* Edit And Delete Button */}
            <div className="flex gap-2 mt-2 justify-end">
                <span
                    onClick={() => {
                        // Set editing flag in Redux
                        dispatch(setisEditingCourse(true));
                        // Navigate to edit route with course data
                        navigate(
                            "/admin/course_management/upload_new_course/:edit",
                            {
                                state: {
                                    course: course,
                                },
                            }
                        );
                    }}
                >
                    <IconBtn color={"#000f"}>
                        <FiEdit /> Edit
                    </IconBtn>
                </span>
                <span
                    onClick={(e) => {
                        // Setup confirmation modal for delete action
                        setConfirmationModal({
                            text1: "Are You Sure",
                            text2: "Your Course Will Be Updated",
                            btn1Text: "Delete",
                            btn2Text: "Cancel",
                            btn1Handler: async () => {
                                // Start loading state
                                setLoading(true);
                                // Display loading toast
                                const loadingToastId =
                                    toast.loading("Please Wait....");
                                console.log(
                                    "Deleting Course Data ---->",
                                    course
                                );
                                try {
                                    // API call to delete course

                                    const deletedCourse =
                                        await adminCourseManagementApis.deleteCourseById(
                                            course._id
                                        );

                                    if (!deletedCourse) {
                                        toast.error("Something went wrong.");
                                        return;
                                    }
                                    // Update courses modified state in Redux
                                    dispatch(setIsCoursesModified(true));
                                    // Close modal
                                    setConfirmationModal(null);
                                    // Show success message
                                    toast.success(
                                        "Course deleted successfully."
                                    );
                                } catch (error) {
                                    // Handle and display error
                                    const err = customApiErrorHandler(
                                        error,
                                        "My Course Single Card Delete "
                                    );
                                    toast.error(err);
                                } finally {
                                    // Dismiss loading toast
                                    toast.dismiss(loadingToastId);
                                }
                            },
                            btn2Handler: () => {
                                // Cancel action, close modal
                                setConfirmationModal(null);
                            },
                        });
                    }}
                >
                    <IconBtn color={"#000f"}>
                        <MdDeleteForever /> Delete
                    </IconBtn>
                </span>
            </div>
            {confirmationModal && (
                // Render confirmation modal if it's set
                <ConfirmationModal modalData={confirmationModal} />
            )}
        </div>
    );
}

export default Admin_Course_Management_Course_Card;
