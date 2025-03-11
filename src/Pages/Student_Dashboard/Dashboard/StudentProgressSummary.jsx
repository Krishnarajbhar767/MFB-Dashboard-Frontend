import { motion } from "framer-motion";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { BookOpen, Clock, Award } from "lucide-react";

const StudentProgressSummary = () => {
    const data = [
        { name: "CS101", completed: 65, total: 100 },
        { name: "MATH201", completed: 42, total: 100 },
        { name: "MKT105", completed: 78, total: 100 },
        { name: "ENG110", completed: 90, total: 100 },
    ];

    const stats = [
        { icon: BookOpen, label: "Courses", value: "4/6" },
        { icon: Clock, label: "Hours", value: "32/48" },
        { icon: Award, label: "Certificates", value: "2" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-xl shadow-md md:p-6 p-3  col-span-1 lg:col-span-2"
        >
            <h2 className="text-xl font-bold mb-4">Progress Summary</h2>

            <div className="grid grid-cols-3 gap-4 mb-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-muted rounded-lg p-3 text-center"
                    >
                        <stat.icon className="h-5 w-5 mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">
                            {stat.label}
                        </p>
                        <p className="text-lg font-bold">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                borderRadius: "8px",
                                border: "none",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            }}
                            formatter={(value) => [`${value}%`, "Completed"]}
                        />
                        <Bar
                            dataKey="completed"
                            fill="#3b82f6"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                    You're making good progress! Keep up the good work.
                </p>
            </div>
        </motion.div>
    );
};

export default StudentProgressSummary;
