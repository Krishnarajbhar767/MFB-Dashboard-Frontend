import React from "react";
import CourseDetails from "./CourseDetails";

function StudentCourseDetailsLayout() {
    return (
        <div className="lg:mx-auto  md:max-w-[650px]  lg:max-w-3xl xl:max-w-[1090px]">
            <CourseDetails />
        </div>
    );
}

export default StudentCourseDetailsLayout;
