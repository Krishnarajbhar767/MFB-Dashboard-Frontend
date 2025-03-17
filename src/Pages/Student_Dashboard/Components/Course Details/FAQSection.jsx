import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);

    const toggleFaq = (id) => {
        setExpandedFaq(expandedFaq === id ? null : id);
    };

    const faqs = [
        {
            id: 1,
            question:
                "Do I need prior JavaScript knowledge to take this course?",
            answer: "While some basic programming knowledge is helpful, this course is designed to accommodate beginners. We start with the fundamentals and gradually progress to more advanced topics. If you're completely new to programming, you might find the pace challenging at first, but the course includes plenty of exercises and examples to help you build a solid foundation.",
        },
        {
            id: 2,
            question: "How long do I have access to the course materials?",
            answer: "You'll have lifetime access to all course materials, including any future updates. Once you enroll, you can revisit the lectures, exercises, and resources whenever you need to refresh your knowledge or learn new concepts as they're added.",
        },
        {
            id: 3,
            question: "Is there a certificate upon completion?",
            answer: "Yes, you'll receive a certificate of completion once you finish all the required lectures and assignments. This certificate can be added to your resume or LinkedIn profile to showcase your JavaScript skills to potential employers.",
        },
        {
            id: 4,
            question:
                "Can I get a refund if I'm not satisfied with the course?",
            answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the course within the first 30 days, you can request a full refund, no questions asked.",
        },
        {
            id: 5,
            question:
                "How much time should I dedicate to the course each week?",
            answer: "For optimal learning, we recommend dedicating 5-10 hours per week to watching lectures, completing exercises, and working on projects. The course is self-paced, so you can adjust your schedule based on your availability, but consistent practice is key to mastering JavaScript.",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-card rounded-xl shadow-md p-4 sm:p-6 w-full"
        >
            <h2 className="text-xl font-bold mb-4 sm:mb-6">
                Frequently Asked Questions
            </h2>

            <div className="space-y-3 sm:space-y-4 w-full">
                {faqs.map((faq) => (
                    <div
                        key={faq.id}
                        className="border rounded-lg overflow-hidden w-full"
                    >
                        <button
                            onClick={() => toggleFaq(faq.id)}
                            className="flex justify-between items-center w-full p-3 sm:p-4 text-left hover:bg-muted/50 transition-colors"
                        >
                            <span className="font-medium text-sm sm:text-base pr-2">
                                {faq.question}
                            </span>
                            <ChevronDown
                                className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform flex-shrink-0 ${
                                    expandedFaq === faq.id ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        {expandedFaq === faq.id && (
                            <div className="p-3 sm:p-4 pt-0 sm:pt-0 border-t">
                                <p className="text-xs sm:text-sm text-muted-foreground">
                                    {faq.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-4 sm:mt-6 text-center">
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                    Still have questions?
                </p>
                <button className="text-primary hover:underline text-xs sm:text-sm font-medium">
                    Contact the instructor
                </button>
            </div>
        </motion.div>
    );
};

export default FAQSection;
