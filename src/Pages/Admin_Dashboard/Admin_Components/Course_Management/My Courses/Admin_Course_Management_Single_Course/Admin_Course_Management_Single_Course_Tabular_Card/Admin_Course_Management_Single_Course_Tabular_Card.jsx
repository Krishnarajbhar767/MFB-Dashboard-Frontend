import React from "react";
import { FaBookReader, FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

function Admin_Course_Management_Single_Course_Tabular_Card() {
    return (
        <div className="h-fit flex w-full p-2 justify-between gap-4">
            <div className=" h-20 w-1/4  rounded-md flex items-center gap-4 px-4 capitalize bg-white shadow-sm">
                <span className="text-3xl text-yellow-500 bg-yellow-100 p-2 rounded-full">
                    <PiStudentFill />
                </span>
                <div>
                    <p className=" text-gray-600 tracking-tight text-sm font-normal">
                        Total Student
                    </p>
                    <p className=" text-base font-semibold text-gray-800">
                        9273
                    </p>
                </div>
            </div>
            <div className=" h-20 w-1/4  rounded-md flex items-center gap-4 px-4 capitalize bg-white shadow-sm">
                <span className="text-3xl text-yellow-500 bg-yellow-100 p-2 rounded-full">
                    <FaBookReader />
                </span>
                <div>
                    <p className=" text-gray-600 tracking-tight text-sm font-normal">
                        Total Course
                    </p>
                    <p className=" text-base font-semibold text-gray-800">
                        369
                    </p>
                </div>
            </div>
            <div className=" h-20 w-1/4  rounded-md flex items-center gap-4 px-4 capitalize bg-white shadow-sm">
                <span className="text-3xl text-blue-500 bg-blue-100 p-2 rounded-full">
                    <FaChalkboardTeacher />
                </span>
                <div>
                    <p className=" text-gray-600 tracking-tight text-sm font-normal">
                        Total Training
                    </p>
                    <p className=" text-base font-semibold text-gray-800">33</p>
                </div>
            </div>
            <div className=" h-20 w-1/4  rounded-md flex items-center gap-4 px-4 capitalize bg-white shadow-sm">
                <span className="text-3xl text-blue-500 bg-blue-100 p-2 rounded-full">
                    <PiStudentFill />
                </span>
                <div>
                    <p className=" text-gray-600 tracking-tight text-sm font-normal">
                        Total Student
                    </p>
                    <p className=" text-base font-semibold text-gray-800">
                        9273
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Admin_Course_Management_Single_Course_Tabular_Card;
