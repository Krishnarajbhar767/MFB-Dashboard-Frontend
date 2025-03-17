import { motion } from "framer-motion";
import { Star, Users, Clock, Calendar, Award } from "lucide-react";

const CourseOverview = ({ courseData }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl shadow-md p-4 sm:p-6 w-full"
        >
            <h2 className="text-xl font-bold mb-4">Course Overview</h2>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
                <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium">
                        {courseData.rating}
                    </span>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                        ({courseData.reviewCount} reviews)
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                        {courseData.studentCount.toLocaleString()} students
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                        {courseData.duration.hours} hours
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                        Last updated {courseData.lastUpdated}
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                        {courseData.level}
                    </span>
                </div>
            </div>

            <div className="space-y-4">
                <p className="text-sm sm:text-base">
                    This comprehensive JavaScript course takes you from the
                    fundamentals to advanced concepts, preparing you for
                    real-world application development. Whether you're looking
                    to enhance your front-end skills or dive into full-stack
                    development, this course provides the knowledge and
                    practical experience you need.
                </p>

                <p className="text-sm sm:text-base">
                    You'll learn through a combination of lectures, coding
                    exercises, and projects that simulate real-world scenarios.
                    By the end of this course, you'll be able to build complex
                    applications, understand modern JavaScript frameworks, and
                    implement best practices in your code.
                </p>

                <h3 className="font-medium mt-4">What you'll learn:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    {[
                        "Advanced JavaScript concepts including closures, prototypes, and ES6+ features",
                        "Asynchronous programming with Promises, async/await, and event loops",
                        "DOM manipulation and browser APIs",
                        "State management techniques for complex applications",
                        "Performance optimization strategies",
                        "Testing and debugging JavaScript applications",
                        "Building real-world projects from scratch",
                        "Modern development workflows and tools",
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1 flex-shrink-0">
                                ✓
                            </span>
                            <span className="text-xs sm:text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default CourseOverview;
