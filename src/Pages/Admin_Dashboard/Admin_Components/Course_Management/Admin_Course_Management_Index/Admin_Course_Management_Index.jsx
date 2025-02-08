import React from "react";

import IconBtn from "../../../../../Common_Components/IconBtn";
import { FiPlus } from "react-icons/fi";

import { useSelector } from "react-redux";
import { Route, Outlet } from "react-router-dom";
import Course_Management_Index_Tabular_Card from "./Admin_Course_Management_Index_Tabular_Card/Course_Management_Index_Tabular_Card";
import Admin_Course_Managemnet_Add_Quize from "../Admin_Course_Management_Quize/Add_Quize/Admin_Course_Managemnet_Add_Quize";
import Admin_Course_Management_Single_Course from "../My Courses/Admin_Course_Management_Single_Course/Admin_Course_Management_Single_Course";
import Admin_Course_Management_Quize_Dashboard from "../Admin_Course_Management_Quize/Quize Dashboard/Admin_Course_Management_Quize_Dashboard";

function Admin_Course_Management_Index() {
    return (
        <div className=" h-fit overflow-scroll scroller rounded-lg  flex flex-col gap-5 font-semibold w-[100%]  ">
            {/* <Course_Management_Index_Tabular_Card /> */}
            {/* <Admin_Course_Managemnet_Add_Quize /> */}
            {/* <Admin_Course_Management_Single_Course /> */}
            {/* <h1>
                Admin Course Management Main Page... Dashboard For COurse
                Management
            </h1> */}
            <h1>Admin Course Management Main Page..</h1>
            <Outlet />
            {/* Approve or reject new courses submitted by teachers. */}
            {/* <h2>Approve or reject new courses submitted by teachers.</h2> */}

            {/* Monitor the performance and ratings of all courses  */}
            {/* <h2>Monitor the performance and ratings of all courses</h2> */}
        </div>
    );
}

export default Admin_Course_Management_Index;
