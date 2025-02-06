import React, { memo } from "react";
import { FaRegEye, FaTimesCircle } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { MdDeleteForever, MdPeople } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";
import IconBtn from "../../../../../../../Common_Components/IconBtn";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const Admin_Course_Management_Quize_Card = memo(
    function Admin_Course_Management_Quize_Card({ quize }) {
        return (
            <div className="border bg-white shadow-sm rounded-md  w-full p-4 text-sm font-normal text-gray-800">
                {/* Course TItle And Catgory container */}
                <div className="flex items-center justify-between">
                    {/* COurse Title */}
                    <h1 className="text-base font-medium">{quize?.title}</h1>
                    {/* COurse Category */}
                    {/* <h2 className="bg-gray-200 px-6 py-1 rounded-2xl text-gray-700 capitalize">
                    Course Cat
                </h2> */}
                </div>
                {/* Created At Participaint AVG. Score Container */}
                <div className="space-y-1 text-xs mt-2">
                    <span className="flex items-center gap-2">
                        <IoTimeOutline />{" "}
                        {quize?.createdAt ? quize?.createdAt : "None"}
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
                <div className="flex items-center justify-around gap-2 mt-4 ">
                    {/* <button className="px-6 py-1 bg-transparent border border-gray-300 rounded-md mt-4 w-1/2">
                    Edit
                </button> */}
                    <button>
                        <IconBtn textColor={"#000f"}>
                            View <FaRegEye />{" "}
                        </IconBtn>
                    </button>
                    <Link
                        to={"/admin/course_management/add_new_quize_questions/"}
                    >
                        <IconBtn textColor={"#fff"} color={"#1f2937"}>
                            Add <FiEdit />
                        </IconBtn>
                    </Link>
                    <button>
                        <IconBtn color={"#dc2626"}>
                            Delete <MdDeleteForever />
                        </IconBtn>
                    </button>
                    {/* <button className="px-6 py-1 bg-gray-800 border border-gray-300 rounded-md mt-4 w-1/2 text-gray-200">
                    View Stats
                </button> */}
                </div>
            </div>
        );
    }
);

export default Admin_Course_Management_Quize_Card;
