import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Admin_Course_Preview_Module_Tab from "./Admin_Course_Preview_Module_Tab";

const Admin_Course_Modules_Preview = React.memo(
    function Admin_Course_Modules_Preview({ course }) {
        const [showLesson, setShowLesson] = useState(false);
        return (
            <div className="">
                {/* Modules Container */}
                <div className=" flex flex-col gap-2 ">
                    {/* Single Module Data */}
                    {course?.modules?.map((module) => (
                        <div className="">
                            <Admin_Course_Preview_Module_Tab
                                module={module}
                                courseId={course._id}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
);

export default Admin_Course_Modules_Preview;
