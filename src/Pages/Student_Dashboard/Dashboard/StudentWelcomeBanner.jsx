import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiUser, FiCalendar, FiBell, FiMail, FiBookmark } from "react-icons/fi";
import { toast } from "react-hot-toast";

export default function StudentWelcomeBanner() {
    const [studentName, setStudentName] = useState("Krishna");
    const [greeting, setGreeting] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const [notifications, setNotifications] = useState(3);
    const [messages, setMessages] = useState(5);
    const [savedCourses, setSavedCourses] = useState(2);

    useEffect(() => {
        // Set greeting based on time of day
        const hour = new Date().getHours();
        if (hour < 12) setGreeting("Good morning");
        else if (hour < 18) setGreeting("Good afternoon");
        else setGreeting("Good evening");

        // Format current date
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        setCurrentDate(new Date().toLocaleDateString("en-US", options));
    }, []);

    const handleNotificationClick = () => {
        toast.success("Notifications opened", {
            icon: "🔔",
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });
    };

    const statItems = [
        {
            icon: FiBell,
            count: notifications,
            label: "Notifications",
            onClick: handleNotificationClick,
        },
        {
            icon: FiMail,
            count: messages,
            label: "Messages",
            onClick: () => toast.success("Messages opened"),
        },
        {
            icon: FiBookmark,
            count: savedCourses,
            label: "Saved",
            onClick: () => toast.success("Saved courses opened"),
        },
    ];

    return (
        <motion.div
            className="relative overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Background with gradient and pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
            </div>

            <div className="relative p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h1 className="text-2xl md:text-3xl font-bold text-white">
                            {greeting},{" "}
                            <span className="text-white/90">
                                {studentName}!
                            </span>
                        </h1>
                        <p className="flex items-center text-white/80">
                            <FiCalendar className="mr-2" /> {currentDate}
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-4 md:mt-0 flex items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/20"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="bg-white/20 rounded-full p-2 mr-3">
                            <FiUser className="text-xl text-white" />
                        </div>
                        <div>
                            <p className="text-sm text-white/80">Student ID</p>
                            <p className="font-medium text-white">
                                STU-2025-0042
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Stats row */}
                <motion.div
                    className="mt-6 grid grid-cols-3 gap-2 md:gap-4 max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {statItems.map((item, index) => (
                        <motion.button
                            key={index}
                            className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg py-2 px-1 border border-white/20"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255, 255, 255, 0.15)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={item.onClick}
                        >
                            <div className="relative">
                                <item.icon className="text-xl text-white" />
                                {item.count > 0 && (
                                    <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs rounded-full">
                                        {item.count}
                                    </span>
                                )}
                            </div>
                            <span className="text-xs text-white/80 mt-1">
                                {item.label}
                            </span>
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}
