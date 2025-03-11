import { useState } from "react";
import { motion } from "framer-motion";
import { Save } from "lucide-react";

const StudentSettingNotificationSettings = () => {
    const [notifications, setNotifications] = useState({
        email: {
            courseUpdates: true,
            assignments: true,
            announcements: true,
            grades: true,
            messages: true,
            reminders: false,
            marketing: false,
        },
        push: {
            courseUpdates: true,
            assignments: true,
            announcements: true,
            grades: true,
            messages: true,
            reminders: true,
            marketing: false,
        },
        sms: {
            courseUpdates: false,
            assignments: false,
            announcements: false,
            grades: false,
            messages: false,
            reminders: false,
            marketing: false,
        },
    });

    const handleToggle = (channel, type) => {
        setNotifications({
            ...notifications,
            [channel]: {
                ...notifications[channel],
                [type]: !notifications[channel][type],
            },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Notification settings updated:", notifications);
        // Show success message or handle API call
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-md p-6"
        >
            <h2 className="text-xl font-bold mb-6">Notification Settings</h2>

            <form onSubmit={handleSubmit}>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-3 px-4 text-sm font-medium">
                                    Notification Type
                                </th>
                                <th className="text-center py-3 px-4 text-sm font-medium">
                                    Email
                                </th>
                                <th className="text-center py-3 px-4 text-sm font-medium">
                                    Push
                                </th>
                                <th className="text-center py-3 px-4 text-sm font-medium">
                                    SMS
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-3 px-4">
                                    <div className="text-sm font-medium">
                                        Course Updates
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        New content, materials, or changes
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.email
                                                    .courseUpdates
                                            }
                                            onChange={() =>
                                                handleToggle(
                                                    "email",
                                                    "courseUpdates"
                                                )
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.push.courseUpdates
                                            }
                                            onChange={() =>
                                                handleToggle(
                                                    "push",
                                                    "courseUpdates"
                                                )
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.sms.courseUpdates
                                            }
                                            onChange={() =>
                                                handleToggle(
                                                    "sms",
                                                    "courseUpdates"
                                                )
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                            </tr>

                            <tr className="border-b">
                                <td className="py-3 px-4">
                                    <div className="text-sm font-medium">
                                        Assignments
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        New assignments, due dates, and
                                        reminders
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.email.assignments
                                            }
                                            onChange={() =>
                                                handleToggle(
                                                    "email",
                                                    "assignments"
                                                )
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.push.assignments
                                            }
                                            onChange={() =>
                                                handleToggle(
                                                    "push",
                                                    "assignments"
                                                )
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.sms.assignments
                                            }
                                            onChange={() =>
                                                handleToggle(
                                                    "sms",
                                                    "assignments"
                                                )
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                            </tr>

                            <tr className="border-b">
                                <td className="py-3 px-4">
                                    <div className="text-sm font-medium">
                                        Announcements
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Important announcements from instructors
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.email
                                                    .announcements
                                            }
                                            onChange={() =>
                                                handleToggle(
                                                    "email",
                                                    "announcements"
                                                )
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.push.announcements
                                            }
                                            onChange={() =>
                                                handleToggle(
                                                    "push",
                                                    "announcements"
                                                )
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.sms.announcements
                                            }
                                            onChange={() =>
                                                handleToggle(
                                                    "sms",
                                                    "announcements"
                                                )
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                            </tr>

                            <tr className="border-b">
                                <td className="py-3 px-4">
                                    <div className="text-sm font-medium">
                                        Grades
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Grade updates and feedback
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={notifications.email.grades}
                                            onChange={() =>
                                                handleToggle("email", "grades")
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={notifications.push.grades}
                                            onChange={() =>
                                                handleToggle("push", "grades")
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={notifications.sms.grades}
                                            onChange={() =>
                                                handleToggle("sms", "grades")
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                            </tr>

                            <tr className="border-b">
                                <td className="py-3 px-4">
                                    <div className="text-sm font-medium">
                                        Messages
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Direct messages from instructors or
                                        peers
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.email.messages
                                            }
                                            onChange={() =>
                                                handleToggle(
                                                    "email",
                                                    "messages"
                                                )
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.push.messages
                                            }
                                            onChange={() =>
                                                handleToggle("push", "messages")
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={notifications.sms.messages}
                                            onChange={() =>
                                                handleToggle("sms", "messages")
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                            </tr>

                            <tr className="border-b">
                                <td className="py-3 px-4">
                                    <div className="text-sm font-medium">
                                        Reminders
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Upcoming deadlines and events
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.email.reminders
                                            }
                                            onChange={() =>
                                                handleToggle(
                                                    "email",
                                                    "reminders"
                                                )
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.push.reminders
                                            }
                                            onChange={() =>
                                                handleToggle(
                                                    "push",
                                                    "reminders"
                                                )
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.sms.reminders
                                            }
                                            onChange={() =>
                                                handleToggle("sms", "reminders")
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <td className="py-3 px-4">
                                    <div className="text-sm font-medium">
                                        Marketing
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Promotions, new courses, and special
                                        offers
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.email.marketing
                                            }
                                            onChange={() =>
                                                handleToggle(
                                                    "email",
                                                    "marketing"
                                                )
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.push.marketing
                                            }
                                            onChange={() =>
                                                handleToggle(
                                                    "push",
                                                    "marketing"
                                                )
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={
                                                notifications.sms.marketing
                                            }
                                            onChange={() =>
                                                handleToggle("sms", "marketing")
                                            }
                                        />
                                        <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                            <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                        </div>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-end mt-6 pt-4 border-t">
                    <button
                        type="submit"
                        className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm flex items-center gap-1"
                    >
                        <Save className="h-4 w-4" />
                        <span>Save Preferences</span>
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default StudentSettingNotificationSettings;
