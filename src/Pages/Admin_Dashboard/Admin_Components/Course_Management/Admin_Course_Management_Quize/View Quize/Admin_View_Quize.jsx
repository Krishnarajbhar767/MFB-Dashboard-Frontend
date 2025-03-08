import { useLocation, useNavigate } from "react-router-dom";
import {
    FiClock,
    FiCalendar,
    FiUser,
    FiBook,
    FiEdit,
    FiTrash2,
    FiPlus,
    FiCheck,
    FiInfo,
} from "react-icons/fi";
import "../View Quize/quize_style.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { adminCourseManagementApis } from "../../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
import { setIsQuizModified } from "../../../../../../Redux/Slices/quizesSlice";
import { useDispatch, useSelector } from "react-redux";
import { customApiErrorHandler } from "../../../../../../Utils/Error/cutomApiErrorHandler";
import ConfirmationModal from "../../../../../../Common_Components/modal/ConfirmationModal";

function Admin_View_Quize() {
    const location = useLocation();
    const quizId = location?.state?.quizId;
    const quizTitle = location?.state?.quizTitle;
    const courseId = location?.state?.courseId;
    const courseTitle = location?.state?.courseTitle;
    const [quiz, setQuiz] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [confirmationModal, setConfirmationModal] = useState(null);
    if (!quiz) {
        return (
            <div className="empty-state">
                <p>No quiz available to display.</p>
            </div>
        );
    }

    // Handler for deleting the entire quiz
    const deleteQuizeHandler = async (quiz) => {
        const toastId = toast.loading("Deleting Quiz...");
        try {
            // Call Api For Data Delete
            // const reponse = { quizeId: quize._id };
            const response = await adminCourseManagementApis.deleteQuiz(quiz);
            if (!response) {
                return toast.error("Something went wrong.");
            }
            toast.dismiss(toastId);
            setConfirmationModal(null);
            dispatch(setIsQuizModified(true));
            toast.success("Quiz deleted successfully");
            navigate(-1);
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

    // Handler for editing the quiz (demo action)
    const handleEditQuiz = () => {
        navigate(`/admin/course_management/add_new_quize/${quiz._id}`, {
            state: {
                editingQuiz: quiz,
                quizId,
                courseId,
            },
        });
    };

    // Handler for deleting a question by filtering it out from state
    const handleDeleteQuestion = async (questionId, courseId, quizId) => {
        const toastId = toast.loading("Deleting Question...");
        try {
            const res = await adminCourseManagementApis.deleteQuestionOfQuiz(
                questionId,
                courseId,
                quizId
            );
            if (!res) return toast.error("Something Went Wrong");
            toast.dismiss(toastId);
            toast.success("Question Deleted Successfully..");
            dispatch(setIsQuizModified(true));
            fetchQuizById(courseId, quizId);
        } catch (error) {
            const err = customApiErrorHandler(
                error,
                "Error While Deleting Quiz Question"
            );
            toast.error(err);
        } finally {
            toast.dismiss(toastId);
        }
    };

    // Handler for editing a question (demo action)
    const handleEditQuestion = () => {
        navigate(
            `/admin/course_management/add_new_quize_questions/:${quiz._id}`,
            {
                state: {
                    quizeId: quiz._id,
                    quize: quiz,
                    courseId: quiz.courseId,
                },
            }
        );
    };

    async function fetchQuizById(courseId, quizId) {
        try {
            const res = await adminCourseManagementApis.getQuizById(
                courseId,
                quizId
            );
            if (!res) return toast.error("Something went wrong...");
            setQuiz(() => res);
            return res;
        } catch (error) {
            const err = customApiErrorHandler(error, "Failed to fetch quiz");
            toast.error(err);
        }
    }

    useEffect(() => {
        if (quizId && courseId) {
            fetchQuizById(courseId, quizId);
        }
    }, []);

    return (
        <div className="quiz-container">
            <div className="quiz-card">
                {/* Quiz Header */}
                <header className="quiz-header">
                    <div className="quiz-title-section">
                        <h1 className="quiz-title">{quiz?.title}</h1>
                        <p className="quiz-summary">{quiz?.summary}</p>
                    </div>
                    <div className="quiz-actions">
                        <button
                            onClick={handleEditQuiz}
                            className="btn btn-edit"
                        >
                            <FiEdit /> Edit Quiz
                        </button>
                        <button
                            onClick={() =>
                                setConfirmationModal({
                                    text1: "Delete Quiz?",
                                    text2: "This action cannot be undone.",
                                    btn1Text: "Delete",
                                    btn2Text: "Cancel",
                                    btn1Handler: () => deleteQuizeHandler(quiz),
                                    btn2Handler: () =>
                                        setConfirmationModal(null),
                                })
                            }
                            className="btn btn-delete"
                        >
                            <FiTrash2 /> Delete Quiz
                        </button>
                    </div>
                </header>

                {/* Quiz Metadata */}
                <div className="quiz-metadata">
                    <div className="metadata-item">
                        <FiUser className="icon" />
                        <span className="label">Author:</span>
                        <span className="value">{quiz?.author}</span>
                    </div>

                    <div className="metadata-item">
                        <FiCalendar className="icon" />
                        <span className="label">Published:</span>
                        <span className="value">
                            {new Date(quiz?.time_date).toLocaleString()}
                        </span>
                    </div>

                    <div className="metadata-item">
                        <FiBook className="icon" />
                        <span className="label">Course:</span>
                        <span className="value">{courseTitle}</span>
                    </div>

                    <div className="metadata-item">
                        <FiClock className="icon" />
                        <span className="label">Time Limit:</span>
                        <span className="value">{quiz?.timelimit} minutes</span>
                    </div>
                </div>

                <div className="divider"></div>

                {/* Quiz Questions */}
                <section className="questions-section">
                    <div className="questions-header">
                        <h2 className="section-title">Questions</h2>
                        <div className="questions-actions">
                            <button
                                className="btn btn-primary"
                                onClick={() =>
                                    navigate(
                                        "/admin/course_management/add_new_quize_questions/",
                                        {
                                            state: {
                                                quizId: quiz._id,
                                                quizTitle: quiz.title,
                                                courseId: quiz?.courseId,
                                            },
                                        }
                                    )
                                }
                            >
                                <FiPlus /> Add Question
                            </button>
                        </div>
                    </div>

                    {quiz?.questions?.length === 0 ? (
                        <p className="no-questions">No questions available.</p>
                    ) : (
                        <div className="questions-list">
                            {quiz?.questions?.map((q, index) => (
                                <div key={q?.id} className="question-card">
                                    <div className="question-header">
                                        <div className="question-title-container">
                                            <div className="question-number">
                                                {index + 1}
                                            </div>
                                            <h3 className="question-title">
                                                {q?.question}
                                            </h3>
                                        </div>
                                        <div className="question-actions">
                                            <button
                                                onClick={() =>
                                                    handleEditQuestion()
                                                }
                                                className="icon-button"
                                                aria-label="Edit question"
                                            >
                                                <FiEdit />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setConfirmationModal({
                                                        text1: "Delete Question",
                                                        text2: "Are you sure you want to delete this question? This action is irreversible.",
                                                        btn1Handler: () =>
                                                            handleDeleteQuestion(
                                                                q._id,
                                                                courseId,
                                                                quizId
                                                            ),
                                                        btn1Text: "Delete",
                                                        btn2Handler: () =>
                                                            setConfirmationModal(
                                                                null
                                                            ),
                                                        btn2Text: "Cancel",
                                                    })
                                                }
                                                className="icon-button delete"
                                                aria-label="Delete question"
                                            >
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="options-grid">
                                        {q.options.map((option, i) => (
                                            <div
                                                key={i}
                                                className={`option-item ${
                                                    i == q.currectAns
                                                        ? "correct-answer"
                                                        : ""
                                                }`}
                                            >
                                                {i == q?.currectAns && (
                                                    <FiCheck className="check-icon" />
                                                )}
                                                <span>{option}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {q.summary && (
                                        <div className="question-summary">
                                            <FiInfo className="info-icon" />
                                            <p>{q?.summary}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
            {confirmationModal && (
                <ConfirmationModal modalData={confirmationModal} />
            )}
        </div>
    );
}

export default Admin_View_Quize;
