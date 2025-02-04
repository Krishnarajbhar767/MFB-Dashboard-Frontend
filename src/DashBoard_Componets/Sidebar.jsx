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
                        //         <li
                        //             className="flex flex-col
                        //               rounded-lg
                        //             "
                        //             key={i}
                        //         >
                        //             {/* Main item in the sidebar */}
                        //             <div
                        //                 onClick={() => setOpenDropMenu(!openDropMenu)} // Toggle dropdown menu state on click
                        //                 className="h-fit  flex flex-row gap-2 items-center

                        //  text-gray-700 font-normal  cursor-pointer hover:text-blue-500 transition-all duration-75 "
                        //             >
                        //                 {/* Link to the route specified in the item */}
                        //                 <NavLink
                        //                     to={item.route}
                        //                     className="w-full   h-full flex items-center gap-2 px-2 py-1 justify-between "
                        //                 >
                        //                     {/* Icon of the item */}
                        //                     <div className="flex items-center gap-2">
                        //                         <div className="rounded-full w-fit h-fit p-2">
                        //                             <span className="text-[19px] hover:font-semibold">
                        //                                 {item.icon}
                        //                             </span>
                        //                         </div>
                        //                         {/* Label for the item */}
                        //                         <span className="text-[0.8rem] font-normal tracking-wider hidden lg:block hover:font-semibold">
                        //                             {item.lable}
                        //                         </span>
                        //                     </div>
                        //                     {item?.children && (
                        //                         <span className="text-3xl font-thin">
                        //                             <RiArrowDropDownLine />
                        //                         </span>
                        //                     )}
                        //                 </NavLink>
                        //             </div>

                        //             {/* Dropdown menu for child items */}
                        //             {openDropMenu &&
                        //                 item?.children &&
                        //                 item?.children?.map(
                        //                     (childrenItem, childIndex) => (
                        //                         <NavLink
                        //                             //
                        //                             to={childrenItem.path}
                        //                             key={childIndex}
                        //                             className="w-[100%] bg-gray-50  pl-9  border-gray-400 items-start px-2 py-2 flex  flex-col hover:bg-gray-400 hover:text-gray-50 h-fit cursor-pointer transition-all duration-500 "
                        //                         >
                        //                             {/* Link to the route of the child item */}
                        //                             <div className={"flex gap-2 px-2 "}>
                        //                                 <span className="text-[20px] font-extrabold">
                        //                                     {childrenItem.icon}
                        //                                 </span>

                        //                                 {/* Label for the child item */}
                        //                                 <span className="text-[0.8rem] uppercase font-normal">
                        //                                     {childrenItem.lable}
                        //                                 </span>
                        //                             </div>
                        //                         </NavLink>
                        //                     )
                        //                 )}
                        //         </li>
                        <SIdebarListIconAndText item={item} />
                    ))}
            </ul>
        </div>
    );
}

export default Sidebar;
