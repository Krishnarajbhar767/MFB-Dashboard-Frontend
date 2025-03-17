import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Image, FileText } from "lucide-react";

const CourseMedia = ({ courseData }) => {
    const [activeTab, setActiveTab] = useState("video");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" rounded-xl shadow-md overflow-hidden w-full"
        >
            {/* Media tabs */}
            <div className="flex border-b overflow-x-auto scrollbar-hide">
                <button
                    onClick={() => setActiveTab("video")}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-3 text-sm font-medium whitespace-nowrap ${
                        activeTab === "video"
                            ? "border-b-2 border-primary text-primary"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    <Play className="h-4 w-4" />
                    <span>Preview</span>
                </button>

                <button
                    onClick={() => setActiveTab("resources")}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-3 text-sm font-medium whitespace-nowrap ${
                        activeTab === "resources"
                            ? "border-b-2 border-primary text-primary"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    <FileText className="h-4 w-4" />
                    <span>Resources</span>
                </button>
            </div>

            {/* Media content */}
            {activeTab === "video" && (
                <div className="w-full">
                    <div className="aspect-video bg-[url('https://picsum.photos/200')] bg-no-repeat bg-cover   flex flex-col justify-between w-full">
                        <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-black/60 to-transparent  ">
                            <div className="text-center mt-16 ">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-2 cursor-pointer hover:bg-primary transition-colors">
                                    <Play className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground ml-1" />
                                </div>
                                <p className="text-white text-xs sm:text-sm">
                                    Watch course preview
                                </p>
                            </div>
                        </div>

                        {/* Course title - now using padding instead of absolute positioning */}
                        <div className="bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                            <h1 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-1 line-clamp-2">
                                {courseData.title}
                            </h1>
                            <p className="text-white/80 text-xs sm:text-sm line-clamp-2">
                                {courseData.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "resources" && (
                <div className="p-4 sm:p-6 w-full">
                    <h3 className="font-medium mb-4">Course Resources</h3>
                    <ul className="space-y-2 w-full">
                        {[
                            "Course Syllabus.pdf",
                            "Setup Instructions.pdf",
                            "Code Examples.zip",
                        ].map((resource) => (
                            <li
                                key={resource}
                                className="flex items-center gap-2 text-sm"
                            >
                                <FileText className="h-4 w-4 flex-shrink-0 text-primary" />
                                <a
                                    href="#"
                                    className="text-primary hover:underline truncate"
                                >
                                    {resource}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </motion.div>
    );
};

export default CourseMedia;
