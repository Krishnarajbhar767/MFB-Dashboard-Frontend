import React, { useState } from "react";
import Input from "../../../../../../Common_Components/Form_Components/Input";
import { useForm } from "react-hook-form";
import TextArea from "../../../../../../Common_Components/Form_Components/TextArea";
import SelectDropDown from "../../../../../../Common_Components/Form_Components/SelectDropDown";
import IconBtn from "../../../../../../Common_Components/IconBtn";
import { FaEdit, FaPlus, FaSave } from "react-icons/fa";
import { MdDeleteForever, MdOutlineCancel } from "react-icons/md";

import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addNewQuize } from "../../../../../../Redux/Slices/quizesSlice";

function Admin_Course_Managemnet_Add_Quize() {
    // Temp Array For Hold Multiple Quizes  And Render Quizes
    const [isEditingQuize, setIsEditingQuize] = useState(false);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    // Function For Clear Input Feild
    function clearInput() {
        setValue("author");
        setValue("course");
        setValue("publishDate");
        setValue("timeOut");
        setValue("title");
    }

    const addQuize = async (data) => {
        console.log("Printing Data From....JSX", data);
        try {
            const response = {
                ...data,
                questions: [],
                _id: `ebdere9034j39${Math.random()}`,
            }; // Assuming Got APi Reponse
            if (response) {
                dispatch(addNewQuize(response));
                toast.success("Quize created successfully..");
                clearInput();
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    };
    const editQuize = () => {};
    async function onSubmit(data) {
        if (isEditingQuize) {
            editQuize();
        } else {
            addQuize(data);
        }
    }
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
                <h1 className="text-lg font-medium ">Add Quize To Course</h1>
                <p className="text-sm font-normal ">
                    Create A New Quize For your course module
                </p>
                <div className="w-full h-fit bg-white shadow-md mt-4 rounded-md border p-4">
                    {/* Quize Author  And DAte Of Publish */}
                    <Input
                        label={"Quize Title*"}
                        placeholder={"Enter quize title"}
                        type={"text"}
                        register={register}
                        inputName="title"
                        required={true}
                        minLength={3}
                        maxLength={25}
                        error={errors?.title}
                    />
                    <div className="flex gap-2">
                        <div className="mt-2 w-1/2">
                            <Input
                                label={"Author Name*"}
                                placeholder={"Enter Quize Author Name"}
                                type={"text"}
                                register={register}
                                inputName="author"
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
                                error={errors?.author}
                            />
                            {/* {errors.course && (
                                <span className="text-sm text-red-500">
                                    Author name is required
                                </span>
                            )} */}
                        </div>
                        <div className="mt-2 w-1/2">
                            <Input
                                label={"Quize Publish Date*"}
                                placeholder={"Quize Publish Date"}
                                type={"datetime-local"}
                                register={register}
                                inputName="publishDate"
                                required={true}
                                error={errors?.publishDate}
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
                            {/* {errors.publishDate && (
                                <span className="text-sm text-red-500">
                                    Publish date is required
                                </span>
                            )} */}
                        </div>
                    </div>

                    {/* Quize Course  */}
                    <div className="mt-2">
                        <SelectDropDown
                            register={register}
                            inputName={"course"}
                            required={true}
                            error={errors?.course}
                            selectName={"Quize Course"}
                            selectId={"course"}
                            label={"Select Course*"}
                            options={[
                                // This Section Come From All Courses Api Call...
                                {
                                    value: "8e638fwofuw7hr87y",
                                    name: "Option 1",
                                    id: "8e638fwofuw7hr87y",
                                },
                                {
                                    value: "8e638fwofuw7hr87y",
                                    name: "Option 2",
                                    id: "8e6387soo8wphr87y",
                                },
                                {
                                    value: "8e638fwofuw7hr87y",
                                    name: "Option 3",
                                    id: "8e6387hr8dsdius7y",
                                },
                            ]}
                            defaultOption={"Choose A Course"}
                        />
                        {/* {errors.course && (
                            <span className="text-sm text-red-500">
                                Course is required
                            </span>
                        )} */}
                    </div>

                    <div className="mt-2">
                        <Input
                            label={"Quize Time Limit (Minute)*"}
                            placeholder={"Enter Quize Time Limit"}
                            type={"number"}
                            register={register}
                            inputName="timeOut"
                            required={true}
                            error={errors?.timeOut}
                        />
                        {/* {errors.timeOut && (
                            <span className="text-sm text-red-500">
                                Timout is required
                            </span>
                        )} */}
                    </div>
                    <div className="mt-4">
                        <button type="submit">
                            <IconBtn color={"#000f"}>
                                <FaPlus /> Add Quize
                            </IconBtn>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Admin_Course_Managemnet_Add_Quize;
