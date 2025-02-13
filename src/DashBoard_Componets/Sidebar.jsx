import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCloudUploadOutline } from "react-icons/io5";
import SIdebarListIconAndText from "./SidebarIListIconAndText/SIdebarListIconAndText";

function Sidebar({ sidebarList }) {
    return (
        <div className="w-full  flex flex-col  " id="sideBar">
            {/* Main container for the sidebar list LAptop*/}
            <ul className="w-full  flex flex-col  h-[100%] pb-20  ">
                {/* Loop through the sidebarList to generate list items dynamically */}
                {sidebarList &&
                    sidebarList.map((item, i) => (
                        <SIdebarListIconAndText item={item} />
                    ))}
            </ul>
        </div>
    );
}

export default Sidebar;
