import { useState } from "react";
import { FiPlay, FiBook, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export default function StudentOngoingCourses() {
    const courses = [
        {
            id: 1,
            title: "Introduction to Computer Science",
            instructor: "Dr. Sarah Johnson",
            progress: 65,
            nextClass: "Today, 2:00 PM",
            thumbnail: "https://picsum.photos/200",
        },
        {
            id: 1,
            title: "Introduction to Computer Science",
            instructor: "Dr. Sarah Johnson",
            progress: 65,
            nextClass: "Today, 2:00 PM",
            thumbnail: "https://picsum.photos/200",
        },
        {
            id: 1,
            title: "Introduction to Computer Science",
            instructor: "Dr. Sarah Johnson",
            progress: 65,
            nextClass: "Today, 2:00 PM",
            thumbnail: "https://picsum.photos/200",
        },
        {
            id: 2,
            title: "Advanced Mathematics",
            instructor: "Prof. Michael Chen",
            progress: 42,
            nextClass: "Tomorrow, 10:00 AM",
            thumbnail: "https://picsum.photos/200",
        },
        {
            id: 3,
            title: "Digital Marketing Fundamentals",
            instructor: "Emma Rodriguez",
            progress: 78,
            nextClass: "Wednesday, 1:30 PM",
            thumbnail: "https://picsum.photos/200",
        },
    ];

    return (
        <div className="bg-card rounded-xl p-3 md:p-6  shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center text-gray-900">
                <FiBook className="mr-2 text-primary" /> Ongoing Courses
            </h2>
            {/* <h1 className="text-2xl md:text-3xl font-bold mb-6">
                Discover Courses
            </h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}

function CourseCard({ course }) {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    return (
        <div
            className="bg-background rounded-lg overflow-hidden border border-border transition-all duration-300 hover:shadow-md flex flex-col  justify-between "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                <img
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                />
                <div
                    className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <button className="bg-primary text-white rounded-full p-3 transform transition-transform duration-300 hover:scale-110">
                        <FiPlay />
                    </button>
                </div>
            </div>

            <div className="p-4 border  h-full flex flex-col justify-between">
                <h3 className="font-medium text-foreground line-clamp-1">
                    {course.title}
                </h3>
                <p className="text-sm text-muted-foreground flex items-center mt-1">
                    <FiUser className="mr-1" /> {course.instructor}
                </p>

                <div className="mt-3">
                    <div className="flex justify-between text-sm mb-1">
                        <span>{course.progress}% complete</span>
                        <span className="text-primary">
                            {Math.round((course.progress / 100) * 12)}/12 weeks
                        </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 ">
                        <div
                            className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${course.progress}%` }}
                        ></div>
                    </div>
                </div>

                <button
                    onClick={() =>
                        navigate(
                            `/student/my_courses/course/${course.title.replace(
                                /[\s/]+/g,
                                "-"
                            )}`
                        )
                    }
                    className="w-full mt-3 bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2 rounded-md transition-colors duration-200 border"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
