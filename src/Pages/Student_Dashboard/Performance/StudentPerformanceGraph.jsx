import { motion } from "framer-motion";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { TrendingUp } from "lucide-react";

const StudentPerformanceGraph = () => {
    const data = [
        { month: "Jan", grades: 78, attendance: 92, participation: 65 },
        { month: "Feb", grades: 82, attendance: 88, participation: 70 },
        { month: "Mar", grades: 80, attendance: 95, participation: 75 },
        { month: "Apr", grades: 85, attendance: 90, participation: 80 },
        { month: "May", grades: 88, attendance: 93, participation: 85 },
        { month: "Jun", grades: 92, attendance: 96, participation: 90 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl shadow-md md:p-6 p-3"
        >
            <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Performance Trends</h2>
            </div>

            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                borderRadius: "8px",
                                border: "none",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            }}
                            formatter={(value) => [`${value}%`, ""]}
                        />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="grades"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            activeDot={{ r: 8 }}
                            name="Grades"
                        />
                        <Line
                            type="monotone"
                            dataKey="attendance"
                            stroke="#10b981"
                            strokeWidth={2}
                            name="Attendance"
                        />
                        <Line
                            type="monotone"
                            dataKey="participation"
                            stroke="#f59e0b"
                            strokeWidth={2}
                            name="Participation"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <p className="text-xs text-blue-600 font-medium">Grades</p>
                    <div className="flex items-end justify-between mt-1">
                        <p className="text-2xl font-bold text-blue-600">85%</p>
                        <p className="text-xs text-blue-600">
                            +7% from last semester
                        </p>
                    </div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                    <p className="text-xs text-green-600 font-medium">
                        Attendance
                    </p>
                    <div className="flex items-end justify-between mt-1">
                        <p className="text-2xl font-bold text-green-600">92%</p>
                        <p className="text-xs text-green-600">
                            +4% from last semester
                        </p>
                    </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-100">
                    <p className="text-xs text-yellow-600 font-medium">
                        Participation
                    </p>
                    <div className="flex items-end justify-between mt-1">
                        <p className="text-2xl font-bold text-yellow-600">
                            78%
                        </p>
                        <p className="text-xs text-yellow-600">
                            +13% from last semester
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default StudentPerformanceGraph;
