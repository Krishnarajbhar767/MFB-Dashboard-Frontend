//     // Initial quiz data
//     const initialQuiz = {
//         author: "Krishna",
//         publishDate: "2025-02-27T13:31",
//         course: "8e638fwofuw7hr87y",
//         title: "Web Development 2025",
//         timeOut: "22",
//         summary:
//             "This quiz tests your knowledge on modern web development trends. Prepare to answer questions on design, styling, and best practices.",
//         questions: [
//             {
//                 id: 1,
//                 question:
//                     "What is the best approach for modern web development?",
//                 options: [
//                     "Using Responsive Design",
//                     "Embracing Component-Based Architecture",
//                     "Using a Monolithic Structure",
//                     "Ignoring Modern Standards",
//                 ],
//                 correctAnswer: "Embracing Component-Based Architecture",
//                 summary:
//                     "Modern apps benefit from breaking UI into reusable components.",
//             },
//             {
//                 id: 2,
//                 question: "How do you style React apps effectively?",
//                 options: [
//                     "Inline CSS only",
//                     "CSS Modules, Tailwind, or Styled Components",
//                     "Global CSS only",
//                     "Not styling them at all",
//                 ],
//                 correctAnswer: "CSS Modules, Tailwind, or Styled Components",
//                 summary:
//                     "There are multiple ways to style React apps; choose the one that fits your project best.",
//             },
//         ],
//         _id: "ebeuohweuibeDHENRr3ind389e4",
//     };

//     // Manage the quiz state
//     const [quiz, setQuiz] = useState(initialQuiz);

//     // Handler for deleting the entire quiz
//     const handleDeleteQuiz = () => {
//         // For demonstration, we remove the quiz by setting state to null.
//         setQuiz(null);
//     };

//     // Handler for editing the quiz (demo action)
//     const handleEditQuiz = () => {
//         alert("Edit Quiz functionality not implemented yet.");
//     };

//     // Handler for deleting a question by filtering it out from state
//     const handleDeleteQuestion = (questionId) => {
//         setQuiz({
//             ...quiz,
//             questions: quiz.questions.filter((q) => q.id !== questionId),
//         });
//     };

//     // Handler for editing a question (demo action)
//     const handleEditQuestion = (questionId) => {
//         alert(
//             `Edit functionality for question ${questionId} is not implemented yet.`
//         );
//     };

//     // If the quiz has been deleted, display a fallback message
//     if (!quiz) {
//         return (
//             <div className="flex flex-col items-center justify-center h-full py-10">
//                 <h2 className="text-2xl font-bold text-blue-500">
//                     Quiz Deleted
//                 </h2>
//                 <p className="mt-2 text-gray-600">
//                     No quiz available to display.
//                 </p>
//             </div>
//         );
//     }

//     return (
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//             {/* Quiz Header */}
//             <header className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center">
//                 <div>
//                     <h1 className="text-3xl font-bold text-blue-500">
//                         {quiz.title}
//                     </h1>
//                     <p className="mt-2 text-gray-700">
//                         <span className="font-medium">Author:</span>{" "}
//                         {quiz.author}
//                     </p>
//                     <p className="mt-1 text-gray-700">
//                         <span className="font-medium">Published:</span>{" "}
//                         {new Date(quiz.publishDate).toLocaleString()}
//                     </p>
//                     <p className="mt-1 text-gray-700">
//                         <span className="font-medium">Course:</span>{" "}
//                         {quiz.course}
//                     </p>
//                     <p className="mt-1 text-gray-700">
//                         <span className="font-medium">Time Limit:</span>{" "}
//                         {quiz.timeOut} minutes
//                     </p>
//                     <p className="mt-2 text-gray-600">{quiz.summary}</p>
//                 </div>
//                 <div className="mt-4 sm:mt-0 flex gap-3">
//                     <button
//                         onClick={handleEditQuiz}
//                         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200"
//                     >
//                         Edit Quiz
//                     </button>
//                     <button
//                         onClick={handleDeleteQuiz}
//                         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200"
//                     >
//                         Delete Quiz
//                     </button>
//                 </div>
//             </header>

//             {/* Quiz Questions */}
//             <section className="p-6 space-y-6">
//                 <h2 className="text-2xl font-semibold text-blue-500 mb-4">
//                     Questions
//                 </h2>
//                 {quiz.questions.length === 0 ? (
//                     <p className="text-gray-600">No questions available.</p>
//                 ) : (
//                     quiz.questions.map((q, index) => (
//                         <div
//                             key={q.id}
//                             className="p-4 border border-gray-200 rounded-lg"
//                         >
//                             <div className="flex justify-between items-center">
//                                 <p className="text-lg font-medium">{`Q${
//                                     index + 1
//                                 }: ${q.question}`}</p>
//                                 <div className="flex gap-2">
//                                     <button
//                                         onClick={() => handleEditQuestion(q.id)}
//                                         className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors duration-200"
//                                     >
//                                         Edit
//                                     </button>
//                                     <button
//                                         onClick={() =>
//                                             handleDeleteQuestion(q.id)
//                                         }
//                                         className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors duration-200"
//                                     >
//                                         Delete
//                                     </button>
//                                 </div>
//                             </div>
//                             <ul className="mt-3 space-y-2">
//                                 {q.options.map((option, i) => (
//                                     <li key={i}>
//                                         <button className="w-full text-left px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200">
//                                             {option}
//                                         </button>
//                                     </li>
//                                 ))}
//                             </ul>
//                             <p className="mt-2 text-sm text-gray-500">
//                                 <span className="font-medium">Summary:</span>{" "}
//                                 {q.summary}
//                             </p>
//                         </div>
//                     ))
//                 )}
//             </section>
//         </div>
//     );
// }

