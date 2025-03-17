import { motion } from "framer-motion";
import { Calendar, FileText, ArrowRight } from "lucide-react";

const StudentUpcomingDeadlines = () => {
    const deadlines = [
        {
            id: 1,
            title: "Research Paper Submission",
            course: "Introduction to Computer Science",
            dueDate: "Oct 15, 2023",
            daysLeft: 2,
            type: "Assignment",
        },
        {
            id: 2,
            title: "Mid-term Examination",
            course: "Advanced Mathematics",
            dueDate: "Oct 18, 2023",
            daysLeft: 5,
            type: "Exam",
        },
        {
            id: 3,
            title: "Group Project Presentation",
            course: "Digital Marketing Fundamentals",
            dueDate: "Oct 22, 2023",
            daysLeft: 9,
            type: "Project",
        },
    ];

    const getStatusColor = (daysLeft) => {
        if (daysLeft <= 2) return "text-red-500";
        if (daysLeft <= 5) return "text-orange-500";
        return "text-green-500";
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl shadow-md md:p-6 p-3"
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                    Upcoming Deadlines
                </h2>

                <button className="text-sm text-primary flex items-center">
                    View All <ArrowRight className="ml-1 h-4 w-4" />
                </button>
            </div>

            <div className="space-y-4">
                {deadlines.map((deadline) => (
                    <motion.div
                        key={deadline.id}
                        whileHover={{ scale: 1.02 }}
                        className="border rounded-lg p-4 transition-all hover:shadow-md"
                    >
                        <div className="flex justify-between">
                            <h3 className="font-medium">{deadline.title}</h3>
                            <span
                                className={`text-sm font-medium ${getStatusColor(
                                    deadline.daysLeft
                                )}`}
                            >
                                {deadline.daysLeft} days left
                            </span>
                        </div>

                        <p className="text-sm text-muted-foreground mt-1">
                            {deadline.course}
                        </p>

                        <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{deadline.dueDate}</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                                <FileText className="h-4 w-4 mr-1" />
                                <span>{deadline.type}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default StudentUpcomingDeadlines;
