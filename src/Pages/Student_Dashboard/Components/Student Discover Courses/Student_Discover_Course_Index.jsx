import React from "react";
import { NavLink } from "react-router-dom";
import Student_Discover_Course_Card from "./Student Discover Course Card/Student_Discover_Course_Card";

function Student_Discover_Course_Index() {
    const category = [
        { name: "Web Dev" },
        { name: "Seo" },
        { name: "React" },
        { name: "Digital Marketing" },
        { name: "Personal Branding" },
    ];
    return (
        <div>
            {/* Categorys... Tab Container... */}
            <div className="space-x-2">
                {category?.map((elem, idx) => (
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "bg-lime-600 px-5 py-2 rounded-lg text-white"
                                : "bg-transparent text-gray-500 px-3 py-1"
                        }
                    >
                        {elem.name}
                    </NavLink>
                ))}
            </div>
            {/* Courses Card Container */}
            <div className="my-6  flex flex-wrap ">
                <Student_Discover_Course_Card />
            </div>
        </div>
    );
}

export default Student_Discover_Course_Index;
