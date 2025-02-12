import React, { useState } from "react";
import { useEffect } from "react";
import { all_courses } from "../../../../../Sampple_Data/Course_sample_Data";
import { MdAccessTime, MdDeleteForever } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import IconBtn from "../../../../../Common_Components/IconBtn";
import { FiEdit } from "react-icons/fi";
import Admin_Course_Management_Course_Card from "./Admin_Course_Management_Course_Card";
import { useDispatch, useSelector } from "react-redux";
import { setAllCourses } from "../../../../../Redux/Slices/All_Courses";
import { adminCourseManagementApis } from "../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
import { customApiErrorHandler } from "../../../../../Utils/Error/cutomApiErrorHandler";
import toast from "react-hot-toast";
function Admin_My_Courses() {
    const { allCourses } = useSelector((state) => state.allCourses);
    const dispatch = useDispatch();
    const [isDraftSelected, setIsDraftSelected] = useState(false);
    // fetch All Courses From API ---->
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response =
                    await adminCourseManagementApis.getAllCourses();
                console.log("My Courses Course Data", response.data.data);
                dispatch(setAllCourses(response.data?.data));
            } catch (error) {
                const err = customApiErrorHandler(
                    error,
                    "Admin Course Management My Course"
                );
                toast.error(err);
            }
        };
        fetchCourse();
    }, []);

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
                    <h1>Draft </h1>
                </div>
            </div>

            <div className="courses h-fit w-full  flex flex-wrap gap-3 gap-y-4 py-6 ">
                {/* Single Card */}
                {/* Rendering All The Course Dynamicaly */}
                {allCourses?.map((course, idx) => {
                    if (isDraftSelected) {
                        if (course.status === "Draft") {
                            console.log("Draft True");
                            return (
                                <Admin_Course_Management_Course_Card
                                    course={course}
                                    allCourses={allCourses}
                                    setAllCourses={setAllCourses}
                                />
                            );
                        }
                    } else {
                        if (course.status === "Published") {
                            console.log("Published  True");
                            return (
                                <Admin_Course_Management_Course_Card
                                    course={course}
                                    allCourses={allCourses}
                                    setAllCourses={setAllCourses}
                                />
                            );
                        }
                    }
                })}
            </div>
        </div>
    );
}

export default Admin_My_Courses;
