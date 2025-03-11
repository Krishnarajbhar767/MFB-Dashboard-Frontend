"use client";
import { motion } from "framer-motion";

import StudentCourseCard from "./StudentCourseCard";

const StudentCourseRecommendations = () => {
    const recommendedCourses = [
        {
            id: 1,
            title: "Advanced JavaScript Concepts",
            instructor: "Dr. Sarah Johnson",
            rating: 4.8,
            students: 1234,
            image: "https://picsum.photos/200",
            price: 49.99,
        },
        {
            id: 2,
            title: "Machine Learning Fundamentals",
            instructor: "Prof. Michael Chen",
            rating: 4.7,
            students: 987,
            image: "https://picsum.photos/200",
            price: 59.99,
        },
        {
            id: 3,
            title: "UX/UI Design Principles",
            instructor: "Emma Rodriguez",
            rating: 4.9,
            students: 2345,
            image: "https://picsum.photos/200",
            price: 39.99,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedCourses.map((course) => (
                    <StudentCourseCard key={course.id} course={course} />
                ))}
            </div>
        </motion.div>
    );
};

export default StudentCourseRecommendations;
