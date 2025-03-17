import { motion } from "framer-motion";
import {
    Accessibility,
    CaptionsIcon as ClosedCaptions,
    Volume2,
} from "lucide-react";

const AccessibilityFeatures = () => {
    const features = [
        {
            icon: <ClosedCaptions className="h-3 w-3 sm:h-4 sm:w-4" />,
            label: "Closed captions",
        },
        {
            icon: <Volume2 className="h-3 w-3 sm:h-4 sm:w-4" />,
            label: "Audio descriptions",
        },
        {
            icon: <Accessibility className="h-3 w-3 sm:h-4 sm:w-4" />,
            label: "Screen reader compatible",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card rounded-lg border p-3 sm:p-4 w-full"
        >
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Accessibility className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <h3 className="font-medium text-sm sm:text-base">
                    Accessibility Features
                </h3>
            </div>

            <ul className="space-y-2 w-full">
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-2 text-xs sm:text-sm"
                    >
                        <span className="text-primary flex-shrink-0">
                            {feature.icon}
                        </span>
                        <span>{feature.label}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t">
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                    This course is designed to be accessible to all learners.
                </p>
            </div>
        </motion.div>
    );
};

export default AccessibilityFeatures;
