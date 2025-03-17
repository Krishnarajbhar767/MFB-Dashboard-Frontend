import { useState } from "react";
import { ChevronDown } from "lucide-react";

const StudentCourseFilters = () => {
    const [category, setCategory] = useState("");
    const [level, setLevel] = useState("");

    const handleApplyFilters = () => {
        // Implement filter application logic here
        console.log("Applied filters:", { category, level });
    };

    return (
        <div className="flex items-center gap-2">
            <div className="relative">
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="appearance-none rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring pr-8"
                >
                    <option value="">Category</option>
                    <option value="programming">Programming</option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                    <option value="marketing">Marketing</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>

            <div className="relative">
                <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="appearance-none rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring pr-8"
                >
                    <option value="">Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>

            <button
                onClick={handleApplyFilters}
                className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm"
            >
                Apply Filters
            </button>
        </div>
    );
};

export default StudentCourseFilters;
