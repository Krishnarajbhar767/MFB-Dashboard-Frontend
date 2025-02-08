import React, { useEffect, useState } from "react";
// Import custom Input and SelectDropDown components for form fields
import Input from "../../../../../../Common_Components/Form_Components/Input";
import SelectDropDown from "../../../../../../Common_Components/Form_Components/SelectDropDown";
// Import a custom IconBtn component used for styled action buttons
import IconBtn from "../../../../../../Common_Components/IconBtn";
// Import only the required icons (unused ones have been removed)
import { FaPlus } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";

import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
// Import the Redux action to add a new quiz
import { addNewQuize } from "../../../../../../Redux/Slices/quizesSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

function Admin_Course_Managemnet_Add_Quize() {
    // Retrieve all quizzes from the Redux store (if needed for rendering elsewhere)
    const { allQuizes } = useSelector((state) => state.quize);

    // Get quizId from URL parameters and quiz object from the location state.
    // If either is not provided, we default to false.
    const quizeId = useParams()?.quizeId ?? false;
    const quize = useLocation().state?.quize ?? false;
    const viewQuizePage = useLocation().state?.viewQuizePage ?? false;
    const viewQuizePageData = useLocation().state?.viewQuizePageData ?? false;

    // useNavigate hook to programmatically navigate between routes.
    const navigate = useNavigate();

    // State to hold the quiz data for editing.
    // If a quiz object is provided in the location state, initialize with that; otherwise, null.
    const [currentlyEditingQuize, setCurrentlyEditingQuize] = useState(
        quize ? quize : null
    );

    // State to track whether we are editing an existing quiz.
    // We are in edit mode if both a quizId and a quiz object exist.
    const [isEditingQuize, setIsEditingQuize] = useState(
        quizeId && quize ? true : false
    );

    // Redux dispatch hook for dispatching actions.
    const dispatch = useDispatch();

    // Initialize react-hook-form for managing form state, validation, and handling submissions.
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    /**
     * isQuizeUpdated
     * ---------------
     * Compares the current form values with the original quiz data.
     * Returns true if any field has been updated.
     *
     * Note: In the "else" branch, no explicit false is returned. This is kept as-is per your logic.
     */
    function isQuizeUpdated() {
        const data = getValues();
        if (
            data.author !== currentlyEditingQuize.author ||
            data.title !== currentlyEditingQuize.title ||
            data.publishDate !== currentlyEditingQuize.publishDate ||
            data.course !== currentlyEditingQuize.course ||
            data.timeOut !== currentlyEditingQuize.timeOut
        ) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * clearInput
     * ----------
     * Clears the form fields by setting their values to an empty string.
     */
    function clearInput() {
        setValue("author", "");
        setValue("course", "");
        setValue("publishDate", "");
        setValue("timeOut", "");
        setValue("title", "");
    }

    /**
     * addQuize
     * --------
     * Handler for adding a new quiz.
     * It builds a new quiz object (with an auto-generated _id and an empty questions array),
     * dispatches a Redux action to add the quiz, shows a success toast, and clears the form.
     */
    const addQuize = async (data) => {
        console.log("Printing Data From....JSX", data);
        try {
            const response = {
                ...data,
                questions: [],
                _id: `ebdere9034j39${Math.random()}`,
            }; // Simulated API response with a unique _id.
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

    /**
     * editQuize
     * ---------
     * Handler for editing an existing quiz.
     * It first checks whether any changes have been made using isQuizeUpdated().
     * If changes exist, it constructs an updated quiz object (including the original quiz _id),
     * displays a success toast, navigates back to the quiz list, clears the form,
     * and resets the editing state.
     */
    const editQuize = (data) => {
        if (isQuizeUpdated()) {
            try {
                const reponse = { ...data, quizeId: quize._id };
                if (reponse) {
                    console.log("Printing New Quize Data..", reponse);
                    toast.success("Quize Updated Successfully.");
                    navigate("/admin/course_management/quizes/");
                    clearInput();
                    setCurrentlyEditingQuize(null);
                    setIsEditingQuize(false);
                } else {
                    toast.error("Something went wrong.");
                }
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            toast.error("No Changes Made.");
        }
    };

    /**
     * onSubmit
     * --------
     * The main form submission handler.
     * Depending on whether we are editing an existing quiz or adding a new one,
     * it calls the appropriate handler (editQuize or addQuize).
     */
    async function onSubmit(data) {
        if (isEditingQuize) {
            editQuize(data);
        } else {
            addQuize(data);
        }
    }

    /**
     * useEffect Hook
     * --------------
     * When the component mounts and if we're in edit mode,
     * populate the form fields with the existing quiz data.
     */
    useEffect(() => {
        if (isEditingQuize) {
            setValue("title", quize.title);
            setValue("author", quize.author);
            setValue("publishDate", quize.publishDate);
            setValue("course", quize.course);
            setValue("timeOut", quize.timeOut);
        }
    }, []); // Empty dependency array so this runs only once on mount.

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
            <div className="w-1/2 h-full">
                {/* Form Title and Description */}
                <h1 className="text-lg font-medium">Add Quize To Course</h1>
                <p className="text-sm font-normal">
                    Create A New Quize For your course module
                </p>
                <div className="w-full h-fit bg-white shadow-md mt-4 rounded-md border p-4">
                    {/* Quiz Title Input Field */}
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

                    {/* Two-column layout for Author and Publish Date inputs */}
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
                                        value: /^[A-Za-z\s]+$/, // Only letters and spaces allowed
                                        message:
                                            "Full name must contain only letters and spaces",
                                    },
                                    minLength: {
                                        value: 3,
                                        message:
                                            "Full name must be at least 3 characters long",
                                    },
                                    maxLength: {
                                        value: 50,
                                        message:
                                            "Full name cannot exceed 50 characters",
                                    },
                                }}
                                error={errors?.author}
                            />
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
                                    required: "Date is required",
                                    // Validate that the selected date is in the future.
                                    validate: (value) => {
                                        const getCurrentDateTime = () => {
                                            const now = new Date();
                                            // Format date as yyyy-MM-dd
                                            const date = now
                                                .toISOString()
                                                .split("T")[0];
                                            // Format time as HH:mm
                                            const time = now
                                                .toTimeString()
                                                .split(":")
                                                .slice(0, 2)
                                                .join(":");
                                            return `${date}T${time}`;
                                        };
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

                    {/* Dropdown to select the quiz's course */}
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
                                { value: "8e278eh28746b78", name: "Option 1" },
                                { value: "nd89y3r4349j39r", name: "Option 2" },
                                { value: "fdejf93ry8l3p9", name: "Option 3" },
                            ]}
                            defaultOption={"Choose A Course"}
                        />
                    </div>

                    {/* Quiz Time Limit Input Field */}
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
                    </div>

                    {/* Action Buttons: Submit (Add/Update) and Cancel (if editing) */}
                    <div className="mt-4 space-x-2">
                        <button type="submit">
                            <IconBtn color={"#000f"}>
                                {!isEditingQuize ? (
                                    <span className="flex items-center gap-2 justify-center">
                                        <FaPlus /> Add Quize
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2 justify-center">
                                        <IoSaveSharp /> Update Quize
                                    </span>
                                )}
                            </IconBtn>
                        </button>
                        {isEditingQuize && (
                            <button
                                type="button"
                                onClick={() => {
                                    // Cancel edit mode: reset editing states and navigate back.
                                    setIsEditingQuize(false);
                                    setCurrentlyEditingQuize(null);
                                    if (viewQuizePage) {
                                        navigate(
                                            `/admin/course_management/quizes/view_quize/${quizeId}`,
                                            {
                                                state: {
                                                    quiz: viewQuizePageData,
                                                },
                                            }
                                        );
                                    } else {
                                        //
                                        navigate(
                                            `/admin/course_management/quizes/`
                                        );
                                    }
                                }}
                            >
                                <IconBtn textColor={"#1f2937"}>
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

export default Admin_Course_Managemnet_Add_Quize;
