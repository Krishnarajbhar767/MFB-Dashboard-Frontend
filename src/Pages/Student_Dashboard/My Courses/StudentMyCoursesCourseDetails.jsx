import { useState } from "react";
import {
    BiArrowBack,
    BiPlay,
    BiChevronDown,
    BiCheck,
    BiTime,
    BiStar,
} from "react-icons/bi";
import { BsPlayCircle } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { CourseAccordion } from "./CourseAccordians/CourseAccordion";
import { useNavigate } from "react-router-dom";

// Course sections data
const courseSections = [
    {
        id: "01",
        title: "Intro",
        duration: "22min",
        lessons: [
            { title: "Introduction", duration: "2 min" },
            { title: "What is Figma?", duration: "5 min" },
            { title: "Understanding Figma", duration: "12 min" },
            { title: "UI tour", duration: "3 min" },
        ],
    },
    {
        id: "02",
        title: "Intermediate Level Stuff",
        duration: "1h 20min",
        lessons: [],
    },
    {
        id: "03",
        title: "Advanced Stuff",
        duration: "36min",
        lessons: [],
    },
    {
        id: "04",
        title: "Imports & Graphics",
        duration: "40min",
        lessons: [],
    },
    {
        id: "05",
        title: "Component in Figma",
        duration: "1h 12min",
        lessons: [],
    },
    {
        id: "06",
        title: "Styles in Figma",
        duration: "4min",
        lessons: [],
    },
    {
        id: "07",
        title: "Summary",
        duration: "8min",
        lessons: [],
    },
];

const learningPoints = [
    "Setting up the environment",
    "Advanced HTML Practices",
    "Build a portfolio website",
    "Responsive Designs",
    "Understand HTML Programming",
    "Code HTML",
    "Start building beautiful websites",
];

export default function StudentMyCoursesCourseDetails({ course, onBack }) {
    const [activeTab, setActiveTab] = useState("overview");
    const [expandedSection, setExpandedSection] = useState("01");

    // Toggle section expansion
    const toggleSection = (sectionId) => {
        setExpandedSection(expandedSection === sectionId ? "" : sectionId);
    };
    const navigate = useNavigate();
    return (
        <div className="min-h-screen ">
            {/* Header */}
            <header className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                        <div className="flex items-center space-x-2 sm:space-x-4 overflow-hidden">
                            <button
                                className="p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors shrink-0"
                                onClick={() => navigate(-1)}
                            >
                                <BiArrowBack className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                            <div className="min-w-0">
                                <h1 className="text-lg sm:text-xl font-semibold truncate">
                                    Figma from A to Z
                                </h1>
                                <div className="flex items-center text-xs sm:text-sm text-gray-500 space-x-2 sm:space-x-4 overflow-x-auto">
                                    <span>38 lessons</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span className="flex items-center">
                                        <BiTime className="mr-1" />
                                        4h 20min
                                    </span>
                                    <span className="hidden sm:inline">•</span>
                                    <span className="flex items-center">
                                        <BiStar className="mr-1 text-yellow-400" />
                                        4.5
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <button className="bg-purple-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base w-full sm:w-auto">
                            Enroll Now
                        </button> */}
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 sm:py-6 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    {/* Video Preview */}
                    <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden mb-8 group cursor-pointer">
                        <img
                            src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"
                            alt="Course preview"
                            className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="transform transition-transform group-hover:scale-110">
                                <BsPlayCircle className="w-16 h-16 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="border-b mb-4 sm:mb-6">
                        <div className="flex space-x-4 sm:space-x-8 overflow-x-auto pb-2 sm:pb-0">
                            {[
                                "Overview",
                                "Author",
                                "FAQ",
                                "Announcements",
                                "Reviews",
                            ].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() =>
                                        setActiveTab(tab.toLowerCase())
                                    }
                                    className={`pb-2 sm:pb-4 px-1 sm:px-2 transition-colors relative whitespace-nowrap ${
                                        activeTab === tab.toLowerCase()
                                            ? "text-purple-600"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    {tab}
                                    {activeTab === tab.toLowerCase() && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose max-w-none">
                        <h2 className="text-xl font-semibold mb-4">
                            About Course
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Unlock the power of Figma, the leading collaborative
                            design tool, with our comprehensive online course.
                            Whether you're a novice or looking to enhance your
                            skills, this course will guide you through Figma's
                            robust features and workflows.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Perfect for UI/UX designers, product managers, and
                            anyone interested in modern design tools. Join us to
                            elevate your design skills and boost your
                            productivity with Figma!
                        </p>

                        <h2 className="text-xl font-semibold mb-4">
                            What You'll Learn
                        </h2>
                        {/* Updated grid: 1 column on small screens, 2 columns on md and up */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            {learningPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-2"
                                >
                                    <div className="mt-1 bg-purple-100 rounded-full p-1 shrink-0">
                                        <BiCheck className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                                    </div>
                                    <span className="text-sm sm:text-base text-gray-600">
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="bg-white rounded-xl shadow-sm md:p-4">
                    <h2 className="text-lg font-semibold mb-4">
                        Course content
                    </h2>
                    <CourseAccordion
                        courseSections={courseSections}
                        expandedSection={expandedSection}
                        toggleSection={toggleSection}
                    />

                    {/* Author Section */}
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                            Author
                        </h3>
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 overflow-hidden shrink-0">
                                <img
                                    src="/placeholder.svg?height=48&width=48"
                                    alt="Author"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="min-w-0">
                                <div className="flex items-center space-x-2">
                                    <h4 className="font-medium text-sm sm:text-base truncate">
                                        Media FleetBlue
                                    </h4>
                                    <MdVerified className="w-4 h-4 text-blue-500 shrink-0" />
                                </div>
                                <p className="text-xs sm:text-sm text-gray-500">
                                    Web Developer
                                </p>
                            </div>
                            <div className="ml-auto flex items-center shrink-0">
                                <BiStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                                <span className="ml-1 font-medium text-sm sm:text-base">
                                    (4.8)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