// export default Admin_View_Quize;
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Admin_View_Quize() {
    const quiz = useLocation().state?.quiz;

    // Importing Navigate For Navigate ANywere
    const navigate = useNavigate();
    // Initial quiz data
    // const initialQuiz = {
    //     author: "Krishna",
    //     publishDate: "2025-02-27T13:31",
    //     course: "8e638fwofuw7hr87y",
    //     title: "Web Development 2025",
    //     timeOut: "22",
    //     summary:
    //         "This quiz tests your knowledge on modern web development trends. Prepare to answer questions on design, styling, and best practices.",
    //     questions: [
    //         {
    //             id: 1,
    //             question:
    //                 "What is the best approach for modern web development?",
    //             options: [
    //                 "Using Responsive Design",
    //                 "Embracing Component-Based Architecture",
    //                 "Using a Monolithic Structure",
    //                 "Ignoring Modern Standards",
    //             ],
    //             correctAnswer: "Embracing Component-Based Architecture",
    //             summary:
    //                 "Modern apps benefit from breaking UI into reusable components.",
    //         },
    //         {
    //             id: 2,
    //             question: "How do you style React apps effectively?",
    //             options: [
    //                 "Inline CSS only",
    //                 "CSS Modules, Tailwind, or Styled Components",
    //                 "Global CSS only",
    //                 "Not styling them at all",
    //             ],
    //             correctAnswer: "CSS Modules, Tailwind, or Styled Components",
    //             summary:
    //                 "There are multiple ways to style React apps; choose the one that fits your project best.",
    //         },
    //     ],
    //     _id: "ebeuohweuibeDHENRr3ind389e4",
    // };

    // const [quiz, setQuiz] = useState(initialQuiz);

    // Handler for deleting the entire quiz
    const handleDeleteQuiz = () => {
        // For demonstration, we remove the quiz by setting state to null.
        setQuiz(null);
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
        setQuiz({
            ...quiz,
            questions: quiz.questions.filter((q) => q.id !== questionId),
        });
    };

    // Handler for editing a question (demo action)
    const handleEditQuestion = () => {
        navigate(
            `/admin/course_management/add_new_quize_questions/:${quiz._id}`,
            {
                state: { quizeId: quiz._id, quize: quiz },
            }
        );
    };

    // If the quiz has been deleted, show a fallback message
    if (!quiz) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
                <p className="mt-2 text-gray-600">
                    No quiz available to display.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full mx-auto  p-4">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                {/* Quiz Header */}
                <header className="p-6 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-black">
                            {quiz.title}
                        </h1>
                        <p className="mt-2 text-gray-700">
                            <span className="font-semibold">Author:</span>{" "}
                            {quiz.author}
                        </p>
                        <p className="mt-1 text-gray-700">
                            <span className="font-semibold">Published:</span>{" "}
                            {new Date(quiz.publishDate).toLocaleString()}
                        </p>
                        <p className="mt-1 text-gray-700">
                            <span className="font-semibold">Course:</span>{" "}
                            {quiz.course}
                        </p>
                        <p className="mt-1 text-gray-700">
                            <span className="font-semibold">Time Limit:</span>{" "}
                            {quiz.timeOut} minutes
                        </p>
                        <p className="mt-2 text-gray-600">{quiz.summary}</p>
                    </div>
                    <div className="flex w-fit gap-3 mt-4 md:mt-0">
                        <button
                            onClick={handleEditQuiz}
                            className=" px-4 py-2 text-nowrap bg-black text-white rounded hover:bg-gray-800 transition-colors duration-200"
                        >
                            Edit Quiz
                        </button>
                        <button
                            onClick={handleDeleteQuiz}
                            className="px-4 py-2 text-nowrap bg-black text-white rounded hover:bg-gray-800 transition-colors duration-200"
                        >
                            Delete Quiz
                        </button>
                    </div>
                </header>

                {/* Quiz Questions */}
                <section className="p-6 space-y-6">
                    <h2 className="text-2xl font-bold text-black mb-4">
                        Questions
                    </h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleEditQuestion()}
                            className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-200"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDeleteQuestion(q.id)}
                            className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-200"
                        >
                            Delete
                        </button>
                    </div>
                    {quiz.questions.length === 0 ? (
                        <p className="text-gray-600">No questions available.</p>
                    ) : (
                        quiz.questions.map((q, index) => (
                            <div
                                key={q.id}
                                className="p-4 border border-gray-200 rounded-lg shadow-sm"
                            >
                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-semibold text-black">{`Q${
                                        index + 1
                                    }: ${q.question}`}</p>
                                </div>
                                <ul className="mt-3 space-y-2">
                                    {q.options.map((option, i) => (
                                        <li key={i}>
                                            <button className="w-full text-left px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition-colors duration-200">
                                                {option}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-2 text-sm text-gray-500">
                                    <span className="font-semibold">
                                        Summary:
                                    </span>{" "}
                                    {q.summary}
                                </p>
                            </div>
                        ))
                    )}
                </section>
            </div>
        </div>
    );
}

export default Admin_View_Quize;
