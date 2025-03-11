"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Info } from "lucide-react";

const StudentSettingPrivacySettings = () => {
    const [privacy, setPrivacy] = useState({
        profileVisibility: "all",
        showOnlineStatus: true,
        showLastSeen: true,
        showCourseProgress: true,
        allowMessaging: "all",
        dataSharing: {
            courseActivity: true,
            learningAnalytics: true,
            personalizedContent: true,
            thirdPartyServices: false,
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPrivacy({
            ...privacy,
            [name]: value,
        });
    };

    const handleToggle = (field) => {
        setPrivacy({
            ...privacy,
            [field]: !privacy[field],
        });
    };

    const handleDataSharingToggle = (field) => {
        setPrivacy({
            ...privacy,
            dataSharing: {
                ...privacy.dataSharing,
                [field]: !privacy.dataSharing[field],
            },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Privacy settings updated:", privacy);
        // Show success message or handle API call
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-md p-6"
        >
            <h2 className="text-xl font-bold mb-6">Privacy Settings</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Profile Visibility</h3>

                    <div>
                        <label
                            htmlFor="profileVisibility"
                            className="block text-sm font-medium mb-1"
                        >
                            Who can see my profile
                        </label>
                        <select
                            id="profileVisibility"
                            name="profileVisibility"
                            value={privacy.profileVisibility}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            <option value="all">Everyone</option>
                            <option value="students">
                                Only Students & Instructors
                            </option>
                            <option value="connections">
                                Only My Connections
                            </option>
                            <option value="none">No One (Private)</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium text-sm">
                                Show Online Status
                            </div>
                            <div className="text-xs text-muted-foreground">
                                Allow others to see when you're active on the
                                platform
                            </div>
                        </div>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={privacy.showOnlineStatus}
                                onChange={() =>
                                    handleToggle("showOnlineStatus")
                                }
                            />
                            <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                            </div>
                        </label>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium text-sm">
                                Show Last Seen
                            </div>
                            <div className="text-xs text-muted-foreground">
                                Allow others to see when you were last active
                            </div>
                        </div>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={privacy.showLastSeen}
                                onChange={() => handleToggle("showLastSeen")}
                            />
                            <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                            </div>
                        </label>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium text-sm">
                                Show Course Progress
                            </div>
                            <div className="text-xs text-muted-foreground">
                                Allow others to see your course completion and
                                achievements
                            </div>
                        </div>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={privacy.showCourseProgress}
                                onChange={() =>
                                    handleToggle("showCourseProgress")
                                }
                            />
                            <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                            </div>
                        </label>
                    </div>

                    <div>
                        <label
                            htmlFor="allowMessaging"
                            className="block text-sm font-medium mb-1"
                        >
                            Who can send me messages
                        </label>
                        <select
                            id="allowMessaging"
                            name="allowMessaging"
                            value={privacy.allowMessaging}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            <option value="all">Everyone</option>
                            <option value="students">
                                Only Students & Instructors
                            </option>
                            <option value="connections">
                                Only My Connections
                            </option>
                            <option value="none">No One</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-medium">
                            Data Sharing & Personalization
                        </h3>
                        <div className="relative group">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 bg-popover text-popover-foreground text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
                                These settings control how your data is used to
                                personalize your experience and improve our
                                services.
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium text-sm">
                                    Course Activity Data
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Share your course progress and activity with
                                    instructors
                                </div>
                            </div>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={privacy.dataSharing.courseActivity}
                                    onChange={() =>
                                        handleDataSharingToggle(
                                            "courseActivity"
                                        )
                                    }
                                />
                                <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                    <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                </div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium text-sm">
                                    Learning Analytics
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Allow us to analyze your learning patterns
                                    to improve our platform
                                </div>
                            </div>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={
                                        privacy.dataSharing.learningAnalytics
                                    }
                                    onChange={() =>
                                        handleDataSharingToggle(
                                            "learningAnalytics"
                                        )
                                    }
                                />
                                <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                    <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                </div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium text-sm">
                                    Personalized Content
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Receive course recommendations based on your
                                    interests
                                </div>
                            </div>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={
                                        privacy.dataSharing.personalizedContent
                                    }
                                    onChange={() =>
                                        handleDataSharingToggle(
                                            "personalizedContent"
                                        )
                                    }
                                />
                                <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                    <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                </div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium text-sm">
                                    Third-Party Services
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Share your data with trusted partners for
                                    enhanced services
                                </div>
                            </div>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={
                                        privacy.dataSharing.thirdPartyServices
                                    }
                                    onChange={() =>
                                        handleDataSharingToggle(
                                            "thirdPartyServices"
                                        )
                                    }
                                />
                                <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                    <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4 border-t">
                    <button
                        type="submit"
                        className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm flex items-center gap-1"
                    >
                        <Save className="h-4 w-4" />
                        <span>Save Privacy Settings</span>
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default StudentSettingPrivacySettings;
