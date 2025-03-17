import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentCourseCard = ({ course }) => {
    const navigate = useNavigate();
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-card rounded-lg shadow-md overflow-hidden"
        >
            <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                    {course.instructor}
                </p>
                <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-sm text-muted-foreground">
                        ({course.students} students)
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-bold">${course.price}</span>
                    <button
                        className="bg-primary text-primary-foreground rounded-lg px-3 py-1 text-sm"
                        onClick={() =>
                            navigate(
                                `/student/course/${course.title.replace(
                                    /[\s/]+/g,
                                    "-"
                                )}`
                            )
                        }
                    >
                        Enroll Now
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default StudentCourseCard;
