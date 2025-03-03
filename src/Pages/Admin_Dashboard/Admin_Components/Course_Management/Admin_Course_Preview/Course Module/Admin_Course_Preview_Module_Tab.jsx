import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosPlayCircle } from "react-icons/io";

import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Admin_Course_Preview_Module_Tab = React.memo(({ module, courseId }) => {
    const [showLesson, setShowLesson] = useState(false);
    // Navigate For Edit Module Page
    // Delete Module Handler
    const deleteModuleHandler = async () => {};
    const navigate = useNavigate();
    return (
        <div className="relative transition-all duration-200  bg-white shadow-xl rounded-2xl px-2 py-3">
            <div
                className={`px-4 py-2  flex items-center justify-between ${
                    !showLesson && ""
                }`}
            >
                <div className="space-y-2">
                    <h2 className="text-base font-medium capitalize text-gray-700 ">
                        {module?.moduletitle}
                    </h2>
                </div>
                <div className="flex items-center gap-4">
                    <span
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 border text-blue-500 transition-none duration-500 text-xl hover:text-blue-700"
                        onClick={() =>
                            navigate(
                                "/admin/course_management/add_new_module/edit",
                                {
                                    state: {
                                        courseId,
                                        currentlyEditingModule: module,
                                    },
                                }
                            )
                        }
                    >
                        <FiEdit />
                    </span>
                    <span
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 border text-red-500 transition-none duration-500 text-xl hover:text-red-700"
                        onClick={deleteModuleHandler}
                    >
                        <RiDeleteBin6Line />
                    </span>
                    <span
                        className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 border text-gray-600 transition-none duration-500 text-xl hover:text-gray-700 ${
                            showLesson
                                ? "rotate-180 transition-all duration-200"
                                : ""
                        }`}
                        onClick={() => setShowLesson(!showLesson)}
                    >
                        <IoIosArrowDropdown />
                    </span>
                </div>
            </div>

            <div>
                {showLesson && (
                    <div className="w-full px-4 py-2  ">
                        {module?.lessons?.length ? (
                            <div>
                                {module?.lessons?.map((lesson) => (
                                    <div
                                        className="bg-gray-50 border border-gray-100 px-2 py-3
                             text-xs font-normal tracking-wide cursor-pointer flex items-center justify-between"
                                    >
                                        {/* Lesson Title And Video Icon Container */}
                                        <div className="flex items-center gap-1 text-gray-500">
                                            <span className="text-lg text-violet-500">
                                                <IoIosPlayCircle />
                                            </span>
                                            <h1 className="text-sm font-medium">
                                                {lesson.lessontitle}
                                            </h1>
                                        </div>
                                        {/* Lesson Button Container*/}
                                        <div className="flex items-center gap-4">
                                            <FiEdit className="text-lg text-blue-500 hover:text-blue-700" />
                                            <RiDeleteBin6Line className="text-lg text-red-500 hover:text-red-700" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div
                                className="bg-gray-50 border border-gray-100 px-2 py-3
                             text-xs font-normal tracking-wide cursor-pointer"
                            >
                                <h1 className="text-sm font-medium text-gray-500">
                                    No Lesson Found !!
                                </h1>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
});

export default Admin_Course_Preview_Module_Tab;
