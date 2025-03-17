import { Clock, UsersRound, Star } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
function StudentMyCoursesRecommendedCourseCard() {
    const data = new Array(5).fill(0);
    return (
        <div className=" space-y-4">
            {data.map((course) => (
                <Card course={course} />
            ))}
        </div>
    );
}

export default StudentMyCoursesRecommendedCourseCard;

function Card({ course }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="h-52 border  rounded-md shadow-md flex items-center py-4 px-2"
        >
            {/* Image Course Card */}
            <div className="h-full lg:w-[500px]  px-2 ">
                <img
                    src="https://picsum.photos/200"
                    alt="Author Name"
                    className="w-full h-full rounded-md object-cover"
                />
            </div>
            {/* Course Content */}
            <div className=" px-4  h-full">
                {/* Course Title */}
                <h1 className="text-primary font-semibold text-lg">
                    Advanced UI/ Ux Master Classs
                </h1>
                {/* TIme Enrolled Student  */}
                <div className="flex items-center gap-8 text-foreground font-medium text-sm">
                    {/* TIMe Rating */}
                    <div className="flex gap-1 items-center">
                        <Clock size={18} />
                        <span>4 Hours</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <UsersRound size={18} />
                        <span>4765 enrolled</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Star size={18} className="text-[#FFD700]" />
                        <span>{`(4.5)`}</span>
                    </div>
                </div>

                <h2 className="text-sm font-medium lowercase text-foreground/95 my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur voluptatibus, veniam esse nesciunt hic optio dolores
                    minus cumque omnis eveniet.
                </h2>

                {/* Course Price Add TO Cart But Now Button */}
                <div className="flex items-center justify-between mt-3">
                    <div className=" flex items-center gap-2 ">
                        {/* Author Image */}
                        <img
                            src="https://picsum.photos/200"
                            alt="course author image"
                            className="h-11 w-11 rounded-full border shadow-sm"
                        />
                        <div className="font-medium text-foreground/90 text-sm">
                            <h3>Author Name</h3>
                            <h3>UI/UX Designer</h3>
                        </div>
                    </div>
                    <h5 className="text-2xl font-medium text-foreground/90">
                        $99
                    </h5>

                    {/* <Button></Button> */}
                    <div className="flex w-1/2 gap-4 flex-row-reverse">
                        <button className=" text-nowrap border bg-primary px-4 py-2 rounded-md text-primary-foreground font-normal">
                            Buy now
                        </button>

                        <button className=" text-nowrap border border-gray-300 bg-muted-foreground/5 px-4 py-2 rounded-md text-foreground/90 font-normal ">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
