import React from "react";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Paperclip,
    Send,
    Clock,
    CheckCircle,
    AlertCircle,
} from "lucide-react";

const StudentSupportTicketDetail = ({ ticketId = "TKT-1234", onBack }) => {
    const [newReply, setNewReply] = React.useState("");

    const ticket = {
        id: "TKT-1234",
        subject: "Unable to access course materials",
        category: "Technical Issue",
        status: "in-progress",
        priority: "high",
        created: "Oct 12, 2023 at 10:45 AM",
        lastUpdated: "Oct 13, 2023 at 2:30 PM",
        description:
            "I'm trying to access the materials for the Advanced Mathematics course, but I keep getting an error message saying 'Content not available'. I've tried clearing my cache and using different browsers, but the issue persists. Please help me resolve this as I need to prepare for an upcoming exam.",
        attachments: [{ id: 1, name: "error-screenshot.png", size: "1.2 MB" }],
        messages: [
            {
                id: 1,
                sender: "Support Agent",
                senderAvatar: "/placeholder.svg?height=40&width=40",
                time: "Oct 12, 2023 at 11:30 AM",
                content:
                    "Thank you for reporting this issue. I'll look into it right away. Could you please provide more details about which specific materials you're trying to access?",
                isAgent: true,
            },
            {
                id: 2,
                sender: "Alex Johnson",
                senderAvatar: "/placeholder.svg?height=40&width=40",
                time: "Oct 12, 2023 at 12:15 PM",
                content:
                    "I'm trying to access the Week 3 lecture videos and the practice problems PDF. Both are showing the same error.",
                isAgent: false,
            },
            {
                id: 3,
                sender: "Support Agent",
                senderAvatar: "/placeholder.svg?height=40&width=40",
                time: "Oct 13, 2023 at 2:30 PM",
                content:
                    "I've checked the course materials and found that there was an issue with the permissions. I've fixed it now, and you should be able to access all Week 3 materials. Please try again and let me know if you're still experiencing any issues. If the problem persists, we may need to check your account permissions specifically.",
                isAgent: true,
            },
        ],
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case "open":
                return (
                    <span className="flex items-center gap-1 text-xs font-medium text-yellow-600 bg-yellow-100 rounded-full px-2 py-0.5">
                        <Clock className="h-3 w-3" />
                        <span>Open</span>
                    </span>
                );
            case "in-progress":
                return (
                    <span className="flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-0.5">
                        <Clock className="h-3 w-3" />
                        <span>In Progress</span>
                    </span>
                );
            case "closed":
                return (
                    <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-100 rounded-full px-2 py-0.5">
                        <CheckCircle className="h-3 w-3" />
                        <span>Closed</span>
                    </span>
                );
            default:
                return null;
        }
    };

    const getPriorityBadge = (priority) => {
        switch (priority) {
            case "high":
                return (
                    <span className="flex items-center gap-1 text-xs font-medium text-red-600 bg-red-100 rounded-full px-2 py-0.5">
                        <AlertCircle className="h-3 w-3" />
                        <span>High</span>
                    </span>
                );
            case "medium":
                return (
                    <span className="flex items-center gap-1 text-xs font-medium text-orange-600 bg-orange-100 rounded-full px-2 py-0.5">
                        <AlertCircle className="h-3 w-3" />
                        <span>Medium</span>
                    </span>
                );
            case "low":
                return (
                    <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-100 rounded-full px-2 py-0.5">
                        <AlertCircle className="h-3 w-3" />
                        <span>Low</span>
                    </span>
                );
            default:
                return null;
        }
    };

    const handleSubmitReply = (e) => {
        e.preventDefault();
        // Handle reply submission
        console.log("Reply submitted:", newReply);
        setNewReply("");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-md p-6"
        >
            <div className="flex items-center gap-2 mb-6">
                <button
                    onClick={onBack}
                    className="p-1 rounded-full hover:bg-muted"
                >
                    <ArrowLeft className="h-5 w-5" />
                </button>
                <h2 className="text-xl font-bold">Ticket Details</h2>
            </div>

            <div className="border rounded-lg p-4 mb-6">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4">
                    <h3 className="text-lg font-medium">{ticket.subject}</h3>
                    <div className="flex items-center gap-2">
                        {getStatusBadge(ticket.status)}
                        {getPriorityBadge(ticket.priority)}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Ticket ID
                        </p>
                        <p className="text-sm font-medium">{ticket.id}</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Category
                        </p>
                        <p className="text-sm font-medium">{ticket.category}</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Created</p>
                        <p className="text-sm font-medium">{ticket.created}</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Last Updated
                        </p>
                        <p className="text-sm font-medium">
                            {ticket.lastUpdated}
                        </p>
                    </div>
                </div>

                <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">
                        Description
                    </p>
                    <p className="text-sm">{ticket.description}</p>
                </div>

                {ticket.attachments.length > 0 && (
                    <div>
                        <p className="text-sm text-muted-foreground mb-1">
                            Attachments
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {ticket.attachments.map((attachment) => (
                                <a
                                    key={attachment.id}
                                    href="#"
                                    className="flex items-center gap-1 text-sm text-primary hover:underline bg-muted rounded-lg px-3 py-1"
                                >
                                    <Paperclip className="h-4 w-4" />
                                    <span>{attachment.name}</span>
                                    <span className="text-xs text-muted-foreground">
                                        ({attachment.size})
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Conversation</h3>

                <div className="space-y-4">
                    {ticket.messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex gap-3 ${
                                message.isAgent ? "bg-muted/50" : ""
                            } rounded-lg p-3`}
                        >
                            <img
                                src={message.senderAvatar || "/placeholder.svg"}
                                alt={message.sender}
                                className="w-10 h-10 rounded-full"
                            />

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="font-medium">
                                            {message.sender}
                                        </span>
                                        {message.isAgent && (
                                            <span className="ml-2 bg-blue-100 text-blue-600 rounded-full px-2 py-0.5 text-xs">
                                                Support Agent
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                        {message.time}
                                    </span>
                                </div>

                                <p className="text-sm mt-2">
                                    {message.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-lg font-medium mb-4">Add Reply</h3>

                <form onSubmit={handleSubmitReply}>
                    <textarea
                        value={newReply}
                        onChange={(e) => setNewReply(e.target.value)}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[100px] mb-4"
                        placeholder="Type your reply here..."
                        required
                    />

                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
                        >
                            <Paperclip className="h-5 w-5" />
                            <span>Attach Files</span>
                        </button>

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="bg-muted hover:bg-muted/80 rounded-lg px-4 py-2 text-sm"
                            >
                                Close Ticket
                            </button>

                            <button
                                type="submit"
                                className="bg-primary text-primary-foreground rounded-lg px-4 py-2 flex items-center gap-2 text-sm"
                                disabled={!newReply.trim()}
                            >
                                <Send className="h-4 w-4" />
                                <span>Send Reply</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default StudentSupportTicketDetail;
