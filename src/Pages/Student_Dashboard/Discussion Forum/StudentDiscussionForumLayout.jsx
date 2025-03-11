import { motion } from "framer-motion";

import { MessageSquare, Plus } from "lucide-react";
import StudentDiscussionForumSearchBar from "./StudentDiscussionForumSearchBar";
import StudentDiscussionForumThreadList from "./StudentDiscussionForumThreadList";

const StudentDiscussionForumLayout = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <h1 className="text-2xl md:text-3xl font-bold">
                        Discussion Forum
                    </h1>
                </div>

                <div className="flex w-full md:w-auto gap-4">
                    <StudentDiscussionForumSearchBar />
                    <button className="bg-primary text-primary-foreground rounded-lg px-4 py-2 flex items-center gap-2">
                        <Plus className="h-5 w-5" />
                        <span className="hidden sm:inline">New Thread</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className="bg-card rounded-xl shadow-md p-4 md:p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <button className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
                            All Topics
                        </button>
                        <button className="bg-muted rounded-full px-3 py-1 text-sm font-medium hover:bg-muted/80">
                            Course Related
                        </button>
                        <button className="bg-muted rounded-full px-3 py-1 text-sm font-medium hover:bg-muted/80">
                            General
                        </button>
                        <button className="bg-muted rounded-full px-3 py-1 text-sm font-medium hover:bg-muted/80">
                            Technical
                        </button>
                        <button className="bg-muted rounded-full px-3 py-1 text-sm font-medium hover:bg-muted/80">
                            Help Needed
                        </button>
                    </div>

                    <StudentDiscussionForumThreadList />
                </div>
            </div>
        </motion.div>
    );
};

export default StudentDiscussionForumLayout;
