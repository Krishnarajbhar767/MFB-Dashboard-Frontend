import { motion } from "framer-motion";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { FileCheck } from "lucide-react";

const StudentQuizScores = () => {
    const data = [
        { name: "Quiz 1", score: 85 },
        { name: "Quiz 2", score: 92 },
        { name: "Quiz 3", score: 78 },
        { name: "Quiz 4", score: 88 },
        { name: "Quiz 5", score: 95 },
    ];

    const getScoreColor = (score) => {
        if (score >= 90) return "#22c55e"; // green
        if (score >= 80) return "#3b82f6"; // blue
        if (score >= 70) return "#f59e0b"; // yellow
        return "#ef4444"; // red
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl shadow-md md:p-6 p-3"
        >
            <div className="flex items-center gap-2 mb-4">
                <FileCheck className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Recent Quiz Scores</h2>
            </div>

            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                borderRadius: "8px",
                                border: "none",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            }}
                            formatter={(value) => [`${value}%`, "Score"]}
                        />
                        <Bar
                            dataKey="score"
                            radius={[4, 4, 0, 0]}
                            fill="#3b82f6"
                            barSize={30}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-4 text-center">
                <p className="text-sm font-medium">Average Score: 87.6%</p>
                <p className="text-xs text-muted-foreground mt-1">
                    Your scores are 12% above class average
                </p>
            </div>
        </motion.div>
    );
};

export default StudentQuizScores;
