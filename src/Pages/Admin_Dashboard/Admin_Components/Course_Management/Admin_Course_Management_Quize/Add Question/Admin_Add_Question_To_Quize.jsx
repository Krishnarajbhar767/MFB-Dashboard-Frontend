import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { FaEdit, FaPlus, FaSave } from "react-icons/fa";
import { MdDeleteForever, MdOutlineCancel } from "react-icons/md";

// Import your common components
import Input from "../../../../../../Common_Components/Form_Components/Input";
import TextArea from "../../../../../../Common_Components/Form_Components/TextArea";
import IconBtn from "../../../../../../Common_Components/IconBtn";
import SelectDropDown from "../../../../../../Common_Components/Form_Components/SelectDropDown";
// Redux action to update questions for a quiz
import { setQuestionsToQuize } from "../../../../../../Redux/Slices/quizesSlice";

function Admin_Add_Question_To_Quize() {
    // Setup react-hook-form for form state management
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    // Initialize Redux dispatch and navigation hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // Retrieve the quiz ID from the location state (redirect if not available)
    const quizeId = location.state?.quizeId ?? false;
    console.log("Location:", location);
    console.log("Quiz ID:", quizeId);

    // Temporary state to store questions before publishing
    const [tempQuestions, setTempQuestions] = useState([]);
    // State to determine whether we're editing an existing question or adding a new one
    const [isEditingQuestion, setIsEditingQuestion] = useState(false);
    // Store the currently editing question's data to compare for changes
    const [currentlyEditingQuestion, setCurrentlyEditingQuestion] =
        useState(null);

    /**
     * Helper: Clear all form inputs by resetting their values.
     */
    const clearInput = () => {
        setValue("question", "");
        setValue("option1", "");
        setValue("option2", "");
        setValue("option3", "");
        setValue("option4", "");
        setValue("summary", "");
        setValue("correctAnswere", "");
    };

    /**
     * Add a new question to the temporary questions state.
     * Performs a duplicate-check based on the question text (ignoring special characters).
     */
    const addQuestionHandler = (data) => {
        if (
            tempQuestions.some(
                (item) =>
                    item?.question?.replace(/[^a-zA-Z0-9]/g, "") ===
                    data?.question?.replace(/[^a-zA-Z0-9]/g, "")
            )
        ) {
            toast.error("Question already exists.");
            return;
        }
        setTempQuestions((prev) => [
            ...prev,
            {
                correctAnswere: data.correctAnswere,
                options: [
                    data.option1,
                    data.option2,
                    data.option3,
                    data.option4,
                ],
                question: data.question,
                summary: data.summary,
                id: Math.random(), // Generates a unique ID for the question
            },
        ]);
        toast.success("Question created successfully.");
        clearInput();
    };

    /**
     * Check if the edited form data is different from the currently stored question.
     * Returns true if any field has changed.
     */
    const isQuestionUpdated = (newFormData) => {
        if (
            newFormData.correctAnswere !==
                currentlyEditingQuestion.correctAnswere ||
            newFormData.summary !== currentlyEditingQuestion.summary ||
            newFormData.question !== currentlyEditingQuestion.question ||
            newFormData.option1 !== currentlyEditingQuestion.options[0] ||
            newFormData.option2 !== currentlyEditingQuestion.options[1] ||
            newFormData.option3 !== currentlyEditingQuestion.options[2] ||
            newFormData.option4 !== currentlyEditingQuestion.options[3]
        ) {
            return true;
        }
        return false;
    };

    /**
     * Edit an existing question. First, it checks if any changes were made.
     * It also verifies that the updated question text does not conflict with other questions.
     */
    const editQuestionHandler = (data) => {
        if (isQuestionUpdated(data)) {
            if (
                tempQuestions.some((item) => {
                    if (item.id !== currentlyEditingQuestion.id) {
                        return (
                            item?.question?.replace(/[^a-zA-Z0-9]/g, "") ===
                            data?.question?.replace(/[^a-zA-Z0-9]/g, "")
                        );
                    }
                    return false;
                })
            ) {
                toast.error("Question already exists.");
                return;
            }
            // Update the question in the state
            setTempQuestions((prev) =>
                prev.map((item) =>
                    item.id === currentlyEditingQuestion.id
                        ? {
                              ...item,
                              correctAnswere: data.correctAnswere,
                              summary: data.summary,
                              question: data.question,
                              options: [
                                  data.option1,
                                  data.option2,
                                  data.option3,
                                  data.option4,
                              ],
                          }
                        : item
                )
            );
            toast.success("Question updated successfully.");
            clearInput();
            setIsEditingQuestion(false);
            setCurrentlyEditingQuestion(null);
        } else {
            toast.error("No changes made to the question.");
        }
    };

    /**
     * Handle form submission by determining whether to add a new question or update an existing one.
     */
    const onSubmit = (data) => {
        if (isEditingQuestion) {
            editQuestionHandler(data);
        } else {
            addQuestionHandler(data);
        }
    };

    /**
     * Handler to publish the quiz.
     * Verifies that at least one question exists, reformats the data,
     * and dispatches a Redux action to save the questions.
     */
    const publishQuizeHandler = () => {
        if (!tempQuestions.length) {
            toast.error("At least one question is required.");
            return;
        }
        const formattedQuestions = tempQuestions.map((item) => ({
            ...item,
            // Convert the selected correct answer (number) to its corresponding option text
            correctAnswere: item.options[item.correctAnswere - 1],
        }));
        console.log("Publishing quiz with data:", {
            quizeId,
            questions: formattedQuestions,
        });

        try {
            dispatch(
                setQuestionsToQuize({ quizeId, questions: formattedQuestions })
            );
            clearInput();
            setTempQuestions([]);
            toast.success("Questions added to quiz successfully.");
            navigate("/admin/course_management/quizes/");
        } catch (error) {
            toast.error(error.message);
            console.error("Error while publishing quiz:", error);
        }
    };

    // If the quiz ID is not available, redirect to the quiz management page
    useEffect(() => {
        if (!quizeId) {
            navigate("/admin/course_management/quizes/");
        }
    }, [quizeId, navigate]);

    // Render nothing while redirecting if no quiz ID is found
    if (!quizeId) return null;

    return (
        <form className="flex justify-center gap-6">
            {/* LEFT PANEL: Form to add or edit a question */}
            <div className="w-1/2">
                <h1 className="text-lg font-medium">Add Questions To Quiz</h1>
                <p className="text-sm">Create a new question for your quiz.</p>
                <div className="bg-white shadow-md mt-4 rounded-md border p-4">
                    <div className="space-y-2">
                        {/* TextArea for Question */}
                        <TextArea
                            label="Question*"
                            placeholder="Enter Question"
                            inputName="question"
                            register={register}
                            required={true}
                            error={errors?.question}
                        />
                        {/* Input for Option 1 */}
                        <Input
                            placeholder="Option 1"
                            inputName="option1"
                            register={register}
                            required={true}
                            error={errors?.option1}
                        />
                        {/* Input for Option 2 */}
                        <Input
                            placeholder="Option 2"
                            inputName="option2"
                            register={register}
                            required={true}
                            error={errors?.option2}
                        />
                        {/* Input for Option 3 */}
                        <Input
                            placeholder="Option 3"
                            inputName="option3"
                            register={register}
                            required={true}
                            error={errors?.option3}
                        />
                        {/* Input for Option 4 */}
                        <Input
                            placeholder="Option 4"
                            inputName="option4"
                            register={register}
                            required={true}
                            error={errors?.option4}
                        />
                        {/* Dropdown to select the correct answer */}
                        <SelectDropDown
                            register={register}
                            inputName="correctAnswere"
                            required={true}
                            error={errors?.correctAnswere}
                            selectName="Correct Answer"
                            selectId="correctAnswere"
                            label="Select Correct Answer*"
                            options={[
                                { value: 1, name: "Option 1" },
                                { value: 2, name: "Option 2" },
                                { value: 3, name: "Option 3" },
                                { value: 4, name: "Option 4" },
                            ]}
                            defaultOption="Choose Correct Option"
                        />
                        {/* Optional Summary for the question */}
                        <TextArea
                            inputName="summary"
                            placeholder="Summary (Optional)"
                            register={register}
                            label="Summary (Optional)"
                        />
                        {/* Action Buttons: Add/Save and Cancel */}
                        <div className="flex items-center justify-center gap-4">
                            <button
                                type="button"
                                onClick={handleSubmit(onSubmit)}
                            >
                                <IconBtn color="#000f">
                                    {isEditingQuestion ? (
                                        <FaSave />
                                    ) : (
                                        <FaPlus />
                                    )}
                                    {isEditingQuestion
                                        ? "Save"
                                        : "Add Question"}
                                </IconBtn>
                            </button>
                            {isEditingQuestion && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        // Cancel editing: reset form and editing state
                                        setIsEditingQuestion(false);
                                        clearInput();
                                    }}
                                >
                                    <IconBtn color="#000f">
                                        <MdOutlineCancel /> Cancel
                                    </IconBtn>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL: List of added questions */}
            <div className="w-[40%] bg-white shadow-md rounded-md mt-16 border p-4 space-y-2 h-fit ">
                {tempQuestions.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between text-[13px] font-normal bg-gray-200 rounded-md p-2 gap-4 overflow-hidden"
                    >
                        <h1 className="break-words">
                            {item.question.slice(0, 50)}
                        </h1>
                        <div className="flex gap-2">
                            {/* Edit Question Button */}
                            <span
                                className="cursor-pointer text-base"
                                onClick={() => {
                                    setIsEditingQuestion(true);
                                    // Populate form fields with the data from the selected question
                                    setValue("question", item.question);
                                    setValue("option1", item.options[0]);
                                    setValue("option2", item.options[1]);
                                    setValue("option3", item.options[2]);
                                    setValue("option4", item.options[3]);
                                    setValue("summary", item.summary);
                                    setValue(
                                        "correctAnswere",
                                        item.correctAnswere
                                    );
                                    setCurrentlyEditingQuestion(item);
                                }}
                            >
                                <FaEdit />
                            </span>
                            {/* Delete Question Button */}
                            <span
                                className="cursor-pointer text-base"
                                onClick={() => {
                                    setTempQuestions((prev) =>
                                        prev.filter(
                                            (elem) =>
                                                elem.question !== item.question
                                        )
                                    );
                                }}
                            >
                                <MdDeleteForever />
                            </span>
                        </div>
                    </div>
                ))}
                {/* Publish and Cancel Buttons */}
                <div className="flex gap-2 items-center justify-end mt-2">
                    <span onClick={publishQuizeHandler}>
                        <IconBtn color="#000f">Publish</IconBtn>
                    </span>
                    <Link to="/admin/course_management/quizes/">
                        <IconBtn color="#808080" textColor="#fff">
                            Cancel
                        </IconBtn>
                    </Link>
                </div>
            </div>
        </form>
    );
}

