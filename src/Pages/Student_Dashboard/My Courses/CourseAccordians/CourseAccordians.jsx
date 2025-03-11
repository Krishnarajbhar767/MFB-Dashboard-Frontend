import { BiChevronDown } from "react-icons/bi";
import { LessonList } from "./LessonList";

export const CourseAccordion = ({
    courseSections,
    expandedSection,
    toggleSection,
}) => {
    return (
        <div className="space-y-2">
            {courseSections.map((section) => (
                <div
                    key={section.id}
                    className="border rounded-lg overflow-hidden"
                >
                    <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex items-center space-x-2 min-w-0">
                            <span className="font-medium text-sm sm:text-base truncate">
                                {section.title}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-500 shrink-0">
                                {section.duration}
                            </span>
                        </div>
                        <BiChevronDown
                            className={`w-5 h-5 transition-transform shrink-0 ${
                                expandedSection === section.id
                                    ? "transform rotate-180"
                                    : ""
                            }`}
                        />
                    </button>
                    {expandedSection === section.id && (
                        <LessonList lessons={section.lessons} />
                    )}
                </div>
            ))}
        </div>
    );
};
