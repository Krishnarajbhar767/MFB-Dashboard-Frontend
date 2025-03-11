"use client";
import { motion } from "framer-motion";
import { CheckCircle, Lock, PlayCircle } from "lucide-react";

const StudentMyCoursesModuleList = ({ courseId }) => {
    // This is mock data. In a real application, you would fetch this based on the courseId
    const modules = [
        { id: 1, title: "Introduction to the Course", completed: true },
        { id: 2, title: "Core Concepts", completed: true },
        { id: 3, title: "Advanced Techniques", completed: false },
        { id: 4, title: "Practical Applications", completed: false },
        { id: 5, title: "Final Project", completed: false, locked: true },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
        >
            {modules.map((module) => (
                <motion.div
                    key={module.id}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                        module.completed
                            ? "bg-green-100 text-green-800"
                            : module.locked
                            ? "bg-muted text-muted-foreground"
                            : "bg-background"
                    }`}
                >
                    <div className="flex items-center gap-2">
                        {module.completed ? (
                            <CheckCircle className="h-5 w-5" />
                        ) : module.locked ? (
                            <Lock className="h-5 w-5" />
                        ) : (
                            <PlayCircle className="h-5 w-5" />
                        )}
                        <span>{module.title}</span>
                    </div>
                    {!module.completed && !module.locked && (
                        <button className="text-sm text-primary hover:underline">
                            Start
                        </button>
                    )}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default StudentMyCoursesModuleList;
