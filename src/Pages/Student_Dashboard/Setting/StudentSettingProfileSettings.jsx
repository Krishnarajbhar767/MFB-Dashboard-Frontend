import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, X, Save } from "lucide-react";

const StudentSettingProfileSettings = () => {
    const [profile, setProfile] = useState({
        firstName: "Alex",
        lastName: "Johnson",
        displayName: "Alex J.",
        bio: "Computer Science student passionate about web development and AI.",
        location: "New York, USA",
        website: "https://alexj.dev",
        github: "alexjohnson",
        twitter: "alexj_dev",
        linkedin: "alex-johnson",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Profile updated:", profile);
        // Show success message or handle API call
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-md p-6"
        >
            <h2 className="text-xl font-bold mb-6">Profile Settings</h2>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <img
                                src="/placeholder.svg?height=120&width=120"
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <button
                                type="button"
                                className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-1.5 shadow-md"
                            >
                                <Camera className="h-4 w-4" />
                            </button>
                        </div>
                        <button
                            type="button"
                            className="text-xs text-muted-foreground hover:text-primary mt-2"
                        >
                            Remove Photo
                        </button>
                    </div>

                    <div className="flex-1 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium mb-1"
                                >
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={profile.firstName}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={profile.lastName}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="displayName"
                                className="block text-sm font-medium mb-1"
                            >
                                Display Name
                            </label>
                            <input
                                id="displayName"
                                name="displayName"
                                type="text"
                                value={profile.displayName}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                                This is how your name will appear to other
                                users.
                            </p>
                        </div>

                        <div>
                            <label
                                htmlFor="bio"
                                className="block text-sm font-medium mb-1"
                            >
                                Bio
                            </label>
                            <textarea
                                id="bio"
                                name="bio"
                                value={profile.bio}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[100px]"
                                placeholder="Tell us a bit about yourself..."
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Location & Contact</h3>

                    <div>
                        <label
                            htmlFor="location"
                            className="block text-sm font-medium mb-1"
                        >
                            Location
                        </label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            value={profile.location}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            placeholder="City, Country"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="website"
                            className="block text-sm font-medium mb-1"
                        >
                            Website
                        </label>
                        <input
                            id="website"
                            name="website"
                            type="url"
                            value={profile.website}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            placeholder="https://example.com"
                        />
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-medium">Social Profiles</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label
                                htmlFor="github"
                                className="block text-sm font-medium mb-1"
                            >
                                GitHub
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                                    github.com/
                                </span>
                                <input
                                    id="github"
                                    name="github"
                                    type="text"
                                    value={profile.github}
                                    onChange={handleChange}
                                    className="flex-1 rounded-r-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="twitter"
                                className="block text-sm font-medium mb-1"
                            >
                                Twitter
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                                    twitter.com/
                                </span>
                                <input
                                    id="twitter"
                                    name="twitter"
                                    type="text"
                                    value={profile.twitter}
                                    onChange={handleChange}
                                    className="flex-1 rounded-r-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="linkedin"
                                className="block text-sm font-medium mb-1"
                            >
                                LinkedIn
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                                    linkedin.com/in/
                                </span>
                                <input
                                    id="linkedin"
                                    name="linkedin"
                                    type="text"
                                    value={profile.linkedin}
                                    onChange={handleChange}
                                    className="flex-1 rounded-r-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-2 mt-6 pt-4 border-t">
                    <button
                        type="button"
                        className="bg-muted hover:bg-muted/80 rounded-lg px-4 py-2 text-sm flex items-center gap-1"
                    >
                        <X className="h-4 w-4" />
                        <span>Cancel</span>
                    </button>

                    <button
                        type="submit"
                        className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm flex items-center gap-1"
                    >
                        <Save className="h-4 w-4" />
                        <span>Save Changes</span>
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default StudentSettingProfileSettings;