export default Admin_Add_Question_To_Quize;

// import React, { useEffect, useState } from "react";
// import Input from "../../../../../../Common_Components/Form_Components/Input";
// import TextArea from "../../../../../../Common_Components/Form_Components/TextArea";
// import IconBtn from "../../../../../../Common_Components/IconBtn";
// import { FaEdit, FaPlus } from "react-icons/fa";
// import { MdDeleteForever, MdOutlineCancel } from "react-icons/md";
// import SelectDropDown from "../../../../../../Common_Components/Form_Components/SelectDropDown";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { FaSave } from "react-icons/fa";
// import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
// import { setQuestionsToQuize } from "../../../../../../Redux/Slices/quizesSlice";
// import { useDispatch } from "react-redux";

// function Admin_Add_Question_To_Quize() {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         setValue,
//         getValues,
//         formState: { errors },
//     } = useForm();
//     const clearInput = () => {
//         setValue("question");
//         setValue("option1");
//         setValue("option2");
//         setValue("option3");
//         setValue("option4");
//         setValue("summary");
//         setValue("correctAnswere");
//     };
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const quizeId = useLocation().state?.quizeId ?? false;
//     const location = useLocation();
//     console.log("Location ---->", location);
//     console.log("Location ---->", quizeId);
//     const [tempQuestions, setTempQuestions] = useState([]);
//     // State For Handle Is Editiing Question or Entering new question.
//     const [isEditingQuestion, setIsEditingQuize] = useState(false);
//     // State For Hold Currenlt Editing Questtion Data..It Provide Privious Question data for Check Is question is updated or not..
//     const [currentlyEditingQuestion, setCurrentlyEditingQuestion] =
//         useState(null);

