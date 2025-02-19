// Importing necessary modules and components
import React, { useState, useRef, useEffect } from "react";
import Input from "../../../../../../Common_Components/Form_Components/Input";
import {
    Checkbox,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import TextArea from "../../../../../../Common_Components/Form_Components/TextArea";
import IconBtn from "../../../../../../Common_Components/IconBtn";
import { FaPlus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FcLink } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
    AdminCustomInput,
    AdminCustomSelect,
    AdminCustomTextarea,
} from "../../../../../../Common_Components/Form_Components/AdminCustomInputs";
import { useSelector } from "react-redux";
import UploadFile from "../../../../../../Common_Components/UploadFile";

// Component for adding a new lesson within the admin panel
function Admin_Add_New_Lesson({}) {
    // Initializing form management and state variables
    // importing Courses Through Selector
    const { allCourses } = useSelector((state) => state.allCourses);

    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        unregister,
        formState: { errors },
    } = useForm();
    /* ------------------------------------------------------States--------------------------------------------------------------------------------------------------------------------------------------------------------
     */
    // State For Hold Url Of Video After Video upload Is Complete
    const [videoUrl, setVideoUrl] = useState(null);
    // State For Check Is I AM On Editing Mode Or Not?
    const [isEditingLesson, setIsEditingLesson] = useState(false);
    /* ------------------------------------------------------Functions-----------------------------------------------------------------------------------------------------------------------------------------------------
     */
    // Form Submit Handler
    const onSubmit = (data) => {
        // If Editing Lesson and When I Submit The Form Then Run Edit Lesson Handler Otherwise Add Lesson Handler
        if (isEditingLesson) {
            editLessonHandler(data);
        } else {
            addLessonHandler(data);
        }
    };
    // Function For Add Lesson
    const addLessonHandler = (data) => {
        console.log("Printing Lesson Data ---->", data);
    };
    // Function For Edit Lesson
    const editLessonHandler = () => {};

    return (
        <div>
            <h1>Add Lesson To Course</h1>
            {/* Form Create And Edit Lesson Data */}
            <div className="w-1/2 border border-black p-4 space-y-3">
                {/* Select Course  */}
                {/* Video Upload Section */}
                <div className="flex items-center w-full flex-col">
                    <h1 className="place-self-start  text-sm font-medium text-gray-700 mb-3">
                        Lesson Video*
                    </h1>

                    <UploadFile
                        allowedType={"video"}
                        maxFileSizeMB={4000}
                        onUploadComplete={(url) => setVideoUrl((prev) => url)}
                    />
                </div>
                <div>
                    <AdminCustomSelect
                        label="Course*"
                        options={allCourses?.map((item) => ({
                            value: item?._id,
                            id: item?._id,
                            label: item?.courseTitle,
                        }))}
                        registerOptions={register("courseId", {
                            required: "Course is required Please Choose.",
                        })}
                        defaultOption="Select Course"
                        error={errors.courseId}
                    />
                </div>
                {/* Course Module  */}
                <div>
                    <AdminCustomSelect
                        label="Module*"
                        options={allCourses?.map((item) => ({
                            value: item?._id,
                            id: item?._id,
                            label: item?.courseTitle,
                        }))}
                        registerOptions={register("moduleId", {
                            required: "Module is required please choose",
                        })}
                        defaultOption="Select Module"
                        error={errors.moduleId}
                    />
                </div>
                {/* Course Title */}
                <div>
                    <AdminCustomInput
                        label="Lesson Title*"
                        placeholder="Enter lesson title"
                        registerOptions={register("lessontitle", {
                            required: "Lesson title is required",
                        })}
                        error={errors.lessontitle}
                    />
                </div>
                {/* Lesson Content Or Description */}
                <div>
                    <AdminCustomTextarea
                        label="Lesson Description*"
                        placeholder="Enter lesson description Or Content"
                        registerOptions={register("content", {
                            required: "Lesson Description is required",
                        })}
                        error={errors.content}
                    />
                </div>
                {/* Video Duration */}
                <div>
                    <AdminCustomInput
                        type="number"
                        label="Lesson Duration (Minutes)*"
                        placeholder="Enter lesson run time"
                        registerOptions={register("duration", {
                            required: "Lesson duration is required",
                        })}
                        error={errors.duration}
                    />
                </div>
                {/* Resources Container */}

                <div>
                    <AdminCustomSelect
                        label="Free Or Paid*"
                        options={[
                            { value: false, id: "Paid", label: "Paid" },
                            { value: true, id: "Free", label: "Free" },
                        ]}
                        defaultOption="Choose Status Of Course"
                        registerOptions={register("isFree", {
                            required: "Course Status Is Required",
                        })}
                    />
                </div>
                <div className="w-fit mx-auto">
                    <button
                        onClick={handleSubmit(onSubmit)}
                        type="button"
                        class=" py-2.5 px-6 text-sm rounded-lg bg-gray-700 text-white cursor-pointer font-normal text-center shadow-xs transition-all duration-500 hover:bg-gray-900"
                    >
                        Add Lesson
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Admin_Add_New_Lesson;
