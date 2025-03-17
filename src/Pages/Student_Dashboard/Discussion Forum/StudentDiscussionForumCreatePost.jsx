import { useState } from "react";
import { motion } from "framer-motion";
import { Image, Link, Smile, Send, X } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const StudentDiscussionForumCreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [attachments, setAttachments] = useState([]);

    const handleAddAttachment = () => {
        // Simulate adding an attachment
        const newAttachment = {
            id: Date.now(),
            name: "example-image.jpg",
            size: "2.4 MB",
            type: "image",
        };
        setAttachments([...attachments, newAttachment]);
    };

    const handleRemoveAttachment = (id) => {
        setAttachments(
            attachments.filter((attachment) => attachment.id !== id)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ title, content, category, attachments });
        // Reset form
        setTitle("");
        setContent("");
        setCategory("");
        setAttachments([]);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-md p-6"
        >
            <h2 className="text-xl font-bold mb-4">Create New Post</h2>

            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium mb-1"
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            placeholder="Enter a descriptive title"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium mb-1"
                        >
                            Category
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="general">General</option>
                            <option value="course-related">
                                Course Related
                            </option>
                            <option value="technical">Technical</option>
                            <option value="help-needed">Help Needed</option>
                            <option value="announcement">Announcement</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="content"
                            className="block text-sm font-medium mb-1"
                        >
                            Content
                        </label>
                        {/* <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[150px]"
                            placeholder="Write your post content here..."
                            required
                        /> */}
                        <ReactQuill value={content} onChange={setContent} />
                    </div>

                    {attachments.length > 0 && (
                        <div className="border rounded-lg p-3">
                            <h3 className="text-sm font-medium mb-2">
                                Attachments
                            </h3>
                            <div className="space-y-2">
                                {attachments.map((attachment) => (
                                    <div
                                        key={attachment.id}
                                        className="flex items-center justify-between bg-muted rounded-lg p-2 text-sm"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Image className="h-4 w-4" />
                                            <span>{attachment.name}</span>
                                            <span className="text-xs text-muted-foreground">
                                                ({attachment.size})
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveAttachment(
                                                    attachment.id
                                                )
                                            }
                                            className="text-muted-foreground hover:text-red-500"
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={handleAddAttachment}
                                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary rounded-lg p-2 hover:bg-muted"
                            >
                                <Image className="h-5 w-5" />
                                <span className="hidden sm:inline">
                                    Add Image
                                </span>
                            </button>

                            <button
                                type="button"
                                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary rounded-lg p-2 hover:bg-muted"
                            >
                                <Link className="h-5 w-5" />
                                <span className="hidden sm:inline">
                                    Add Link
                                </span>
                            </button>

                            <button
                                type="button"
                                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary rounded-lg p-2 hover:bg-muted"
                            >
                                <Smile className="h-5 w-5" />
                                <span className="hidden sm:inline">Emoji</span>
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="bg-primary text-primary-foreground rounded-lg px-4 py-2 flex items-center gap-2"
                        >
                            <Send className="h-5 w-5" />
                            <span>Post</span>
                        </button>
                    </div>
                </div>
            </form>
        </motion.div>
    );
};

export default StudentDiscussionForumCreatePost;