//     const addQuestionHandler = (data) => {
//         if (
//             tempQuestions.some(
//                 (item) =>
//                     item?.question?.replace(/[^a-zA-Z0-9]/g, "") ===
//                     data?.question?.replace(/[^a-zA-Z0-9]/g, "")
//             )
//         ) {
//             toast.error("Question Already Exist...");
//             return;
//         }
//         setTempQuestions((prev) => [
//             ...prev,
//             {
//                 correctAnswere: data.correctAnswere,
//                 options: [
//                     data.option1,
//                     data.option2,
//                     data.option3,
//                     data.option4,
//                 ],
//                 question: data.question,
//                 summary: data.summary,
//                 id: Math.random(),
//             },
//         ]);
//         toast.success("Question created successfully.");
//         clearInput();
//     };

//     const isQuestionUpdated = (newFormData) => {
//         // step1 --> Get Current Values Of Form Data..// Got Current Value From argumnet
//         // step 2--> get Privious Valule of form data.. // get Privious Data From CurrentlyEditing State..
//         // console.log(
//         //     "Printing Old And New Form Data..",
//         //     newFormData,
//         //     currentlyEditingQuestion
//         // );
//         // step 4 --> now check is something Is changed or not
//         if (
//             newFormData.correctAnswere !==
//                 currentlyEditingQuestion.correctAnswere ||
//             newFormData.summary !== currentlyEditingQuestion.summary ||
//             newFormData.question !== currentlyEditingQuestion.question ||
//             newFormData.option1 !== currentlyEditingQuestion.options[0] ||
//             newFormData.option2 !== currentlyEditingQuestion.options[1] ||
//             newFormData.option3 !== currentlyEditingQuestion.options[2] ||
//             newFormData.option4 !== currentlyEditingQuestion.options[3]
//         ) {
//             // step 5 --> if something is changed Then  Return True Else False
//             return true;
//         } else {
//             return false;
//         }
//     };

