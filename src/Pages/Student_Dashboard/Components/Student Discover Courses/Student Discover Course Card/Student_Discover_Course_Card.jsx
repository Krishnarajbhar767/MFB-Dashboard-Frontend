import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

function Student_Discover_Course_Card({ course }) {
    const renderStars = (stars) => {
        const starElements = [];
        for (let i = 1; i <= 5; i++) {
            if (stars >= i) {
                // Full star for complete values
                starElements.push(
                    <span key={i}>
                        <FaStar />
                    </span>
                );
            } else if (stars > i - 1 && stars < i) {
                // Half star for fractional values
                starElements.push(
                    <span key={i}>
                        <FaRegStarHalfStroke />
                    </span>
                );
            } else {
                // Stop further iteration for empty stars
                break;
            }
        }
        return starElements;
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-3 lg:w-[32.5%]  md:w-[49%] ">
            {/* COurse Image Container.. */}
            <img
                src={course.thumbnail}
                alt="course_card_image"
                className="h-[190px] w-full object-cover rounded-xl"
            />
            {/* Course Title */}
            <div className="flex  justify-between">
                <h1 className="max-w-[60%] my-3 text-[16px] font-semibold text-gray-700">
                    {course.name}
                </h1>
                <div className="my-3 text-[#FFD700] flex items-center text-sm h-fit">
                    <span className="mr-2 text-gray-700 font-semibold leading-none">
                        {course?.stars}{" "}
                    </span>
                    {renderStars(course?.stars || 0)}
                </div>
            </div>
            {/* Aurthor PROFIle ANd Name */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 max-w-[50%]">
                    <img
                        src=""
                        height={30}
                        width={30}
                        className="rounded-full bg-green-500"
                    />

                    {/* author Name */}
                    <h2 className="text-gray-600 text-sm">Media Fleet Blue</h2>
                </div>
                <h3 className="max-w-[50%] text-emerald-700 text-xl font-semibold">
                    $399
                </h3>
            </div>
        </div>
    );
}

export default Student_Discover_Course_Card;
