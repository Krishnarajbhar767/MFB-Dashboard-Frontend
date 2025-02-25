// Import required React hooks and libraries
import React, { useState } from "react";
// Import custom form components
import {
    AdminCustomInput,
    AdminCustomSelect,
} from "../../../../../Common_Components/Form_Components/AdminCustomInputs";
// Rich text editor components
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// Form handling utilities
import { useForm } from "react-hook-form";
// File upload component and icons
import UploadFile from "../../../../../Common_Components/UploadFile";
import { MdCloudUpload } from "react-icons/md";
// Redux hooks for state management
import { useDispatch, useSelector } from "react-redux";
import { setIsCoursesModified } from "../../../../../Redux/Slices/All_Courses";
import toast from "react-hot-toast";
import { adminCourseManagementApis } from "../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
import { customApiErrorHandler } from "../../../../../Utils/Error/cutomApiErrorHandler";

function Admin_Add_Resource() {
    // REDUX STATE MANAGEMENT
    const { allCourses } = useSelector((state) => state.allCourses);
    const dispatch = useDispatch();

    // FORM HANDLING SETUP
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        watch,
        formState: { errors },
    } = useForm();

    // COMPONENT STATE MANAGEMENT
    const [pdfsfile, Setpdfsfile] = useState(null); // Holds uploaded PDF file URL
    const [isEditingResource, setIsEditingResource] = useState(false); // Edit mode flag
    const [modules, setModules] = useState(null); // Stores modules for selected course
    const [lessons, setLessons] = useState(null); // Stores lessons for selected module
    // Key to force re-render of <UploadFile /> component after submitting a course
    const [uploadFileKey, setUploadFileKey] = useState(0);
    // Watch content field for rich text editor
    const content = watch("content");

    // FORM SUBMISSION HANDLERS
    const onSubmitHandler = (data) => {
        isEditingResource
            ? editResourceHandler(data)
            : addResourceHandler(data);
    };

    const addResourceHandler = async (data) => {
        // Before Adding New Resource Please Check Is There COntent Or Pdf File Is Available Or Not ?
        if (!content?.replace("<p><br></p>", "") && !pdfsfile) {
            toast.error("Content Or Pdf File Is Required.");
            return;
        }
        // Now Wee Need TO Format Our Data For Api Call;
        data.pdfsfile = pdfsfile;
        data.content = data?.content?.replace("<p><br></p>", "");
        const loadingToastId = toast.loading("Adding Resource...");
        try {
            const response = await adminCourseManagementApis.createResource(
                data
            );
            if (!response) {
                toast.error("Opps! Something went wrong.");
                return;
            }
            toast.dismiss(loadingToastId);
            toast.success("Resource added succssfully.");
            dispatch(setIsCoursesModified(true));
            setValue("content", "");
            setUploadFileKey((prev) => prev + 1);
        } catch (error) {
            const err = customApiErrorHandler(error, "Add Resource Page --->");
            toast.error(err);
        } finally {
            toast.dismiss(loadingToastId);
        }
    };

    const editResourceHandler = (data) => {
        console.log("Editing Resource Data --->", data);
    };

    // RICH TEXT EDITOR HANDLER
    const contentOnChangeHandler = (editorState) => {
        setValue("content", editorState);
    };

    return (
        <div className="w-1/2 h-auto bg-white mx-auto p-4 rounded-md shadow-sm border">
            <h1 className="text-lg line font-medium text-gray-800">
                {isEditingResource ? "Edit Resource" : "Add Resource"}
            </h1>

            {/* MAIN FORM CONTAINER */}
            <form
                className="space-y-2"
                onSubmit={handleSubmit(onSubmitHandler)}
            >
                {/* COURSE SELECTION DROPDOWN */}
                <AdminCustomSelect
                    defaultOption="Choose A Course"
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
                    onChange={(e) => {
                        const courseId = e.target.value;
                        const course = allCourses.find(
                            (course) => course._id === courseId
                        );
                        // Update modules based on selected course
                        const modules = course?.modules?.map((module) => ({
                            id: module?._id,
                            label: module?.moduletitle,
                            value: module?._id,
                            lessons: module?.lessons,
                        }));
                        setModules(modules);
                        // Reset dependent fields
                        setValue("moduleId", "");
                        setValue("lessonId", "");
                        setLessons(null);
                    }}
                />

                {/* MODULE SELECTION DROPDOWN */}
                <AdminCustomSelect
                    defaultOption="Choose A Module"
                    label="Module*"
                    registerOptions={register("moduleId", {
                        required: "Module is required*",
                    })}
                    options={modules}
                    error={errors.moduleId}
                    onChange={(e) => {
                        const moduleId = e.target.value;
                        const module = modules.find(
                            (item) => item?.id === moduleId
                        );
                        // Update lessons based on selected module
                        const lessons = module?.lessons?.map((lesson) => ({
                            id: lesson?._id,
                            label: lesson?.lessontitle,
                            value: lesson?._id,
                            resources: lesson?.resources,
                        }));
                        setLessons(lessons);
                        setValue("lessonId", "");
                    }}
                    disabled={!modules}
                />

                {/* LESSON SELECTION DROPDOWN */}
                <AdminCustomSelect
                    defaultOption="Choose A Lesson"
                    label="Lesson*"
                    registerOptions={register("lessonId", {
                        required: "Lesson is required*",
                    })}
                    options={lessons}
                    error={errors.lessonId}
                    disabled={!lessons}
                />

                {/* RESOURCE TITLE INPUT */}
                <AdminCustomInput
                    label="Resource Title*"
                    placeholder="Enter resource title"
                    registerOptions={register("resourcetitle", {
                        required: "Title is required*",
                    })}
                    error={errors.resourcetitle}
                />

                {/* RICH TEXT EDITOR FOR CONTENT */}
                <div>
                    <h2 className="block text-sm font-medium text-gray-700 mb-1">
                        Content
                    </h2>
                    <ReactQuill
                        name="content"
                        theme="snow"
                        value={content}
                        onChange={contentOnChangeHandler}
                    />
                </div>

                {/* PDF FILE UPLOAD SECTION */}
                <div className="flex flex-col items-center">
                    <h2 className="block text-sm font-medium text-gray-700 mb-1 self-start">
                        Pdf File (if available)
                    </h2>
                    <UploadFile
                        key={uploadFileKey}
                        allowedType={"pdf"}
                        maxFileSizeMB={100}
                        onUploadComplete={(url) => Setpdfsfile(url)}
                    />

                    {/* SUBMIT BUTTON */}
                    <div className="w-fit mx-auto">
                        <button
                            type="submit"
                            className="py-2.5 px-6 text-sm rounded-lg bg-gray-700 text-white cursor-pointer font-normal text-center shadow-xs transition-all duration-500 hover:bg-gray-900 flex items-center gap-2 mt-2"
                        >
                            <MdCloudUpload className="text-xl" />
                            <span>Publish Resource</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Admin_Add_Resource;
