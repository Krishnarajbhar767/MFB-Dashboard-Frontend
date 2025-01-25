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

// Component for adding a new lesson within the admin panel
function Admin_Add_New_Lesson({
    setisAddingLesson,
    module,
    isEditingLesson,
    courseModules,
    setCourseModules,
    setIsEditingLesson,
    editingLesson,
}) {
    // Initializing form management and state variables
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        unregister,
        formState: { errors },
    } = useForm();
    const formData = {}; // it is main data tha are going insert in course Single Module.. in the last when evrything is fine
    const [resources, setResources] = useState([]); // State to store additional resources
    // Using Temperoy Variibale For Hold Resouce File If Exist
    const [resourceFile, setResourceFile] = useState(null);
    const resourceFileRef = useRef(null);
    // main handler that create new lesson and update the courseModule state section that are available in upload new course

    const addLessonHandler = async (data) => {
        // unregistering single resource link
        unregister("resourceLink");
        // unregistering single resource description
        unregister("resourceTitle");
        // setting resources as array that hold multiple object of {resources link title}
        setValue("resources", resources);
        // getting video file from reacthookform lessonVideo key That Hold Array where 0 index value are main lesson video
        const temp_lesson_Video = getValues("lessonVideo");
        try {
            // getting all the lesson data from That Form - React Hook Form
            const temp_lesson_Data = getValues();
            // modifying temp_lesson_data for insreting that single video file in lessonVideo
            temp_lesson_Data.lessonVideo = temp_lesson_Video[0];
            // inserting parent module id
            temp_lesson_Data.moduleId = module.id;
            console.log("Printing That Temp_Lesson_Data", temp_lesson_Data);
            // erything is fine now we just need to call create lesson api when api...

            // assuimg api response is succesfull
            setCourseModules((prev) =>
                prev?.map((module) => {
                    if (module.id === temp_lesson_Data.moduleId) {
                        return {
                            ...module,
                            lesson: [...module.lesson, temp_lesson_Data],
                        };
                    } else {
                        return module;
                    }
                })
            );

            toast.success("Lesson Created Successfully...");
            setValue("lessonName", "");
            setValue("lessonDescription", "");
            setValue("lessonVideo", "");
            setisAddingLesson(false);
        } catch (error) {
            console.log(
                "Error While Creating The New Lesson From JSX -->",
                error
            );
        }
    };

    const editLessonHandler = async () => {
        // unregistering single resource link
        unregister("resourceLink");
        // unregistering single resource description
        unregister("resourceTitle");
        // setting resources as array that hold multiple object of {resources link title}
        setValue("resources", resources);
        // getting video file from reacthookform lessonVideo key That Hold Array where 0 index value are main lesson video

        const temp_lesson_Video = getValues("lessonVideo");
        try {
            // getting all the lesson data from That Form - React Hook Form
            const temp_lesson_Data = getValues();
            // modifying temp_lesson_data for insreting that single video file in lessonVideo
            if (typeof temp_lesson_Video !== "string") {
                temp_lesson_Data.lessonVideo = temp_lesson_Video[0];
            } else {
                console.log(
                    "Printing Lesson Video",
                    temp_lesson_Data.lessonVideo,
                    editingLesson.lessonVideo
                );
            }
            // inserting parent module id
            temp_lesson_Data.moduleId = module.id;
            temp_lesson_Data.id = editingLesson.id;

            // erything is fine now we just need to call Update Lesson lesson api when api...

            // assuimg api response is succesfull
            setCourseModules((prev) =>
                prev?.map((module) => {
                    if (module.id === temp_lesson_Data.moduleId) {
                        module?.lesson?.map((lesson, idx) => {
                            if (lesson.id === temp_lesson_Data.id) {
                                module.lesson[idx] = temp_lesson_Data;
                            }
                        });
                        console.log("Printing MOdule Lesson Updated", module);
                        return module;
                    } else {
                        return module;
                    }
                })
            );
            console.log("Printing Updated Module", courseModules);
            toast.success("Lesson Updated Successfully...");
            setValue("lessonName", "");
            setValue("lessonDescription", "");
            setValue("lessonVideo", "");
            setIsEditingLesson(false);
        } catch (error) {
            console.log(
                "Error While Updating  The  Lesson From JSX -->",
                error
            );
        }
    };

    // Editing Lesson Logic Start From Here....

    useEffect(() => {
        if (isEditingLesson) {
            setValue("lessonName", editingLesson.lessonName);
            setValue("lessonDescription", editingLesson.lessonDescription);
            setResources(editingLesson.resources);
            setValue("lessonVideo", editingLesson.lessonVideo);
            console.log("Editing Lesson Data", editingLesson);
        }
    }, []);

    // Function For Check Any Field Is Chnaged WHile Editing The Lesson
    const isLessonUpdated = () => {
        // function For Compare Resources
        function compareResources(arr1, arr2) {
            // Check if both arrays have the same length
            if (arr1.length !== arr2.length) {
                return true;
            }

            // Sort both arrays (assuming you want to compare regardless of order)
            arr1.sort((a, b) => a.name.localeCompare(b.name));
            arr2.sort((a, b) => a.name.localeCompare(b.name));

            // Compare each object's name property
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i].resourceTitle !== arr2[i].resourceTitle) {
                    return true;
                }
            }

            // If all comparisons pass, arrays are considered equal
            return false;
        }

        // Get All Latest Data From Add Lesson Form
        const formCurrentData = getValues();
        if (
            formCurrentData.lessonName !== editingLesson.lessonName ||
            formCurrentData.lessonDescription !==
                editingLesson.lessonDescription ||
            formCurrentData.lessonName !== editingLesson.lessonName ||
            formCurrentData.lessonVideo !== editingLesson.lessonVideo ||
            compareResources(resources, editingLesson.resources)
        ) {
            return true;
        } else {
            return false;
        }
    };

    const onSubmitHandler = async (data) => {
        if (isEditingLesson) {
            if (isLessonUpdated()) {
                editLessonHandler();
            } else {
                toast.error("Nothing Has Changed...");
            }
        } else {
            addLessonHandler();
        }
    };
    return (
        // Modal container for adding a new lesson
        <div className="fixed top-[10.6vh] left-[18.5%]    text-[14px]  text-gray-200 z-10 w-[81.3%] flex  justify-center bg-gray-200 mx-auto h-[88.5vh] gap-6 py-2">
            <div className="w-[50%]  bg-gray-50 p-4 rounded-lg space-y-2">
                {/* Lesson name input field */}
                <Input
                    type={"text"}
                    placeholder={"Lesson Name"}
                    label={"Lesson Name*"}
                    register={register}
                    inputName="lessonName"
                    required={true}
                    error={errors?.lessonName}
                />

                <TextArea
                    label={"Lesson Description*"}
                    placeholder={"Lesson Description"}
                    required={true}
                    register={register}
                    inputName="lessonDescription"
                    error={errors?.lessonDescription}
                />
                <div
                    className={`flex flex-col gap-1 text-[13px] text-gray-800 font-medium ${
                        errors.lessonVideo ? "text-red-500 outline-red-500" : ""
                    }`}
                >
                    <label htmlFor={"lessonVideo"} className=" ">
                        Lesson Video*
                    </label>
                    <input
                        id="label"
                        type={"file"}
                        className={`border-gray-200 border rounded-md px-2 py-1  text-gray-800 outline-none focus:ring-1 ring-blue-600 `}
                        placeholder={
                            errors.lessonVideo
                                ? "This field is required"
                                : "Lesson Video"
                        }
                        {...register("lessonVideo", {
                            required: isEditingLesson ? false : true,
                        })}
                        accept="video/*"
                    />
                </div>
                {/* Additional resources section */}
                <div className="capitalize  text-[13px] text-gray-800 font-medium">
                    <h2 className="mb-2 text-[13px] text-gray-800 font-medium">
                        Additional resource
                    </h2>
                    <div className="flex flex-col gap-2 border border-gray-300 rounded-md p-2">
                        {/* Inputs for resource title and link */}
                        <Input
                            label={"Title*"}
                            placeholder={"Title"}
                            register={register}
                            inputName="resourceTitle"
                            error={errors?.resourceTitle}
                        />
                        <div className="flex  flex-col ">
                            <Input
                                label={" Link"}
                                placeholder={" Link"}
                                register={register}
                                inputName="resourceLink"
                                error={errors?.resourceLink}
                            />
                            <h1 className="text-center text-base mt-3">OR</h1>
                            <div className="-mt-2 flex flex-col">
                                <label htmlFor="resourceFile">
                                    Resource File
                                </label>
                                <input
                                    // using ref to clear input value after adding new rource
                                    ref={resourceFileRef}
                                    type="file"
                                    id="resourceFile"
                                    placeholder="resourceFile"
                                    onChange={(e) => {
                                        setResourceFile(e.target.files[0]);
                                    }}
                                    className="border-gray-200 border rounded-md px-2 py-1 font-light text-gray-800 outline-none focus:ring-1 ring-blue-600 "
                                />
                            </div>
                        </div>

                        {/* Button to add a resource */}
                        <button
                            type="button"
                            onClick={() => {
                                const formData = getValues();
                                if (!formData.resourceTitle) {
                                    toast.error("Resource Title Is Required");
                                    return;
                                }
                                console.log(
                                    formData.resourceLink,
                                    resourceFile
                                );
                                if (formData.resourceLink || resourceFile) {
                                    setResources((prev) => [
                                        ...prev,
                                        {
                                            resourceLink: formData.resourceLink,
                                            resourceTitle:
                                                formData.resourceTitle,
                                            resourceFile,
                                        },
                                    ]);

                                    console.log("Printing Resource", resources);
                                    setValue("resourceTitle", "");
                                    setValue("resourceLink", "");
                                    setValue("resources", []);
                                    resourceFileRef.current.value = "";
                                    setResourceFile(null);
                                    toast.success(
                                        "Resource Added Successfully..."
                                    );
                                } else {
                                    toast.error(
                                        "Resource Link OR Resource File Is Required..."
                                    );
                                }
                            }}
                        >
                            <IconBtn color={"#000f"}>
                                <FaPlus /> Add Resource
                            </IconBtn>
                        </button>

                        {/* List of added resources */}
                    </div>
                </div>
            </div>
            <div
                className={`bg-gray-50 w-[40%] p-4 rounded-lg  h-fit ${
                    resources.length > 0 ? "space-y-2" : ""
                }`}
            >
                <div
                    className={`flex flex-col gap-2 border-gray-300 ${
                        resources.length > 0 ? "p-2" : ""
                    } max-h-[450px] overflow-y-scroll text-gray-800 `}
                    id="resourceLinksContainer"
                >
                    {resources.map((resource, idx) => (
                        <div
                            key={idx}
                            className="flex gap-2 items-center justify-between w-full text-base bg-gray-200 px-2 py-1 rounded-md border border-gray-300"
                        >
                            <div className="flex gap-2 items-center">
                                <a href={resource?.resourceLink}>
                                    <FcLink />
                                </a>
                                <span>{resource?.resourceTitle}</span>
                            </div>
                            <span
                                className="cursor-pointer"
                                onClick={() =>
                                    setResources((prev) =>
                                        prev.filter((_, i) => i !== idx)
                                    )
                                }
                            >
                                <MdDeleteForever />
                            </span>
                        </div>
                    ))}
                </div>
                {/* Action buttons: Add Lesson and Cancel */}
                <div className="flex gap-3 items-center justify-end">
                    <button
                        type="button"
                        onClick={handleSubmit(onSubmitHandler)}
                    >
                        <IconBtn color={"#000f"}>
                            {isEditingLesson ? "Edit Lesson" : "Add Lesson"}
                        </IconBtn>
                    </button>
                    <button
                        type="button"
                        className=" h-fit flex gap-1 items-center justify-center text-sm  px-3 py-1 rounded-md  font-normal capitalize tracking-normal bg-gray-200 text-gray-800"
                        onClick={() => {
                            if (isEditingLesson) {
                                setIsEditingLesson(false);
                            } else {
                                setisAddingLesson(false);
                            }
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Admin_Add_New_Lesson;
