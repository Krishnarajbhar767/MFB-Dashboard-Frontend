import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

// Import form components and icons
import Input from "../../../../../../Common_Components/Form_Components/Input";
import SelectDropDown from "../../../../../../Common_Components/Form_Components/SelectDropDown";
import IconBtn from "../../../../../../Common_Components/IconBtn";
import { FaPlus, FaSave } from "react-icons/fa";

// Import API & Redux action
import { adminCourseManagementApis } from "../../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
import { setIsQuizModified } from "../../../../../../Redux/Slices/quizesSlice";
import { customApiErrorHandler } from "../../../../../../Utils/Error/cutomApiErrorHandler";
import { MdCancel } from "react-icons/md";
import {
    AdminCustomInput,
    AdminCustomSelect,
} from "../../../../../../Common_Components/Form_Components/AdminCustomInputs";

function Admin_Course_Managemnet_Add_Quize() {
    const { allCourses } = useSelector((state) => state.allCourses);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const editingQuiz = location?.state?.editingQuiz ?? null;
    console.log("editingQuiz", editingQuiz);
    // Initialize form with react-hook-form
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm();

    // Clears input fields after quiz creation

    const isQuizeUpdated = (currentData, originalData) => {
        return (
            currentData.author !== originalData.author ||
            currentData.title !== originalData.title ||
            currentData.time_date !== originalData.time_date ||
            currentData.course !== originalData.course ||
            currentData.timelimit !== originalData.timelimit ||
            currentData.status !== originalData.status
        );
    };
    function clearInput() {
        setValue("author", "");
        setValue("courseId", "");
        setValue("time_date", "");
        setValue("timelimit", "");
        setValue("title", "");
        setValue("status", "");
    }

    // Adds a new quiz
    const addQuizHandler = async (data) => {
        const toastId = toast.loading("Creating Quiz...");
        try {
            const response = await adminCourseManagementApis.createQuize(data);
            if (!response) return toast.error("Something went wrong.");
            dispatch(setIsQuizModified(true));
            toast.success("Quiz created successfully.");
            clearInput();
        } catch (error) {
            const err = customApiErrorHandler(
                error,
                "Error while creating quiz"
            );
            toast.error(err);
        } finally {
            toast.dismiss(toastId);
        }
    };
    const editQuizHandler = async (data) => {
        if (!isQuizeUpdated(data, editingQuiz))
            return toast.error(
                "Nothing has changed. Try updating some fields before saving."
            );

        const toastId = toast.loading("Hang tight! Updating your quiz...");
        try {
            const res = await adminCourseManagementApis.editQuiz(
                data,
                data.courseId,
                editingQuiz._id
            );
            if (!res) return toast.error("Something went wrong...");
            toast.dismiss(toastId);
            toast.success("Awesome! Your quiz has been updated.");
            dispatch(setIsQuizModified(true));
            navigate(-1);
        } catch (error) {
            const err = customApiErrorHandler(
                error,
                "Error While updating Quiz"
            );
            toast.error(err);
        } finally {
            toast.dismiss(toastId);
        }
    };

    useEffect(() => {
        if (editingQuiz) {
            setValue("title", editingQuiz.title);
            setValue("author", editingQuiz.author);
            setValue("time_date", editingQuiz.time_date);
            setValue("courseId", editingQuiz.courseId);
            setValue("timelimit", editingQuiz.timelimit);
            setValue("status", editingQuiz.status);
        }
    }, [editingQuiz]);

    return (
        <form
            className="flex justify-center gap-6"
            onSubmit={handleSubmit(
                editingQuiz ? editQuizHandler : addQuizHandler
            )}
        >
            <div className="w-1/2 h-full">
                <h1 className="text-lg font-medium">Add Quiz To Course</h1>
                <p className="text-sm font-normal">
                    Create a new quiz for your course module
                </p>

                <div className="w-full h-fit bg-white shadow-md mt-4 rounded-md border p-4 space-y-2">
                    {/* Quiz Title */}
                    {/* <Input
                        label="Quiz Title*"
                        placeholder="Enter quiz title"
                        type="text"
                        register={register}
                        inputName="title"
                        minLength={3}
                        maxLength={100}
                        error={errors?.title}
                        validation={{
                            required: "Title is required",
                            minLength: {
                                value: 10,
                                message: "Title must be at least 10 characters",
                            },
                            maxLength: {
                                value: 200,
                                message: "Title cannot exceed 200 characters",
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9 ]+$/,
                                message:
                                    "Only letters, numbers, and spaces are allowed",
                            },
                        }}
                    /> */}
                    {/* 11/03/25 Added Need To Change all Inputs */}
                    <AdminCustomInput
                        label="Quiz Title*"
                        placeholder="Enter quiz title"
                        registerOptions={register("title", {
                            required: "Quiz title is required*",
                            minLength: {
                                value: 10,
                                message: "Title must be at least 10 characters",
                            },
                            maxLength: {
                                value: 200,
                                message: "Title cannot exceed 200 characters",
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9 ]+$/,
                                message:
                                    "Only letters, numbers, and spaces are allowed",
                            },
                        })}
                        error={errors?.title}
                    />

                    {/* Author & Publish Date */}
                    <div className="flex gap-2 w-full">
                        <div className="w-1/2">
                            <AdminCustomInput
                                label="Quiz Author*"
                                placeholder="Author name"
                                registerOptions={register("author", {
                                    required: "Author is required*",
                                    minLength: {
                                        value: 3,
                                        message:
                                            "Author name must be at least 3 characters",
                                    },
                                    maxLength: {
                                        value: 30,
                                        message:
                                            "Author name exceed 30 characters",
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z ]+$/,
                                        message:
                                            "Only letters and spaces are allowed",
                                    },
                                })}
                                error={errors?.author}
                            />
                        </div>
                        <div className="w-1/2">
                            <AdminCustomInput
                                label="Publish Date*"
                                type="datetime-local"
                                placeholder="Publish Date"
                                registerOptions={register("time_date", {
                                    required: "Publish date is required*",
                                    validate: (value) => {
                                        const today = new Date()
                                            .toISOString()
                                            .slice(0, 16); //new Date().toISOString() → Converts the date to ISO 8601 format (YYYY-MM-DDTHH:MM:SS.sssZ).
                                        //.slice(0, 16) → Extracts only the "YYYY-MM-DDTHH:MM" part.

                                        const d1 = new Date(value);
                                        const d2 = new Date(today);
                                        if (d1 < d2) {
                                            return "Publish date cannot be in the past.";
                                        }
                                    },
                                })}
                                error={errors?.time_date}
                            />
                        </div>
                    </div>

                    <AdminCustomSelect
                        defaultOption="Choose A Course"
                        disabled={editingQuiz ? true : false}
                        label="Course*"
                        registerOptions={register("courseId", {
                            required: "Course is required*",
                        })}
                        error={errors.courseId}
                        options={allCourses?.map((item) => ({
                            value: item?._id,
                            id: item?._id,
                            label: item?.courseTitle,
                        }))}
                    />

                    <AdminCustomInput
                        type="number"
                        label="Quiz Time Limit (Minutes)*"
                        placeholder="Enter time limit"
                        registerOptions={register("timelimit", {
                            required: "Timelimit is required*",

                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Only numbers are allowed",
                            },
                        })}
                        error={errors?.timelimit}
                    />

                    <AdminCustomSelect
                        defaultOption="Status"
                        label="Status of quiz"
                        registerOptions={register("status", {
                            required: "Status is required*",
                        })}
                        error={errors.status}
                        options={[
                            { value: "draft", label: "Draft" },
                            { value: "public", label: "Public" },
                        ]}
                    />

                    {/* Submit Button */}
                    <div className="mt-4 space-x-4">
                        <button type="submit">
                            <IconBtn color={"#000f"}>
                                <span className="flex items-center gap-2 justify-center">
                                    {editingQuiz ? <FaSave /> : <FaPlus />}{" "}
                                    {editingQuiz ? "Save Quiz" : "Add Quiz"}
                                </span>
                            </IconBtn>
                        </button>
                        <button type="button" onClick={() => navigate(-1)}>
                            <IconBtn color={"#000f"}>
                                <span className="flex items-center gap-2 justify-center">
                                    <MdCancel /> Cancel
                                </span>
                            </IconBtn>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Admin_Course_Managemnet_Add_Quize;
