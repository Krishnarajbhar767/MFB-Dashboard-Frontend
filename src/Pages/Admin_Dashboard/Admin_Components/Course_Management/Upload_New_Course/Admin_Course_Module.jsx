import React from "react";
import { useSelector } from "react-redux";
import { RiDragMove2Fill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import IconBtn from "../../../../../Common_Components/IconBtn";
import { FaCirclePlay } from "react-icons/fa6";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Admin_Add_New_Lesson from "./Add_New Lesson/Admin_Add_New_Lesson";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

function Admin_Course_Module({
    module,
    moduleIndex,
    courseModules,
    setCourseModules,
    isDraggable,
    setIsEditingModule,
}) {
    // this state is use to open or closs the add new lesson modal
    const [isAddingLesson, setIsAddingLesson] = useState(false);
    const navigate = useNavigate();
    const [isEditingLesson, setIsEditingLesson] = useState(false);
    const [editingLesson, setEditingLesson] = useState(null);
    return (
        <div
            draggable
            className="h-fit min-h-10  px-2  rounded-lg border border-gray-200 flex flex-col gap-2 py-2 "
        >
            {/* Course Add Lesson Modal dynamic It Will Open ONly WHen You CLick on Add Lesson  */}
            {isAddingLesson && (
                <Admin_Add_New_Lesson
                    setisAddingLesson={setIsAddingLesson}
                    module={module}
                    courseModules={courseModules}
                    setCourseModules={setCourseModules}
                />
            )}
            {isEditingLesson && (
                <Admin_Add_New_Lesson
                    setIsEditingLesson={setIsEditingLesson}
                    isEditingLesson={isEditingLesson}
                    module={module}
                    courseModules={courseModules}
                    setCourseModules={setCourseModules}
                    editingLesson={editingLesson}
                />
            )}
            <div
                className="flex justify-between items-center py-1 text-gray-800
            text-[14px]
            font-medium capitalize"
            >
                <h1>{module?.moduleName}</h1>
                <div
                    className="flex gap-2 text-base cursor-pointer "
                    onClick={() => setIsEditingModule(true)}
                >
                    <span>
                        <FaEdit />
                    </span>
                    <span>
                        <RiDragMove2Fill />
                    </span>
                    <span
                        onClick={() => {
                            console.log(courseModules, module);
                            setCourseModules((prev) => {
                                return prev?.filter(
                                    (elem) => elem.id !== module.id
                                );
                            });
                        }}
                    >
                        <MdDeleteForever />
                    </span>
                </div>
            </div>
            {/* Rendering All Lesstion Dynamicaly */}
            {module.lesson?.length > 0 &&
                module?.lesson.map((lesson, idx) => (
                    <div className="border  border-gray-300 bg-gray-200 flex justify-between items-center py-2 px-4 rounded-md">
                        <div className="flex gap-3 items-center text-sm capitalize font-normal tracking-wider">
                            <FaCirclePlay />
                            <h1>{lesson.lessonName}</h1>
                        </div>
                        <div className="text-sm font-medium text-gray-800 flex items-center gap-6">
                            <p>{lesson.lessonDuration}</p>
                            <button
                                type="button"
                                className="flex gap-1 items-center cursor-pointer"
                                onClick={() => {
                                    setEditingLesson(lesson);
                                    setIsEditingLesson(true);
                                }}
                            >
                                <FaEdit /> Edit
                            </button>
                        </div>
                    </div>
                ))}

            {/* Add Lession Button */}
            <div
                className="flex text-black w-fit"
                onClick={() => setIsAddingLesson(true)}
            >
                <IconBtn color={"#000f"}>
                    <FiPlus />
                    Add Lesson
                </IconBtn>
            </div>
        </div>
    );
}

export default Admin_Course_Module;
