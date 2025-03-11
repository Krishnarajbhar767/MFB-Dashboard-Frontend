import { motion } from "framer-motion";
import CourseCompletion from "./StudentCourseCompletion";
import QuizScores from "./StudentQuizScores";
import PerformanceGraph from "./StudentPerformanceGraph";
import BadgesCertificates from "./StudentBadgesCertificates";

const StudentPerformanceLayout = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto lg:px-4  py-8"
        >
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold">
                    Performance Analytics
                </h1>
                <p className="text-muted-foreground">
                    Track your academic progress and achievements
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <CourseCompletion />
                    <QuizScores />
                </div>

                <PerformanceGraph />

                <BadgesCertificates />
            </div>
        </motion.div>
    );
};

export default StudentPerformanceLayout;
