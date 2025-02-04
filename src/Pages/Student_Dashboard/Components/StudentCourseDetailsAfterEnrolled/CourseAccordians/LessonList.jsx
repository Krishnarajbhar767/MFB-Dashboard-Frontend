import { useState } from "react";
import { BiChevronDown, BiPlay } from "react-icons/bi";

export const LessonList = ({ lessons }) => {
    return (
        <div className="transition-all duration-300 ease-in-out max-h-96 overflow-hidden">
            {lessons.map((lesson, index) => (
                <div
                    key={index}
                    className="px-3 sm:px-4 py-2 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
                >
                    <div className="flex items-center space-x-3 min-w-0">
                        <BiPlay className="w-4 h-4 text-gray-400 shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-600 truncate">
                            {lesson.title}
                        </span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 shrink-0">
                        {lesson.duration}
                    </span>
                </div>
            ))}
        </div>
    );
};
