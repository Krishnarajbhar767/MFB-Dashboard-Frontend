import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Search, ThumbsUp, ThumbsDown, Filter } from "lucide-react";

const ReviewsSection = ({ rating, reviewCount }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterRating, setFilterRating] = useState(0);

    // Mock reviews data
    const reviews = [
        {
            id: 1,
            user: "Michael Chen",
            avatar: "/placeholder.svg?height=50&width=50",
            rating: 5,
            date: "October 15, 2023",
            content:
                "This course exceeded my expectations. The instructor explains complex concepts in a way that's easy to understand, and the projects are practical and relevant to real-world scenarios. I've already applied what I've learned to my work projects.",
            helpful: 42,
            unhelpful: 3,
        },
        {
            id: 2,
            user: "Emma Rodriguez",
            avatar: "/placeholder.svg?height=50&width=50",
            rating: 4,
            date: "September 28, 2023",
            content:
                "Great course overall. The content is comprehensive and well-structured. My only criticism is that some of the later sections feel a bit rushed compared to the earlier ones. Still, I learned a lot and would recommend it.",
            helpful: 28,
            unhelpful: 5,
        },
        {
            id: 3,
            user: "David Kim",
            avatar: "/placeholder.svg?height=50&width=50",
            rating: 5,
            date: "November 2, 2023",
            content:
                "As someone who had only basic JavaScript knowledge, this course was perfect for taking my skills to the next level. The instructor is engaging and the exercises help reinforce the concepts. The section on asynchronous JavaScript was particularly helpful.",
            helpful: 35,
            unhelpful: 2,
        },
    ];

    const filteredReviews = reviews.filter(
        (review) =>
            (filterRating === 0 || review.rating === filterRating) &&
            (searchQuery === "" ||
                review.content
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()))
    );

    const renderStars = (rating) => {
        return Array(5)
            .fill(0)
            .map((_, i) => (
                <Star
                    key={i}
                    className={`h-3 w-3 sm:h-4 sm:w-4 ${
                        i < rating
                            ? "text-yellow-500 fill-current"
                            : "text-muted"
                    }`}
                />
            ));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card rounded-xl shadow-md p-4 sm:p-6 w-full"
        >
            <h2 className="text-xl font-bold mb-4 sm:mb-6">Student Reviews</h2>

            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Rating summary */}
                <div className="md:w-1/3 flex flex-col items-center justify-center p-3 sm:p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl sm:text-5xl font-bold text-primary mb-1 sm:mb-2">
                        {rating}
                    </div>
                    <div className="flex mb-1 sm:mb-2">
                        {renderStars(Math.round(rating))}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground text-center">
                        Course Rating • {reviewCount.toLocaleString()} Reviews
                    </div>
                </div>

                {/* Rating distribution */}
                <div className="md:w-2/3">
                    <h3 className="text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                        Rating Distribution
                    </h3>
                    {[5, 4, 3, 2, 1].map((star) => (
                        <div
                            key={star}
                            className="flex items-center gap-2 mb-2"
                        >
                            <button
                                onClick={() =>
                                    setFilterRating(
                                        filterRating === star ? 0 : star
                                    )
                                }
                                className={`text-xs sm:text-sm hover:underline ${
                                    filterRating === star
                                        ? "font-medium text-primary"
                                        : ""
                                }`}
                            >
                                {star} stars
                            </button>
                            <div className="flex-1 h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-yellow-500"
                                    style={{
                                        width: `${
                                            star === 5
                                                ? 75
                                                : star === 4
                                                ? 18
                                                : star === 3
                                                ? 5
                                                : star === 2
                                                ? 1.5
                                                : 0.5
                                        }%`,
                                    }}
                                ></div>
                            </div>
                            <span className="text-xs text-muted-foreground w-8 text-right">
                                {star === 5
                                    ? "75%"
                                    : star === 4
                                    ? "18%"
                                    : star === 3
                                    ? "5%"
                                    : star === 2
                                    ? "1.5%"
                                    : "0.5%"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Search and filters */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="relative flex-1">
                    <div className="flex items-center border border-input rounded-lg bg-background overflow-hidden w-full">
                        <div className="pl-3">
                            <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search reviews..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-2 py-2 border-0 bg-transparent text-xs sm:text-sm focus-visible:outline-none"
                        />
                    </div>
                </div>

                <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-input bg-background text-xs sm:text-sm hover:bg-muted/50 whitespace-nowrap">
                    <Filter className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>Filter Reviews</span>
                </button>
            </div>

            {/* Reviews list */}
            <div className="space-y-4 sm:space-y-6">
                {filteredReviews.length > 0 ? (
                    filteredReviews.map((review) => (
                        <div
                            key={review.id}
                            className="border-b pb-4 sm:pb-6 last:border-b-0 last:pb-0"
                        >
                            <div className="flex items-start gap-3 sm:gap-4">
                                <img
                                    src={review.avatar || "/placeholder.svg"}
                                    alt={review.user}
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                                />

                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1">
                                        <span className="font-medium text-sm">
                                            {review.user}
                                        </span>
                                        <div className="flex">
                                            {renderStars(review.rating)}
                                        </div>
                                        <span className="text-xs text-muted-foreground">
                                            {review.date}
                                        </span>
                                    </div>

                                    <p className="text-xs sm:text-sm mb-2 sm:mb-3">
                                        {review.content}
                                    </p>

                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                                            <ThumbsUp className="h-3 w-3 flex-shrink-0" />
                                            <span>
                                                Helpful ({review.helpful})
                                            </span>
                                        </button>

                                        <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                                            <ThumbsDown className="h-3 w-3 flex-shrink-0" />
                                            <span>
                                                Not Helpful ({review.unhelpful})
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-6 sm:py-8">
                        <p className="text-muted-foreground text-sm">
                            No reviews match your search criteria.
                        </p>
                    </div>
                )}
            </div>

            <div className="mt-4 sm:mt-6 text-center">
                <button className="text-primary hover:underline text-xs sm:text-sm font-medium">
                    Load More Reviews
                </button>
            </div>
        </motion.div>
    );
};

export default ReviewsSection;
