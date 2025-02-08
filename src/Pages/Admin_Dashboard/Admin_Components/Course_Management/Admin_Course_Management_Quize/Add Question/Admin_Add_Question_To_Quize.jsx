import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
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
    // Initialize react-hook-form for form state management
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    // Initialize Redux dispatch and navigation hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // Retrieve the quiz ID and questions from the location state and URL params
    const quizeId = location.state?.quizeId ?? false;
    const questions = location.state?.quize?.questions;
    const { quizeId: quizeIdParams } = useParams();

    // Temporary state to store questions before publishing
    const [tempQuestions, setTempQuestions] = useState([]);

    // State to determine whether we're editing an existing question
    const [isEditingQuestion, setIsEditingQuestion] = useState(false);
    // State to hold the currently editing question for comparison and update
    const [currentlyEditingQuestion, setCurrentlyEditingQuestion] =
        useState(null);

    // Flag to indicate if we are in editing mode when coming from a quiz view
    const [isEditingQuizeFromView, setIsEditingQuizeFromView] = useState(
        quizeIdParams && questions ? true : false
    );

    /**
     * clearInput
     * ----------
     * Resets all the form fields to an empty string.
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
     * addQuestionHandler
     * ------------------
     * Adds a new question to the temporary questions state.
     * Checks for duplicate questions by comparing the alphanumeric characters.
     *
     * @param {Object} data - The new question data from the form.
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
     * isQuestionUpdated
     * -----------------
     * Compares the new form data with the data of the currently editing question.
     *
     * @param {Object} newFormData - The updated question data from the form.
     * @returns {boolean} - Returns true if any field has changed, otherwise false.
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
     * editQuestionHandler
     * -------------------
     * Updates an existing question in the temporary questions state.
     * Checks that changes have been made and ensures the updated question text does not conflict with others.
     *
     * @param {Object} data - The updated question data from the form.
     */
    const editQuestionHandler = (data) => {
        if (isQuestionUpdated(data)) {
            // Check for duplicate question text in other questions.
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
            // Update the question in the state by mapping over tempQuestions.
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
     * onSubmit
     * --------
     * Handles form submission by determining whether to add a new question or update an existing one.
     *
     * @param {Object} data - The form data.
     */
    const onSubmit = (data) => {
        if (isEditingQuestion) {
            editQuestionHandler(data);
        } else {
            addQuestionHandler(data);
        }
    };

    /**
     * useEffect Hook (for Editing Mode)
     * ----------------------------------
     * When the component mounts, if questions and quiz ID are provided via URL parameters,
     * convert the existing quiz questions into a renderable format and populate the temporary state.
     */
    useEffect(() => {
        if (questions && quizeIdParams) {
            const optimisedTempQuestions = questions.map((item) => ({
                ...item,
                // Convert the correct answer text into its corresponding index (1-based)
                correctAnswere: item.options.indexOf(item.correctAnswere) + 1,
            }));
            setTempQuestions(optimisedTempQuestions);
        }
    }, [questions, quizeIdParams]);

    /**
     * isQuestionsArrayChanged
     * ------------------------
     * Compares two arrays of question objects to check if any question has changed.
     * For each question (assumed to be in the same order in both arrays),
     * it checks every property and, when the property is "options", it loops and checks each index.
     *
     * @param {Array<Object>} newQuestions - The new array of question objects.
     * @param {Array<Object>} oldQuestions - The old array of question objects.
     * @returns {boolean} - Returns true if any question differs; otherwise, false.
     */
    function isQuestionsArrayChanged(newQuestions, oldQuestions) {
        // Check if arrays have different lengths.
        if (newQuestions.length !== oldQuestions.length) {
            return true;
        }

        // Loop over each question by index.
        for (let i = 0; i < newQuestions.length; i++) {
            const newQuestion = newQuestions[i];
            const oldQuestion = oldQuestions[i];

            // Compare the 'question' text.
            if (newQuestion.question !== oldQuestion.question) {
                return true;
            }

            // Compare the 'summary' text.
            if (newQuestion.summary !== oldQuestion.summary) {
                return true;
            }

            // Compare the 'correctAnswere' value.
            // Convert newQuestion.correctAnswere from index to number if needed.
            const newCorrectIndex =
                newQuestion.options.indexOf(newQuestion.correctAnswere) + 1;
            if (oldQuestion.correctAnswere !== newCorrectIndex) {
                return true;
            }

            // Compare the 'options' arrays by checking lengths and each element.
            if (newQuestion.options.length !== oldQuestion.options.length) {
                return true;
            }
            for (let j = 0; j < newQuestion.options.length; j++) {
                if (newQuestion.options[j] !== oldQuestion.options[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * publishQuizeHandler
     * ---------------------
     * Handler to publish the quiz. Depending on the mode, it either creates or updates
     * the quiz questions by dispatching the Redux action.
     * - If not editing from view, ensures that at least one question exists.
     * - If editing from view, checks if any changes have been made.
     */
    const publishQuizeHandler = () => {
        if (!isEditingQuizeFromView) {
            if (!tempQuestions.length) {
                toast.error("At least one question is required.");
                return;
            }
            const formattedQuestions = tempQuestions.map((item) => ({
                ...item,
                // Convert the selected correct answer (number) to its corresponding option text.
                correctAnswere: item.options[item.correctAnswere - 1],
            }));
            try {
                dispatch(
                    setQuestionsToQuize({
                        quizeId,
                        questions: formattedQuestions,
                    })
                );
                clearInput();
                setTempQuestions([]);
                toast.success("Questions added to quiz successfully.");
                navigate("/admin/course_management/quizes/");
            } catch (error) {
                toast.error(error.message);
                console.error("Error while publishing quiz:", error);
            }
        } else {
            if (isQuestionsArrayChanged(questions, tempQuestions)) {
                const formattedQuestions = tempQuestions.map((item) => ({
                    ...item,
                    correctAnswere: item.options[item.correctAnswere - 1],
                }));
                try {
                    dispatch(
                        setQuestionsToQuize({
                            quizeId,
                            questions: formattedQuestions,
                        })
                    );
                    clearInput();
                    setTempQuestions([]);
                    toast.success("Questions updated successfully.");
                    navigate(
                        `/admin/course_management/quizes/view_quize/:${quizeId}`,
                        {
                            state: {
                                quiz: {
                                    ...location.state?.quize,
                                    questions: tempQuestions,
                                },
                            },
                        }
                    );
                } catch (error) {
                    toast.error(error.message);
                    console.error("Error while publishing quiz:", error);
                }
            } else {
                toast.error("No Changes made.");
            }
        }
    };

    /**
     * useEffect Hook (for Redirect)
     * -----------------------------
     * If the quiz ID is not available, redirect the user back to the quiz management page.
     */
    useEffect(() => {
        if (!quizeId) {
            navigate("/admin/course_management/quizes/");
        }
    }, [quizeId, navigate]);

    // If no quiz ID is found, render nothing.
    if (!quizeId) return null;

    return (
        <form
            className="flex justify-center gap-6"
            onSubmit={handleSubmit(onSubmit, (err) =>
                console.log("Error occurred while submitting the form:", err)
            )}
        >
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
                                        // Cancel editing: reset form and editing state.
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
            <div className="w-[40%] bg-white shadow-md rounded-md mt-16 border p-4 space-y-2 h-fit">
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
                                    // Populate form fields with the selected question data.
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
