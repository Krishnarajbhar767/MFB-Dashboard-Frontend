import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Admin_Course_Preview_Module_Tab from "./Admin_Course_Preview_Module_Tab";

function Admin_Course_Modules_Preview({ courseData }) {
    const [showLesson, setShowLesson] = useState(false);
    return (
        <div className="  ">
            {/* Modules Container */}
            <div className=" flex flex-col gap-2 ">
                {/* Single Module Data */}
                {courseData.courseModules?.map((module) => (
                    <div className="">
                        <Admin_Course_Preview_Module_Tab module={module} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Admin_Course_Modules_Preview;
