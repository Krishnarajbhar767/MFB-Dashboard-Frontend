import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const CourseRequirements = () => {
    const requirements = [
        "Basic understanding of HTML and CSS",
        "A computer with internet access (Windows, Mac, or Linux)",
        "No prior JavaScript knowledge required, but some programming experience is helpful",
        "Text editor (VS Code recommended, but any will work)",
        "Enthusiasm and willingness to practice regularly",
    ];

    const prerequisites = [
        "Familiarity with web browsers and basic internet concepts",
        "Problem-solving mindset",
        "Patience and persistence - learning to code takes time!",
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl shadow-md p-4 sm:p-6 w-full"
        >
            <h2 className="text-xl font-bold mb-3 sm:mb-4">
                Course Requirements
            </h2>

            <div className="space-y-4 sm:space-y-6">
                <div>
                    <h3 className="font-medium text-sm sm:text-base mb-2 sm:mb-3">
                        What you'll need:
                    </h3>
                    <ul className="space-y-2 w-full">
                        {requirements.map((requirement, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-xs sm:text-sm">
                                    {requirement}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-medium text-sm sm:text-base mb-2 sm:mb-3">
                        Prerequisites:
                    </h3>
                    <ul className="space-y-2 w-full">
                        {prerequisites.map((prerequisite, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-xs sm:text-sm">
                                    {prerequisite}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseRequirements;
