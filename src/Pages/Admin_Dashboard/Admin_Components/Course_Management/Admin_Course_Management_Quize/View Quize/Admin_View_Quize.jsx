"use client";
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
    const tempQuize = useLocation()?.state?.quiz;
    const [quiz, setQuiz] = useState([]);
    const { allQuizzes } = useSelector((state) => state.quize);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [confirmationModal, setConfirmationModal] = useState(null);
    // If the quiz has been deleted, show a fallback message
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
        navigate(`/admin/course_management/add_new_quize/:${quiz._id}`, {
            state: {
                quize: quiz,
                viewQuizePage: true,
                viewQuizePageData: quiz,
            },
        });
    };

    // Handler for deleting a question by filtering it out from state
    const handleDeleteQuestion = (questionId) => {
        // setQuiz({
        //     ...quiz,
        //     questions: quiz.questions.filter((q) => q.id !== questionId),
        // });
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

    useEffect(() => {
        allQuizzes.forEach((course) =>
            course.quizes.map((quiz) => {
                if (quiz._id === tempQuize._id) {
                    setQuiz(quiz);
                }
            })
        );
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
                        <span className="value">{quiz?.courseId}</span>
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
                                onClick={handleEditQuestion}
                                className="btn btn-secondary"
                            >
                                <FiEdit /> Edit Questions
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() =>
                                    navigate(
                                        "/admin/course_management/add_new_quize_questions/",
                                        {
                                            state: {
                                                quizeId: quiz._id,
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
                                                    handleDeleteQuestion(q?.id)
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
                                                    option === q?.currectAns
                                                        ? "correct-answer"
                                                        : ""
                                                }`}
                                            >
                                                {option === q?.currectAns && (
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
