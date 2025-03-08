import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaPlus, FaRegEye } from "react-icons/fa";
import { FiEdit, FiClock } from "react-icons/fi";
import { HiOutlineUsers, HiOutlineChartBar } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import ConfirmationModal from "../../../../../../../Common_Components/modal/ConfirmationModal";
import { adminCourseManagementApis } from "../../../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
import { customApiErrorHandler } from "../../../../../../../Utils/Error/cutomApiErrorHandler";
import { useDispatch } from "react-redux";
import { setIsQuizModified } from "../../../../../../../Redux/Slices/quizesSlice";

const Admin_Course_Management_Quize_Card = memo(
    function Admin_Course_Management_Quize_Card({ quize, courseTitle }) {
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const [confirmationModal, setConfirmationModal] = useState(null);

        const deleteQuizeHandler = async (quiz) => {
            const toastId = toast.loading("Deleting Quiz...");
            try {
                // Call Api For Data Delete
                // const reponse = { quizeId: quize._id };
                const response = await adminCourseManagementApis.deleteQuiz(
                    quiz
                );
                if (!response) {
                    return toast.error("Something went wrong.");
                }
                toast.dismiss(toastId);
                setConfirmationModal(null);
                dispatch(setIsQuizModified(true));
                toast.success("Quiz deleted successfully");
            } catch (error) {
                const err = customApiErrorHandler(
                    error,
                    "error while deleting quiz"
                );
                toast.error(err);
            } finally {
                toast.dismiss(toastId);
            }
        };

        return (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden h-full">
                {/* Card Header */}
                <div className="p-5 border-b border-gray-100">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-gray-800 line-clamp-1">
                            {quize?.title}
                        </h3>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full text-nowrap">
                            {quize?.questions?.length || 0} questions
                        </span>
                    </div>
                    {/* 
                    <p className="text-gray-500 text-sm line-clamp-2 h-10">
                        {quize?.summary ||
                            "No description available for this quiz."}
                    </p> */}
                </div>

                {/* Card Stats */}
                <div className="px-5 py-3 bg-gray-50">
                    <div className="grid grid-cols-3 gap-2">
                        <div className="flex flex-col">
                            <div className="flex items-center text-xs text-gray-800 mb-1 font-semibold">
                                <FiClock className="mr-1" size={12} />
                                <span>Created</span>
                            </div>
                            <p className="text-xs font-medium text-gray-700">
                                {new Date(
                                    quize?.createdAt || Date.now()
                                ).toLocaleDateString("en-GB")}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex items-center text-xs text-gray-800 mb-1 font-semibold">
                                <HiOutlineUsers className="mr-1" size={12} />
                                <span>Participants</span>
                            </div>
                            <p className="text-xs font-medium text-gray-700">
                                256
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex items-center text-xs mb-1 text-gray-800 mb-1 font-semibold">
                                <HiOutlineChartBar className="mr-1" size={12} />
                                <span>Avg. Score</span>
                            </div>
                            <p className="text-xs font-medium text-gray-700">
                                75%
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card Actions */}
                <div className="p-4 grid grid-cols-4 gap-2">
                    <button
                        onClick={() =>
                            navigate(
                                `/admin/course_management/quizes/view_quize/${quize._id}`,
                                {
                                    state: {
                                        quizId: quize._id,
                                        quizTitle: quize.quizTitle,
                                        courseId: quize.courseId,
                                        courseTitle,
                                    },
                                }
                            )
                        }
                        className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <FaRegEye className="text-gray-700 mb-1" size={16} />
                        <span className="text-xs text-gray-600">View</span>
                    </button>

                    <button
                        onClick={() => {
                            console.log(quize);
                            navigate(
                                `/admin/course_management/add_new_quize_questions/${quize.title}`,
                                {
                                    state: {
                                        quizId: quize._id,
                                        quizTitle: quize.title,
                                        courseId: quize?.courseId,
                                    },
                                }
                            );
                        }}
                        className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <FaPlus className="text-gray-700 mb-1" size={16} />
                        <span className="text-xs text-gray-600">Add</span>
                    </button>

                    <button
                        onClick={() => {
                            navigate(
                                `/admin/course_management/add_new_quize/${quize._id}`,
                                {
                                    state: {
                                        editingQuiz: quize,
                                        quizId: quize._id,
                                        quizTitle: quize.quizTitle,
                                        courseId: quize.courseId,
                                    },
                                }
                            );
                        }}
                        className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <FiEdit className="text-gray-700 mb-1" size={16} />
                        <span className="text-xs text-gray-600">Edit</span>
                    </button>

                    <button
                        onClick={() =>
                            setConfirmationModal({
                                text1: "Delete Quiz?",
                                text2: "This action cannot be undone.",
                                btn1Text: "Delete",
                                btn2Text: "Cancel",
                                btn1Handler: () => deleteQuizeHandler(quize),
                                btn2Handler: () => setConfirmationModal(null),
                            })
                        }
                        className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <MdDeleteOutline
                            className="text-red-500 mb-1"
                            size={16}
                        />
                        <span className="text-xs text-gray-600">Delete</span>
                    </button>
                </div>

                {confirmationModal && (
                    <ConfirmationModal modalData={confirmationModal} />
                )}
            </div>
        );
    }
);

export default Admin_Course_Management_Quize_Card;
