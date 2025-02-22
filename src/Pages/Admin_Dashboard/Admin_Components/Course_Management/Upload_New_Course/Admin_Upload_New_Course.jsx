import React, { useEffect, useState } from "react";
import { IoCloudUpload } from "react-icons/io5";
import {
    AdminCustomInput,
    AdminCustomSelect,
    AdminCustomTextarea,
} from "../../../../../Common_Components/Form_Components/AdminCustomInputs";
import { useForm } from "react-hook-form";
import UploadFile from "../../../../../Common_Components/UploadFile";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { adminCourseManagementApis } from "../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
import { useNavigate } from "react-router-dom";
import { setAllCourses } from "../../../../../Redux/Slices/All_Courses";
import { MdCloudUpload } from "react-icons/md";

const Admin_Upload_New_Course = () => {
    const navigate = useNavigate();

    // Initializing react-hook-form for form validation and handling
    const {
        handleSubmit,
        register,
        formState: { errors },
        getValues,
        setValue,
    } = useForm();
    //importing use Dispatch For Dispatch Redux Actions
    const dispatch = useDispatch();
    // Key to force re-render of <UploadFile /> component after submitting a course
    const [uploadFileKey, setUploadFileKey] = useState(0);

    // State to determine if the course is being edited
    const [isEditingCourse, setIsEditingCourse] = useState(false);

    // State for temporarily storing course tags
    const [tempTags, setTempTags] = useState([]);

    // Fetching course categories from Redux store
    const { categories } = useSelector((state) => state.categories);

    // State to store the course thumbnail URL
    const [coursethumbnailurl, setCoursethumbnailurl] = useState(null);

    /**
     * Handles the addition of a new course.
     * @param {Object} data - Form data containing course details.
     */
    const addCourseHandler = async (data) => {
        const loadingToastId = toast.loading("Creating..."); // Show loading message
        try {
            // Call API to create a new course
            const response = await adminCourseManagementApis.createCourse(data);
            console.log("Course Creation Response:", response);

            if (!response) {
                toast.error("Something went wrong. Please try again.");
                return;
            }

            // Reset input fields after successful course creation
            clearInput();
            toast.success("Course Created Successfully!");

            // Force re-render of UploadFile component to reset image selection
            setUploadFileKey((prev) => prev + 1);
            // After Creating New Course update All  Course State // For Realtime Data..
            const updatedCourseData =
                await adminCourseManagementApis.getAllCourses();
            if (updatedCourseData) {
                // if I Got Updated All Course Data Then Dispatch Data To State
                dispatch(setAllCourses(updatedCourseData));
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            toast.dismiss(loadingToastId);
        }
    };

    /**
     * Handles editing an existing course.
     * @param {Object} data - Form data with updated course details.
     */
    const editCourseHandler = (data) => {
        console.log("Editing Course Data:", data);
    };

    /**
     * Clears all input fields after successful course addition or editing.
     */
    const clearInput = () => {
        setValue("courseTitle", "");
        setValue("courseDescription", "");
        setValue("coursethumbnailurl", "");
        setValue("price", "");
        setValue("category", "");
        setValue("tags", "");
        setTempTags([]);
        setCoursethumbnailurl(null);
    };

    /**
     * Handles form submission, determining whether to add a new course or edit an existing one.
     * @param {Object} data - The form data.
     */
    const onSubmit = (data) => {
        if (isEditingCourse) {
            editCourseHandler(data);
        } else {
            // Ensure thumbnail is uploaded before submitting
            if (!coursethumbnailurl) {
                toast.error("Please upload the thumbnail first.");
                return;
            }

            // Add tags and thumbnail URL to the data object before submitting
            data.tags = tempTags;
            data.coursethumbnailurl = coursethumbnailurl;
            addCourseHandler(data);
        }
    };

    return (
        <div className="container mx-auto p-4 transition-all ease-linear duration-500">
            <form className="flex gap-4">
                {/* Left Section: Course Name and Description */}
                <div className="w-full lg:w-2/3 bg-white p-6 rounded-md shadow ">
                    <h2 className="text-xl font-medium mb-4 text-gray-800">
                        Course Details
                    </h2>

                    {/* Thumbnail Upload */}
                    <div className="mb-6 w-full flex items-center flex-col">
                        <label className="block text-sm font-medium text-gray-700 mb-4">
                            Course Thumbnail*
                        </label>
                        <UploadFile
                            key={uploadFileKey}
                            allowedType={"image"}
                            maxFileSizeMB={100}
                            existingFileUrl={""}
                            onUploadComplete={(url) =>
                                setCoursethumbnailurl(url)
                            }
                        />
                    </div>

                    {/* Course Title Input */}
                    <div className="mb-4">
                        <AdminCustomInput
                            label="Course Title*"
                            type="text"
                            placeholder="Enter course title"
                            registerOptions={register("courseTitle", {
                                required: "Title is required",
                                minLength: {
                                    value: 5,
                                    message:
                                        "Title must be at least 5 characters",
                                },
                                maxLength: {
                                    value: 100,
                                    message:
                                        "Title cannot exceed 100 characters",
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9 ]+$/,
                                    message:
                                        "Only letters, numbers & spaces allowed",
                                },
                            })}
                            error={errors.courseTitle}
                        />
                    </div>

                    {/* Course Description Input */}
                    <div>
                        <AdminCustomTextarea
                            label="Course Description*"
                            type="text"
                            placeholder="Enter course description"
                            registerOptions={register("courseDescription", {
                                required: "Description is required",
                                minLength: {
                                    value: 10,
                                    message:
                                        "Description must be at least 10 characters",
                                },
                                maxLength: {
                                    value: 500,
                                    message:
                                        "Description cannot exceed 500 characters",
                                },
                            })}
                            error={errors.courseDescription}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="w-fit mx-auto mt-4">
                        <button
                            onClick={handleSubmit(onSubmit, (err) =>
                                console.log("Submission Error:", err)
                            )}
                            type="button"
                            className="py-2.5 px-6 text-sm rounded-lg bg-gray-700 text-white cursor-pointer font-normal text-center shadow-xs transition-all duration-500 hover:bg-gray-900 flex  items-center gap-2"
                        >
                            <span className="text-xl">
                                <MdCloudUpload />
                            </span>
                            <span>Publish Course</span>
                        </button>
                    </div>
                </div>

                {/* Right Section: Price, Category, and Tags */}
                <div className="w-full lg:w-1/3 bg-white p-6 rounded-md shadow h-fit">
                    {/* Price Input */}
                    <div className="mb-6">
                        <AdminCustomInput
                            type="number"
                            label="Price*"
                            placeholder="Enter price of course"
                            registerOptions={register("price", {
                                required: "Price is required",
                                pattern: {
                                    value: /^\d+(\.\d{1,2})?$/,
                                    message:
                                        "Enter a valid price (max 2 decimal places)",
                                },
                                min: {
                                    value: 0.01,
                                    message: "Price must be greater than zero",
                                },
                                max: {
                                    value: 10000,
                                    message: "Price cannot exceed $10,000",
                                },
                            })}
                            error={errors.price}
                        />
                    </div>

                    {/* Category Select */}
                    <div className="mb-6">
                        <AdminCustomSelect
                            label="Category"
                            placeholder="Select a category"
                            options={categories}
                            registerOptions={register("category", {
                                required: "Category is required.",
                            })}
                            defaultOption="Choose a category"
                            error={errors.category}
                        />
                    </div>

                    {/* Tags Input */}
                    <div>
                        <label
                            htmlFor="tags"
                            className="block text-gray-700 font-medium mb-1"
                        >
                            Tags
                        </label>
                        <input
                            type="text"
                            id="tags"
                            {...register("tags")}
                            onKeyUp={(e) => {
                                if (e.key === "Enter") {
                                    const tag = getValues("tags");
                                    if (!tag) {
                                        return toast.error(
                                            "Tag should not be empty."
                                        );
                                    }
                                    setTempTags((prev) => [...prev, tag]);
                                    setValue("tags", "");
                                }
                            }}
                            placeholder="Enter tags separated by commas"
                            className="w-full border border-gray-300 rounded-md p-2 text-gray-600 outline-none focus:ring-1 ring-blue-500"
                        />
                        {/* Display entered tags */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {tempTags.map((item, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full flex items-center gap-1 text-sm"
                                >
                                    {item}
                                    <span
                                        className="p-[2px] rounded-full bg-gray-500 text-white"
                                        onClick={() => {
                                            setTempTags((prev) =>
                                                prev.filter(
                                                    (_, index) => index !== idx
                                                )
                                            );
                                        }}
                                    >
                                        <RxCross2 />
                                    </span>
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Status */}
                    <div className="mb-6">
                        <AdminCustomSelect
                            label="Status"
                            placeholder="status"
                            defaultOption="Choose status of Course"
                            options={[
                                {
                                    value: "Draft",
                                    label: "Draft",
                                    id: "Draft",
                                },
                                {
                                    value: "Published",
                                    label: "Published",
                                    id: "Published",
                                },
                            ]}
                            registerOptions={register("status", {
                                required: "Course status is required.",
                            })}
                            error={errors.status}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Admin_Upload_New_Course;
