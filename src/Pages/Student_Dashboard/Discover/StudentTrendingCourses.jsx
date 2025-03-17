import { motion } from "framer-motion";
import StudentCourseCard from "./StudentCourseCard";

const StudentTrendingCourses = () => {
    const trendingCourses = [
        {
            id: 1,
            title: "Data Science with Python",
            instructor: "Dr. Alex Thompson",
            rating: 4.9,
            students: 3456,
            image: "https://picsum.photos/200",
            price: 69.99,
        },
        {
            id: 2,
            title: "Full Stack Web Development",
            instructor: "Jessica Lee",
            rating: 4.8,
            students: 2789,
            image: "https://picsum.photos/200",
            price: 79.99,
        },
        {
            id: 3,
            title: "Digital Marketing Mastery",
            instructor: "Mark Wilson",
            rating: 4.7,
            students: 1987,
            image: "https://picsum.photos/200",
            price: 54.99,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <h2 className="text-xl font-bold mb-4">Trending Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingCourses.map((course) => (
                    <StudentCourseCard key={course.id} course={course} />
                ))}
            </div>
        </motion.div>
    );
};

export default StudentTrendingCourses;
