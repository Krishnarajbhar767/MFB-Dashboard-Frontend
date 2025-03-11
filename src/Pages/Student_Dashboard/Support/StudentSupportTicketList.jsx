import React from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle, AlertCircle, Search, Plus } from "lucide-react";

const StudentSupportTicketList = () => {
    const [filter, setFilter] = React.useState("all");
    const [searchQuery, setSearchQuery] = React.useState("");

    const tickets = [
        {
            id: "TKT-1234",
            subject: "Unable to access course materials",
            category: "Technical Issue",
            status: "open",
            priority: "high",
            created: "Oct 12, 2023",
            lastUpdated: "Oct 13, 2023",
        },
        {
            id: "TKT-1235",
            subject: "Billing discrepancy on my account",
            category: "Billing & Payments",
            status: "in-progress",
            priority: "medium",
            created: "Oct 10, 2023",
            lastUpdated: "Oct 12, 2023",
        },
        {
            id: "TKT-1236",
            subject: "Request for course extension",
            category: "Course Content",
            status: "closed",
            priority: "low",
            created: "Oct 5, 2023",
            lastUpdated: "Oct 8, 2023",
        },
        {
            id: "TKT-1237",
            subject: "Certificate not generated after course completion",
            category: "Technical Issue",
            status: "closed",
            priority: "medium",
            created: "Sep 28, 2023",
            lastUpdated: "Oct 2, 2023",
        },
        {
            id: "TKT-1238",
            subject: "Question about assignment deadline",
            category: "Course Content",
            status: "open",
            priority: "low",
            created: "Oct 14, 2023",
            lastUpdated: "Oct 14, 2023",
        },
    ];

    const filteredTickets = tickets.filter((ticket) => {
        // Filter by status
        if (filter !== "all" && ticket.status !== filter) {
            return false;
        }

        // Filter by search query
        if (
            searchQuery &&
            !ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !ticket.id.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
            return false;
        }

        return true;
    });

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

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-md p-6"
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">My Support Tickets</h2>

                <button className="bg-primary text-primary-foreground rounded-lg px-3 py-2 text-sm flex items-center gap-1">
                    <Plus className="h-4 w-4" />
                    <span>New Ticket</span>
                </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setFilter("all")}
                        className={`px-3 py-1 rounded-lg text-sm ${
                            filter === "all"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                        }`}
                    >
                        All
                    </button>

                    <button
                        onClick={() => setFilter("open")}
                        className={`px-3 py-1 rounded-lg text-sm ${
                            filter === "open"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                        }`}
                    >
                        Open
                    </button>

                    <button
                        onClick={() => setFilter("in-progress")}
                        className={`px-3 py-1 rounded-lg text-sm ${
                            filter === "in-progress"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                        }`}
                    >
                        In Progress
                    </button>

                    <button
                        onClick={() => setFilter("closed")}
                        className={`px-3 py-1 rounded-lg text-sm ${
                            filter === "closed"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                        }`}
                    >
                        Closed
                    </button>
                </div>

                <div className="relative w-full sm:w-64">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Search tickets..."
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-3 px-4 text-sm font-medium">
                                Ticket ID
                            </th>
                            <th className="text-left py-3 px-4 text-sm font-medium">
                                Subject
                            </th>
                            <th className="text-left py-3 px-4 text-sm font-medium">
                                Category
                            </th>
                            <th className="text-left py-3 px-4 text-sm font-medium">
                                Status
                            </th>
                            <th className="text-left py-3 px-4 text-sm font-medium">
                                Priority
                            </th>
                            <th className="text-left py-3 px-4 text-sm font-medium">
                                Last Updated
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTickets.length > 0 ? (
                            filteredTickets.map((ticket) => (
                                <tr
                                    key={ticket.id}
                                    className="border-b hover:bg-muted/50"
                                >
                                    <td className="py-3 px-4 text-sm">
                                        {ticket.id}
                                    </td>
                                    <td className="py-3 px-4 text-sm">
                                        <a
                                            href="#"
                                            className="text-primary hover:underline"
                                        >
                                            {ticket.subject}
                                        </a>
                                    </td>
                                    <td className="py-3 px-4 text-sm">
                                        {ticket.category}
                                    </td>
                                    <td className="py-3 px-4 text-sm">
                                        {getStatusBadge(ticket.status)}
                                    </td>
                                    <td className="py-3 px-4 text-sm">
                                        {getPriorityBadge(ticket.priority)}
                                    </td>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">
                                        {ticket.lastUpdated}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="py-6 text-center text-muted-foreground"
                                >
                                    No tickets found matching your criteria.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default StudentSupportTicketList;
