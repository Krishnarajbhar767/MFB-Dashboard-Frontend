// import React, { useEffect, useState } from "react";
// import { HiPlayCircle } from "react-icons/hi2";
// import { IoIosArrowDown } from "react-icons/io";

// function CourseDetailsCourseContentModule({ module, setExpandAll, expandAll }) {
//     // State For Show Lesson If This True The lesson will show otherwise not
//     const [show, setShow] = useState(false);
//     // Using Use For Set Show True Or False
//     useEffect(() => {
//         if (expandAll) {
//             setShow(true);
//         } else {
//             setShow(false);
//         }
//     }, [expandAll]);
//     return (
//         <div className=" border-b border-gray-200 px-3 py-2">
//             <h1
//                 className="text-gray-800 flex items-center gap-2 text-base md:tracking-wide font-normal transition-all duration-300 cursor-pointer"
//                 onClick={() => setShow(!show)}
//             >
//                 <span
//                     className={`text-lg font-medium transition-all duration-300 ${
//                         show ? "rotate-180" : "-rotate-90"
//                     }`}
//                 >
//                     <IoIosArrowDown />
//                 </span>
//                 {module.moduleName}
//             </h1>
//             {show && (
//                 <div className="w-full pl-5 transition-all duration-300">
//                     {module.lessons.map((lesson) => (
//                         <div className="flex items-center justify-between py-1 text-gray-600 text-sm font-normal hover:text-gray-800 hover:font-medium">
//                             <h2 className="flex items-center gap-2">
//                                 <span className="text-lg">
//                                     <HiPlayCircle />
//                                 </span>
//                                 {lesson.lessonName}
//                             </h2>
//                             <span>{lesson.lessonDuration}</span>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default CourseDetailsCourseContentModule;
import { useState, useEffect } from "react";
import { HiPlayCircle } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

const CourseDetailsCourseContentModule = ({
    module,
    setExpandAll,
    expandAll,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        setIsExpanded(expandAll);
    }, [expandAll]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                className="w-full px-4 py-3 flex items-center justify-between text-left transition-colors duration-300 hover:bg-gray-50 focus:outline-none  "
                onClick={toggleExpand}
            >
                <div className="flex items-center space-x-2">
                    <IoIosArrowDown
                        className={`text-gray-400 transition-transform duration-300 ${
                            isExpanded ? "transform rotate-180" : "-rotate-90"
                        }`}
                    />
                    <span className="font-medium text-gray-800">
                        {module.moduleName}
                    </span>
                </div>
                <span className="text-sm text-gray-500">
                    {module.lessons.length} lessons
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                {module.lessons.map((lesson, index) => (
                    <div
                        key={lesson.id + Math.random()}
                        className="flex items-center justify-between px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                    >
                        <div className="flex items-center space-x-2">
                            <HiPlayCircle className="text-purple-500" />
                            <span>{lesson.lessonName}</span>
                        </div>
                        <span className="text-xs text-gray-400">
                            {lesson.lessonDuration}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseDetailsCourseContentModule;