//     const editQuestionHandler = (data) => {
//         // console.log("Editing Form Data", data); //
//         if (isQuestionUpdated(data)) {
//             if (
//                 tempQuestions.some((item) => {
//                     if (item.id !== currentlyEditingQuestion.id) {
//                         if (
//                             item?.question?.replace(/[^a-zA-Z0-9]/g, "") ===
//                             data?.question?.replace(/[^a-zA-Z0-9]/g, "")
//                         ) {
//                             return true;
//                         } else {
//                             return false;
//                         }
//                     }
//                 })
//             ) {
//                 toast.error("Question Already Exist...");
//                 return;
//             }
//             setTempQuestions((prev) => {
//                 return prev.map((item) => {
//                     if (item.id === currentlyEditingQuestion.id) {
//                         return {
//                             ...item,
//                             correctAnswere: data.correctAnswere,
//                             summary: data.summary,
//                             question: data.question,
//                             options: [
//                                 data.option1,
//                                 data.option2,
//                                 data.option3,
//                                 data.option4,
//                             ],
//                         };
//                     } else {
//                         return item;
//                     }
//                 });
//             });
//             toast.success("Question updated successfully.");
//             clearInput();
//             setIsEditingQuize(false);
//             setCurrentlyEditingQuestion(null);
//         } else {
//             toast.error("No changes made to the question.");
//         }
//     };
//     const onSubmit = async (data) => {
//         if (isEditingQuestion) {
//             editQuestionHandler(data);
//         } else {
//             addQuestionHandler(data);
//         }
//     };
//     const publishQuizeHandler = async () => {
//         // get quize id..

