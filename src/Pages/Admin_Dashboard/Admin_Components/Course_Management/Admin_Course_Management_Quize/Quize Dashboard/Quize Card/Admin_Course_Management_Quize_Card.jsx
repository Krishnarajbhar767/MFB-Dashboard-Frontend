import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { MdPeople } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";

function Admin_Course_Management_Quize_Card() {
    return (
        <div className="border bg-white shadow-sm rounded-md  w-full p-4 text-sm font-normal text-gray-800">
            {/* Course TItle And Catgory container */}
            <div className="flex items-center justify-between">
                {/* COurse Title */}
                <h1 className="text-base font-medium">Course Title</h1>
                {/* COurse Category */}
                <h2 className="bg-gray-200 px-6 py-1 rounded-2xl text-gray-700 capitalize">
                    Course Cat
                </h2>
            </div>
            {/* Created At Participaint AVG. Score Container */}
            <div className="space-y-1 text-xs mt-2">
                <span className="flex items-center gap-2">
                    <IoTimeOutline /> Created AT : Jan 25, 2025
                </span>
                <span className="flex items-center gap-2">
                    <MdPeople /> 256 Participiants
                </span>
                <span className="flex items-center gap-2">
                    <RiBarChartFill />
                    AVG. Score: 75%
                </span>
            </div>
            {/* Button Container */}
            <div className="flex items-center gap-2">
                <button className="px-6 py-1 bg-transparent border border-gray-300 rounded-md mt-4 w-1/2">
                    Edit
                </button>
                <button className="px-6 py-1 bg-gray-800 border border-gray-300 rounded-md mt-4 w-1/2 text-gray-200">
                    View Stats
                </button>
            </div>
        </div>
    );
}

export default Admin_Course_Management_Quize_Card;
