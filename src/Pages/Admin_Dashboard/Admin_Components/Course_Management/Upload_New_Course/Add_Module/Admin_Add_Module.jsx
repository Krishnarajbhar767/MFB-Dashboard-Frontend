import React, { useState } from "react";
import {
    AdminCustomInput,
    AdminCustomSelect,
    AdminCustomTextarea,
} from "../../../../../../Common_Components/Form_Components/AdminCustomInputs";
import { useForm } from "react-hook-form";
import { IoIosAddCircle } from "react-icons/io";
import { IoSaveSharp } from "react-icons/io5";
import Admin_Module_Card from "./Module Card/Admin_Module_Card";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { adminCourseManagementApis } from "../../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
import { customApiErrorHandler } from "../../../../../../Utils/Error/cutomApiErrorHandler";
import { setIsCoursesModified } from "../../../../../../Redux/Slices/All_Courses";

function Admin_Add_Module() {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm();
    // dispach For set Redux State
    const dispatch = useDispatch();
    // get all course Data from Redux Toolkit -->
    const { allCourses } = useSelector((state) => state.allCourses);

    // State For Check Is I am on Editing Mode Of Module Or Not?
    const [isEditingModule, setisEditingModule] = useState(false);

    // function for check is module is Exist Or Not ?
    function isModuleExist(data) {
        let isModuleExist;

        for (const course of allCourses) {
            // loop all course and find couse By her Id
            if (course?._id === data?.courseId) {
                // after finding course if module length is 0 that mean there is no module so return true and exits the Loopp
                if (course?.modules.length < 1) {
                    isModuleExist = false;
                    break;
                }
                // if Module length is >1 then loop aal modules and chek is module name exits or not?
                for (const module of course?.modules) {
                    if (module?.moduletitle === data?.moduletitle) {
                        // if module name match then return modulename ixsit true and breack the loop
                        isModuleExist = true;
                        break;
                    } else {
                        // if module name match then return modulename false and breack the loop
                        isModuleExist = false;
                        break;
                    }
                }
                break;
            }
        }
        console.log("Entred isModule Exit Function Loop ->", isModuleExist);
        return isModuleExist;
    }
    // Function For ClearInputs
    function clearInput() {
        setValue("courseId", "");
        setValue("moduletitle", "");
        setValue("moduleDescription", "");
    }
    // Function Handle Add Module
    const addModuleHandler = async (data) => {
        // check is This Module Already Exist Or Not ? If Exist Then Check and Ask are You Sure For Make Copy Of That Module if User Allow Then Create All Api And Create Duplicate Module
        // step 1 check is moduleExist if
        if (isModuleExist(data)) {
            toast.error("A module with this title already exists.");
            return;
        }
        //  if Module dose Not exit then call create Module Api If SuccessFull Then get All Module Data And Set All Module... For Realtime Module Update
        const loadingToastId = toast.loading("Please wait !");
        try {
            const moduleData = await adminCourseManagementApis.createModule(
                data
            );
            if (!moduleData) {
                toast.error("Something went wrong.");
                return;
            }
            toast.success("Module Created successfully");
            // If Evrything is fine then set isCoursesModified True Fro Fetch All Courses Data
            dispatch(setIsCoursesModified(true));
            // clear inputs
            clearInput();
        } catch (error) {
            const err = customApiErrorHandler(error, "Create Module Page");
            toast.error(err);
        } finally {
            toast.dismiss(loadingToastId);
        }
    };
    // Function Handle Edit Module When I Am On Edit Mode of Module
    const editModuleHandler = (data) => {
        console.log("I am On Edit Module Mode --->", data);
    };
    // On Submit Handler When Form Submit
    const onSubmit = (data) => {
        if (isEditingModule) {
            // Calling Edit Handlet When I Am On Edit Mode
            editModuleHandler(data);
        } else {
            // Call Add Module Handler When I Am Adding Module to Course....
            addModuleHandler(data);
        }
    };

    return (
        <div className="w-full">
            {/* Create Module Container---> */}
            <div className="w-1/2 h-auto mx-auto border p-4 ">
                <h1>Add Module To Course</h1>
                {/* Inputs Container.. */}
                <form
                    className="space-y-4"
                    onSubmit={handleSubmit(onSubmit, (err) =>
                        console.log(
                            `Error While Submitting The Create Or Update Module ----> ${err}`
                        )
                    )}
                >
                    {/* Module Belong To Which Course */}
                    <div className="">
                        <AdminCustomSelect
                            label="Course*"
                            placeholder="Select A Course"
                            registerOptions={register("courseId", {
                                required: "Course is required*",
                            })}
                            options={allCourses?.map((item) => ({
                                value: item?._id,
                                id: item?._id,
                                label: item?.courseTitle,
                            }))}
                            error={errors.courseId}
                        />
                    </div>
                    {/* Module Name */}
                    <div>
                        <AdminCustomInput
                            label="Module Name*"
                            registerOptions={register("moduletitle", {
                                required: "Module name is required.*",
                            })}
                            error={errors.moduletitle}
                        />
                    </div>
                    <div>
                        <AdminCustomTextarea
                            label="Module Description"
                            registerOptions={register("moduleDescription", {
                                required: "Module description is required*",
                            })}
                            error={errors.moduleDescription}
                        />
                    </div>
                    <div className="w-fit mx-auto">
                        <button
                            type="submit"
                            class="py-2.5 flex items-center gap-2 px-6 text-sm rounded-lg bg-gray-700 text-white cursor-pointer font-normal text-center shadow-xs transition-all duration-500 hover:bg-gray-900"
                        >
                            {isEditingModule ? (
                                <IoSaveSharp />
                            ) : (
                                <IoIosAddCircle />
                            )}
                            {isEditingModule ? "Save Module" : "Add Module"}
                        </button>
                    </div>
                </form>
                {/* Render All Modules ----> */}
            </div>
            <div className="w-full mt-10 border-t-2 border-gray-500 ">
                {/* Cards Container */}
                <div className="w-full h-full py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Admin_Module_Card />
                    <Admin_Module_Card />
                    <Admin_Module_Card />
                </div>
            </div>
        </div>
    );
}

export default Admin_Add_Module;
