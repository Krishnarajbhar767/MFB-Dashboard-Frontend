import React, { useState } from "react";
import IconBtn from "../../../../../../Common_Components/IconBtn";
import { RxCross1 } from "react-icons/rx";
import toast from "react-hot-toast";

function Admin_Add_Module({
    setisAddingModule,
    courseModules,
    setCourseModules,
}) {
    const [moduleName, setModuleNames] = useState("");
    const [moduleDescription, setModuleDescription] = useState("");
    const addModuleHandler = async (event) => {
        try {
            // Todo : Call Real APi FOR Craete MOdule
            setCourseModules((prev) => [
                ...prev,
                {
                    moduleName,
                    id: Math.random() * 10,
                    moduleDescription: moduleDescription,
                },
            ]);
            setModuleNames("");
            setisAddingModule(false);
            toast.success("Module Created Successfully...");
        } catch (error) {
            console.log(
                "Got Error WHile Creating The Module From JSX ->",
                error
            );
            toast.error(error.message);
        }
    };
    return (
        <div
            className="w-[50%]
        flex flex-col gap-4 fixed top-1/3 left-[35vw]  bg-white p-4 rounded-lg border border-gray-200 text-black z-10"
        >
            <label
                htmlFor="courseModule"
                className="flex justify-between items-center"
            >
                <span className="text-md font-medium">Module Name</span>
                <span
                    onClick={(e) => {
                        setisAddingModule(false);
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
                className="w-full border border-gray-300 rounded-md p-2 outline-none text-gray-800 font-normal"
                value={moduleName}
                onChange={(e) => setModuleNames(e.target.value)}
            />
            <label
                htmlFor="courseModule"
                className="flex justify-between items-center"
            >
                <span className="text-md font-medium">Module Description</span>
            </label>
            <input
                required={true}
                type="text"
                id="courseModule"
                name="courseModule"
                className="w-full border border-gray-300 rounded-md p-2 outline-none text-gray-800 font-normal"
                value={moduleDescription}
                onChange={(e) => setModuleDescription(e.target.value)}
            />
            <button
                type="button"
                onClick={() => {
                    if (moduleName && moduleDescription) {
                        addModuleHandler();
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
