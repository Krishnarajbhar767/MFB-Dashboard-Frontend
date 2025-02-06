import React, { useState } from "react";
import Input from "../../../../../../Common_Components/Form_Components/Input";
import TextArea from "../../../../../../Common_Components/Form_Components/TextArea";
import IconBtn from "../../../../../../Common_Components/IconBtn";
import { FaEdit, FaPlus } from "react-icons/fa";
import { MdDeleteForever, MdOutlineCancel } from "react-icons/md";
import SelectDropDown from "../../../../../../Common_Components/Form_Components/SelectDropDown";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";

function Admin_Add_Question_To_Quize() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();
    const clearInput = () => {
        setValue("question");
        setValue("option1");
        setValue("option2");
        setValue("option3");
        setValue("option4");
        setValue("correctAnswere");
    };
    const [tempQuestions, setTempQuestions] = useState([]);
    const [isEditingQuestion, setIsEditingQuize] = useState(false);
    const addQuestionHandler = (data) => {
        console.log("Printing Question Data..", data);
        if (
            tempQuestions.some(
                (item) =>
                    item?.question?.replace(/[^a-zA-Z0-9]/g, "") ===
                    data?.question?.replace(/[^a-zA-Z0-9]/g, "")
            )
        ) {
            toast.error("Question Already Exist...");
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
                id: Math.random(),
            },
        ]);
        toast.success("Question created successfully.");
        clearInput();
    };

    const isQuestionUpdated = () => {};

    const editQuestionHandler = () => {};
    const onSubmit = async (data) => {
        if (isEditingQuestion) {
            editQuestionHandler(data);
        } else {
            addQuestionHandler(data);
        }
    };
    return (
        <form className="flex justify-center gap-6">
            {/* Left Panel: Question Entry Form */}
            <div className="w-1/2 h-full">
                <h1 className="text-lg font-medium">Add Questions To Quiz</h1>
                <p className="text-sm font-normal">
                    Create A New Question For Your Quiz.
                </p>
                <div className="w-full h-fit bg-white shadow-md mt-4 rounded-md border p-4">
                    <div className="rounded-md mt-2 space-y-2">
                        {/* Question Text Area */}
                        <div>
                            <TextArea
                                label="Question*"
                                placeholder="Enter Question"
                                inputName="question"
                                register={register}
                                required={true}
                                error={errors?.question}
                            />
                        </div>
                        {/* Option 1 */}
                        <div className="flex gap-3 items-center">
                            <div className="w-full">
                                <Input
                                    placeholder="Option 1"
                                    inputName="option1"
                                    register={register}
                                    required={true}
                                    error={errors?.option1}
                                />
                            </div>
                        </div>
                        {/* Option 2 */}
                        <div className="flex gap-3 items-center">
                            <div className="w-full">
                                <Input
                                    placeholder="Option 2"
                                    inputName="option2"
                                    register={register}
                                    required={true}
                                    error={errors?.option2}
                                />
                            </div>
                        </div>
                        {/* Option 3 */}
                        <div className="flex gap-3 items-center">
                            <div className="w-full">
                                <Input
                                    placeholder="Option 3"
                                    inputName="option3"
                                    register={register}
                                    required={true}
                                    error={errors?.option3}
                                />
                            </div>
                        </div>
                        {/* Option 4 */}
                        <div className="flex gap-3 items-center">
                            <div className="w-full">
                                <Input
                                    placeholder="Option 4"
                                    inputName="option4"
                                    register={register}
                                    required={true}
                                    error={errors?.option4}
                                />
                            </div>
                        </div>
                        {/* Correct Answer */}
                        <div>
                            {/* <Input
                                label="Correct Answer*"
                                placeholder="Enter correct answer"
                                inputName="correctAnswer"
                            /> */}
                            <SelectDropDown
                                register={register}
                                inputName={"correctAnswere"}
                                required={true}
                                error={errors?.correctAnswere}
                                selectName={"Correct Answere"}
                                selectId={"correctAnswere"}
                                label={"Select Correct Answere*"}
                                options={[
                                    // This Section Come From All Courses Api Call...
                                    {
                                        value: 1,
                                        name: "Option 1",
                                    },
                                    {
                                        value: 2,
                                        name: "Option 2",
                                    },
                                    {
                                        value: 3,
                                        name: "Option 3",
                                    },
                                    {
                                        value: 4,
                                        name: "Option 4",
                                    },
                                ]}
                                defaultOption={"Choose Correct Option"}
                            />
                        </div>
                        {/* Action Buttons */}
                        <div className="w-full flex items-center justify-center gap-4">
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
                            <button type="button">
                                {isEditingQuestion && (
                                    <button
                                        onClick={() => {
                                            setIsEditingQuize(false);
                                            clearInput();
                                        }}
                                    >
                                        <IconBtn color="#000f">
                                            <MdOutlineCancel /> Cancel
                                        </IconBtn>
                                    </button>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel: Sidebar for Rendered Questions */}
            <div className="w-[40%] h-fit bg-white shadow-md rounded-md mt-16 border p-4 space-y-2">
                {/* Rendered Question Example */}
                {tempQuestions?.map((item) => (
                    <div className="flex items-center justify-between text-[13px] font-normal bg-gray-200 rounded-md p-2 gap-4">
                        <h1 className="text-wrap">{item.question}</h1>
                        <div className="flex gap-2">
                            <span
                                className="cursor-pointer text-base"
                                onClick={(e) => {
                                    console.log(item);
                                    setIsEditingQuize(true);
                                    setValue("question", item.question);
                                    setValue("option1", item.options[0]);
                                    setValue("option2", item.options[1]);
                                    setValue("option3", item.options[2]);
                                    setValue("option4", item.options[3]);

                                    setValue(
                                        "correctAnswere",
                                        item.correctAnswere
                                    );
                                }}
                            >
                                <FaEdit />
                            </span>
                            <span
                                className="cursor-pointer text-base"
                                onClick={() =>
                                    setTempQuestions((prev) => {
                                        return prev?.filter(
                                            (elem) =>
                                                item.question !== elem.question
                                        );
                                    })
                                }
                            >
                                <MdDeleteForever />
                            </span>
                        </div>
                    </div>
                ))}
                {/* <div className="flex items-center justify-between text-[13px] font-normal bg-gray-200 rounded-md p-2 gap-4">
                    <h1 className="text-wrap">Sample Question 2</h1>
                    <div className="flex gap-2">
                        <span className="cursor-pointer text-base">
                            <FaEdit />
                        </span>
                        <span className="cursor-pointer text-base">
                            <MdDeleteForever />
                        </span>
                    </div>
                </div> */}
                {/* Publish and Cancel Buttons */}
                <div className="flex gap-2 items-center justify-end mt-2">
                    <span>
                        <IconBtn color="#000f">Publish</IconBtn>
                    </span>
                    <Link to={"/admin/course_management/quizes/"}>
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
