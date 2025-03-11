import { motion } from "framer-motion";
import { MessageSquare, Eye, Pin, Flame } from "lucide-react";

const StudentDiscussionForumThreadItem = ({ thread }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            className="border rounded-lg p-4 hover:shadow-md transition-all"
        >
            <div className="flex items-start gap-3">
                <img
                    src={thread.avatar || "/placeholder.svg"}
                    alt={thread.author}
                    className="w-10 h-10 rounded-full"
                />

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-medium text-base">
                            <a href="#" className="hover:text-primary">
                                {thread.title}
                            </a>
                        </h3>

                        {thread.isPinned && (
                            <span className="bg-blue-100 text-blue-600 rounded-full px-2 py-0.5 text-xs flex items-center gap-1">
                                <Pin className="h-3 w-3" /> Pinned
                            </span>
                        )}

                        {thread.isHot && (
                            <span className="bg-orange-100 text-orange-600 rounded-full px-2 py-0.5 text-xs flex items-center gap-1">
                                <Flame className="h-3 w-3" /> Hot
                            </span>
                        )}
                    </div>

                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <span>Posted by {thread.author}</span>
                        <span className="mx-2">•</span>
                        <span>{thread.lastActivity}</span>
                    </div>

                    <div className="flex items-center gap-4 mt-3">
                        <span className="bg-muted rounded-full px-2 py-0.5 text-xs">
                            {thread.category}
                        </span>

                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MessageSquare className="h-3 w-3" />
                            <span>{thread.replies} replies</span>
                        </div>

                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Eye className="h-3 w-3" />
                            <span>{thread.views} views</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default StudentDiscussionForumThreadItem;
