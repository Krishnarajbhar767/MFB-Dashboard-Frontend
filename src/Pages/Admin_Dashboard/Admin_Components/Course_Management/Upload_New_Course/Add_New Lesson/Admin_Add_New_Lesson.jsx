// Importing necessary modules and components
import React, { useState } from "react";
import Input from "../../../../../../Common_Components/Form_Components/Input";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import TextArea from "../../../../../../Common_Components/Form_Components/TextArea";
import IconBtn from "../../../../../../Common_Components/IconBtn";
import { FaPlus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FcLink } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

// Component for adding a new lesson within the admin panel
function Admin_Add_New_Lesson({ setisAddingLesson, module, courseModules }) {
    console.log(
        "Printing Course Module From  Add New LEssons->",
        courseModules
    );
    // Initializing form management and state variables
    console.log("Add Lesson Parent Data ->", module);
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm();
    const formData = {}; // it is main data tha are going insert in course Single Module.. in the last when evrything is fine
    const [resources, setResources] = useState([]); // State to store additional resources
    const [lessonVideo, setLessonVideo] = useState(""); // State for lesson video
    const addLessonHandler = async (data) => {
        try {
            console.log("Printing Add lessson Form data Main - >", getValues());
            // Call APi TO Create Lesson With Resources
        } catch (error) {
            console.log("Error While Creating The Lesson From JSX -->", error);
        }
    };
    return (
        // Modal container for adding a new lesson
        <div className="fixed top-0 left-[30vw] bg-white p-4 rounded-lg border border-gray-200 text-black z-10 w-[50%] flex flex-col gap-4 h-fit">
            {/* Lesson name input field */}
            <Input
                type={"text"}
                placeholder={"Lesson Name"}
                label={"Lesson Name"}
                register={register}
                inputName="lessonName"
                error={errors?.lessonName}
            />

            {/* Dropdown to select the course section */}
            {/* it Can Be Removed */}
            {/* <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">
                    Course Section
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label=" Lesson Section"
                    defaultValue={"All"}
                    {...register("lessonModule", { required: true })}
                >
                    <MenuItem value={"course"}>DYNAMIC</MenuItem>
                </Select>
            </FormControl> */}

            {/* Video upload input */}
            <Input
                type={"file"}
                placeholder={"Upload Video"}
                register={register}
                inputName="lessonVideo"
                required={true}
                accept={"video/*"}
            />

            {/* Lesson description text area */}
            <TextArea
                label={"Lesson Description"}
                placeholder={"Lesson Description"}
            />

            {/* Additional resources section */}
            <div className="capitalize text-sm text-gray-800 font-medium">
                <h2 className="mb-2">Additional resource</h2>
                <div className="flex flex-col gap-2 border border-gray-300 rounded-md p-2">
                    {/* Inputs for resource title and link */}
                    <Input
                        label={" Title"}
                        placeholder={" Title"}
                        register={register}
                        inputName="resourceTitle"
                        required={true}
                        error={errors?.resourceTitle}
                    />
                    <Input
                        label={" Link"}
                        placeholder={" Link"}
                        register={register}
                        inputName="resourceLink"
                        required={true}
                        error={errors?.resourceLink}
                    />

                    {/* Button to add a resource */}
                    <button
                        type="button"
                        onClick={() => {
                            const formData = getValues();
                            if (!formData.resourceTitle) {
                                toast.error("Resource Title Is Required");
                                return;
                            }
                            if (!formData.resourceLink) {
                                toast.error("Resource Link Is Required");
                                return;
                            }
                            setResources((prev) => [
                                ...prev,
                                {
                                    resourceLink: formData.resourceLink,
                                    resourceTitle: formData.resourceTitle,
                                },
                            ]);
                            setValue("resourceTitle", "");
                            setValue("resourceLink", "");
                        }}
                    >
                        <IconBtn color={"#000f"}>
                            <FaPlus /> Add Resource
                        </IconBtn>
                    </button>

                    {/* List of added resources */}
                    <div className="flex flex-col gap-2 border-t border-gray-300 p-2 max-h-[100px] overflow-y-scroll">
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
                </div>
            </div>

            {/* Action buttons: Add Lesson and Cancel */}
            <div className="flex gap-3 items-center justify-end">
                <button type="button" onClick={addLessonHandler}>
                    <IconBtn color={"#000f"}>Add Lesson</IconBtn>
                </button>
                <button
                    type="button"
                    className="cursor-pointer bg-gray-300 text-gray-900 px-2 py-2 rounded-md font-medium text-sm"
                    onClick={() => setisAddingLesson(false)}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default Admin_Add_New_Lesson;
