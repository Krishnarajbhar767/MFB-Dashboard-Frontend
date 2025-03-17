import { motion } from "framer-motion";
import { ArrowLeft, Share2, BookmarkPlus } from "lucide-react";
import CourseMedia from "./CourseMedia";
import CourseOverview from "./CourseOverview";
import InstructorInfo from "./InstructorInfo";
import CurriculumList from "./CurriculumList";
import ReviewsSection from "./ReviewsSection";
import EnrollmentOptions from "./EnrollmentOptions";
import FAQSection from "./FAQSection";
import RelatedCourses from "./RelatedCourses";
import StudentTestimonials from "./StudentTestimonials";
import CourseRequirements from "./CourseRequirements";
import CertificationDetails from "./CertificationDetails";
import CourseDuration from "./CourseDuration";
import LanguageOptions from "./LanguageOptions";
import AccessibilityFeatures from "./AccessibilityFeatures";

const CourseDetails = ({ courseId, onBack }) => {
    // In a real app, you would fetch course data based on courseId
    const courseData = {
        id: courseId || "course-123",
        title: "Advanced JavaScript: From Fundamentals to Mastery",
        subtitle:
            "Master modern JavaScript concepts and build real-world applications",
        rating: 4.8,
        reviewCount: 2456,
        studentCount: 12543,
        lastUpdated: "November 2023",
        price: 89.99,
        discountPrice: 49.99,
        discountEnds: "2 days left at this price!",
        language: "English",
        subtitles: ["Spanish", "French", "German"],
        level: "Intermediate to Advanced",
        duration: {
            hours: 42,
            lectures: 285,
            weeks: 10,
        },
        instructor: {
            name: "Dr. Sarah Johnson",
            title: "Senior JavaScript Developer & Educator",
            bio: "With over 15 years of experience in web development and 10 years teaching programming concepts, Sarah specializes in making complex JavaScript concepts accessible to learners at all levels.",
            courses: 12,
            students: 45000,
            rating: 4.9,
            avatar: "/placeholder.svg?height=200&width=200",
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            md:className="w-full mx-auto md:px-4 py-8"
        >
            {/* Back button and share options */}
            <div className="flex justify-between items-center mb-6">
                <button
                    onClick={onBack}
                    className="flex items-center text-primary hover:underline"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Courses
                </button>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                        <Share2 className="h-4 w-4" />
                        <span className="hidden sm:inline">Share</span>
                    </button>
                </div>
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left column - Course details */}
                <div className="lg:col-span-2 space-y-8">
                    <CourseMedia courseData={courseData} />

                    <CourseOverview courseData={courseData} />
                    <div className="lg:hidden ">
                        <EnrollmentOptions
                            price={courseData.price}
                            discountPrice={courseData.discountPrice}
                            discountEnds={courseData.discountEnds}
                        />
                    </div>
                    <CourseRequirements />

                    <CurriculumList />

                    <InstructorInfo instructor={courseData.instructor} />

                    <StudentTestimonials />

                    <ReviewsSection
                        rating={courseData.rating}
                        reviewCount={courseData.reviewCount}
                    />

                    <FAQSection />
                </div>

                {/* Right column - Enrollment and additional info */}
                <div className="space-y-6">
                    <div className="lg:sticky lg:top-0">
                        <div className="space-y-6">
                            <div className="hidden lg:block ">
                                <EnrollmentOptions
                                    price={courseData.price}
                                    discountPrice={courseData.discountPrice}
                                    discountEnds={courseData.discountEnds}
                                />
                            </div>

                            <CourseDuration duration={courseData.duration} />

                            <CertificationDetails />

                            <LanguageOptions
                                language={courseData.language}
                                subtitles={courseData.subtitles}
                            />

                            <AccessibilityFeatures />
                        </div>
                    </div>
                </div>
            </div>

            {/* Related courses section */}
            <div className="mt-12">
                <RelatedCourses />
            </div>
        </motion.div>
    );
};

export default CourseDetails;
