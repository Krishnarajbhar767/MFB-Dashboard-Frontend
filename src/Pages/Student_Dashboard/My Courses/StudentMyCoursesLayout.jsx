import { useState } from "react";
import { motion } from "framer-motion";

import StudentMyCoursesEnrolledCourses from "./StudentMyCoursesEnrolledCourses";
import StudentMyCoursesCourseDetails from "./StudentMyCoursesCourseDetails";
import StudentCourseRecommendations from "../Discover/StudentCourseRecommendations";
import StudentMyCoursesRecommendedCourseCard from "./StudentMyCoursesRecommendedCourseCard";

const StudentMyCoursesLayout = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container  lg:px-4 lg:py-8 lg:w-[86%] xl:w-full"
        >
            <h1 className="text-2xl md:text-3xl font-bold mb-6">My Courses</h1>

            <div>
                <StudentMyCoursesEnrolledCourses />
            </div>
            <div className="mt-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">
                    Recommended Courses For You
                </h1>
                <StudentMyCoursesRecommendedCourseCard />
            </div>
        </motion.div>
    );
};

export default StudentMyCoursesLayout;
