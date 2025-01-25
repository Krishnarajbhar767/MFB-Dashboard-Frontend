import React, { useState } from "react";
import IconBtn from "../../../../../../Common_Components/IconBtn";
import { RxCross1 } from "react-icons/rx";
import toast from "react-hot-toast";
import { useEffect } from "react";
function Admin_Add_Module({
    setisAddingModule,
    courseModules,
    setCourseModules,
    priviousModuleData,
    isEditingModule,
    setIsEditingModule,
}) {
    // Holding Temprory Module Name
    const [moduleName, setModuleNames] = useState("");
    // Holding Temp Module Description
    const [moduleDescription, setModuleDescription] = useState("");
    const addModuleHandler = async (event) => {
        try {
            // Todo : Call Real APi FOR Craete MOdule
            // Seting Modules IN The Main STart Of MOdule That Are Created In The Upload New Course
            setCourseModules((prev) => [
                ...prev,
                {
                    moduleName,
                    id: Math.random() * 10,
                    moduleDescription: moduleDescription,
                    lesson: [],
                },
            ]);
            // Clearing Temp Module Name After CLicking Create New Module
            setModuleNames("");
            // Clearing Temp Module Name After CLicking Create New Module
            setisAddingModule(false);
            // Toast Success
            toast.success("Module Created Successfully...");
        } catch (error) {
            // Loging Error If any error accured while creating The Module
            console.log(
                "Got Error WHile Creating The Module From JSX ->",
                error
            );
            toast.error(error.message);
        }
    };
    const editModuleHandler = () => {
        if (isModuleUpdated()) {
            // Call Real Api TO Update That Module Name And Description
            setCourseModules((prev) =>
                prev?.map((singleModule, idx) => {
                    if (singleModule.id === priviousModuleData.id) {
                        return {
                            ...singleModule,
                            moduleName,
                            moduleDescription,
                        };
                    } else {
                        return singleModule;
                    }
                })
            );

            // Clearing Temp Module Name After CLicking Edit  Module
            setModuleNames("");
            // Clearing Temp Module Desc After CLicking Edit  Module
            setModuleDescription("");

            setIsEditingModule(false);
            // Toast Success
            toast.success("Module Updated Successfully...");
        } else {
            toast.error("No changes made to module...");
        }
    };
    useEffect(() => {
        if (isEditingModule) {
            setModuleNames(priviousModuleData.moduleName);
            setModuleDescription(priviousModuleData.moduleDescription);
        }
    }, []);

    const isModuleUpdated = () => {
        if (
            priviousModuleData.moduleName !== moduleName ||
            priviousModuleData.moduleDescription !== moduleDescription
        ) {
            return true;
        } else {
            false;
        }
    };
    return (
        <div
            className="w-[50%]
        flex flex-col gap-3 fixed top-1/3 left-[35vw]  bg-white p-4 rounded-lg border border-gray-200 text-black z-10"
        >
            <div>
                <label
                    htmlFor="courseModule"
                    className="flex justify-between items-center"
                >
                    <span className="text-sm font-light">Module Name</span>
                    <span
                        onClick={(e) => {
                            // Setting False Becouse Add MOdule MOdal are depended at this state if this state is true then add module modal will open
                            if (isEditingModule) {
                                setIsEditingModule(false);
                            } else {
                                setisAddingModule(false);
                            }
                        }}
                        className="cursor-pointer"
                    >
                        <RxCross1 />
                    </span>
                </label>
                <input
                    required={true}
                    type="text"
                    id="courseModule"
                    name="courseModule"
                    className="w-full border border-gray-300 rounded-md px-2 py-1 outline-none text-gray-800 font-normal text-sm capitalize"
                    value={moduleName}
                    // onchage of  input setting temp module name
                    onChange={(e) => setModuleNames(e.target.value)}
                />
            </div>
            <div>
                <label
                    htmlFor="courseModule"
                    className="flex justify-between items-center"
                >
                    <span className="text-sm font-light">
                        Module Description
                    </span>
                </label>
                <input
                    required={true}
                    type="text"
                    id="courseModule"
                    name="courseModule"
                    className="w-full border border-gray-300 rounded-md px-2 py-1 outline-none text-gray-800 font-normal text-sm capitalize"
                    value={moduleDescription}
                    // onchage of  input setting temp module name
                    onChange={(e) => setModuleDescription(e.target.value)}
                />
            </div>
            <button
                type="button"
                onClick={() => {
                    // If Module Name And Module description Field are not empty then if block other wise else block
                    if (moduleName && moduleDescription) {
                        if (isEditingModule) {
                            editModuleHandler();
                        } else {
                            addModuleHandler();
                        }
                    } else {
                        toast.error("All Field Are Required...");
                    }
                }}
            >
                <IconBtn color={"#000f"}>Add Module</IconBtn>
            </button>
        </div>
    );
}

export default Admin_Add_Module;
