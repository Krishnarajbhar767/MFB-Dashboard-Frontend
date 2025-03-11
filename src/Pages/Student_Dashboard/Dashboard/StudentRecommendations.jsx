import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, BookOpen } from "lucide-react";

const StudentRecommendations = () => {
    const recommendations = [
        {
            id: 1,
            title: "Data Structures & Algorithms",
            description: "Based on your interest in Computer Science",
            icon: BookOpen,
            color: "bg-blue-100 text-blue-600",
        },
        {
            id: 2,
            title: "Statistics for Data Science",
            description: "Complements your Mathematics course",
            icon: BookOpen,
            color: "bg-purple-100 text-purple-600",
        },
        {
            id: 3,
            title: "UI/UX Design Fundamentals",
            description: "Popular among your peers",
            icon: BookOpen,
            color: "bg-green-100 text-green-600",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card rounded-xl shadow-md md:p-6 p-3"
        >
            <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                <h2 className="text-xl font-bold">Recommended for You</h2>
            </div>

            <div className="space-y-3">
                {recommendations.map((item) => (
                    <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.02 }}
                        className="border rounded-lg p-3 transition-all hover:shadow-md"
                    >
                        <div className="flex items-center gap-3">
                            <div className={`${item.color} rounded-full p-2`}>
                                <item.icon className="h-4 w-4" />
                            </div>
                            <div>
                                <h3 className="font-medium text-sm">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <button className="w-full mt-4 text-sm text-primary flex items-center justify-center p-2 border border-primary/20 rounded-lg hover:bg-primary/5 transition">
                View More Recommendations{" "}
                <ArrowRight className="ml-1 h-4 w-4" />
            </button>
        </motion.div>
    );
};

export default StudentRecommendations;
