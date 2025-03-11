import { motion } from "framer-motion";
import {
    ThumbsUp,
    MessageSquare,
    Flag,
    MoreHorizontal,
    Share2,
} from "lucide-react";
import StudentDiscussionForumCommentSection from "./StudentDiscussionForumCommentSection";

const StudentDiscussionForumPost = ({ Props }) => {
    const post = {
        title: "How to Improve React Performance?",
        author: "John Doe",
        authorAvatar: "https://picsum.photos/200",
        date: "March 11, 2025",
        category: "React Development",
        content:
            "I've been working on optimizing my React app. Does anyone have tips for improving performance, especially when dealing with large lists?",
        image: "https://picsum.photos/200", // Optional image
        likes: 24,
        comments: 5,
        commentData: [
            {
                id: 1,
                author: "Jane Smith",
                authorAvatar: "https://picsum.photos/200",
                date: "March 11, 2025",
                content:
                    "Try using React.memo and useCallback to prevent unnecessary re-renders!",
                likes: 3,
                replies: [],
            },
            {
                id: 2,
                author: "Alex Johnson",
                authorAvatar: "https://picsum.photos/200",
                date: "March 12, 2025",
                content:
                    "Virtualization with react-window has worked well for me when handling large lists.",
                likes: 5,
                replies: [
                    {
                        id: 3,
                        author: "Chris Lee",
                        authorAvatar: "https://picsum.photos/200.jpg",
                        date: "March 12, 2025",
                        content:
                            "I second this! react-window is a game changer.",
                        likes: 2,
                    },
                ],
            },
        ],
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-md p-6"
        >
            <div className="flex items-start gap-4">
                <img
                    src={post.authorAvatar || "/placeholder.svg"}
                    alt={post.author}
                    className="w-12 h-12 rounded-full"
                />

                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="font-bold text-xl">{post.title}</h2>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                                <span>{post.author}</span>
                                <span className="mx-2">•</span>
                                <span>{post.date}</span>
                                <span className="mx-2">•</span>
                                <span className="bg-muted rounded-full px-2 py-0.5 text-xs">
                                    {post.category}
                                </span>
                            </div>
                        </div>

                        <button className="text-muted-foreground hover:text-foreground">
                            <MoreHorizontal className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="mt-4 prose max-w-none">
                        <p>{post.content}</p>

                        {post.image && (
                            <img
                                src={post.image || "/placeholder.svg"}
                                alt="Post attachment"
                                className="mt-4 rounded-lg max-h-96 w-auto"
                            />
                        )}
                    </div>

                    <div className="flex items-center gap-4 mt-6 pt-4 border-t">
                        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{post.likes} Likes</span>
                        </button>

                        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                            <MessageSquare className="h-4 w-4" />
                            <span>{post.comments} Comments</span>
                        </button>

                        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                            <Share2 className="h-4 w-4" />
                            <span>Share</span>
                        </button>

                        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-red-500 ml-auto">
                            <Flag className="h-4 w-4" />
                            <span>Report</span>
                        </button>
                    </div>
                </div>
            </div>

            <StudentDiscussionForumCommentSection comments={post.commentData} />
        </motion.div>
    );
};

export default StudentDiscussionForumPost;
