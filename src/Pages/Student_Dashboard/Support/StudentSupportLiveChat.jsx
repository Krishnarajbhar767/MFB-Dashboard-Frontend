import { useState } from "react";
import { motion } from "framer-motion";
import { Send, X, Minimize2, Maximize2, User, Clock } from "lucide-react";

const StudentSupportLiveChat = ({ onClose }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [message, setMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([
        {
            id: 1,
            sender: "system",
            message: "Welcome to Live Support! How can we help you today?",
            time: "Just now",
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const handleSendMessage = (e) => {
        e.preventDefault();

        if (!message.trim()) return;

        // Add user message
        const newMessage = {
            id: Date.now(),
            sender: "user",
            message: message.trim(),
            time: "Just now",
        };

        setChatMessages([...chatMessages, newMessage]);
        setMessage("");

        // Simulate agent typing
        setIsTyping(true);

        // Simulate agent response after delay
        setTimeout(() => {
            const agentMessage = {
                id: Date.now() + 1,
                sender: "agent",
                message:
                    "Thanks for your message. An agent will be with you shortly.",
                time: "Just now",
            };

            setChatMessages((prev) => [...prev, agentMessage]);
            setIsTyping(false);
        }, 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: 0,
                height: isMinimized ? "60px" : "400px",
            }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 w-80 bg-card rounded-lg shadow-lg overflow-hidden border z-50"
        >
            <div className="bg-primary text-primary-foreground p-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <h3 className="font-medium">Live Support</h3>
                </div>

                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setIsMinimized(!isMinimized)}
                        className="p-1 hover:bg-primary-foreground/20 rounded"
                    >
                        {isMinimized ? (
                            <Maximize2 className="h-4 w-4" />
                        ) : (
                            <Minimize2 className="h-4 w-4" />
                        )}
                    </button>

                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-primary-foreground/20 rounded"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {!isMinimized && (
                <>
                    <div className="h-[280px] overflow-y-auto p-3 space-y-3">
                        {chatMessages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${
                                    msg.sender === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-lg p-2 ${
                                        msg.sender === "user"
                                            ? "bg-primary text-primary-foreground"
                                            : msg.sender === "agent"
                                            ? "bg-muted"
                                            : "bg-muted/50"
                                    }`}
                                >
                                    <p className="text-sm">{msg.message}</p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <Clock className="h-3 w-3 text-muted-foreground" />
                                        <span className="text-xs text-muted-foreground">
                                            {msg.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-muted/50 rounded-lg p-2">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></span>
                                        <span
                                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                                            style={{ animationDelay: "0.2s" }}
                                        ></span>
                                        <span
                                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                                            style={{ animationDelay: "0.4s" }}
                                        ></span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleSendMessage} className="p-3 border-t">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                placeholder="Type your message..."
                            />

                            <button
                                type="submit"
                                className="bg-primary text-primary-foreground rounded-lg p-2"
                                disabled={!message.trim()}
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                    </form>
                </>
            )}
        </motion.div>
    );
};

export default StudentSupportLiveChat;
