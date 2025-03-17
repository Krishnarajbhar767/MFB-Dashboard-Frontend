import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const LanguageOptions = ({ language, subtitles }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-lg border p-3 sm:p-4 w-full"
        >
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <h3 className="font-medium text-sm sm:text-base">
                    Language Options
                </h3>
            </div>

            <ul className="space-y-2 sm:space-y-3 w-full">
                <li className="flex items-center justify-between text-xs sm:text-sm w-full">
                    <span className="text-muted-foreground">
                        Course Language
                    </span>
                    <span className="font-medium">{language}</span>
                </li>

                <li className="flex items-center justify-between text-xs sm:text-sm w-full">
                    <span className="text-muted-foreground">Subtitles</span>
                    <span className="font-medium">{subtitles.join(", ")}</span>
                </li>
            </ul>

            <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t">
                <button className="text-primary hover:underline text-[10px] sm:text-xs">
                    Request additional language
                </button>
            </div>
        </motion.div>
    );
};

export default LanguageOptions;
