import { motion } from "framer-motion";
import { Clock, Shield, Award, Gift } from "lucide-react";
import React from "react";

const EnrollmentOptions = ({ price, discountPrice, discountEnds }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-md p-4 sm:p-6 w-full"
        >
            <div className="mb-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl font-bold">
                        ${discountPrice}
                    </span>
                    <span className="text-lg sm:text-xl text-muted-foreground line-through">
                        ${price}
                    </span>
                    <span className="text-xs sm:text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {Math.round((1 - discountPrice / price) * 100)}% off
                    </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {discountEnds}
                </p>
            </div>

            <div className="space-y-3 mb-6">
                <button className="w-full bg-primary text-primary-foreground rounded-lg py-2 sm:py-3 text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors">
                    Enroll Now
                </button>

                <button className="w-full border border-input bg-background rounded-lg py-2 sm:py-3 text-sm sm:text-base font-medium hover:bg-muted/50 transition-colors">
                    Add To Cart
                </button>
            </div>

            <div className="text-xs sm:text-sm text-center mb-6">
                <span className="font-medium">Full Lifetime Access</span>
                <div className="flex items-center justify-center gap-1 text-muted-foreground mt-1">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>30-Day Money-Back Guarantee</span>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="font-medium text-xs sm:text-sm">
                    This course includes:
                </h3>

                <ul className="space-y-3">
                    {[
                        { icon: <Clock />, text: "42 hours on-demand video" },
                        { icon: <Award />, text: "Certificate of completion" },
                        { icon: <Shield />, text: "Lifetime access" },
                        { icon: <Gift />, text: "Downloadable resources" },
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm"
                        >
                            <span className="text-primary flex-shrink-0">
                                {React.cloneElement(item.icon, { size: 16 })}
                            </span>
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between text-xs sm:text-sm">
                    <button className="hover:text-primary">Share</button>
                    <button className="hover:text-primary">
                        Gift this course
                    </button>
                    <button className="hover:text-primary">Apply Coupon</button>
                </div>
            </div>
        </motion.div>
    );
};

export default EnrollmentOptions;
