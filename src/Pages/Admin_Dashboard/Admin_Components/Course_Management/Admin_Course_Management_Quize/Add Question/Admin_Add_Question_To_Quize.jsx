import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { FaEdit, FaPlus } from "react-icons/fa";
import { MdDeleteForever, MdOutlineCancel } from "react-icons/md";

// Replace the import path below with your actual custom input components location.

import IconBtn from "../../../../../../Common_Components/IconBtn";
import {
    AdminCustomTextarea,
    AdminCustomInput,
    AdminCustomSelect,
} from "../../../../../../Common_Components/Form_Components/AdminCustomInputs";

function Admin_Add_Question_To_quiz() {
    const location = useLocation();
    // Initialize react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const quizTitle = location?.state?.quizTitle;
    // Simple onSubmit handler (for demonstration purposes only)
    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
    };

    const [tempQuestions, setTempQuestions] = useState([]);
    const [isEditing, setIsEditing] = useState(true);
    // Function For Handler Add Question To Temp quiz
    function addQuestionHandler() {}
    console.log("quizTitle", quizTitle);
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-center gap-6 p-4"
        >
            {/* LEFT PANEL: Form to add a new quiz question */}
            <div className="w-1/2">
                <h2 className="text-lg font-semibold text-gray-800 capitalize">
                    {isEditing
                        ? "Editing Question Of quiz :"
                        : "Adding Question To quiz :"}{" "}
                    {quizTitle?.length > 80
                        ? `${quizTitle.slice(0, 70)}...`
                        : quizTitle}
                </h2>

                <p className="text-sm mb-2 capitalize">
                    {isEditing
                        ? "Edit Your Privious Question For Your Quiz quiz"
                        : "Create a new question for your quiz."}
                </p>
                <div className="bg-white shadow-md rounded-md border p-4 space-y-4">
                    {/* Question Field */}
                    <AdminCustomTextarea
                        label="Question*"
                        placeholder="Enter Question"
                        registerOptions={register("question", {
                            required: "Question is required",
                        })}
                        error={errors.question}
                        rows={3}
                    />
                    {/* Option 1 */}
                    <AdminCustomInput
                        label="Option 1*"
                        placeholder="Enter Option 1"
                        registerOptions={register("options[0]", {
                            required: "Option 1 is required",
                        })}
                        error={errors.options?.[0]}
                    />
                    {/* Option 2 */}
                    <AdminCustomInput
                        label="Option 2*"
                        placeholder="Enter Option 2"
                        registerOptions={register("options[1]", {
                            required: "Option 1 is required",
                        })}
                        error={errors.options?.[1]}
                    />
                    {/* Option 3 */}
                    <AdminCustomInput
                        label="Option 3*"
                        placeholder="Enter Option 3"
                        registerOptions={register("options[2]", {
                            required: "Option 1 is required",
                        })}
                        error={errors.options?.[2]}
                    />
                    {/* Option 4 */}
                    <AdminCustomInput
                        label="Option 4*"
                        placeholder="Enter Option 4"
                        registerOptions={register("options[3]", {
                            required: "Option 1 is required",
                        })}
                        error={errors.options?.[3]}
                    />
                    {/* Correct Answer Select */}
                    <AdminCustomSelect
                        label="Select Correct Answer*"
                        registerOptions={register("currectAns", {
                            required: "Correct answer is required",
                        })}
                        error={errors.currectAns}
                        options={[
                            { value: 0, label: "Option 1" },
                            { value: 1, label: "Option 2" },
                            { value: 2, label: "Option 3" },
                            { value: 3, label: "Option 4" },
                        ]}
                        defaultOption="Choose Correct Option"
                    />
                    {/* Summary Field */}
                    <AdminCustomTextarea
                        label="Summary (Optional)"
                        placeholder="Enter a summary (optional)"
                        registerOptions={register("summary")}
                        error={errors.summary}
                        rows={3}
                    />
                    {/* Action Buttons */}
                    <div className="flex items-center justify-center gap-4">
                        <button type="submit" onClick={addQuestionHandler}>
                            <IconBtn color="#000f">
                                <FaPlus /> Add Question
                            </IconBtn>
                        </button>
                        {isEditing && (
                            <button type="button">
                                <IconBtn color="#000f">
                                    <MdOutlineCancel /> Cancel
                                </IconBtn>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Admin_Add_Question_To_quiz;
