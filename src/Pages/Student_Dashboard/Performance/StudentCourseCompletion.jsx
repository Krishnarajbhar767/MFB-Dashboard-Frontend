import { motion } from "framer-motion";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Legend,
    Tooltip,
} from "recharts";
import { BookOpen } from "lucide-react";

const StudentCourseCompletion = () => {
    const data = [
        { name: "Completed", value: 8, color: "#3b82f6" },
        { name: "In Progress", value: 4, color: "#f59e0b" },
        { name: "Not Started", value: 2, color: "#e5e7eb" },
    ];

    const COLORS = data.map((item) => item.color);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-md p-6"
        >
            <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Course Completion</h2>
            </div>

            <div className="md:h-80 h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                            label={({ name, percent }) =>
                                `${name} ${(percent * 100).toFixed(0)}%`
                            }
                            labelLine={false}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                borderRadius: "8px",
                                border: "none",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            }}
                            formatter={(value) => [`${value} courses`, ""]}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="bg-muted rounded-lg p-2">
                    <p className="text-xs text-muted-foreground">
                        Total Courses
                    </p>
                    <p className="text-lg font-bold">14</p>
                </div>
                <div className="bg-muted rounded-lg p-2">
                    <p className="text-xs text-muted-foreground">
                        Completion Rate
                    </p>
                    <p className="text-lg font-bold">57%</p>
                </div>
                <div className="bg-muted rounded-lg p-2">
                    <p className="text-xs text-muted-foreground">Avg. Grade</p>
                    <p className="text-lg font-bold">B+</p>
                </div>
            </div>
        </motion.div>
    );
};

export default StudentCourseCompletion;
