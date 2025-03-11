import { motion } from "framer-motion";
import { Bell, ArrowRight } from "lucide-react";

const StudentAnnouncements = () => {
    const announcements = [
        {
            id: 1,
            title: "Campus Closed for Holiday",
            date: "Oct 12, 2023",
            time: "10:30 AM",
            isNew: true,
        },
        {
            id: 2,
            title: "New Library Resources Available",
            date: "Oct 10, 2023",
            time: "2:15 PM",
            isNew: false,
        },
        {
            id: 3,
            title: "Career Fair Next Week",
            date: "Oct 8, 2023",
            time: "9:00 AM",
            isNew: false,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-card rounded-xl shadow-md md:p-6 p-3"
        >
            <div className="flex items-center gap-2 mb-4">
                <Bell className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Announcements</h2>
            </div>

            <div className="space-y-3">
                {announcements.map((announcement) => (
                    <motion.div
                        key={announcement.id}
                        whileHover={{ scale: 1.02 }}
                        className="border rounded-lg p-3 transition-all hover:shadow-md relative"
                    >
                        {announcement.isNew && (
                            <span className="absolute top-3 right-3 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                                New
                            </span>
                        )}
                        <h3 className="font-medium text-sm pr-14">
                            {announcement.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                            {announcement.date} at {announcement.time}
                        </p>
                    </motion.div>
                ))}
            </div>

            <button className="w-full mt-4 text-sm text-primary flex items-center justify-center p-2 border border-primary/20 rounded-lg hover:bg-primary/5 transition">
                View All Announcements <ArrowRight className="ml-1 h-4 w-4" />
            </button>
        </motion.div>
    );
};

export default StudentAnnouncements;
