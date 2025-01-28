import React from "react";
import HomeCourseCard from "./Home Course Card/HomeCourseCard";

function HomeMostPopularCourses() {
    return (
        <div className="w-full bg-[#F2F2F2]">
            <div className="max-w-7xl mx-auto py-6">
                <div className="flex justify-between items-center  px-32">
                    <h1 className="text-5xl     capitalize  text-[#2F2F68]  leading-tight  font-medium">
                        Most <span className="text-[#FF696B]">Popular</span>{" "}
                        Courses
                    </h1>
                    <button className="bg-mainBgBlue px-4 py-3 text-gray-100  rounded-3xl text-xs font-medium">
                        View All Course
                    </button>
                </div>
                {/* Some Courses Container.... */}
                <div className="mt-6 flex flex-wrap gap-7 items-center justify-center">
                    <HomeCourseCard />
                    <HomeCourseCard />
                    <HomeCourseCard />
                    <HomeCourseCard />
                    <HomeCourseCard />
                    <HomeCourseCard />
                </div>
            </div>
        </div>
    );
}

export default HomeMostPopularCourses;
