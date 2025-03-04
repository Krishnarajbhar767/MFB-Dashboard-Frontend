// Import necessary libraries and components
import React, { useEffect, useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import Admin_Course_Modules_Preview from "./Course Module/Admin_Course_Modules_Preview";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import ConfirmationModal from "../../../../../Common_Components/modal/ConfirmationModal";
import toast from "react-hot-toast";
import { adminCourseManagementApis } from "../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
import { setIsCoursesModified } from "../../../../../Redux/Slices/All_Courses";
import { useDispatch, useSelector } from "react-redux";
import { customApiErrorHandler } from "../../../../../Utils/Error/cutomApiErrorHandler";

const Admin_Course_Preview = React.memo(function Admin_Course_Preview() {
    const { isLoaded, allCourses } = useSelector((state) => state.allCourses);

    // Dispatch For Dispatch Redux action
    const dispatch = useDispatch();
    // Navigate For Navigate Other Route
    const navigate = useNavigate();
    // Get course data from navigation state

    const [course, setCourse] = useState(useLocation()?.state?.course ?? null); // Value Will Update Dynamically If Course Id Modified

    // Extract course ID from URL parameters (format: "id+other_params")
    const courseId = useParams()?.id?.split("+")?.at(0);

    // Debug log to check course data
    console.log("Printing Course Data From Course Preview --->", course);
    // state For Handler Delete Confirmation modal
    const [confirmationModal, setConfirmationModal] = useState(null);
    // Function For Handle Delete Course
    const deleteCourseHandler = () => {
        setConfirmationModal({
            text1: "Are You Sure ?",
            text2: "This Action Can Delete Your Course Permanently !",
            btn1Handler: async () => {
                const toastId = toast.loading("Deleting...");
                try {
                    const response =
                        await adminCourseManagementApis.deleteCourseById(
                            courseId
                        );
                    if (!response) {
                        toast.error("Something went wrong !");
                    }
                    toast.success("Course deleted successfully.");
                    dispatch(setIsCoursesModified(true));
                    setConfirmationModal(null);
                    navigate("/admin/course_management/my_courses");
                } catch (error) {
                    const err = customApiErrorHandler(
                        error,
                        "Course Preview Delete Button -->"
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
    // use Effect For Update Course If Course Updated if course Updated Then Set New Updated Course data --->
    useEffect(() => {
        // If Course Id Avalable Then Check
        if (courseId) {
            const updatedCourse = allCourses?.filter(
                (course) => course._id === courseId
            );
            setCourse(updatedCourse[0]);
        }
    }, [isLoaded, courseId]);
    return (
        <div>
            {/* Conditional rendering based on course data availability */}
            {course && courseId ? (
                <div className="w-[100%] h-screen flex justify-between mx-auto bg-white rounded-lg border">
                    {/* Left Section - Course Content Preview */}
                    <div className="w-[60%] h-full border-r-2 p-4">
                        {/* Edit/Delete Action Buttons */}
                        <div className="full flex items-center justify-end gap-4">
                            <button
                                type="button"
                                className="py-2.5 px-6 text-sm rounded-lg bg-gray-700 text-gray-100 cursor-pointer font-normal text-center shadow-xs transition-all duration-500 hover:bg-gray-900 flex gap-2 items-center"
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
                                <FiEdit />
                                <span>Edit Basic Details</span>
                            </button>
                            <button
                                type="button"
                                className="py-2.5 px-6 text-sm rounded-lg bg-red-500 text-gray-100 cursor-pointer font-normal text-center shadow-xs transition-all duration-500 hover:bg-red-700 flex gap-2 items-center"
                                onClick={deleteCourseHandler}
                            >
                                <RiDeleteBin6Line />
                                <span>Delete Course</span>
                            </button>
                        </div>

                        {/* Course Title */}
                        <h1 className="text-lg font-medium text-gray-700 my-2 capitalize">
                            {course?.courseTitle}
                        </h1>

                        {/* Course Thumbnail/Video Preview */}
                        <img
                            className="h-60 w-full rounded-lg object-cover"
                            alt="Video Placeholder.."
                            src={course?.coursethumbnailurl}
                        />

                        {/* Instructor Information Section */}
                        <div className="flex gap-4 my-4">
                            <img
                                src="https://www.mediafleetblue.com/images/di.png" // Static instructor image
                                alt="admin_profile_image"
                                className="rounded-full object-cover h-[50px] w-[50px]"
                            />
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">
                                    Admin
                                </h3>
                                <h4 className="text-sm text-gray-700">
                                    Mentor • Teacher At Media FleetBlue
                                </h4>
                            </div>
                        </div>

                        {/* Course Description Section */}
                        <div>
                            <h1 className="text-base font-medium text-gray-800">
                                About This Course
                            </h1>
                            <p className="text-sm font-normal text-gray-700">
                                {course?.courseDescription}
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Course Modules */}
                    <div className="w-[40%] h-full p-4">
                        <div className="w-full mx-auto">
                            <h1 className="text-lg font-medium text-gray-800 my-2">
                                Course Modules
                            </h1>
                            {/* Course Modules Preview Component */}
                            {course?.modules?.length ? (
                                <div className="">
                                    <Admin_Course_Modules_Preview
                                        course={course}
                                    />
                                </div>
                            ) : (
                                <div className="text-base font-medium text-gray-700">
                                    Theres No Modules !!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                // Fallback content when no course data is available
                <div className="text-xl font-medium text-gray-600">
                    No Course Found For Preview...
                </div>
            )}

            {confirmationModal && (
                <ConfirmationModal modalData={confirmationModal} />
            )}
        </div>
    );
});

export default Admin_Course_Preview;
