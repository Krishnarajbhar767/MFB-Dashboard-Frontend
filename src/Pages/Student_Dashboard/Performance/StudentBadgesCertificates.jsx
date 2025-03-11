import { motion } from "framer-motion";
import { Award, Download, ArrowRight } from "lucide-react";

const StudentBadgesCertificates = () => {
    const badges = [
        {
            id: 1,
            title: "Perfect Attendance",
            description: "Attended all classes for a semester",
            date: "May 15, 2023",
            icon: "🏆",
        },
        {
            id: 2,
            title: "Top Performer",
            description: "Achieved highest grade in Computer Science",
            date: "June 22, 2023",
            icon: "🥇",
        },
        {
            id: 3,
            title: "Team Player",
            description: "Outstanding contribution to group projects",
            date: "April 10, 2023",
            icon: "👥",
        },
    ];

    const certificates = [
        {
            id: 1,
            title: "Introduction to Python Programming",
            issuer: "CodeAcademy",
            date: "March 5, 2023",
        },
        {
            id: 2,
            title: "Web Development Fundamentals",
            issuer: "Udemy",
            date: "July 18, 2023",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-xl shadow-md md:p-6 p-3"
        >
            <div className="flex items-center gap-2 mb-6">
                <Award className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Badges & Certificates</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-lg font-medium mb-3">Recent Badges</h3>
                    <div className="space-y-3">
                        {badges.map((badge) => (
                            <motion.div
                                key={badge.id}
                                whileHover={{ scale: 1.02 }}
                                className="border rounded-lg p-4 transition-all hover:shadow-md flex items-center gap-3"
                            >
                                <div className="text-3xl">{badge.icon}</div>
                                <div>
                                    <h4 className="font-medium">
                                        {badge.title}
                                    </h4>
                                    <p className="text-xs text-muted-foreground">
                                        {badge.description}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Earned on {badge.date}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <button className="w-full mt-4 text-sm text-primary flex items-center justify-center p-2 border border-primary/20 rounded-lg hover:bg-primary/5 transition">
                        View All Badges <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                </div>

                <div>
                    <h3 className="text-lg font-medium mb-3">Certificates</h3>
                    <div className="space-y-3">
                        {certificates.map((certificate) => (
                            <motion.div
                                key={certificate.id}
                                whileHover={{ scale: 1.02 }}
                                className="border rounded-lg p-4 transition-all hover:shadow-md"
                            >
                                <div className="flex justify-between">
                                    <h4 className="font-medium">
                                        {certificate.title}
                                    </h4>
                                    <button className="text-primary hover:text-primary/80">
                                        <Download className="h-4 w-4" />
                                    </button>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Issued by {certificate.issuer}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                    Earned on {certificate.date}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <button className="w-full mt-4 text-sm text-primary flex items-center justify-center p-2 border border-primary/20 rounded-lg hover:bg-primary/5 transition">
                        View All Certificates{" "}
                        <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default StudentBadgesCertificates;
