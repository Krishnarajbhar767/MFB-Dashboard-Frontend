"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import StudentMyCoursesEnrolledCourses from "./StudentMyCoursesEnrolledCourses";
import StudentMyCoursesCourseDetails from "./StudentMyCoursesCourseDetails";

const StudentMyCoursesLayout = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <h1 className="text-2xl md:text-3xl font-bold mb-6">My Courses</h1>

            {selectedCourse ? (
                <StudentMyCoursesCourseDetails
                    course={selectedCourse}
                    onBack={() => setSelectedCourse(null)}
                />
            ) : (
                <StudentMyCoursesEnrolledCourses
                    onSelectCourse={setSelectedCourse}
                />
            )}
        </motion.div>
    );
};

export default StudentMyCoursesLayout;
