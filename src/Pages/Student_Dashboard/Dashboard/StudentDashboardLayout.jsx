import { motion } from "framer-motion";
import WelcomeBanner from "./StudentWelcomeBanner";
import OngoingCourses from "./StudentOngoingCourses";
import UpcomingDeadlines from "./StudentUpcomingDeadlines";
import ProgressSummary from "./StudentProgressSummary";
import Recommendations from "./StudentRecommendations";
import Announcements from "./StudentAnnouncements";

const StudentDashboardLayout = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto  py-8 lg:px-4"
        >
            <div className="grid grid-cols-1 gap-6">
                <WelcomeBanner />

                <div className="grid grid-cols-1  gap-6">
                    <OngoingCourses />
                    <UpcomingDeadlines />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <ProgressSummary />
                    <Recommendations />
                    <Announcements />
                </div>
            </div>
        </motion.div>
    );
};

export default StudentDashboardLayout;
