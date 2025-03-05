// import React, { useState } from "react";
// import { IoIosArrowDropdown } from "react-icons/io";
// import Admin_Course_Preview_Module_Tab from "./Admin_Course_Preview_Module_Tab";

// const Admin_Course_Modules_Preview = React.memo(
//     function Admin_Course_Modules_Preview({ course }) {
//         const [showLesson, setShowLesson] = useState(false);
//         return (
//             <div className="">
//                 {/* Modules Container */}
//                 <div className=" flex flex-col gap-2 ">
//                     {/* Single Module Data */}
//                     {course?.modules?.map((module) => (
//                         <div className="">
//                             <Admin_Course_Preview_Module_Tab
//                                 module={module}
//                                 courseId={course._id}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
//     }
// );

// export default Admin_Course_Modules_Preview;

import React from "react";
import Admin_Course_Preview_Module_Tab from "./Admin_Course_Preview_Module_Tab";

/**
 * Admin Course Modules Preview Component
 *
 * Renders a collection of module tabs for a course.
 * This component serves as a container for all modules in the course.
 *
 * @param {Object} props - Component props
 * @param {Object} props.course - The course object containing modules array
 */
const Admin_Course_Modules_Preview = React.memo(
    function Admin_Course_Modules_Preview({ course }) {
        return (
            <div className="space-y-4">
                {/* Render each module as a module tab component */}
                {course?.modules?.map((module, index) => (
                    <Admin_Course_Preview_Module_Tab
                        key={module._id || index}
                        module={module}
                        courseId={course._id}
                        moduleIndex={index + 1}
                    />
                ))}
            </div>
        );
    }
);

export default Admin_Course_Modules_Preview;
