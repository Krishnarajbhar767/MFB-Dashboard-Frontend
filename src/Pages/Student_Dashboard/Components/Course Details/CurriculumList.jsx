import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Play, File, Lock, CheckCircle } from "lucide-react";

const CurriculumList = () => {
    const [expandedSections, setExpandedSections] = useState({ 1: true });

    const toggleSection = (sectionId) => {
        setExpandedSections((prev) => ({
            ...prev,
            [sectionId]: !prev[sectionId],
        }));
    };

    // Mock curriculum data
    const curriculum = [
        {
            id: 1,
            title: "Getting Started with JavaScript",
            duration: "2 hours 15 minutes",
            lectures: 8,
            content: [
                {
                    id: 101,
                    title: "Course Introduction",
                    duration: "5:20",
                    type: "video",
                    isCompleted: true,
                    isPreview: true,
                },
                {
                    id: 102,
                    title: "Setting Up Your Development Environment",
                    duration: "12:45",
                    type: "video",
                    isCompleted: true,
                },
                {
                    id: 103,
                    title: "JavaScript Basics: Variables and Data Types",
                    duration: "18:30",
                    type: "video",
                    isCompleted: false,
                },
                {
                    id: 104,
                    title: "JavaScript Basics: Operators",
                    duration: "15:15",
                    type: "video",
                    isCompleted: false,
                },
                {
                    id: 105,
                    title: "JavaScript Basics: Control Flow",
                    duration: "22:10",
                    type: "video",
                    isCompleted: false,
                },
                {
                    id: 106,
                    title: "Section Resources",
                    duration: "N/A",
                    type: "file",
                    isCompleted: false,
                },
                {
                    id: 107,
                    title: "Section Quiz",
                    duration: "15 mins",
                    type: "quiz",
                    isCompleted: false,
                },
                {
                    id: 108,
                    title: "Section Project: Interactive Calculator",
                    duration: "45 mins",
                    type: "project",
                    isCompleted: false,
                },
            ],
        },
        {
            id: 2,
            title: "Functions and Objects",
            duration: "3 hours 45 minutes",
            lectures: 10,
            content: [
                {
                    id: 201,
                    title: "Introduction to Functions",
                    duration: "20:15",
                    type: "video",
                    isCompleted: false,
                    isPreview: true,
                },
                {
                    id: 202,
                    title: "Function Parameters and Return Values",
                    duration: "18:30",
                    type: "video",
                    isCompleted: false,
                },
                {
                    id: 203,
                    title: "Arrow Functions",
                    duration: "15:45",
                    type: "video",
                    isCompleted: false,
                },
                {
                    id: 204,
                    title: "Objects and Properties",
                    duration: "22:10",
                    type: "video",
                    isCompleted: false,
                    isLocked: true,
                },
                {
                    id: 205,
                    title: "Methods and this Keyword",
                    duration: "25:30",
                    type: "video",
                    isCompleted: false,
                    isLocked: true,
                },
            ],
        },
        {
            id: 3,
            title: "Advanced JavaScript Concepts",
            duration: "5 hours 30 minutes",
            lectures: 12,
            content: [
                {
                    id: 301,
                    title: "Closures and Scope",
                    duration: "28:15",
                    type: "video",
                    isCompleted: false,
                    isLocked: true,
                },
                {
                    id: 302,
                    title: "Prototypes and Inheritance",
                    duration: "32:45",
                    type: "video",
                    isCompleted: false,
                    isLocked: true,
                },
                {
                    id: 303,
                    title: "Asynchronous JavaScript",
                    duration: "45:20",
                    type: "video",
                    isCompleted: false,
                    isLocked: true,
                },
            ],
        },
    ];

    const getContentIcon = (content) => {
        if (content.isCompleted)
            return (
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
            );
        if (content.isLocked) return <Lock className="h-4 w-4 flex-shrink-0" />;
        if (content.type === "video")
            return <Play className="h-4 w-4 flex-shrink-0" />;
        if (content.type === "file")
            return <File className="h-4 w-4 flex-shrink-0" />;
        return <Play className="h-4 w-4 flex-shrink-0" />;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-xl shadow-md p-4 sm:p-6 w-full"
        >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
                <h2 className="text-xl font-bold">Course Curriculum</h2>
                <div className="text-xs sm:text-sm text-muted-foreground">
                    <span className="font-medium">30 sections</span> •{" "}
                    <span className="font-medium">285 lectures</span> •{" "}
                    <span className="font-medium">42h total length</span>
                </div>
            </div>

            <div className="space-y-3 sm:space-y-4 w-full">
                {curriculum.map((section) => (
                    <div
                        key={section.id}
                        className="border rounded-lg overflow-hidden w-full"
                    >
                        <button
                            onClick={() => toggleSection(section.id)}
                            className="flex justify-between items-center w-full p-3 sm:p-4 text-left bg-muted/50 hover:bg-muted transition-colors"
                        >
                            <div className="flex items-center gap-2 min-w-0">
                                <ChevronDown
                                    className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform flex-shrink-0 ${
                                        expandedSections[section.id]
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                                <span className="font-medium text-sm sm:text-base truncate">
                                    Section {section.id}: {section.title}
                                </span>
                            </div>
                            <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap ml-2">
                                <span>{section.lectures} lectures</span> •{" "}
                                <span>{section.duration}</span>
                            </div>
                        </button>

                        {expandedSections[section.id] && (
                            <ul className="divide-y w-full">
                                {section.content.map((content) => (
                                    <li
                                        key={content.id}
                                        className={`p-3 sm:p-4 flex justify-between items-center ${
                                            content.isLocked ? "opacity-70" : ""
                                        } w-full`}
                                    >
                                        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                                            {getContentIcon(content)}
                                            <span
                                                className={`text-xs sm:text-sm truncate ${
                                                    content.isCompleted
                                                        ? "line-through opacity-70"
                                                        : ""
                                                }`}
                                            >
                                                {content.title}
                                                {content.isPreview && (
                                                    <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs bg-primary/10 text-primary px-1 sm:px-2 py-0.5 rounded-full whitespace-nowrap">
                                                        Preview
                                                    </span>
                                                )}
                                            </span>
                                        </div>
                                        <div className="text-xs sm:text-sm text-muted-foreground ml-2 whitespace-nowrap">
                                            {content.duration}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-4 sm:mt-6 text-center">
                <button className="text-primary hover:underline text-xs sm:text-sm font-medium">
                    Show all sections
                </button>
            </div>
        </motion.div>
    );
};

export default CurriculumList;
