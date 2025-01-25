import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

function Admin_Course_Management_Single_Course_Module_Tab({ module }) {
    const [showLesson, setShowLesson] = useState(false);
    return (
        <div className="relative transition-all duration-200  bg-white shadow-xl rounded-2xl px-2 py-3">
            <div
                className={`px-4 py-2  flex items-center justify-between ${
                    !showLesson && ""
                }`}
            >
                <div className="space-y-2">
                    <h2 className="text-sm font-medium text-gray-700 ">
                        {module?.moduleName}
                    </h2>
                    {/* <div className="text-sm font-light space-x-4 ">
                        <span>
                            {module?.lessons?.length > 0
                                ? module?.lessons?.length
                                : 0}{" "}
                            lesson
                        </span>
                        <span>•</span>
                        <span>3 Quizes</span>
                        <span>•</span>
                        <span>60 Minute</span>
                    </div> */}
                </div>
                <span
                    className={`text-2xl cursor-pointer font-light text-gray-800 ${
                        showLesson
                            ? "rotate-180 transition-all duration-200"
                            : ""
                    }`}
                    onClick={() => setShowLesson(!showLesson)}
                >
                    <IoIosArrowDropdown />
                </span>
            </div>
            <div>
                {showLesson && (
                    <div className="w-full px-4 py-2  ">
                        {module?.lessons?.map((lesson) => (
                            <div
                                className="bg-gray-50 border border-gray-100 px-2 py-3
                             text-xs font-normal tracking-wide cursor-pointer"
                            >
                                <h1>{lesson.lessonName}</h1>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Admin_Course_Management_Single_Course_Module_Tab;
