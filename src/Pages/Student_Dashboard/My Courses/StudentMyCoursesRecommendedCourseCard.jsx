import { Clock, UsersRound, Star } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function StudentMyCoursesRecommendedCourseCard() {
    const data = new Array(5).fill(0);
    return (
        <div className=" space-y-4">
            {data.map((course) => (
                <Card course={course} />
            ))}
        </div>
    );
}

export default StudentMyCoursesRecommendedCourseCard;

function Card({ course }) {
    const navigate = useNavigate();
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="border rounded-md shadow-md flex flex-wrap md:flex-nowrap items-center py-4 px-2 gap-4 md:gap-0 lg:gap-4"
        >
            {/* Image Section */}
            <div
                className="w-full sm:w-1/3 md:w-2/5 lg:w-[500px] px-2 cursor-pointer"
                onClick={() =>
                    navigate(
                        `/student/course/${course?.title?.replace(
                            /[\s/]+/g,
                            "-"
                        )}`
                    )
                }
            >
                <img
                    src="https://picsum.photos/200"
                    alt="Course Image"
                    className="w-full h-40  rounded-md object-cover"
                />
            </div>

            {/* Course Content */}
            <div className="flex-grow px-4">
                {/* Course Title */}
                <h1
                    className="text-foreground font-semibold text-lg hover:text-primary cursor-pointer"
                    onClick={() =>
                        navigate(
                            `/student/course/${course?.title?.replace(
                                /[\s/]+/g,
                                "-"
                            )}`
                        )
                    }
                >
                    Advanced UI/UX Master Class
                </h1>

                {/* Time, Enrolled Students, and Rating */}
                <div className="flex flex-wrap items-center gap-2 md:gap-8 text-foreground md:font-medium text-sm mt-2">
                    <div className="flex gap-1 items-center text-xs md:text-sm">
                        <Clock size={18} />
                        <span>4 Hours</span>
                    </div>
                    <div className="flex gap-1 items-center text-xs md:text-sm">
                        <UsersRound size={18} />
                        <span>4765 enrolled</span>
                    </div>
                    <div className="flex gap-1 items-center text-xs md:text-sm">
                        <Star size={18} className="text-[#FFD700]" />
                        <span>(4.5)</span>
                    </div>
                </div>

                {/* Course Description */}
                <h2 className="text-sm font-medium text-foreground/95 my-2 line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur voluptatibus, veniam esse nesciunt hic optio dolores
                    minus cumque omnis eveniet.
                </h2>

                {/* Author & Pricing Section */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between mt-3">
                    {/* Author Info */}
                    <div className="flex items-center gap-2">
                        <img
                            src="https://picsum.photos/200"
                            alt="course author"
                            className="h-10 w-10 rounded-full border shadow-sm"
                        />
                        <div className="text-sm font-medium text-foreground/90">
                            <h3>Author Name</h3>
                            <h3 className="text-xs">UI/UX Designer</h3>
                        </div>
                    </div>

                    {/* Course Price */}
                    <h5 className="text-lg md:text-2xl font-medium text-foreground/90">
                        $99
                    </h5>

                    {/* Action Buttons */}
                    <div className="flex w-full sm:w-auto gap-2 sm:gap-4 flex-row-reverse mt-3 sm:mt-0">
                        <button className="text-nowrap border bg-primary px-4 py-2 rounded-md text-primary-foreground font-normal w-full sm:w-auto">
                            Buy now
                        </button>
                        <button className="text-nowrap border border-gray-300 bg-muted-foreground/5 px-4 py-2 rounded-md text-foreground/90 font-normal w-full sm:w-auto">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
