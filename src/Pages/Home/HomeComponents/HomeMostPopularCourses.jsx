import React from "react";
import HomeCourseCard from "./Home Course Card/HomeCourseCard";
import ShiningButton from "../../../Common_Components/modal/ShiningButton";
import { Divider } from "@mui/material";

function HomeMostPopularCourses() {
    return (
        <div className="w-full bg-[#F2F2F2]">
            <div className="max-w-7xl mx-auto py-6 px-3 md:px-0 lg:px-0">
                <div className="flex justify-between items-center  px-0 lg:px-32 md:px-7">
                    <h1 className="text-4xl lg:text-5xl  md:text-4xl   capitalize  text-[#2F2F68]  md:leading-tight lg:leading-tight  font-medium md:text-left lg:text-left text-center">
                        Most <span className="text-[#FF696B]">Popular</span>{" "}
                        Courses
                    </h1>
                    <div className=" hidden md:block lg:block ">
                        <ShiningButton text={"View all courses"} />
                    </div>
                </div>
                {/* Some Courses Container.... */}
                <div className="mt-6 flex flex-wrap gap-3 md:gap-4 lg:gap-7 items-center justify-center">
                    <HomeCourseCard />
                    <HomeCourseCard />
                    <HomeCourseCard />
                    <HomeCourseCard />
                    <HomeCourseCard />
                    <HomeCourseCard />
                </div>
                <div className="mt-6 mx-auto block md:hidden lg:hidden ">
                    <ShiningButton text={"View all courses"} />
                </div>
            </div>
        </div>
    );
}

export default HomeMostPopularCourses;
