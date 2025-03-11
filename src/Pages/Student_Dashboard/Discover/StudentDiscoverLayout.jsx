import { motion } from "framer-motion";
import StudentSearchBar from "./StudentSearchBar";
import StudentCourseFilters from "./StudentCourseFilter";
import StudentCourseRecommendations from "./StudentCourseRecommendations";

import StudentTrendingCourses from "./StudentTrendingCourses";
const StudentDiscoverLayout = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
                Discover Courses
            </h1>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="w-full md:w-2/3">
                    <StudentSearchBar />
                </div>
                <div className="w-full md:w-1/3">
                    <StudentCourseFilters />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
                <StudentCourseRecommendations />
                <StudentTrendingCourses />
            </div>
        </motion.div>
    );
};

export default StudentDiscoverLayout;
