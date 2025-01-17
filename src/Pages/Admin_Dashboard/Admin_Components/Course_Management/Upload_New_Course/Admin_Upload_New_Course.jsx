import React, { useState } from "react";
import IconBtn from "../../../../../Common_Components/IconBtn";
import Admin_Course_Details from "./Admin_Course_Details";
// import IconBtn from "../../../../Common_Components/IconBtn";
import { FiPlus } from "react-icons/fi";
import Admin_Course_Module from "./Admin_Course_Module";
import { useSelector } from "react-redux";
import Input from "../../../../../Common_Components/Form_Components/Input";
import { IoCloudUpload } from "react-icons/io5";
import { useEffect } from "react";
import TextArea from "../../../../../Common_Components/Form_Components/TextArea";
import {
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { courseCategories as tempCategory } from "../../../../../Sampple_Data/activeStudent";
import Admin_Add_Module from "./Add_Module/Admin_Add_Module";
import Admin_Add_New_Lesson from "./Add_New Lesson/Admin_Add_New_Lesson";
import toast from "react-hot-toast";
import DragAndDropList from "./DraggableList";
// import thumbnailImage from "../../../../../../public/logov2.png";
// import { useSelector } from "react-redux";
function Admin_Upload_New_Course() {
    const [courseCategories, setCourseCategories] = useState("");
    const { course } = useSelector((state) => state);
    const [thumbnailImage, setThumbnailImage] = useState("");
    const [isAddingModule, setIsAddingModule] = useState(false);
    const [tempTag, setTempTag] = useState("");
    const [tags, setTags] = useState([]);
    const [courseModules, setCourseModules] = useState([]);
    const [lessons, setLessons] = useState([]);
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        setValue,
    } = useForm({ mode: "All" });
    const createCourse = async (data) => {
        setValue("tags", [...tags]);
        setValue("courseModules", courseModules);
        // Handling Error For Module And Lesson This Condition Check Is There Is No aNY Module Or If Any MOdule Do not Include Any Lesson Then Toast An Error
        if (!courseModules.length) {
            toast.error("Atleas 1 Module Are Required...");
            return;
        }

        // condition for verify theres no any empty module whithout lesson
        if (
            courseModules.some((module) => {
                return module.lesson.length > 0 ? false : true;
            })
        ) {
            toast.error("Atleast One Lesson Is Required In Every Modules...");
            return;
        }

        // everything is fine now we can call our create  course api for Creating The Course...
        try {
            console.log(
                "Printing Our Complete Course Data Main JSX ->",
                getValues()
            );
            // Call Api For Create Course

            toast.success("Course Created Successfully...");
        } catch (error) {
            console.log(
                "Error While Creating The New Course From JSX ->",
                error
            );
        }
    };

    useEffect(() => {
        setCourseCategories((prev) => tempCategory);
        setValue("courseModules", []);
        // console.log("Printing COurse Category", courseCategories);
    }, []);

    return (
        <form className="w-full px-2 flex gap-4 py-4 relative">
            <div className="w-[65%] rounded-lg flex flex-col gap-5 p-2">
                <div className="flex justify-between items-center">
                    <h1 className=" text-base">Upload New Course</h1>
                    <button type="button" onClick={handleSubmit(createCourse)}>
                        <IconBtn color={"#000f"}>Publish Course</IconBtn>
                    </button>
                </div>

                {/* Course Details Main Component this componet handle module or lessons */}
                <div className=" rounded-lg  flex gap-5 flex-col   ">
                    {/* Course Details component */}
                    <div className="bg-white p-3 rounded-lg">
                        <div className="py-2 flex flex-col space-y-2">
                            <h1 className="py-2 font-medium font-sm text-gray-700">
                                Course Details
                            </h1>
                            <Input
                                register={register}
                                inputName={"courseName"}
                                required={true}
                                type={"text"}
                                placeholder={"Course Name"}
                                label={"Course Name *"}
                                error={errors.courseName}
                            />
                            <TextArea
                                placeholder={"Course Description"}
                                type={"text"}
                                label={"Course Description *"}
                                register={register}
                                inputName={"courseDescription"}
                                required={true} // required
                                error={errors.courseDescription}
                            />
                        </div>
                    </div>

                    {/* Course module Component  */}
                    <div className=" rounded-lg border border-gray-200  p-4 flex flex-col gap-4 bg-white ">
                        <div className="flex justify-between items-center ">
                            <h1 className="font-medium">Course Module</h1>
                            <button
                                onClick={() => setIsAddingModule(true)}
                                type="button"
                            >
                                <IconBtn color={"#000f"}>
                                    <FiPlus /> Add Module
                                </IconBtn>
                            </button>
                        </div>
                        {courseModules?.map((module, idx) => (
                            // Rendering evry module with thair data -> remember main module data are available only in upload new course JSX
                            <Admin_Course_Module
                                module={module}
                                moduleIndex={idx}
                                courseModules={courseModules}
                                setCourseModules={setCourseModules}
                            />
                        ))}

                        {/* Course Add MOdule Modal dynamic It Will Open ONly WHen You CLick on Add MOdule  */}
                        {isAddingModule && (
                            <Admin_Add_Module
                                setisAddingModule={setIsAddingModule}
                                courseModules={courseModules}
                                setCourseModules={setCourseModules}
                            />
                        )}
                    </div>
                </div>
                {/* Draggble list */}
                {/* <DragAndDropList /> */}
            </div>

            {/* Course SideBar   */}
            <div className=" flex flex-1  bg-gray-50 h-fit rounded-md p-5 flex-col gap-5 mt-16">
                <div>
                    <label
                        htmlFor="thumbnail"
                        className="text-sm font-medium text-gray-800 "
                    >
                        {thumbnailImage ? (
                            <div className="lg:h-[150px] border border-gray-400 rounded-md flex items-center justify-center">
                                <img
                                    src={thumbnailImage}
                                    className="w-full object-fit"
                                />
                            </div>
                        ) : (
                            <div className="lg:h-[150px] border border-gray-400 rounded-md flex flex-col items-center justify-center gap-5 text-gray-800 capitalize tracking-wider">
                                <span className="text-5xl">
                                    <IoCloudUpload />
                                </span>
                                <h1 className="text-lg">Choose A File</h1>
                            </div>
                        )}
                    </label>
                    <input
                        type="file"
                        className="lg:h-[150px]  border-2 w-full outline-none placeholder-transparent hidden"
                        id="thumbnail"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            setValue("thumbnail", file);
                        }}
                        accept="image/*"
                    />
                </div>

                <div>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">
                            Course Category
                        </InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue={"All"}
                            label=" Course Category *"
                            {...register("courseCategory", { required: true })}
                        >
                            {courseCategories.length > 0 &&
                                courseCategories?.map((category, idx) => {
                                    return (
                                        <MenuItem
                                            value={category?.name}
                                            key={idx}
                                        >
                                            {category?.name}
                                        </MenuItem>
                                    );
                                })}
                        </Select>
                    </FormControl>
                </div>

                <div className="flex flex-col gap-4">
                    <div
                        className={`flex flex-col gap-1 text-sm text-gray-800 font-medium`}
                    >
                        <label htmlFor={"tags"} className=" ">
                            Tags
                        </label>
                        <input
                            id="tags"
                            type={"text"}
                            placeholder="Tags"
                            value={tempTag}
                            onChange={(e) => setTempTag(e.target.value)}
                            className={`border-gray-200 border rounded-md px-2 py-1 font-light text-gray-800 outline-none focus:ring-1 ring-blue-600 `}
                            onKeyUp={(e) => {
                                console.log("On kEY UP Event Triggered", e);
                                e.preventDefault();
                                if (e.key === "Enter") {
                                    setTags((prev) => [
                                        ...prev,
                                        tempTag.toLowerCase(),
                                    ]);
                                    setTempTag("");
                                }
                            }}
                        />
                    </div>
                    <Stack
                        direction="col"
                        spacing={1}
                        className={`border border-gray-200  rounded-md flex gap-2 flex-wrap  text-gray-800
                         font-medium ${tags.length > 0 && "p-2"}`}
                    >
                        {tags.length > 0 &&
                            tags.map((tag, idx) => (
                                <Chip
                                    key={idx}
                                    label={tag}
                                    onDelete={() => {
                                        setTags((prev) =>
                                            prev.filter((t) => t !== tag)
                                        );
                                    }}
                                />
                            ))}
                    </Stack>
                </div>
                <div>
                    <Input
                        label={"Price *"}
                        placeholder={"Course Price INR"}
                        register={register}
                        inputName={"coursePrice"}
                        required={true}
                        error={errors.coursePrice}
                        type={"number"}
                    />
                </div>
            </div>
        </form>
    );
}

export default Admin_Upload_New_Course;
