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

function Admin_Add_Module() {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm();
    // State For Check Is I am on Editing Mode Of Module Or Not?
    const [isEditingModule, setisEditingModule] = useState(false);
    // Function Handle Add Module
    const addModuleHandler = (data) => {
        console.log("I am On Add Module Mode --->", data);
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
