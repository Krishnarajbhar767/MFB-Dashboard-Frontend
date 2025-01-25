import React, { useState } from "react";
import Input from "../../../../../../Common_Components/Form_Components/Input";
import { useForm } from "react-hook-form";
import TextArea from "../../../../../../Common_Components/Form_Components/TextArea";
import SelectDropDown from "../../../../../../Common_Components/Form_Components/SelectDropDown";
import IconBtn from "../../../../../../Common_Components/IconBtn";
import { FaEdit, FaPlus, FaSave } from "react-icons/fa";
import { MdDeleteForever, MdOutlineCancel } from "react-icons/md";
import toast from "react-hot-toast";

function Admin_Course_Managemnet_Add_Quize() {
    // Temp Array For Hold Multiple Quizes  And Render Quizes
    const [isEditingQuize, setIsEditingQuize] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();
    // State For Hold RIght ANsere INDEX---

    const [correctOption, setCorrectOption] = useState(null);
    const [tempQuizes, setTempQuizes] = useState([]);

    // Function For Clear Input Feild
    function clearInput() {
        setValue("quizeAuthor");
        setValue("quizeCourse");
        setValue("quizeAuthor");
        setValue("quizeOption1");
        setValue("quizeOption2");
        setValue("quizeOption3");
        setValue("quizeOption4");
        setValue("quizePdfFile");
        setValue("quizeQuestion");
        setValue("quizeScheduleDate");
        setValue("quizeTimeLimit");
    }
    // Function For Handle Add New Quizes
    const addNewQuizeHandler = async (data) => {
        // Check FOr Duplicate Quizes...
        if (
            tempQuizes.some(
                (quize) =>
                    quize.quizeQuestion.replace(/[^a-zA-Z0-9]/g, "") ===
                    data.quizeQuestion.replace(/[^a-zA-Z0-9]/g, "")
            )
        ) {
            toast.error("Question Already Exist...");
            return;
        }

        // Check FOr atleast one Answere is Available...
        if (!correctOption) {
            toast.error("Please Choose the correct answere...");
            return;
        }

        // Setting The FUll fledge Object For Send data;

        setTempQuizes((prev) => [
            ...prev,
            { ...data, correctAnswere: data[correctOption] },
        ]);
        // After Quize Insertion Clear All The Temp Data...
        clearInput();
        console.log("Printing Quize.....", tempQuizes);
    };
    // Function For Handle Edit Quize
    const editQuizeHandler = () => {};

    // Funtion for Handle Submit
    async function onSubmit(data) {
        if (isEditingQuize) {
            // assuming Quize Editing Is true And Calling Edit Quize FUntion
            editQuizeHandler(data);
        } else {
            // If not Editing The Quize Then Call The Add Quize FUnction
            addNewQuizeHandler(data);
        }
    }
    // Function For Cheking Is Something Changed or not in Privios Form Data Before Edting The Quize.......
    const isQuizeUpdated = (priviousQuizeData) => {
        const quizeData = getValues();
        if (
            priviousQuizeData.quizeAuthor !== quizeData.quizeAuthor ||
            priviousQuizeData.quizeScheduleDate !==
                quizeData.quizeScheduleDate ||
            priviousQuizeData.quizeCourse !== quizeData.quizeCourse ||
            priviousQuizeData.quizeTimeLimit !== quizeData.quizeTimeLimit ||
            priviousQuizeData.quizePdfFile !== quizeData.quizePdfFile ||
            priviousQuizeData.quizeQuestion !== quizeData.quizeQuestion ||
            priviousQuizeData.quizeOption1 !== quizeData.quizeOption1 ||
            priviousQuizeData.quizeOption2 !== quizeData.quizeOption2 ||
            priviousQuizeData.quizeOption3 !== quizeData.quizeOption3 ||
            priviousQuizeData.quizeOption4 !== quizeData.quizeOption4
        ) {
            return true;
        } else {
            return false;
        }
    };
    return (
        <form
            className="flex justify-center gap-6"
            onSubmit={handleSubmit(onSubmit, (err) => {
                console.log(
                    "Error Accured WHile Submiting The Add New Quize",
                    err
                );
            })}
        >
            <div className="w-1/2  h-full ">
                <h1 className="text-lg font-medium ">Add Quize To Module</h1>
                <p className="text-sm font-normal ">
                    Create A New Quize For your course module
                </p>
                <div className="w-full h-fit bg-white shadow-md mt-4 rounded-md border p-4">
                    {/* Quize Author  And DAte Of Publish */}
                    <div className="flex gap-2">
                        <div className="mt-2 w-1/2">
                            <Input
                                label={"Quize Author"}
                                placeholder={"Enter Quize Author Name"}
                                type={"text"}
                                register={register}
                                inputName="quizeAuthor"
                                required={true}
                                validation={{
                                    required: "Full name is required", // Error message if the field is empty
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/, // Only letters and spaces are allowed
                                        message:
                                            "Full name must contain only letters and spaces", // Error message for invalid characters
                                    },
                                    minLength: {
                                        value: 3,
                                        message:
                                            "Full name must be at least 3 characters long", // Error message if name is too short
                                    },
                                    maxLength: {
                                        value: 50,
                                        message:
                                            "Full name cannot exceed 50 characters", // Error message if name is too long
                                    },
                                }}
                                error={errors?.quizeAuthor}
                            />
                        </div>
                        <div className="mt-2 w-1/2">
                            <Input
                                label={"Quize Publish Date If Possibale"}
                                placeholder={"Quize Publish Date"}
                                type={"datetime-local"}
                                register={register}
                                inputName="quizeScheduleDate"
                                required={true}
                                error={errors?.quizeScheduleDate}
                                validation={{
                                    required: "Date is required", // Error message if the field is empty
                                    validate: (value) => {
                                        const getCurrentDateTime = () => {
                                            const now = new Date();

                                            // Format the date as yyyy-MM-dd
                                            const date = now
                                                .toISOString()
                                                .split("T")[0];

                                            // Format the time as HH:mm
                                            const time = now
                                                .toTimeString()
                                                .split(":")
                                                .slice(0, 2)
                                                .join(":");

                                            // Combine date and time
                                            return `${date}T${time}`;
                                        };
                                        // Example usage
                                        const currentDateTime =
                                            getCurrentDateTime();

                                        return (
                                            value > currentDateTime ||
                                            "Schdule date must bew valid"
                                        );
                                    },
                                }}
                            />
                        </div>
                    </div>

                    {/* Quize Course  */}
                    <div className="mt-2">
                        <SelectDropDown
                            register={register}
                            inputName={"quizeCourse"}
                            required={true}
                            error={errors?.quizeCourse}
                            selectName={"Quize Course"}
                            selectId={"quizeCourse"}
                            label={"Select Course"}
                            options={[
                                { value: "option1", name: "Option 1" },
                                { value: "option2", name: "Option 2" },
                                { value: "option3", name: "Option 3" },
                            ]}
                            defaultOption={"Choose A Course"}
                        />
                    </div>

                    <div className="mt-2">
                        <Input
                            label={"Quize Time Limit (Minute)"}
                            placeholder={"Enter Quize Time Limit"}
                            type={"text"}
                            register={register}
                            inputName="quizeTimeLimit"
                            required={true}
                            error={errors?.quizeTimeLimit}
                        />
                    </div>
                    {/* Quiestion And Answere Section Container */}
                    <div className="border p-4 rounded-md mt-2 space-y-2">
                        {/* Upload Pdf Section If Available.... */}
                        <div>
                            <Input
                                label={"Upload Quize File (If Available) "}
                                type={"file"}
                                accept="application/pdf,application/vnd.ms-excel"
                                register={register}
                                inputName="quizePdfFile"
                                error={errors?.quizePdfFile}
                            />
                        </div>
                        {/* Question Text Area */}
                        <div>
                            <TextArea
                                label={"Question"}
                                placeholder={"Enter Quize Question"}
                                register={register}
                                inputName="quizeQuestion"
                                required={true}
                                error={errors.quizeQuestion}
                            />
                        </div>
                        {/* Quize Options 1 */}
                        <div className="flex gap-3 items-center">
                            <input
                                type="radio"
                                name="quizeOptionRadio"
                                id="quizeOption1"
                                onClick={(e) =>
                                    setCorrectOption((prev) => "quizeOption1")
                                }
                            />
                            <div className="w-full" id="quizeOption">
                                <Input
                                    placeholder={"Option 1"}
                                    register={register}
                                    inputName="quizeOption1"
                                    required={true}
                                    error={errors.quizeOption1}
                                />
                            </div>
                        </div>
                        {/* Quize Options 2 */}
                        <div className="flex gap-3 items-center">
                            <input
                                type="radio"
                                name="quizeOptionRadio"
                                id="quizeOption2"
                                onClick={(e) =>
                                    setCorrectOption((prev) => "quizeOption2")
                                }
                            />
                            <div className="w-full" id="quizeOption">
                                <Input
                                    placeholder={"Option 2"}
                                    register={register}
                                    inputName="quizeOption2"
                                    required={true}
                                    error={errors.quizeOption2}
                                />
                            </div>
                        </div>
                        {/* Quize Options 3 */}
                        <div className="flex gap-3 items-center">
                            <input
                                type="radio"
                                name="quizeOptionRadio"
                                id="quizeOption3"
                                onClick={(e) =>
                                    setCorrectOption((prev) => "quizeOption3")
                                }
                            />
                            <div className="w-full" id="quizeOption">
                                <Input
                                    placeholder={"Option 3"}
                                    register={register}
                                    inputName="quizeOption3"
                                    required={true}
                                    error={errors.quizeOption3}
                                />
                            </div>
                        </div>
                        {/* Quize Options 4 */}
                        <div className="flex gap-3 items-center">
                            <input
                                type="radio"
                                name="quizeOptionRadio"
                                id="quizeOption4"
                                onClick={(e) =>
                                    setCorrectOption((prev) => "quizeOption4")
                                }
                            />
                            <div className="w-full">
                                <Input
                                    placeholder={"Option 4"}
                                    register={register}
                                    inputName="quizeOption4"
                                    required={true}
                                    error={errors.quizeOption4}
                                />
                            </div>
                        </div>
                        <div className="w-full  flex items-center justify-center gap-4">
                            <button type="submit" className="">
                                <IconBtn color={"#000f"}>
                                    {isEditingQuize ? <FaSave /> : <FaPlus />}
                                    {isEditingQuize
                                        ? "Save Quize"
                                        : "Add Quize"}
                                </IconBtn>
                            </button>
                            {isEditingQuize && (
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        setIsEditingQuize(false);
                                        clearInput();
                                    }}
                                >
                                    <IconBtn color={"#000f"}>
                                        <MdOutlineCancel /> Cancel
                                    </IconBtn>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40%] h-fit bg-white shadow-md rounded-md mt-16 border p-4 space-y-2">
                {/* Render Quizes Dynamicaly */}
                {tempQuizes &&
                    tempQuizes?.map((quize, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between text-[13px] font-normal bg-gray-200 rounded-md p-2 gap-4"
                        >
                            <h1 className="text-wrap">{quize.quizeQuestion}</h1>
                            <div className="flex gap-2">
                                <span
                                    className="cursor-pointer text-base"
                                    onClick={(e) => {
                                        setIsEditingQuize(true);
                                        setValue(
                                            "quizeAuthor",
                                            quize.quizeAuthor
                                        );
                                        setValue(
                                            "quizeCourse",
                                            quize.quizeCourse
                                        );
                                        setValue(
                                            "quizeAuthor",
                                            quize.quizeAuthor
                                        );
                                        setValue(
                                            "quizeOption1",
                                            quize.quizeOption1
                                        );
                                        setValue(
                                            "quizeOption2",
                                            quize.quizeOption2
                                        );
                                        setValue(
                                            "quizeOption3",
                                            quize.quizeOption3
                                        );
                                        setValue(
                                            "quizeOption4",
                                            quize.quizeOption4
                                        );
                                        setValue(
                                            "quizePdfFile",
                                            quize.quizePdfFile
                                        );
                                        setValue(
                                            "quizeQuestion",
                                            quize.quizeQuestion
                                        );
                                        setValue(
                                            "quizeScheduleDate",
                                            quize.quizeScheduleDate
                                        );
                                        setValue(
                                            "quizeTimeLimit",
                                            quize.quizeTimeLimit
                                        );
                                        console.log(
                                            "Printing QUize Time Limit....",
                                            quize.quizeTimeLimit
                                        );
                                        setCorrectOption(null);
                                        console.log(
                                            "Printing Quize.....",
                                            tempQuizes
                                        );
                                    }}
                                >
                                    <FaEdit />
                                </span>
                                <span
                                    className="cursor-pointer text-base"
                                    onClick={() =>
                                        setTempQuizes((prev) => {
                                            return prev?.filter(
                                                (elem) =>
                                                    quize.quizeQuestion !==
                                                    elem.quizeQuestion
                                            );
                                        })
                                    }
                                >
                                    <MdDeleteForever />
                                </span>
                            </div>
                        </div>
                    ))}
                <div className="flex gap-2 items-center justify-end mt-2">
                    <span>
                        <IconBtn color={"#000f"}>Publish</IconBtn>
                    </span>
                    <span>
                        <IconBtn color={"#808080"} textColor={"#222222"}>
                            Cancel
                        </IconBtn>
                    </span>
                </div>
            </div>
        </form>
    );
}

export default Admin_Course_Managemnet_Add_Quize;
