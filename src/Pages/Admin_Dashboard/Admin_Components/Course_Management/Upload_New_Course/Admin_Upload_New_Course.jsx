import React, { useState } from "react";
import { IoCloudUpload } from "react-icons/io5";
import {
    AdminCustomInput,
    AdminCustomTextarea,
} from "../../../../../Common_Components/Form_Components/AdminCustomInputs";
import { useForm } from "react-hook-form";
import UploadFile from "../../../../../Common_Components/UploadFile";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

const Admin_Upload_New_Course = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        getValues,
        setValue,
    } = useForm();
    const [isEditingCourse, setIsEditingCourse] = useState(false);
    const onSubmit = async (data) => {
        console.log("Printing Course Data ---->", data);
    };
    const [tempTags, setTempTags] = useState([
        "Hello ji",
        "Hello ji",
        "Hello ji",
        "Hello ji",
        "Hello ji",
        "Hello ji",
        "Hello ji",
    ]);
    return (
        <div className="container mx-auto p-4 ">
            <form className="flex gap-4">
                {/* Left Section: Course Name and Description */}
                <div className="w-full lg:w-2/3 bg-white p-6 rounded-md shadow ">
                    <h2 className="text-xl font-semibold mb-4">
                        Course Details
                    </h2>

                    {/* Course Name */}
                    <div className="mb-4">
                        <AdminCustomInput
                            label="Course Title*"
                            type="text"
                            placeholder="Enter course title"
                            registerOptions={register("courseTitle", {
                                required: "Course title is required",
                            })}
                            error={errors.courseTitle}
                        />
                    </div>

                    {/* Course Description */}
                    <div>
                        <AdminCustomTextarea
                            label="Course Description*"
                            type="text"
                            placeholder="Enter course description"
                            registerOptions={register("courseDescription", {
                                required: "Course description is required",
                            })}
                            error={errors.courseDescription}
                        />
                    </div>
                    <div className="w-fit mx-auto mt-4">
                        <button
                            onClick={handleSubmit(onSubmit)}
                            type="button"
                            class="py-2.5 px-6 text-sm rounded-lg bg-gray-700 text-white cursor-pointer font-normal text-center shadow-xs transition-all duration-500 hover:bg-gray-900"
                        >
                            Publish Course
                        </button>
                    </div>
                </div>

                {/* Right Section: Thumbnail and Tags */}
                <div className="w-full lg:w-1/3 bg-white p-6 rounded-md shadow">
                    {/* Thumbnail Upload */}
                    <div className="mb-6">
                        <UploadFile
                            allowedType={"video"}
                            maxFileSizeMB={100}
                            existingFileUrl={""}
                            onUploadComplete={(url) =>
                                console.log("Success Url - >", url)
                            }
                        />
                    </div>

                    {/* Tags */}
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
                            {...register("tag")}
                            onKeyUp={(e) => {
                                if (e.key === "Enter") {
                                    const tag = getValues("tag");
                                    if (!tag) {
                                        return toast.error(
                                            "Tag should not be empty."
                                        );
                                    }
                                    setTempTags((prev) => [...prev, tag]);
                                    console.log("Tag", getValues("tag"));
                                    setValue("tag", "");
                                }
                            }}
                            placeholder="Enter tags separated by commas"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        {/* You can later replace the static tags below with your dynamic tag component */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {tempTags?.map((item, idx) => (
                                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full flex items-center gap-1 text-sm">
                                    {item}{" "}
                                    <span
                                        className="p-[2px] rounded-full bg-gray-500 text-white"
                                        onClick={() => {
                                            setTempTags((prev) => {
                                                return prev?.filter(
                                                    (item, index) =>
                                                        index !== idx
                                                );
                                            });
                                        }}
                                    >
                                        <RxCross2 />
                                    </span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Admin_Upload_New_Course;
