// Importing necessary modules and components
import React, { useState, useRef, useEffect } from "react"; // React core and hooks
import Input from "../../../../../../Common_Components/Form_Components/Input"; // Custom Input Component
import {
    Checkbox,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material"; // MUI components for form elements
import TextArea from "../../../../../../Common_Components/Form_Components/TextArea"; // Custom TextArea Component
import IconBtn from "../../../../../../Common_Components/IconBtn"; // Custom Icon Button Component
import { FaPlus } from "react-icons/fa6"; // Plus icon from react-icons
import { RxCross1 } from "react-icons/rx"; // Cross icon from react-icons
import { FcLink } from "react-icons/fc"; // Link icon from react-icons
import { MdDeleteForever, MdOutlineCancel } from "react-icons/md"; // Delete icon from react-icons
import { set, useForm } from "react-hook-form"; // Form management hook and utilities from react-hook-form
import toast from "react-hot-toast"; // Toast notification library
import {
    AdminCustomInput,
    AdminCustomSelect,
    AdminCustomTextarea,
} from "../../../../../../Common_Components/Form_Components/AdminCustomInputs"; // Custom Admin form components
import { useDispatch, useSelector } from "react-redux"; // Redux hooks for dispatching actions and selecting state
import UploadFile from "../../../../../../Common_Components/UploadFile"; // Component for handling file uploads
import { customApiErrorHandler } from "../../../../../../Utils/Error/cutomApiErrorHandler"; // Custom error handler for API calls
import { adminCourseManagementApis } from "../../../../../../services/apis/Admin/Course Management/adminCourseManagementApis"; // API functions for course management in admin panel
import { setIsCoursesModified } from "../../../../../../Redux/Slices/All_Courses"; // Redux action to flag when courses have been modified
import { useLocation, useNavigate } from "react-router-dom"; // Router hooks for navigation and location data

// Component for adding a new lesson within the admin panel
function Admin_Add_New_Lesson() {
    // Using useSelector to get courses data from Redux store
    const { allCourses } = useSelector((state) => state.allCourses);
    // Initializing Redux dispatch to trigger actions
    const dispatch = useDispatch(); // dispatch for dispatch Redux action Course Modified

    // Initializing form management with react-hook-form
    const {
        register, // Registers form inputs for validation
        handleSubmit, // Function to handle form submission
        getValues, // Get current form values
        setValue, // Set specific form value programmatically
        unregister, // Remove a field from the form
        watch, // Watch form field changes
        formState: { errors }, // Object containing validation errors
    } = useForm();

    // Using router hooks to get current location and navigation functions
    const location = useLocation();
    const navigate = useNavigate();

    // Retrieve lesson editing information from router state, if available
    const currentlyEditingLesson =
        location?.state?.currentlyEditingLesson ?? null;
    const courseId = location.state?.courseId ?? null;
    const moduleId = location.state?.moduleId ?? null;
    const lessonId = location.state?.lessonId ?? null;

    /* ------------------------------------------------------States-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    // State to hold the URL of the video once upload is complete
    const [videoUrl, setVideoUrl] = useState(null);

    // State to determine if the current mode is "editing" or "adding" a lesson
    const [isEditingLesson, setIsEditingLesson] = useState(
        currentlyEditingLesson ? true : false
    );

    // State to hold all modules when a course is selected
    const [modules, setModules] = useState(null);

    // State to change the key of the UploadFile component to force re-render after a lesson is created successfully
    const [uploadFileKey, setUploadFileKey] = useState(1);

    /* ------------------------------------------------------Functions----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    // Form submit handler – determines whether to add or edit a lesson based on the mode
    const onSubmit = (data) => {
        // If editing an existing lesson, call the edit handler; otherwise, add a new lesson
        if (isEditingLesson) {
            editLessonHandler(data);
        } else {
            addLessonHandler(data);
        }
    };

    // Function to add a lesson
    const addLessonHandler = async (data) => {
        // Check if the lesson already exists for the selected course
        // Filter the course from allCourses by matching courseId
        const course = allCourses?.filter(
            (course) => course._id === data.courseId
        );

        // If the lesson already exists, display an error and exit
        if (isLessonAlreadyExist(course, data)) {
            toast.error(
                "Oops! A lesson with this title already exists. Try a different name."
            );
            return;
        }

        // Ensure that a video has been uploaded; if not, show an error and exit
        if (!videoUrl) {
            toast.error(
                "Oops! Please upload a video file first before proceeding."
            );

            return;
        }

        // Add the video URL to the data object before sending to the API
        data.videoUrl = videoUrl;
        // Show a loading toast while creating the lesson
        const loadingToastId = toast.loading("Creating....");
        try {
            console.log("Frontent Lesson Data -->", data);
            // Call the API to create a new lesson
            const response = await adminCourseManagementApis.createLesson(data);

            // If no response is received, display an error
            if (!response) {
                toast.error("Something went wrong!");
                return;
            }

            // On successful creation, display a success message
            toast.success("Lesson Created successfully");
            // Dispatch Redux action to indicate that courses have been modified (for re-fetching/updating data)
            dispatch(setIsCoursesModified(true));
            // Clear all input fields after creation
            clearInput();
            // Increment the key for the UploadFile component to force it to re-render (resetting its state)
            setUploadFileKey((prev) => prev + 1);
        } catch (error) {
            // Use the custom API error handler to process and display the error
            const err = customApiErrorHandler(
                error,
                "Add New Lesson Craee New Lesson"
            );
            toast.error(err);
        } finally {
            // Dismiss the loading toast once the API call is complete
            toast.dismiss(loadingToastId);
        }
    };

    // Function to check if a lesson already exists in the selected course
    const isLessonAlreadyExist = (course, newLesson) => {
        // Extract the modules from the selected course
        const modules = course[0]?.modules;
        let isExist;
        // Iterate over each module
        for (const module of modules) {
            // Iterate over each lesson within the module
            for (const lesson of module.lessons) {
                // Compare the lesson titles after removing non-alphanumeric characters and converting to lowercase
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
        // Return true if the lesson exists, false otherwise
        return isExist;
    };

    // Function to clear all form inputs and reset state
    function clearInput() {
        setValue("courseId", "");
        setValue("moduleId", "");
        setValue("lessontitle", "");
        setValue("content", "");
        setValue("duration", "");
        setValue("isFree", "");
        setVideoUrl(null);
    }

    // Function to handle editing a lesson
    async function editLessonHandler(data) {
        // If a new video has been uploaded, update the video URL in the data
        if (videoUrl) {
            data.videoUrl = videoUrl;
        }
        // Check if any changes have been made; if not, show an error message
        if (!isLessonUpdated(data)) {
            toast.error(
                "Oops! Looks like nothing was changed. Try updating the lesson."
            );

            return;
        }

        // Display a loading toast while updating the lesson
        const toastId = toast.loading("Updating Lesson");
        try {
            // Call the API to update the lesson using courseId, moduleId, and lessonId
            const response = await adminCourseManagementApis.editLesson(
                courseId,
                moduleId,
                lessonId,
                data
            );
            // If the response is not successful, show an error
            if (!response) {
                toast.error("Something Went Wrong.");
                return;
            }
            // Dismiss the loading toast and show a success message
            toast.dismiss(toastId);
            toast.success("Lesson updated! Review your changes now.");
            // Dispatch Redux action to indicate that courses have been modified
            dispatch(setIsCoursesModified(true));
            // Navigate back to the previous page (usually the list of lessons)
            navigate(-1);
        } catch (error) {
            // Process the error using the custom API error handler and display the error message
            const err = customApiErrorHandler(
                error,
                "EDIT LESSON API ERROR ---->"
            );
            toast.error(err);
        } finally {
            // Dismiss the loading toast once the API call is complete
            toast.dismiss(toastId);
        }
    }

    // Function to build module options for the select dropdown based on the selected course
    function filterModules(course) {
        const modules = course
            ? course?.modules?.map((module) => {
                  return {
                      id: module?._id, // Unique module identifier
                      label: module?.moduletitle, // Label to display in the dropdown
                      value: module?._id, // Value for the select option
                  };
              })
            : null;

        // Update the modules state with the filtered modules
        setModules((prev) => modules);
    }

    // Function to check if any lesson details have been updated while editing the lesson
    const isLessonUpdated = (newLessonData) => {
        // Compare the video URL
        if (newLessonData.videoUrl !== currentlyEditingLesson.videoUrl) {
            return true;
        }
        // Compare the lesson title
        if (newLessonData.lessontitle !== currentlyEditingLesson.lessontitle) {
            return true;
        }
        // Compare the lesson content/description
        if (newLessonData.content !== currentlyEditingLesson.content) {
            return true;
        }
        // Compare the lesson duration
        if (newLessonData.duration !== currentlyEditingLesson.duration) {
            return true;
        }
        // Compare the free/paid status, converting both values to strings for consistency
        if (
            newLessonData.isFree.toString() !==
            currentlyEditingLesson.isFree.toString()
        ) {
            return true;
        }

        // Return false if no changes are detected
        return false;
    };

    // useEffect hook to populate form fields when editing an existing lesson
    useEffect(() => {
        // Check if we are editing a lesson and if required identifiers exist
        if (currentlyEditingLesson && moduleId && courseId) {
            // Find the course in allCourses using the courseId
            const course = allCourses.find((course) => course._id === courseId);
            // Populate the modules select by filtering modules from the selected course
            filterModules(course);
            // Set default values in the form for editing
            setValue("courseId", courseId);
            setValue("moduleId", moduleId);
            setValue("lessontitle", currentlyEditingLesson?.lessontitle);
            setValue("content", currentlyEditingLesson?.content);
            setValue("duration", currentlyEditingLesson?.duration);
            setValue("isFree", currentlyEditingLesson?.isFree);
            setValue("videoUrl", currentlyEditingLesson?.videoUrl);

            // Log the current lesson data for debugging purposes
            console.log(
                "Currently Editing Lesson Data ---->",
                currentlyEditingLesson
            );
        }
    }, []); // Empty dependency array means this runs only once on mount

    // Render the form component for creating or editing a lesson
    return (
        <div>
            {/* Form Create And Edit Lesson Data */}
            <div className="w-1/2 border  rounded-md bg-white shadow-sm p-4 space-y-3 mx-auto ">
                <h1 className="text-xl text-gray-700 font-medium ">
                    Add Lesson To Course
                </h1>
                {/* Select Course */}
                {/* Video Upload Section */}
                <div className="flex items-center w-full flex-col">
                    <h1 className="place-self-start  text-sm font-medium text-gray-700 mb-3">
                        Lesson Video*
                    </h1>

                    {/* Component to handle video file upload */}
                    <UploadFile
                        key={uploadFileKey} // Key changes force a re-render when a new lesson is created
                        allowedType={"video"} // Only allow video file uploads
                        maxFileSizeMB={4000} // Maximum allowed file size in MB
                        onUploadComplete={(url) => setVideoUrl((prev) => url)} // Callback when upload is complete to set the video URL
                        existingFileUrl={
                            currentlyEditingLesson?.videoUrl
                                ? currentlyEditingLesson?.videoUrl
                                : ""
                        } // If editing, display the existing video URL
                    />
                </div>
                <div>
                    {/* Custom select component for choosing a course */}
                    <AdminCustomSelect
                        label="Course*"
                        options={allCourses?.map((item) => ({
                            value: item?._id,
                            id: item?._id,
                            label: item?.courseTitle,
                        }))} // Map courses to select options
                        registerOptions={register("courseId", {
                            required: "Course are required*",
                        })} // Register the courseId field with validation
                        defaultOption="Select Course"
                        error={errors.courseId} // Display validation errors, if any
                        onChange={(e) => {
                            // When a course is selected, update the modules list
                            const courseId = e.target.value;
                            const course = allCourses.find(
                                (course) => course._id === courseId
                            );
                            // Filter modules based on the selected course
                            filterModules(course);
                        }}
                        disabled={currentlyEditingLesson ? true : false} // Disable the select if editing a lesson
                    />
                </div>
                {/* Course Module */}
                <div>
                    {/* Custom select component for choosing a module */}
                    <AdminCustomSelect
                        label="Module*"
                        options={modules} // Options populated by filterModules function
                        registerOptions={register("moduleId", {
                            required: "Module is required please choose",
                        })} // Register the moduleId field with validation
                        defaultOption="Select Module"
                        error={errors.moduleId} // Display validation errors, if any
                        disabled={
                            // Disable the select if editing a lesson OR if there are no modules available
                            currentlyEditingLesson
                                ? true
                                : !modules || modules.length === 0
                        }
                    />
                </div>
                {/* Course Title */}
                <div>
                    {/* Custom input for lesson title */}
                    <AdminCustomInput
                        label="Lesson Title*"
                        placeholder="Enter lesson title"
                        registerOptions={register("lessontitle", {
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
                        })} // Register lesson title with validation
                        error={errors.lessontitle}
                    />
                </div>
                {/* Lesson Content Or Description */}
                <div>
                    {/* Custom textarea for lesson description or content */}
                    <AdminCustomTextarea
                        label="Lesson Description*"
                        placeholder="Enter lesson description Or Content"
                        registerOptions={register("content", {
                            required: "Lesson Description is required",
                        })} // Register content with validation
                        error={errors.content}
                    />
                </div>
                {/* Video Duration */}
                <div>
                    {/* Custom input for lesson duration */}
                    <AdminCustomInput
                        type="number"
                        label="Lesson Duration (Minutes)*"
                        placeholder="Enter lesson run time"
                        registerOptions={register("duration", {
                            required: "Invalid lesson duration.",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Only numbers are allowed.",
                            },
                        })} // Register duration with validation
                        error={errors.duration}
                    />
                </div>
                {/* Resources Container */}
                <div>
                    {/* Custom select for determining if the lesson is free or paid */}
                    <AdminCustomSelect
                        label="Free Or Paid*"
                        options={[
                            { value: false, id: "Paid", label: "Paid" },
                            { value: true, id: "Free", label: "Free" },
                        ]} // Options for free (true) or paid (false)
                        defaultOption="Choose is it free or not"
                        registerOptions={register("isFree", {
                            required: "Course Status Is Required",
                        })} // Register isFree field with validation
                    />
                </div>
                <div className="w-fit mx-auto flex items-center justify-center gap-4">
                    {/* Button to trigger form submission */}
                    <button
                        onClick={handleSubmit(onSubmit)}
                        type="button"
                        class=" py-2.5 px-6 text-sm rounded-lg bg-gray-700 text-white cursor-pointer font-normal text-center shadow-xs transition-all duration-500 hover:bg-gray-900"
                    >
                        {currentlyEditingLesson
                            ? "Update Lesson"
                            : "Add Lesson"}
                    </button>
                    {isEditingLesson && (
                        <button
                            type="button"
                            class="py-2.5 flex items-center gap-2 px-6 text-sm rounded-lg bg-gray-200 text-gray-900 cursor-pointer font-normal text-center shadow-xs transition-all duration-500 hover:bg-gray-300 border border-gray-300"
                            onClick={() => navigate(-1)}
                        >
                            <MdOutlineCancel /> Cancel
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Admin_Add_New_Lesson;
