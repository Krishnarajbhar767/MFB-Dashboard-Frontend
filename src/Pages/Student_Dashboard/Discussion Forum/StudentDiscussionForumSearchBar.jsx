import { useState } from "react";
import { Search, X } from "lucide-react";

const StudentDiscussionForumSearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleClear = () => {
        setSearchQuery("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle search submission
        console.log("Searching for:", searchQuery);
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full md:w-64">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 pl-9 pr-8 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Search discussions..."
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

            {searchQuery && (
                <button
                    type="button"
                    onClick={handleClear}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </form>
    );
};

export default StudentDiscussionForumSearchBar;
