import { useState } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, Reply, MoreHorizontal, Send } from "lucide-react";

const StudentDiscussionForumCommentSection = ({ comments = [] }) => {
    const [newComment, setNewComment] = useState("");
    const [showReplies, setShowReplies] = useState({});

    const toggleReplies = (commentId) => {
        setShowReplies({
            ...showReplies,
            [commentId]: !showReplies[commentId],
        });
    };

    const handleSubmitComment = (e) => {
        e.preventDefault();
        // Handle comment submission
        console.log("New comment:", newComment);
        setNewComment("");
    };

    return (
        <div className="mt-6">
            <h3 className="font-medium text-lg mb-4">
                Comments ({comments.length})
            </h3>

            <form onSubmit={handleSubmitComment} className="mb-6">
                <div className="flex gap-3">
                    <img
                        src="https://picsum.photos/200"
                        alt="Your avatar"
                        className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="w-full rounded-full border border-input bg-background px-4 py-2 text-sm pr-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            placeholder="Add a comment..."
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-primary"
                            disabled={!newComment.trim()}
                        >
                            <Send className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </form>

            <div className="space-y-4">
                {comments.map((comment) => (
                    <motion.div
                        key={comment.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="border-b pb-4 last:border-b-0"
                    >
                        <div className="flex gap-3">
                            <img
                                src={comment.authorAvatar || "/placeholder.svg"}
                                alt={comment.author}
                                className="w-8 h-8 rounded-full"
                            />

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="font-medium">
                                            {comment.author}
                                        </span>
                                        <span className="text-xs text-muted-foreground ml-2">
                                            {comment.time}
                                        </span>
                                    </div>

                                    <button className="text-muted-foreground hover:text-foreground">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </button>
                                </div>

                                <p className="text-sm mt-1">
                                    {comment.content}
                                </p>

                                <div className="flex items-center gap-4 mt-2">
                                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                                        <ThumbsUp className="h-3 w-3" />
                                        <span>{comment.likes}</span>
                                    </button>

                                    <button
                                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
                                        onClick={() =>
                                            toggleReplies(comment.id)
                                        }
                                    >
                                        <Reply className="h-3 w-3" />
                                        <span>Reply</span>
                                    </button>
                                </div>

                                {comment.replies &&
                                    comment.replies.length > 0 && (
                                        <div className="mt-3">
                                            <button
                                                onClick={() =>
                                                    toggleReplies(comment.id)
                                                }
                                                className="text-xs text-primary hover:underline"
                                            >
                                                {showReplies[comment.id]
                                                    ? "Hide replies"
                                                    : `Show ${comment.replies.length} replies`}
                                            </button>

                                            {showReplies[comment.id] && (
                                                <div className="mt-3 space-y-3 pl-4 border-l-2 border-muted">
                                                    {comment.replies.map(
                                                        (reply) => (
                                                            <div
                                                                key={reply.id}
                                                                className="flex gap-3"
                                                            >
                                                                <img
                                                                    src={
                                                                        reply.authorAvatar ||
                                                                        "/placeholder.svg"
                                                                    }
                                                                    alt={
                                                                        reply.author
                                                                    }
                                                                    className="w-6 h-6 rounded-full"
                                                                />

                                                                <div className="flex-1">
                                                                    <div className="flex justify-between items-start">
                                                                        <div>
                                                                            <span className="font-medium text-sm">
                                                                                {
                                                                                    reply.author
                                                                                }
                                                                            </span>
                                                                            <span className="text-xs text-muted-foreground ml-2">
                                                                                {
                                                                                    reply.time
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                    <p className="text-xs mt-1">
                                                                        {
                                                                            reply.content
                                                                        }
                                                                    </p>

                                                                    <div className="flex items-center gap-4 mt-1">
                                                                        <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                                                                            <ThumbsUp className="h-3 w-3" />
                                                                            <span>
                                                                                {
                                                                                    reply.likes
                                                                                }
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default StudentDiscussionForumCommentSection;
