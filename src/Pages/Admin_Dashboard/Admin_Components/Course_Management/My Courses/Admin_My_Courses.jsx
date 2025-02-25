import React, { useState } from "react";

// import Admin_Course_Management_Course_Card from "./Admin_Course_Management_Course_Card";
import { useDispatch, useSelector } from "react-redux";
import Admin_My_Course_Course_Card from "./Admin_My_Course_Course_Card";

function Admin_My_Courses() {
    const { allCourses } = useSelector((state) => state.allCourses);
    const dispatch = useDispatch();
    const [isDraftSelected, setIsDraftSelected] = useState(false);

    return (
        <div className="p-4">
            <div
                className={`flex gap-2 text-sm leading-none uppercase font-normal tracking-wide text-gray-50 w-full border-b border-gray-950  `}
            >
                <div
                    className={`px-3 py-2   cursor-pointer transition-all duration-300 ${
                        isDraftSelected ? "bg-gray-800" : "bg-yellow-500"
                    }`}
                    onClick={() => {
                        if (isDraftSelected) {
                            setIsDraftSelected(false);
                        }
                    }}
                >
                    <h1>Published </h1>
                </div>
                <div
                    className={`px-3 py-2 bg-gray-800  cursor-pointer ${
                        isDraftSelected ? "bg-yellow-500" : "bg-gray-800"
                    }`}
                    onClick={() => {
                        if (!isDraftSelected) {
                            setIsDraftSelected(true);
                        }
                    }}
                >
                    <h1>Draft</h1>
                </div>
            </div>

            <div className="courses h-full w-full  grid grid-cols-3 gap-3 gap-y-4 py-6 ">
                {/* Single Card */}
                {/* Rendering All The Course Dynamicaly */}
                {allCourses?.length ? (
                    allCourses?.map((course, idx) => {
                        if (isDraftSelected) {
                            if (course?.status === "Draft") {
                                console.log("Draft True");
                                return (
                                    <Admin_My_Course_Course_Card
                                        key={course._id}
                                        course={course}
                                    />
                                );
                            }
                        } else {
                            if (course?.status === "Published") {
                                console.log("Published  True");
                                return (
                                    <Admin_My_Course_Course_Card
                                        key={course._id}
                                        course={course}
                                    />
                                );
                            }
                        }
                    })
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <h1>Opps! Theres No Course Available To Show.</h1>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Admin_My_Courses;
