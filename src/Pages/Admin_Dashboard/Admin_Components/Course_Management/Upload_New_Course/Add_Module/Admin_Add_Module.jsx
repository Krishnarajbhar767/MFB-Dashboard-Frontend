import React, { useEffect, useState } from "react";
import {
    AdminCustomInput,
    AdminCustomSelect,
    AdminCustomTextarea,
} from "../../../../../../Common_Components/Form_Components/AdminCustomInputs";
import { useForm } from "react-hook-form";
import { IoIosAddCircle } from "react-icons/io";
import { IoSaveSharp } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { adminCourseManagementApis } from "../../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
import { customApiErrorHandler } from "../../../../../../Utils/Error/cutomApiErrorHandler";
import { setIsCoursesModified } from "../../../../../../Redux/Slices/All_Courses";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";

function Admin_Add_Module() {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm();

    const location = useLocation();
    const navigate = useNavigate();
    // dispach For set Redux State
    const dispatch = useDispatch();
    // get all course Data from Redux Toolkit -->
    const { allCourses } = useSelector((state) => state.allCourses);
    // Get Editing Module Data
    const currentlyEditingModule =
        location?.state?.currentlyEditingModule ?? null;
    // get courseId
    const courseId = location?.state?.courseId ?? null;
    // State For Check Is I am on Editing Mode Of Module Or Not?
    const [isEditingModule, setisEditingModule] = useState(
        courseId && currentlyEditingModule ? true : false
    );

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
            console.log("New Module Data ---->", data);
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

    // Function For Check Is Module Updated Or Not While Editing The Module
    const isModuleUpdated = (data) => {
        // Check Is Course Changed Or Not
        if (courseId !== data.courseId) {
            return true;
        }
        // Check Is Module Title Is Updated OR Nor ?
        if (currentlyEditingModule.moduletitle !== data.moduletitle) {
            return true;
        }
        // Check Is Module Description Is Updated Or NOr ?
        if (
            currentlyEditingModule.moduleDescription !== data.moduleDescription
        ) {
            return true;
        }
        // Is Nothing Changed Then Return False and stop api call
        return false;
    };
    // Function Handle Edit Module When I Am On Edit Mode of Module
    const editModuleHandler = async (data) => {
        if (!isModuleUpdated(data)) {
            toast.error("Opps! No Changes Made Module.");
            return;
        }

        // Now Evrything Is Fine.. We Can Call Our Edit Module API...
        const toastId = toast.loading("Updating Module...");
        try {
            // step1 - call api
            console.log("Course Id --->", courseId);
            // Inserting Module Id ----> For Fetch Module Id
            data.id = currentlyEditingModule._id;
            const response = await adminCourseManagementApis.editModule(
                courseId,
                data
            );
            // step2 - check is response succesfull or not
            if (!response) {
                toast.error("Opps! something went wrong");
            }
            // step3 - setcourse modified true
            dispatch(setIsCoursesModified(true));
            // step4 - toast.success
            toast.success("Module updated Successfully.");
            // step5 - go back to coursePreview
            navigate(-1);
        } catch (error) {
            // step get err in variable by custom error handler
            const err = customApiErrorHandler(
                error,
                "Error Add Module While Editing Module Page --->"
            );
            toast.error(err);
        } finally {
            toast.dismiss(toastId);
        }
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

    useEffect(() => {
        if (currentlyEditingModule && courseId) {
            setValue("courseId", courseId);

            setValue("moduletitle", currentlyEditingModule.moduletitle);
            setValue(
                "moduleDescription",
                currentlyEditingModule.moduleDescription
            );
        }
    }, [currentlyEditingModule, courseId]);
    return (
        <div className="w-full">
            {/* Create Module Container---> */}
            <div className="w-1/2 h-auto mx-auto  p-4 border  rounded-md bg-white shadow-sm">
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
                            defaultOption="Choose course"
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
                    <div className="w-fit mx-auto flex items-center justify-center gap-4">
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
                        {isEditingModule && (
                            <button
                                type="button"
                                class="py-2.5 flex items-center gap-2 px-6 text-sm rounded-lg bg-gray-200 text-gray-900 cursor-pointer font-normal text-center shadow-xs transition-all duration-500 hover:bg-gray-300 border border-gray-300"
                                onClick={() => navigate(-1)}
                            >
                                <MdOutlineCancel /> Cancel
                            </button>
                        )}
                    </div>
                </form>
                {/* Render All Modules ----> */}
            </div>
        </div>
    );
}

export default Admin_Add_Module;
