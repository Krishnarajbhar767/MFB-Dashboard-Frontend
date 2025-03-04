import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

import ConfirmationModal from "../../../../../Common_Components/modal/ConfirmationModal";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { customApiErrorHandler } from "../../../../../Utils/Error/cutomApiErrorHandler";
import { adminCourseManagementApis } from "../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
import { setIsCoursesModified } from "../../../../../Redux/Slices/All_Courses";

function Admin_My_Course_Course_Card({ course }) {
    // Common Hook Import
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Functions
    // View Course Handler For Preview Course
    const viewCourseHandler = () => {
        navigate(
            `/admin/course_management/my_courses/course_preview/${course._id}+${course.courseTitle}`,
            { state: { course } }
        );
    };
    // Delete Course Handler For Delete Course
    const deleteCourseHandler = () => {
        setConfirmationModal({
            text1: "Are You Sure ?",
            text2: "This Action Can Delete Your Course Permanently.",
            btn1Text: "Delete",
            btn2Text: "Cancel",
            btn1Handler: async () => {
                // Start loading state

                // Display loading toast
                const loadingToastId = toast.loading("Deleting..");

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
                    toast.success("Course deleted successfully.");
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
    };
    // Edit Course Handler For Edit Course
    const editCourseHandler = () => {};

    // State
    // State For controll COnfirmationModal
    const [confirmationModal, setConfirmationModal] = useState(null);
    return (
        <>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 h-[400px]">
                <div className="relative">
                    <img
                        src={course?.coursethumbnailurl || "/placeholder.svg"}
                        alt={course?.courseTitle}
                        className="w-full h-48 object-cover object-center"
                    />
                    <div className="absolute top-0 left-0 m-4 bg-black bg-opacity-75 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {/* {course?.level}  */}
                        Medium
                    </div>
                    <div className="absolute bottom-0 right-0 m-4 bg-white bg-opacity-75 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {/* {course?.duration} */}
                        3:hours
                    </div>
                </div>
                <div className="  px-4 py-2  h-[200px] flex flex-col justify-between">
                    <h3 className="text-lg font-medium text-gray-800  ">
                        {course?.courseTitle}
                    </h3>
                    <p className="text-gray-600 text-sm ">
                        {course?.courseDescription.length > 80
                            ? course?.courseDescription.slice(0, 80)
                            : course?.courseDescription}
                        ...
                    </p>
                    <div className=" flex justify-between items-center">
                        <button
                            onClick={viewCourseHandler}
                            className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            <FiEye className="mr-2" />
                            View
                        </button>
                        <div className="flex space-x-2">
                            <button
                                onClick={editCourseHandler}
                                className="flex items-center justify-center bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors duration-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                            >
                                <FiEdit2 className="w-5 h-5" />
                            </button>
                            <button
                                onClick={deleteCourseHandler}
                                className="flex items-center justify-center bg-red-100 text-red-600 p-2 rounded-lg transition-colors duration-300 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                            >
                                <FiTrash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {confirmationModal && (
                <ConfirmationModal modalData={confirmationModal} />
            )}
        </>
    );
}

export default Admin_My_Course_Course_Card;
