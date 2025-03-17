import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const StudentTestimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    // Mock testimonials data
    const testimonials = [
        {
            id: 1,
            name: "Alex Thompson",
            role: "Frontend Developer",
            company: "TechCorp",
            avatar: "/placeholder.svg?height=80&width=80",
            content:
                "This course transformed my understanding of JavaScript. I went from struggling with basic concepts to confidently building complex applications. The instructor's teaching style made even the most challenging topics accessible.",
        },
        {
            id: 2,
            name: "Sophia Martinez",
            role: "Full Stack Developer",
            company: "InnovateTech",
            avatar: "/placeholder.svg?height=80&width=80",
            content:
                "As someone who was transitioning from another programming language, this course provided the perfect roadmap for mastering JavaScript. The projects were challenging but incredibly rewarding, and I now use the techniques I learned daily in my work.",
        },
        {
            id: 3,
            name: "James Wilson",
            role: "Software Engineer",
            company: "GlobalSoft",
            avatar: "/placeholder.svg?height=80&width=80",
            content:
                "I've taken many programming courses, but this one stands out for its depth and practical approach. The instructor doesn't just teach syntax, but focuses on problem-solving and best practices that are invaluable in real-world development.",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card rounded-xl shadow-md p-4 sm:p-6 w-full"
        >
            <h2 className="text-xl font-bold mb-4 sm:mb-6">
                What Students Are Saying
            </h2>

            <div className="w-full">
                {/* Using display instead of absolute positioning */}
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`transition-opacity duration-500 ${
                            activeTestimonial === index
                                ? "block opacity-100"
                                : "hidden opacity-0"
                        }`}
                    >
                        <div className="flex flex-col items-center text-center px-2 sm:px-4 py-4 sm:py-6">
                            <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-primary/20 mb-3 sm:mb-4 flex-shrink-0" />

                            <p className="text-sm sm:text-lg italic mb-4 sm:mb-6 max-w-full overflow-hidden">
                                "{testimonial.content}"
                            </p>

                            <img
                                src={testimonial.avatar || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mb-2 sm:mb-3 flex-shrink-0"
                            />

                            <div>
                                <h3 className="font-bold text-sm sm:text-base">
                                    {testimonial.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">
                                    {testimonial.role}, {testimonial.company}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="flex justify-center gap-2 mt-2 sm:mt-4">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTestimonial(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                activeTestimonial === index
                                    ? "bg-primary"
                                    : "bg-muted"
                            }`}
                            aria-label={`View testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default StudentTestimonials;
