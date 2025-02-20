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
import { set, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
    AdminCustomInput,
    AdminCustomSelect,
    AdminCustomTextarea,
} from "../../../../../../Common_Components/Form_Components/AdminCustomInputs";
import { useDispatch, useSelector } from "react-redux";
import UploadFile from "../../../../../../Common_Components/UploadFile";
import { customApiErrorHandler } from "../../../../../../Utils/Error/cutomApiErrorHandler";
import { adminCourseManagementApis } from "../../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
import { setIsCoursesModified } from "../../../../../../Redux/Slices/All_Courses";

// Component for adding a new lesson within the admin panel
function Admin_Add_New_Lesson() {
    // Initializing form management and state variables
    // importing Courses Through Selector
    const { allCourses } = useSelector((state) => state.allCourses);
    const dispatch = useDispatch(); // dispatch for dispatch Redux action Course Modified
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        unregister,
        watch,
        formState: { errors },
    } = useForm();
    /* ------------------------------------------------------States--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */
    // State For Hold Url Of Video After Video upload Is Complete
    const [videoUrl, setVideoUrl] = useState(null);
    // State For Check Is I AM On Editing Mode Or Not?
    const [isEditingLesson, setIsEditingLesson] = useState(false);
    // State For Hold All Modules When Course Is Selected
    const [modules, setModules] = useState(null);
    // State For Change Key Of Upload File Components When A SuccessFull Lesson Created
    const [uploadFileKey, setUploadFileKey] = useState(1);
    /* ------------------------------------------------------Functions-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
    const addLessonHandler = async (data) => {
        // Check is That Lesson Already Exits Or Not
        //  get That One Course From ALl Courses
        const course = allCourses?.filter(
            (course) => course._id === data.courseId
        );

        if (isLessonAlreadyExist(course, data)) {
            toast.error("Lesson Already Exits");
            return;
        }

        if (!videoUrl) {
            toast.error("Please Upload Video File First.");
            return;
        }

        // Insert Video Url To  Data Object
        data.videoUrl = videoUrl;
        // Now Everything is Fine We Can call Our Real api to Add Lesson TO Course
        const loadingToastId = toast.loading("Creating....");
        try {
            const response = await adminCourseManagementApis.createLesson(data);

            if (!response) {
                toast.error("Something went wrong!");
                return;
            }

            toast.success("Lesson Created successfully");
            // If Evrything is fine then set isCoursesModified True Fro Fetch All Courses Data

            dispatch(setIsCoursesModified(true));
            // clear inputs
            clearInput();
            // Increament Key FOr Re-Render File Upload Component
            setUploadFileKey((prev) => prev + 1);
        } catch (error) {
            const err = customApiErrorHandler(
                error,
                "Add New Lesson Craee New Lesson"
            );
            toast.error(err);
        } finally {
            toast.dismiss(loadingToastId);
        }
    };
    // Function For Edit Lesson
    const isLessonAlreadyExist = (course, newLesson) => {
        const modules = course[0]?.modules;
        let isExist;
        for (const module of modules) {
            for (const lesson of module.lessons) {
                if (
                    lesson?.lessontitle
                        ?.replace(/[^a-zA-Z0-9]/g, "")
                        .toLowerCase() ===
                    newLesson?.lessontitle
                        ?.replace(/[^a-zA-Z0-9]/g, "")
                        .toLowerCase()
                ) {
                    isExist = true;
                    break;
                } else {
                    isExist = false;
                }
            }
        }
        return isExist;
    };

    // Function For Clear Inputs
    function clearInput() {
        setValue("courseId", "");
        setValue("moduleId", "");
        setValue("lessontitle", "");
        setValue("content", "");
        setValue("duration", "");
        setValue("isFree", "");
        setVideoUrl(null);
    }
    // Function For Check Is That Lesson Already Exit In Selected Module
    function editLessonHandler(course) {}
    return (
        <div>
            {/* Form Create And Edit Lesson Data */}
            <div className="w-1/2 border  rounded-md bg-white shadow-sm p-4 space-y-3 mx-auto ">
                <h1 className="text-xl text-gray-700 font-medium ">
                    Add Lesson To Course
                </h1>
                {/* Select Course  */}
                {/* Video Upload Section */}
                <div className="flex items-center w-full flex-col">
                    <h1 className="place-self-start  text-sm font-medium text-gray-700 mb-3">
                        Lesson Video*
                    </h1>

                    <UploadFile
                        key={uploadFileKey}
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
                        onChange={(e) => {
                            // 67b587c155b50b2aa2d9e3cd
                            const courseId = e.target.value;
                            const course = allCourses.find(
                                (course) => course._id === courseId
                            );
                            const modules = course
                                ? course?.modules?.map((module) => {
                                      return {
                                          id: module?._id,
                                          label: module?.moduletitle,
                                          value: module?._id,
                                      };
                                  })
                                : null;

                            setModules((prev) => modules);
                            console.log(
                                "Printing Course Modules ---->",
                                modules
                            );
                        }}
                    />
                </div>
                {/* Course Module  */}
                <div>
                    <AdminCustomSelect
                        label="Module*"
                        options={modules}
                        registerOptions={register("moduleId", {
                            required: "Module is required please choose",
                        })}
                        defaultOption="Select Module"
                        error={errors.moduleId}
                        disabled={modules ? false : true}
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
