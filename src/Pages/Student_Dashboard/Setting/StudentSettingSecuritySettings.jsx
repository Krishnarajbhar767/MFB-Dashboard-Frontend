import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Shield, AlertTriangle, Check, X } from "lucide-react";

const StudentSettingSecuritySettings = () => {
    const [security, setSecurity] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        twoFactorEnabled: false,
        sessionTimeout: "30",
        activeSessions: [
            {
                id: 1,
                device: "Chrome on Windows",
                location: "New York, USA",
                ip: "192.168.1.1",
                lastActive: "Active now",
                isCurrent: true,
            },
            {
                id: 2,
                device: "Safari on iPhone",
                location: "Boston, USA",
                ip: "192.168.1.2",
                lastActive: "2 hours ago",
                isCurrent: false,
            },
            {
                id: 3,
                device: "Firefox on MacOS",
                location: "Chicago, USA",
                ip: "192.168.1.3",
                lastActive: "Yesterday",
                isCurrent: false,
            },
        ],
    });

    const [passwordStrength, setPasswordStrength] = useState({
        score: 0,
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSecurity({
            ...security,
            [name]: value,
        });

        // Simple password strength check for demo purposes
        if (name === "newPassword") {
            let score = 0;
            let message = "";

            if (value.length > 0) {
                if (value.length >= 8) score += 1;
                if (/[A-Z]/.test(value)) score += 1;
                if (/[0-9]/.test(value)) score += 1;
                if (/[^A-Za-z0-9]/.test(value)) score += 1;

                if (score === 0) message = "Very Weak";
                else if (score === 1) message = "Weak";
                else if (score === 2) message = "Fair";
                else if (score === 3) message = "Good";
                else message = "Strong";
            }

            setPasswordStrength({ score, message });
        }
    };

    const handleToggle = (field) => {
        setSecurity({
            ...security,
            [field]: !security[field],
        });
    };

    const handleEndSession = (id) => {
        setSecurity({
            ...security,
            activeSessions: security.activeSessions.filter(
                (session) => session.id !== id
            ),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Security settings updated:", security);
        // Show success message or handle API call
    };

    const getPasswordStrengthColor = () => {
        const { score } = passwordStrength;
        if (score === 0) return "bg-red-500";
        if (score === 1) return "bg-red-500";
        if (score === 2) return "bg-yellow-500";
        if (score === 3) return "bg-green-500";
        if (score === 4) return "bg-green-500";
        return "bg-muted";
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-md p-6"
        >
            <h2 className="text-xl font-bold mb-6">Security Settings</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Change Password</h3>

                    <div>
                        <label
                            htmlFor="currentPassword"
                            className="block text-sm font-medium mb-1"
                        >
                            Current Password
                        </label>
                        <input
                            id="currentPassword"
                            name="currentPassword"
                            type="password"
                            value={security.currentPassword}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            placeholder="Enter your current password"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="newPassword"
                            className="block text-sm font-medium mb-1"
                        >
                            New Password
                        </label>
                        <input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            value={security.newPassword}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            placeholder="Enter your new password"
                        />

                        {security.newPassword && (
                            <div className="mt-2">
                                <div className="flex items-center justify-between mb-1">
                                    <div className="text-xs">
                                        Password Strength
                                    </div>
                                    <div className="text-xs font-medium">
                                        {passwordStrength.message}
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${getPasswordStrengthColor()}`}
                                        style={{
                                            width: `${
                                                (passwordStrength.score / 4) *
                                                100
                                            }%`,
                                        }}
                                    ></div>
                                </div>
                                <div className="mt-2 text-xs text-muted-foreground">
                                    Password must be at least 8 characters and
                                    include uppercase letters, numbers, and
                                    special characters.
                                </div>
                            </div>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium mb-1"
                        >
                            Confirm New Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={security.confirmPassword}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            placeholder="Confirm your new password"
                        />

                        {security.newPassword && security.confirmPassword && (
                            <div className="mt-1 flex items-center gap-1 text-xs">
                                {security.newPassword ===
                                security.confirmPassword ? (
                                    <>
                                        <Check className="h-3 w-3 text-green-500" />
                                        <span className="text-green-500">
                                            Passwords match
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <X className="h-3 w-3 text-red-500" />
                                        <span className="text-red-500">
                                            Passwords do not match
                                        </span>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                        Two-Factor Authentication
                    </h3>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                                <div className="font-medium text-sm">
                                    Two-Factor Authentication
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    Add an extra layer of security to your
                                    account by requiring a verification code in
                                    addition to your password.
                                </div>
                            </div>
                        </div>

                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={security.twoFactorEnabled}
                                onChange={() =>
                                    handleToggle("twoFactorEnabled")
                                }
                            />
                            <div className="relative w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50">
                                <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                            </div>
                        </label>
                    </div>

                    {security.twoFactorEnabled && (
                        <div className="p-4 border rounded-lg bg-muted/50">
                            <p className="text-sm">
                                Two-factor authentication is enabled. You'll be
                                asked for a verification code when signing in
                                from a new device or browser.
                            </p>
                            <button
                                type="button"
                                className="mt-2 text-sm text-primary hover:underline"
                            >
                                Manage 2FA Settings
                            </button>
                        </div>
                    )}
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Session Management</h3>

                    <div>
                        <label
                            htmlFor="sessionTimeout"
                            className="block text-sm font-medium mb-1"
                        >
                            Session Timeout
                        </label>
                        <select
                            id="sessionTimeout"
                            name="sessionTimeout"
                            value={security.sessionTimeout}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            <option value="15">15 minutes</option>
                            <option value="30">30 minutes</option>
                            <option value="60">1 hour</option>
                            <option value="120">2 hours</option>
                            <option value="240">4 hours</option>
                            <option value="0">Never</option>
                        </select>
                        <p className="text-xs text-muted-foreground mt-1">
                            Automatically log out after a period of inactivity.
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <div className="text-sm font-medium">
                                Active Sessions
                            </div>
                            <button
                                type="button"
                                className="text-xs text-red-500 hover:underline"
                            >
                                End All Other Sessions
                            </button>
                        </div>

                        <div className="border rounded-lg overflow-hidden">
                            {security.activeSessions.map((session) => (
                                <div
                                    key={session.id}
                                    className={`p-3 flex items-center justify-between ${
                                        session.isCurrent ? "bg-primary/5" : ""
                                    } ${
                                        session.id !==
                                        security.activeSessions.length
                                            ? "border-b"
                                            : ""
                                    }`}
                                >
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div className="font-medium text-sm">
                                                {session.device}
                                            </div>
                                            {session.isCurrent && (
                                                <span className="bg-green-100 text-green-600 text-xs rounded-full px-2 py-0.5">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-xs text-muted-foreground mt-1">
                                            {session.location} • {session.ip} •{" "}
                                            {session.lastActive}
                                        </div>
                                    </div>

                                    {!session.isCurrent && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleEndSession(session.id)
                                            }
                                            className="text-xs text-red-500 hover:underline"
                                        >
                                            End Session
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Security Alerts</h3>

                    <div className="flex items-center gap-3 p-4 border rounded-lg bg-yellow-50 border-yellow-200">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        <div>
                            <div className="font-medium text-sm">
                                Receive Security Alerts
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                                We'll notify you about suspicious activity or
                                login attempts from new devices.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4 border-t">
                    <button
                        type="submit"
                        className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm flex items-center gap-1"
                    >
                        <Save className="h-4 w-4" />
                        <span>Save Security Settings</span>
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default StudentSettingSecuritySettings;
