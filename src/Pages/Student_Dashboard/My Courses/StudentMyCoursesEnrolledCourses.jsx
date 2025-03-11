"use client";
import { motion } from "framer-motion";
import { Book, Clock } from "lucide-react";

const StudentMyCoursesEnrolledCourses = ({ onSelectCourse }) => {
    const enrolledCourses = [
        {
            id: 1,
            title: "Advanced JavaScript Concepts",
            instructor: "Dr. Sarah Johnson",
            progress: 65,
            totalLessons: 24,
            completedLessons: 16,
            duration: "10h 30m",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 2,
            title: "Machine Learning Fundamentals",
            instructor: "Prof. Michael Chen",
            progress: 30,
            totalLessons: 32,
            completedLessons: 10,
            duration: "15h 45m",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 3,
            title: "UX/UI Design Principles",
            instructor: "Emma Rodriguez",
            progress: 80,
            totalLessons: 18,
            completedLessons: 14,
            duration: "8h 15m",
            image: "/placeholder.svg?height=200&width=300",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            {enrolledCourses.map((course) => (
                <motion.div
                    key={course.id}
                    whileHover={{ scale: 1.03 }}
                    className="bg-card rounded-lg shadow-md overflow-hidden cursor-pointer"
                    onClick={() => onSelectCourse(course)}
                >
                    <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-bold text-lg mb-2">
                            {course.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            {course.instructor}
                        </p>
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-1 text-sm">
                                <Book className="h-4 w-4" />
                                <span>
                                    {course.completedLessons}/
                                    {course.totalLessons} Lessons
                                </span>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                                <Clock className="h-4 w-4" />
                                <span>{course.duration}</span>
                            </div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 mb-2">
                            <div
                                className="bg-primary h-2 rounded-full"
                                style={{ width: `${course.progress}%` }}
                            ></div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                                Progress
                            </span>
                            <span className="font-medium">
                                {course.progress}%
                            </span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default StudentMyCoursesEnrolledCourses;
