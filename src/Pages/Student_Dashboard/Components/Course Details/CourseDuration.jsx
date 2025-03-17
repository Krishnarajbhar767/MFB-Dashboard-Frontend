import { motion } from "framer-motion";
import { Clock, BookOpen, Calendar } from "lucide-react";

const CourseDuration = ({ duration }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-lg border p-3 sm:p-4 w-full"
        >
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <h3 className="font-medium text-sm sm:text-base">
                    Course Duration
                </h3>
            </div>

            <ul className="space-y-2 sm:space-y-3 w-full">
                <li className="flex items-center justify-between text-xs sm:text-sm w-full">
                    <div className="flex items-center gap-2 min-w-0">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                        <span className="truncate">Total Length</span>
                    </div>
                    <span className="font-medium ml-2">
                        {duration.hours} hours
                    </span>
                </li>

                <li className="flex items-center justify-between text-xs sm:text-sm w-full">
                    <div className="flex items-center gap-2 min-w-0">
                        <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                        <span className="truncate">Lectures</span>
                    </div>
                    <span className="font-medium ml-2">
                        {duration.lectures}
                    </span>
                </li>

                <li className="flex items-center justify-between text-xs sm:text-sm w-full">
                    <div className="flex items-center gap-2 min-w-0">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                        <span className="truncate">Estimated Completion</span>
                    </div>
                    <span className="font-medium ml-2">
                        {duration.weeks} weeks
                    </span>
                </li>
            </ul>

            <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t">
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                    Learn at your own pace. Take up to {duration.weeks} weeks to
                    complete the course.
                </p>
            </div>
        </motion.div>
    );
};

export default CourseDuration;
