import React from "react";
import { motion } from "framer-motion";
import { LifeBuoy, MessageSquare, FileQuestion, Ticket } from "lucide-react";
import StudentSupportFAQ from "./StudentSupportFAQ";
import StudentSupportContactForm from "./StudentSupportContactForm";
import StudentSupportTicketList from "./StudentSupportTicketList";
import StudentSupportKnowledgeBase from "./StudentSupportKnowledgeBase";

const StudentSupportLayout = () => {
    const [activeTab, setActiveTab] = React.useState("faq");

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <div className="flex items-center gap-2 mb-6">
                <LifeBuoy className="h-6 w-6 text-primary" />
                <h1 className="text-2xl md:text-3xl font-bold">
                    Support Center
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                    <div className="bg-card rounded-xl shadow-md p-4">
                        <nav className="space-y-1">
                            <button
                                onClick={() => setActiveTab("faq")}
                                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                                    activeTab === "faq"
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted"
                                }`}
                            >
                                <FileQuestion className="h-5 w-5" />
                                <span>FAQ</span>
                            </button>

                            <button
                                onClick={() => setActiveTab("contact")}
                                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                                    activeTab === "contact"
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted"
                                }`}
                            >
                                <MessageSquare className="h-5 w-5" />
                                <span>Contact Support</span>
                            </button>

                            <button
                                onClick={() => setActiveTab("tickets")}
                                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                                    activeTab === "tickets"
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted"
                                }`}
                            >
                                <Ticket className="h-5 w-5" />
                                <span>My Tickets</span>
                            </button>

                            <button
                                onClick={() => setActiveTab("knowledge")}
                                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                                    activeTab === "knowledge"
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted"
                                }`}
                            >
                                <FileQuestion className="h-5 w-5" />
                                <span>Knowledge Base</span>
                            </button>
                        </nav>

                        <div className="mt-6 p-4 bg-muted rounded-lg">
                            <h3 className="font-medium text-sm mb-2">
                                Need urgent help?
                            </h3>
                            <p className="text-xs text-muted-foreground mb-3">
                                Our support team is available 24/7 to assist you
                                with any issues.
                            </p>
                            <button
                                onClick={() => setActiveTab("contact")}
                                className="w-full bg-primary text-primary-foreground rounded-lg px-3 py-2 text-sm"
                            >
                                Contact Us Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-3">
                    {activeTab === "faq" && <StudentSupportFAQ />}
                    {activeTab === "contact" && <StudentSupportContactForm />}
                    {activeTab === "tickets" && <StudentSupportTicketList />}
                    {activeTab === "knowledge" && (
                        <StudentSupportKnowledgeBase />
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default StudentSupportLayout;
