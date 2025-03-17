import React, { useState } from "react";

import SidebarListItem from "./SidebarListItem/SidebarListItem";

const Sidebar = React.memo(function Sidebar({ sidebarList }) {
    return (
        <div className="w-full flex flex-col " id="sideBar">
            {/* Main container for the sidebar list (Laptop) */}
            <ul className="w-full flex flex-col h-[100%] pb-20">
                {/* Loop through the sidebarList to generate list items dynamically */}
                {sidebarList?.map((item, i) => (
                    <SidebarListItem key={item.id || i} item={item} />
                ))}
            </ul>
        </div>
    );
});

export default Sidebar;