//         // format object Data For Api Call...
//         if (!tempQuestions.length) {
//             return toast.error("Atleast One Question Are Required..");
//         }
//         // Need To Re-Formatt Object.... FOr API CALL..

//         const formData = tempQuestions.map((item) => ({
//             ...item,
//             correctAnswere: item.options[item.correctAnswere - 1],
//         }));
//         console.log("Printing New Optimised FormData", {
//             quizeId,
//             questions: formData,
//         });

//         // Now Call The Api...
//         try {
//             const reponse = {
//                 quizeId,
//                 questions: formData,
//             }; /// Now Assuming Evrthing Is Fine .... And I Sent This Data....

//             if (!reponse) {
//                 return toast.error("Some Thing Went Wrong.");
//             }
//             dispatch(
//                 setQuestionsToQuize({
//                     quizeId,
//                     questions: formData,
//                 })
//             );
//             clearInput();
//             setTempQuestions([]);
//             toast.success("Question Added To Quize Successfully.");
//             navigate("/admin/course_management/quizes/");
//         } catch (error) {
//             toast.error(error.message);
//             console.log(
//                 "Error While Adding New Question To Quize JSX --- >",
//                 error
//             );
//         }
//     };
//     useEffect(() => {
//         if (!quizeId) {
//             navigate("/admin/course_management/quizes/");
//         }
//     }, [quizeId, navigate]);

//     if (!quizeId) return null; // Show nothing while redirecting

//     // Rest of your component

//     return (
//         <form className="flex justify-center gap-6">
//             {/* Left Panel: Question Entry Form */}
//             <div className="w-1/2 h-full">
//                 <h1 className="text-lg font-medium">Add Questions To Quiz</h1>
//                 <p className="text-sm font-normal">
//                     Create A New Question For Your Quiz.
//                 </p>
//                 <div className="w-full h-fit bg-white shadow-md mt-4 rounded-md border p-4">
//                     <div className="rounded-md mt-2 space-y-2">
//                         {/* Question Text Area */}
//                         <div>
//                             <TextArea
//                                 label="Question*"
//                                 placeholder="Enter Question"
//                                 inputName="question"
//                                 register={register}
//                                 required={true}
//                                 error={errors?.question}
//                             />
//                         </div>
//                         {/* Option 1 */}
//                         <div className="flex gap-3 items-center">
//                             <div className="w-full">
//                                 <Input
//                                     placeholder="Option 1"
//                                     inputName="option1"
//                                     register={register}
//                                     required={true}
//                                     error={errors?.option1}
//                                 />
//                             </div>
//                         </div>
//                         {/* Option 2 */}
//                         <div className="flex gap-3 items-center">
//                             <div className="w-full">
//                                 <Input
//                                     placeholder="Option 2"
//                                     inputName="option2"
//                                     register={register}
//                                     required={true}
//                                     error={errors?.option2}
//                                 />
//                             </div>
//                         </div>
//                         {/* Option 3 */}
//                         <div className="flex gap-3 items-center">
//                             <div className="w-full">
//                                 <Input
//                                     placeholder="Option 3"
//                                     inputName="option3"
//                                     register={register}
//                                     required={true}
//                                     error={errors?.option3}
//                                 />
//                             </div>
//                         </div>
//                         {/* Option 4 */}
//                         <div className="flex gap-3 items-center">
//                             <div className="w-full">
//                                 <Input
//                                     placeholder="Option 4"
//                                     inputName="option4"
//                                     register={register}
//                                     required={true}
//                                     error={errors?.option4}
//                                 />
//                             </div>
//                         </div>
//                         {/* Correct Answer */}
//                         <div>
//                             {/* <Input
//                             label="Correct Answer*"
//                             placeholder="Enter correct answer"
//                             inputName="correctAnswer"
//                         /> */}
//                             <SelectDropDown
//                                 register={register}
//                                 inputName={"correctAnswere"}
//                                 required={true}
//                                 error={errors?.correctAnswere}
//                                 selectName={"Correct Answere"}
//                                 selectId={"correctAnswere"}
//                                 label={"Select Correct Answere*"}
//                                 options={[
//                                     // This Section Come From All Courses Api Call...
//                                     {
//                                         value: 1,
//                                         name: "Option 1",
//                                     },
//                                     {
//                                         value: 2,
//                                         name: "Option 2",
//                                     },
//                                     {
//                                         value: 3,
//                                         name: "Option 3",
//                                     },
//                                     {
//                                         value: 4,
//                                         name: "Option 4",
//                                     },
//                                 ]}
//                                 defaultOption={"Choose Correct Option"}
//                             />
//                         </div>
//                         <TextArea
//                             inputName="summary"
//                             placeholder={"Summary"}
//                             register={register}
//                             label={"Summary (Optional)"}
//                         />
//                         {/* Action Buttons */}
//                         <div className="w-full flex items-center justify-center gap-4">
//                             <button
//                                 type="button"
//                                 onClick={handleSubmit(onSubmit)}
//                             >
//                                 <IconBtn color="#000f">
//                                     {isEditingQuestion ? (
//                                         <FaSave />
//                                     ) : (
//                                         <FaPlus />
//                                     )}
//                                     {isEditingQuestion
//                                         ? "Save"
//                                         : "Add Question"}
//                                 </IconBtn>
//                             </button>
//                             <button type="button">
//                                 {isEditingQuestion && (
//                                     <button
//                                         onClick={() => {
//                                             setIsEditingQuize(false);
//                                             clearInput();
//                                         }}
//                                     >
//                                         <IconBtn color="#000f">
//                                             <MdOutlineCancel /> Cancel
//                                         </IconBtn>
//                                     </button>
//                                 )}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Right Panel: Sidebar for Rendered Questions */}
//             <div className="w-[40%] h-fit bg-white shadow-md rounded-md mt-16 border p-4 space-y-2">
//                 {/* Rendered Question Example */}
//                 {tempQuestions?.map((item) => (
//                     <div className="flex items-center justify-between text-[13px] font-normal bg-gray-200 rounded-md p-2 gap-4">
//                         <h1 className="text-wrap">{item.question}</h1>
//                         <div className="flex gap-2">
//                             <span
//                                 className="cursor-pointer text-base"
//                                 onClick={(e) => {
//                                     // console.log(item);
//                                     setIsEditingQuize(true);
//                                     setValue("question", item.question);
//                                     setValue("option1", item.options[0]);
//                                     setValue("option2", item.options[1]);
//                                     setValue("option3", item.options[2]);
//                                     setValue("option4", item.options[3]);
//                                     setValue("summary", item.summary);

