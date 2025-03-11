import { motion } from "framer-motion";
import StudentDiscussionForumThreadItem from "./StudentDiscussionForumThreadItem";

const StudentDiscussionForumThreadList = () => {
    const threads = [
        {
            id: 1,
            title: "How to solve this algorithm problem?",
            author: "Alex Johnson",
            avatar: "/placeholder.svg?height=40&width=40",
            category: "Help Needed",
            replies: 12,
            views: 89,
            lastActivity: "2 hours ago",
            isHot: true,
            isPinned: false,
        },
        {
            id: 2,
            title: "Important: Midterm exam date changed",
            author: "Professor Smith",
            avatar: "/placeholder.svg?height=40&width=40",
            category: "Announcement",
            replies: 8,
            views: 156,
            lastActivity: "1 day ago",
            isHot: false,
            isPinned: true,
        },
        {
            id: 3,
            title: "Study group for Advanced Mathematics",
            author: "Emma Williams",
            avatar: "/placeholder.svg?height=40&width=40",
            category: "General",
            replies: 24,
            views: 112,
            lastActivity: "3 days ago",
            isHot: true,
            isPinned: false,
        },
        {
            id: 4,
            title: "Resources for learning React.js",
            author: "Michael Chen",
            avatar: "/placeholder.svg?height=40&width=40",
            category: "Course Related",
            replies: 18,
            views: 95,
            lastActivity: "5 days ago",
            isHot: false,
            isPinned: false,
        },
        {
            id: 5,
            title: "Tips for time management during finals",
            author: "Sarah Parker",
            avatar: "/placeholder.svg?height=40&width=40",
            category: "General",
            replies: 32,
            views: 203,
            lastActivity: "1 week ago",
            isHot: false,
            isPinned: false,
        },
    ];

    return (
        <div className="space-y-4">
            {threads.map((thread, index) => (
                <motion.div
                    key={thread.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    <StudentDiscussionForumThreadItem thread={thread} />
                </motion.div>
            ))}

            <div className="flex justify-center mt-6">
                <button className="bg-muted hover:bg-muted/80 text-muted-foreground rounded-lg px-4 py-2 text-sm">
                    Load More Threads
                </button>
            </div>
        </div>
    );
};

export default StudentDiscussionForumThreadList;
