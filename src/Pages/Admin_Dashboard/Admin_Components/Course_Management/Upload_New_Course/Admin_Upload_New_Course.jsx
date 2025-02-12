import React, { useState } from "react";
import IconBtn from "../../../../../Common_Components/IconBtn";
import Admin_Course_Details from "./Admin_Course_Details";
// import IconBtn from "../../../../Common_Components/IconBtn";
import { FiPlus } from "react-icons/fi";
import Admin_Course_Module from "./Admin_Course_Module";
import { useDispatch, useSelector } from "react-redux";
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

import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import {
    addNewCourse,
    setAllCourses,
    setisEditingCourse,
} from "../../../../../Redux/Slices/All_Courses";
import { customApiErrorHandler } from "../../../../../Utils/Error/cutomApiErrorHandler";
import { adminCourseManagementApis } from "../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
// import thumbnailImage from "../../../../../../public/logov2.png";
// import { useSelector } from "react-redux";
function Admin_Upload_New_Course() {
    const [courseCategories, setCourseCategories] = useState("");
    const [thumbnailImage, setThumbnailImage] = useState("");
    const [isAddingModule, setIsAddingModule] = useState(false);
    const [isEditingModule, setIsEditingModule] = useState(false);
    const [tempTag, setTempTag] = useState("");
    const [tags, setTags] = useState([]);
    const [courseModules, setCourseModules] = useState([]);
    const [lessons, setLessons] = useState([]);
    const { edit: editSearcParamas } = useParams();
    console.log("Printing Search Paramas", editSearcParamas);
    const navigate = useNavigate();
    // import for check user current route path
    const dispatch = useDispatch();
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        setValue,
    } = useForm();

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

        if (!thumbnailImage) {
            toast.error("Thumbnail Image Are Required...");
            return;
        }

        // everything is fine now we can call our create  course api for Creating The Course...
        const loadingToastId = toast.loading("Please wait..."); // toast for loading... and wait for reponse;
        try {
            const courseData = getValues();
            console.log("Complete Course Data ---->", courseData);
            // Call Api For Create Course
            const response = await adminCourseManagementApis.createCourse(
                courseData
            );

            if (response) {
                adminCourseManagementApis.get;
                toast.dismiss(loadingToastId);
                setValue("courseTitle", "");
                setValue("courseDescription", "");
                setValue("courseModules", "");
                setCourseModules([]);
                setValue("thumbnail", "");
                setThumbnailImage("");
                setValue("courseCategory", "");
                setValue("price", "");
                setValue("tags", "");
                setTempTag("");
                setTags([]);
                toast.success("Course Created Successfully...");
            }
        } catch (error) {
            const err = customApiErrorHandler(error, "Admin Upload New Course");
            toast.dismiss(loadingToastId);
            toast.error(err);
        }
    };

    // Editing Course Logics Start From Here
    const location = useLocation();
    const { isEditingCourse } = useSelector((state) => state.allCourses);

    const editingCourseData = location?.state?.course;

    const isCourseUpdated = () => {
        function isTagUpdated(arr1, arr2) {
            // Check if both arrays have the same length
            if (arr1?.length !== arr2?.length) {
                return true;
            }

            // Compare each object's name property
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i].toLowerCase() !== arr2[i].toLowerCase()) {
                    return true;
                }
            }

            // If all comparisons pass, arrays are considered equal
            return false;
        }

        // Get All Latest Data From Add Lesson Form
        const formCurrentData = getValues();

        if (
            formCurrentData?.courseTitle !== editingCourseData.courseTitle ||
            formCurrentData?.courseDescription !==
                editingCourseData?.courseDescription ||
            formCurrentData?.courseCategory !==
                editingCourseData?.courseCategory ||
            formCurrentData?.price !== editingCourseData.price ||
            formCurrentData?.thumbnail !== editingCourseData.thumbnail ||
            isTagUpdated(tags, editingCourseData.tags)
        ) {
            return true;
        } else {
            return false;
        }
    };

    useEffect(() => {
        setCourseCategories((prev) => tempCategory);
        setValue("courseModules", []);
        if (isEditingCourse && editSearcParamas) {
            setCourseModules((prev) => editingCourseData.courseModules);
            setValue("courseTitle", editingCourseData.courseTitle);
            setValue("courseDescription", editingCourseData.courseDescription);
            setValue("thumbnail", editingCourseData.thumbnail);
            setValue("courseCategory", editingCourseData.courseCategory);
            setValue("price", editingCourseData.price);
            setValue("thumbnail", editingCourseData.thumbnail);
            setTags((prev) => editingCourseData.tags);
            console.log("Printing Editable FOrm DAta...", getValues());
        } else {
            dispatch(setisEditingCourse(false));
        }
    }, []);

    const editCourseHandler = () => {
        if (isCourseUpdated()) {
            const loadingToastId = toast.loading("Please wait...");
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
                toast.error(
                    "Atleast One Lesson Is Required In Every Modules..."
                );
                return;
            }
            const courseUpdatedData = getValues();
            // Call API For Update The Data.... Of Course.... Assuming Aoi Call Was SuccessFull.... Got Response From API AND Get Updated All Course
            // dispatch(setAllCourse(newCourseData));

            setTimeout(() => {
                //assuming like its real api call....
                toast.dismiss(loadingToastId);
                toast.success("Course Updated Successfully....");
                console.log(
                    "After Editing Lesson New Course Data...",
                    courseUpdatedData
                );
                navigate("/admin/course_management/my_courses");
            }, 2000);
        } else {
            toast.error("No Changes Made to The Course...");
        }
    };
    const onSubmit = async (data) => {
        if (isEditingCourse) {
            editCourseHandler();
        } else {
            createCourse();
        }
    };

    return (
        <>
            <form className="w-full px-2 flex gap-4 py-2 relative h-fit ">
                <div className="w-[65%] rounded-lg flex flex-col gap-5 p-2">
                    <div className="flex justify-between items-center">
                        <h1 className=" text-base">
                            {isEditingCourse
                                ? "Edit Your Course"
                                : "Upload New Course"}
                        </h1>
                        <div>
                            <button
                                type="button"
                                onClick={handleSubmit(onSubmit)}
                            >
                                <IconBtn color={"#000f"}>
                                    {isEditingCourse
                                        ? "Save"
                                        : "Publish Course"}
                                </IconBtn>
                            </button>
                            {isEditingCourse && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        dispatch(setisEditingCourse(false));
                                        navigate(
                                            "/admin/course_management/my_courses"
                                        );
                                    }}
                                    className="ml-6"
                                >
                                    <IconBtn color={"#808080"}>Cancel</IconBtn>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Course Details Main Component this componet handle module or lessons */}
                    <div className=" rounded-lg  flex gap-5 flex-col shadow-md  ">
                        {/* Course Details component */}
                        <div className="bg-white p-3 rounded-lg">
                            <div className="py-2 flex flex-col space-y-2">
                                <h1 className="py-2 font-medium  text-gray-700 text-[15px]">
                                    Course Details
                                </h1>
                                <Input
                                    register={register}
                                    inputName={"courseTitle"}
                                    required={true}
                                    type={"text"}
                                    placeholder={"Course Name"}
                                    label={"Course Name *"}
                                    error={errors.courseTitle}
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
                                <h1 className="font-medium text-[14px] text-gray-800">
                                    Course Module
                                </h1>
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
                                <>
                                    <Admin_Course_Module
                                        setIsEditingModule={setIsEditingModule}
                                        module={module}
                                        moduleIndex={idx}
                                        courseModules={courseModules}
                                        setCourseModules={setCourseModules}
                                    />
                                    {isEditingModule && (
                                        <Admin_Add_Module
                                            setIsEditingModule={
                                                setIsEditingModule
                                            }
                                            priviousModuleData={module}
                                            isEditingModule={isEditingModule}
                                            courseModules={courseModules}
                                            setCourseModules={setCourseModules}
                                        />
                                    )}
                                </>
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
                <div className=" flex flex-1 shadow-md  bg-white h-fit rounded-md p-5 flex-col gap-5 mt-14">
                    <div>
                        <label
                            htmlFor="thumbnail"
                            className="text-sm font-medium text-gray-800 "
                        >
                            {thumbnailImage ? (
                                <div className="lg:h-[150px] border border-gray-400 rounded-md flex items-center justify-center overflow-hidden">
                                    <img
                                        src={thumbnailImage}
                                        className="w-full object-fit"
                                    />
                                </div>
                            ) : (
                                <div className="lg:h-[150px] border border-gray-400 rounded-md flex flex-col items-center justify-center gap-5 text-gray-800 capitalize tracking-wider">
                                    {isEditingCourse && !thumbnailImage ? (
                                        <img
                                            src={editingCourseData?.thumbnail}
                                            className="h-full w-full object-cover p-[2px]"
                                        />
                                    ) : (
                                        <>
                                            <span className="text-5xl">
                                                <IoCloudUpload />
                                            </span>
                                            <h1 className="text-lg">
                                                Choose A Thumbnail
                                            </h1>
                                        </>
                                    )}
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
                                const reader = new FileReader(); // intilizing File Reader;
                                if (file) {
                                    reader.onload = function (e) {
                                        // console.log("Printing OnlOAD EVeNt", e);
                                        setThumbnailImage(e.target.result);
                                    };
                                    reader.readAsDataURL(file); // reading
                                }
                            }}
                            accept="image/*"
                        />
                    </div>

                    <div>
                        <div>
                            <label
                                htmlFor="courseCategory"
                                className={`text-sm  font-medium ${
                                    errors.courseCategory
                                        ? "text-red-500"
                                        : "text-gray-800"
                                }`}
                            >
                                Course Category*
                            </label>
                            <select
                                {...register("courseCategory", {
                                    required: true,
                                })}
                                id="courseCategory"
                                name="courseCatgory"
                                defaultValue={
                                    isEditingCourse
                                        ? editingCourseData?.courseCategory
                                        : "default"
                                }
                                className="text-sm w-full h-full font-normal text-gray-800 "
                            >
                                <option value="default" selected disabled>
                                    Choose A Category
                                </option>
                                {courseCategories.length > 0 &&
                                    courseCategories?.map((category, idx) => {
                                        return (
                                            <option
                                                value={category?.name}
                                                key={idx}
                                            >
                                                {category?.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div
                            className={`flex flex-col gap-1 text-[13px] text-gray-800 font-medium `}
                        >
                            <label htmlFor={"tags"} className="">
                                Tags
                            </label>
                            <input
                                id="tags"
                                type={"text"}
                                placeholder="Tags"
                                value={tempTag}
                                onChange={(e) => setTempTag(e.target.value)}
                                className={`border-gray-200 border rounded-md px-2 py-1  text-gray-800 outline-none focus:ring-1 ring-blue-600 `}
                                onKeyUp={(e) => {
                                    // console.log("On kEY UP Event Triggered", e);
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
                            inputName={"price"}
                            required={true}
                            error={errors.price}
                            type={"number"}
                        />
                    </div>
                </div>
            </form>
        </>
    );
}

export default Admin_Upload_New_Course;
