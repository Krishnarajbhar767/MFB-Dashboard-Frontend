import React from "react";
import { motion } from "framer-motion";
import { Search, FileText, BookOpen, Video, ArrowRight } from "lucide-react";

const StudentSupportKnowledgeBase = () => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [activeCategory, setActiveCategory] = React.useState("all");

    const categories = [
        { id: "all", name: "All Articles" },
        { id: "getting-started", name: "Getting Started" },
        { id: "account", name: "Account & Profile" },
        { id: "courses", name: "Courses & Learning" },
        { id: "payments", name: "Payments & Billing" },
        { id: "technical", name: "Technical Issues" },
    ];

    const articles = [
        {
            id: 1,
            title: "How to reset your password",
            category: "account",
            excerpt:
                "Learn how to reset your password if you've forgotten it or want to change it for security reasons.",
            type: "text",
            readTime: "2 min read",
            date: "Updated Oct 10, 2023",
        },
        {
            id: 2,
            title: "Navigating the course dashboard",
            category: "getting-started",
            excerpt:
                "A comprehensive guide to understanding and using the features of your course dashboard.",
            type: "video",
            readTime: "5 min video",
            date: "Updated Sep 28, 2023",
        },
        {
            id: 3,
            title: "Downloading course materials for offline use",
            category: "courses",
            excerpt:
                "Step-by-step instructions for downloading course materials to access them without an internet connection.",
            type: "text",
            readTime: "3 min read",
            date: "Updated Oct 5, 2023",
        },
        {
            id: 4,
            title: "Understanding course completion certificates",
            category: "courses",
            excerpt:
                "Learn about the different types of certificates offered and how to claim them after completing a course.",
            type: "text",
            readTime: "4 min read",
            date: "Updated Oct 12, 2023",
        },
        {
            id: 5,
            title: "Troubleshooting video playback issues",
            category: "technical",
            excerpt:
                "Common solutions for video playback problems including buffering, quality issues, and audio sync.",
            type: "text",
            readTime: "5 min read",
            date: "Updated Oct 8, 2023",
        },
        {
            id: 6,
            title: "Managing your subscription and payment methods",
            category: "payments",
            excerpt:
                "How to update payment information, change subscription plans, or cancel your subscription.",
            type: "text",
            readTime: "3 min read",
            date: "Updated Oct 15, 2023",
        },
    ];

    const filteredArticles = articles.filter((article) => {
        // Filter by category
        if (activeCategory !== "all" && article.category !== activeCategory) {
            return false;
        }

        // Filter by search query
        if (
            searchQuery &&
            !article.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
            return false;
        }

        return true;
    });

    const getArticleIcon = (type) => {
        switch (type) {
            case "video":
                return <Video className="h-5 w-5 text-blue-500" />;
            case "text":
            default:
                return <FileText className="h-5 w-5 text-green-500" />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-md p-6"
        >
            <h2 className="text-xl font-bold mb-6">Knowledge Base</h2>

            <div className="relative mb-6">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Search articles..."
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            <div className="flex overflow-x-auto pb-2 mb-6 gap-2">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`whitespace-nowrap px-3 py-1 rounded-lg text-sm ${
                            activeCategory === category.id
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted hover:bg-muted/80"
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start gap-3">
                                <div className="bg-muted rounded-lg p-2">
                                    {getArticleIcon(article.type)}
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-medium mb-1">
                                        <a
                                            href="#"
                                            className="hover:text-primary"
                                        >
                                            {article.title}
                                        </a>
                                    </h3>

                                    <p className="text-sm text-muted-foreground mb-3">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span>{article.readTime}</span>
                                            <span>•</span>
                                            <span>{article.date}</span>
                                        </div>

                                        <a
                                            href="#"
                                            className="text-xs text-primary flex items-center gap-1 hover:underline"
                                        >
                                            Read More{" "}
                                            <ArrowRight className="h-3 w-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className="col-span-1 md:col-span-2 text-center py-8">
                        <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">
                            No articles found matching your criteria.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setActiveCategory("all");
                            }}
                            className="text-primary hover:underline mt-2"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>

            <div className="mt-6 pt-4 border-t text-center">
                <p className="text-sm text-muted-foreground">
                    Can't find what you're looking for?
                    <button className="text-primary ml-1 hover:underline">
                        Contact Support
                    </button>
                </p>
            </div>
        </motion.div>
    );
};

export default StudentSupportKnowledgeBase;
