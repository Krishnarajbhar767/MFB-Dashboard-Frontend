import React from "react";
import { motion } from "framer-motion";
import { Settings, User, Bell, Lock, Shield, CreditCard } from "lucide-react";
import StudentSettingProfileSettings from "./StudentSettingProfileSettings";
import StudentSettingAccountSettings from "./StudentSettingAccountSettings";
import StudentSettingNotificationSettings from "./StudentSettingNotificationSettings";
import StudentSettingPrivacySettings from "./StudentSettingPrivacySettings";
import StudentSettingSecuritySettings from "./StudentSettingSecuritySettings";
import StudentSettingPaymentSettings from "./StudentSettingPaymentSettings";

const StudentSettingsLayout = () => {
    const [activeTab, setActiveTab] = React.useState("profile");

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <div className="flex items-center gap-2 mb-6">
                <Settings className="h-6 w-6 text-primary" />
                <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                    <div className="bg-card rounded-xl shadow-md p-4">
                        <nav className="space-y-1">
                            <button
                                onClick={() => setActiveTab("profile")}
                                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                                    activeTab === "profile"
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted"
                                }`}
                            >
                                <User className="h-5 w-5" />
                                <span>Profile</span>
                            </button>

                            <button
                                onClick={() => setActiveTab("account")}
                                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                                    activeTab === "account"
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted"
                                }`}
                            >
                                <Settings className="h-5 w-5" />
                                <span>Account</span>
                            </button>

                            <button
                                onClick={() => setActiveTab("notifications")}
                                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                                    activeTab === "notifications"
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted"
                                }`}
                            >
                                <Bell className="h-5 w-5" />
                                <span>Notifications</span>
                            </button>

                            <button
                                onClick={() => setActiveTab("privacy")}
                                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                                    activeTab === "privacy"
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted"
                                }`}
                            >
                                <Lock className="h-5 w-5" />
                                <span>Privacy</span>
                            </button>

                            <button
                                onClick={() => setActiveTab("security")}
                                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                                    activeTab === "security"
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted"
                                }`}
                            >
                                <Shield className="h-5 w-5" />
                                <span>Security</span>
                            </button>

                            <button
                                onClick={() => setActiveTab("payment")}
                                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                                    activeTab === "payment"
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted"
                                }`}
                            >
                                <CreditCard className="h-5 w-5" />
                                <span>Payment</span>
                            </button>
                        </nav>
                    </div>
                </div>

                <div className="md:col-span-3">
                    {activeTab === "profile" && (
                        <StudentSettingProfileSettings />
                    )}
                    {activeTab === "account" && (
                        <StudentSettingAccountSettings />
                    )}
                    {activeTab === "notifications" && (
                        <StudentSettingNotificationSettings />
                    )}
                    {activeTab === "privacy" && (
                        <StudentSettingPrivacySettings />
                    )}
                    {activeTab === "security" && (
                        <StudentSettingSecuritySettings />
                    )}
                    {activeTab === "payment" && (
                        <StudentSettingPaymentSettings />
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default StudentSettingsLayout;
