import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Paperclip, X } from "lucide-react";

const StudentSupportContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
        attachments: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleAddAttachment = () => {
        // Simulate adding an attachment
        const newAttachment = {
            id: Date.now(),
            name: "screenshot.png",
            size: "1.2 MB",
            type: "image/png",
        };

        setFormData({
            ...formData,
            attachments: [...formData.attachments, newAttachment],
        });
    };

    const handleRemoveAttachment = (id) => {
        setFormData({
            ...formData,
            attachments: formData.attachments.filter(
                (attachment) => attachment.id !== id
            ),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            category: "",
            message: "",
            attachments: [],
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-md p-6"
        >
            <h2 className="text-xl font-bold mb-6">Contact Support</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-1"
                        >
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-1"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-1"
                    >
                        Subject
                    </label>
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Enter the subject of your inquiry"
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
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="technical">Technical Issue</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="course">Course Content</option>
                        <option value="account">Account Access</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[150px]"
                        placeholder="Describe your issue in detail..."
                        required
                    />
                </div>

                {formData.attachments.length > 0 && (
                    <div className="border rounded-lg p-3">
                        <h3 className="text-sm font-medium mb-2">
                            Attachments
                        </h3>
                        <div className="space-y-2">
                            {formData.attachments.map((attachment) => (
                                <div
                                    key={attachment.id}
                                    className="flex items-center justify-between bg-muted rounded-lg p-2 text-sm"
                                >
                                    <div className="flex items-center gap-2">
                                        <Paperclip className="h-4 w-4" />
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
                    <button
                        type="button"
                        onClick={handleAddAttachment}
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
                    >
                        <Paperclip className="h-5 w-5" />
                        <span>Attach Files</span>
                    </button>

                    <button
                        type="submit"
                        className="bg-primary text-primary-foreground rounded-lg px-4 py-2 flex items-center gap-2"
                    >
                        <Send className="h-5 w-5" />
                        <span>Submit Ticket</span>
                    </button>
                </div>
            </form>

            <div className="mt-6 pt-4 border-t">
                <h3 className="text-sm font-medium mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                    We typically respond to support inquiries within 24 hours.
                    For urgent issues, please indicate in your subject line.
                </p>
            </div>
        </motion.div>
    );
};

export default StudentSupportContactForm;
