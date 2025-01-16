import React from "react";
import { useSelector } from "react-redux";
import { RiDragMove2Fill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import IconBtn from "../../../../../Common_Components/IconBtn";
import { FaCirclePlay } from "react-icons/fa6";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Admin_Add_New_Lesson from "./Add_New Lesson/Admin_Add_New_Lesson";
function Admin_Course_Module({
    module,
    moduleIndex,
    courseModules,
    setCourseModules,
}) {
    const { course } = useSelector((state) => state);
    const [isAddingLesson, setIsAddingLesson] = useState(false);
    const handleAddNewLesson = () => {
        setIsAddingLesson(true);
    };

    return (
        <div className="h-fit min-h-10  px-2  rounded-lg border border-gray-200 flex flex-col gap-2 py-2 ">
            {/* Course Add Lesson Modal dynamic It Will Open ONly WHen You CLick on Add Lesson  */}
            {isAddingLesson && (
                <Admin_Add_New_Lesson
                    setisAddingLesson={setIsAddingLesson}
                    module={module}
                    courseModules={courseModules}
                    setCourseModules={setCourseModules}
                />
            )}
            <div className="flex justify-between items-center py-4 text-gray-900 font-medium">
                <h1>{module?.moduleName}</h1>
                <div className="flex gap-2 text-xl cursor-pointer">
                    <span>
                        <RiDragMove2Fill />
                    </span>
                    <span>
                        <MdDeleteForever />
                    </span>
                </div>
            </div>
            {/* Rendering All Tu Lesstion Dynamicaly */}
            {module.lesson?.length > 0 &&
                module?.lesson.map((lesson, idx) => (
                    <div className="border  border-gray-300 bg-gray-200 flex justify-between items-center py-4 px-4 rounded-md">
                        <div className="flex gap-3 items-center text-sm capitalize font-normal tracking-wider">
                            <FaCirclePlay />
                            <h1>{lesson.lessonName}</h1>
                        </div>
                        <div className="text-sm font-medium text-gray-800">
                            <p>{lesson.lessonDuration}</p>
                        </div>
                    </div>
                ))}

            {/* Add Lession Button */}
            <div className="flex text-black w-fit" onClick={handleAddNewLesson}>
                <IconBtn color={"#000f"}>
                    <FiPlus />
                    Add Lesson
                </IconBtn>
            </div>
        </div>
    );
}

export default Admin_Course_Module;