import { motion } from "framer-motion";
import { Star, BookOpen, Users, MessageCircle } from "lucide-react";

const InstructorInfo = ({ instructor }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl shadow-md p-4 sm:p-6 w-full"
        >
            <h2 className="text-xl font-bold mb-4 sm:mb-6">Your Instructor</h2>

            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                    <img
                        src={
                            instructor.avatar ||
                            "/placeholder.svg?height=150&width=150"
                        }
                        alt={instructor.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover"
                    />
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold">{instructor.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        {instructor.title}
                    </p>

                    <div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
                        <div className="flex items-center gap-1 text-xs sm:text-sm">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current flex-shrink-0" />
                            <span>{instructor.rating} Instructor Rating</span>
                        </div>

                        <div className="flex items-center gap-1 text-xs sm:text-sm">
                            <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                            <span>1,245 Reviews</span>
                        </div>

                        <div className="flex items-center gap-1 text-xs sm:text-sm">
                            <Users className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                            <span>
                                {instructor.students.toLocaleString()} Students
                            </span>
                        </div>

                        <div className="flex items-center gap-1 text-xs sm:text-sm">
                            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                            <span>{instructor.courses} Courses</span>
                        </div>
                    </div>

                    <p className="text-xs sm:text-sm mb-4">{instructor.bio}</p>

                    <button className="text-primary hover:underline text-xs sm:text-sm font-medium">
                        View Full Profile
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default InstructorInfo;
