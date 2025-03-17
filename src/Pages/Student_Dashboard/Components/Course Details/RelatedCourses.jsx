import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const RelatedCourses = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -280,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 280,
                behavior: "smooth",
            });
        }
    };

    // Mock related courses data
    const relatedCourses = [
        {
            id: 1,
            title: "React.js: From Zero to Hero",
            instructor: "Emma Rodriguez",
            rating: 4.7,
            students: 8432,
            price: 89.99,
            discountPrice: 39.99,
            image: "/placeholder.svg?height=150&width=250&text=React Course",
        },
        {
            id: 2,
            title: "Node.js Complete Guide",
            instructor: "Michael Chen",
            rating: 4.8,
            students: 6218,
            price: 94.99,
            discountPrice: 44.99,
            image: "/placeholder.svg?height=150&width=250&text=Node.js Course",
        },
        {
            id: 3,
            title: "Full Stack JavaScript Development",
            instructor: "David Kim",
            rating: 4.9,
            students: 12543,
            price: 129.99,
            discountPrice: 59.99,
            image: "/placeholder.svg?height=150&width=250&text=Full Stack Course",
        },
        {
            id: 4,
            title: "TypeScript Masterclass",
            instructor: "Sarah Johnson",
            rating: 4.8,
            students: 5432,
            price: 79.99,
            discountPrice: 34.99,
            image: "/placeholder.svg?height=150&width=250&text=TypeScript Course",
        },
        {
            id: 5,
            title: "Modern Web Development",
            instructor: "James Wilson",
            rating: 4.6,
            students: 7865,
            price: 99.99,
            discountPrice: 49.99,
            image: "/placeholder.svg?height=150&width=250&text=Web Dev Course",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-card rounded-xl shadow-md p-4 sm:p-6 w-full"
        >
            <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold">
                    Students Also Bought
                </h2>

                <div className="flex items-center gap-2">
                    <button
                        onClick={scrollLeft}
                        className="p-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="p-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide w-full"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {relatedCourses.map((course) => (
                    <div
                        key={course.id}
                        className="flex-shrink-0 w-[220px] sm:w-[260px] rounded-lg border overflow-hidden hover:shadow-md transition-shadow"
                    >
                        <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            className="w-full h-28 sm:h-36 object-cover"
                        />

                        <div className="p-3 sm:p-4">
                            <h3 className="font-medium text-xs sm:text-sm line-clamp-2 h-8 sm:h-10 mb-1">
                                {course.title}
                            </h3>
                            <p className="text-xs text-muted-foreground mb-1 truncate">
                                {course.instructor}
                            </p>

                            <div className="flex items-center gap-1 mb-2">
                                <span className="text-xs sm:text-sm font-medium">
                                    {course.rating}
                                </span>
                                <div className="flex">
                                    {Array(5)
                                        .fill(0)
                                        .map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-3 w-3 ${
                                                    i <
                                                    Math.floor(course.rating)
                                                        ? "text-yellow-500 fill-current"
                                                        : "text-muted"
                                                }`}
                                            />
                                        ))}
                                </div>
                                <span className="text-xs text-muted-foreground">
                                    ({course.students.toLocaleString()})
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-xs sm:text-sm font-bold">
                                    ${course.discountPrice}
                                </span>
                                <span className="text-xs text-muted-foreground line-through">
                                    ${course.price}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default RelatedCourses;