//                                     setValue(
//                                         "correctAnswere",
//                                         item.correctAnswere
//                                     );
//                                     setCurrentlyEditingQuestion(item); //
//                                 }}
//                             >
//                                 <FaEdit />
//                             </span>
//                             <span
//                                 className="cursor-pointer text-base"
//                                 onClick={() =>
//                                     setTempQuestions((prev) => {
//                                         return prev?.filter(
//                                             (elem) =>
//                                                 item.question !== elem.question
//                                         );
//                                     })
//                                 }
//                             >
//                                 <MdDeleteForever />
//                             </span>
//                         </div>
//                     </div>
//                 ))}
//                 {/* <div className="flex items-center justify-between text-[13px] font-normal bg-gray-200 rounded-md p-2 gap-4">
//                 <h1 className="text-wrap">Sample Question 2</h1>
//                 <div className="flex gap-2">
//                     <span className="cursor-pointer text-base">
//                         <FaEdit />
//                     </span>
//                     <span className="cursor-pointer text-base">
//                         <MdDeleteForever />
//                     </span>
//                 </div>
//             </div> */}
//                 {/* Publish and Cancel Buttons */}
//                 <div className="flex gap-2 items-center justify-end mt-2">
//                     <span onClick={publishQuizeHandler}>
//                         <IconBtn color="#000f">Publish</IconBtn>
//                     </span>
//                     <Link to={"/admin/course_management/quizes/"}>
//                         <IconBtn color="#808080" textColor="#fff">
//                             Cancel
//                         </IconBtn>
//                     </Link>
//                 </div>
//             </div>
//         </form>
//     );
// }

// export default Admin_Add_Question_To_Quize;
