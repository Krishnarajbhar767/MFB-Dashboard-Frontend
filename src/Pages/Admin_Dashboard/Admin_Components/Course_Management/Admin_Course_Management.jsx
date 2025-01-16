import React from "react";
import Admin_Course_Details from "./Upload_New_Course/Admin_Course_Details";
import Admin_Upload_New_Course from "./Upload_New_Course/Admin_Upload_New_Course";
import IconBtn from "../../../../Common_Components/IconBtn";
import { FiPlus } from "react-icons/fi";
import Admin_Course_Module from "./Upload_New_Course/Admin_Course_Module";
import { useSelector } from "react-redux";

function Admin_Course_Management() {
    return (
        <div className=" h-fit overflow-scroll scroller rounded-lg  flex flex-col gap-5 font-semibold w-[100%] border bg-gray-200">
            {/* <h2>Course_Management</h2> */}
            <Admin_Upload_New_Course />

            {/* Approve or reject new courses submitted by teachers. */}
            {/* <h2>Approve or reject new courses submitted by teachers.</h2> */}

            {/* Monitor the performance and ratings of all courses  */}
            {/* <h2>Monitor the performance and ratings of all courses</h2> */}
        </div>
    );
}

export default Admin_Course_Management;
