import React, { useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdAccessTime, MdDeleteForever } from "react-icons/md";
import IconBtn from "../../../../../Common_Components/IconBtn";
import { FiEdit } from "react-icons/fi";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../../../Common_Components/modal/ConfirmationModal";
import Admin_Upload_New_Course from "../Upload_New_Course/Admin_Upload_New_Course";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setisEditingCourse } from "../../../../../Redux/Slices/All_Courses";
function Admin_Course_Management_Course_Card({
    course,
    allCourses,
    setAllCourses,
}) {
    const [confirmationModal, setConfirmationModal] = useState(null);
    const [loading, setLoading] = useState(false);
    const { isEditingCourse } = useSelector((state) => state.allCourses);
    const dispatch = useDispatch();
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
                {course?.courseName?.length > 30
                    ? course?.courseName.slice(0, 30) + "..."
                    : course?.courseName}
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
                        dispatch(setisEditingCourse(true)); //
                        navigate(
                            "/admin/course_management/upload_new_course/:edit",
                            {
                                state: {
                                    course: course,
                                    allCourses: allCourses,
                                    isEditingCourse: isEditingCourse,
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
                        setConfirmationModal({
                            text1: "Are You Sure",
                            text2: "Your Course Will Be Updated",
                            btn1Text: "Delete",
                            btn2Text: "Cancel",
                            btn1Handler: async () => {
                                setLoading(true);
                                const loadingToastId =
                                    toast.loading("Please Wait....");
                                try {
                                    const filtredCourse = allCourses.filter(
                                        (elem, idx) => {
                                            return elem.id !== course.id;
                                        }
                                    );
                                    dispatch(setAllCourses(filtredCourse));
                                    const updatedCourse = true; // get response from API Then UPdated New Data // get Updated Purchase Data
                                    if (updatedCourse) {
                                        // setUpdated user purchase data
                                        toast.success(
                                            "Course Deleted Successfully..."
                                        );
                                        setConfirmationModal(null);
                                    }
                                } catch (error) {
                                    console.log(
                                        "Course Delete API Error....",
                                        error
                                    );
                                } finally {
                                    toast.dismiss(loadingToastId);
                                }
                            },
                            btn2Handler: () => {
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
                <ConfirmationModal modalData={confirmationModal} />
            )}
        </div>
    );
}

export default Admin_Course_Management_Course_Card;
