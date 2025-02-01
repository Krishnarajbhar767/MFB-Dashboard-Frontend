import React, { useEffect, useState } from "react";
import { HiPlayCircle } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

function CourseDetailsCourseContentModule({ module, setExpandAll, expandAll }) {
    // State For Show Lesson If This True The lesson will show otherwise not
    const [show, setShow] = useState(false);
    // Using Use For Set Show True Or False
    useEffect(() => {
        if (expandAll) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [expandAll]);
    return (
        <div className=" border-b border-gray-200 px-3 py-2">
            <h1
                className="text-gray-800 flex items-center gap-2 text-base md:tracking-wide font-normal transition-all duration-300 cursor-pointer"
                onClick={() => setShow(!show)}
            >
                <span
                    className={`text-lg font-medium transition-all duration-300 ${
                        show ? "rotate-180" : "-rotate-90"
                    }`}
                >
                    <IoIosArrowDown />
                </span>
                {module.moduleName}
            </h1>
            {show && (
                <div className="w-full pl-5 transition-all duration-300">
                    {module.lessons.map((lesson) => (
                        <div className="flex items-center justify-between py-1 text-gray-600 text-sm font-normal hover:text-gray-800 hover:font-medium">
                            <h2 className="flex items-center gap-2">
                                <span className="text-lg">
                                    <HiPlayCircle />
                                </span>
                                {lesson.lessonName}
                            </h2>
                            <span>{lesson.lessonDuration}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CourseDetailsCourseContentModule;
