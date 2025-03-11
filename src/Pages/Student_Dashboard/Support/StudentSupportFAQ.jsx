import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

const StudentSupportFAQ = () => {
    const [openItem, setOpenItem] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState("");

    const faqItems = [
        {
            id: 1,
            question: "How do I reset my password?",
            answer: "To reset your password, click on the 'Forgot Password' link on the login page. You will receive an email with instructions to create a new password. If you don't receive the email, check your spam folder or contact support.",
        },
        {
            id: 2,
            question: "How can I enroll in a course?",
            answer: "You can enroll in a course by navigating to the course page and clicking the 'Enroll' button. If the course requires payment, you'll be directed to the payment page. Once enrolled, the course will appear in your 'My Courses' section.",
        },
        {
            id: 3,
            question: "Can I get a refund for a course?",
            answer: "Refund policies vary by course. Generally, you can request a refund within 7 days of purchase if you've completed less than 25% of the course. Please check the specific refund policy for your course or contact support for assistance.",
        },
        {
            id: 4,
            question: "How do I download course materials?",
            answer: "Course materials can be downloaded from the course page. Look for the 'Resources' or 'Downloads' section within each module. Not all materials may be available for download due to copyright restrictions.",
        },
        {
            id: 5,
            question: "How do I get a certificate after completing a course?",
            answer: "Certificates are automatically generated once you complete all required components of a course. You can access your certificates from the 'Certificates' section in your profile. Some courses may require passing a final exam with a minimum score.",
        },
        {
            id: 6,
            question: "What should I do if a video isn't playing?",
            answer: "If a video isn't playing, try refreshing the page, clearing your browser cache, or using a different browser. Check your internet connection and make sure you have the necessary plugins installed. If the issue persists, contact technical support.",
        },
    ];

    const filteredFAQs = faqItems.filter(
        (item) =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-md p-6"
        >
            <h2 className="text-xl font-bold mb-6">
                Frequently Asked Questions
            </h2>

            <div className="relative mb-6">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Search FAQs..."
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            <div className="space-y-3">
                {filteredFAQs.length > 0 ? (
                    filteredFAQs.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="border rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleItem(item.id)}
                                className="flex justify-between items-center w-full p-4 text-left hover:bg-muted/50"
                            >
                                <span className="font-medium">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`h-5 w-5 transition-transform ${
                                        openItem === item.id ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {openItem === item.id && (
                                <div className="p-4 pt-0 border-t">
                                    <p className="text-sm text-muted-foreground">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    ))
                ) : (
                    <div className="text-center py-8">
                        <p className="text-muted-foreground">
                            No FAQs found matching your search.
                        </p>
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

export default StudentSupportFAQ;
