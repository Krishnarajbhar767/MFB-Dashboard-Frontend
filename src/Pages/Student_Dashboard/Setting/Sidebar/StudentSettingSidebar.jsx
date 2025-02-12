import React from "react";

import StudentSettingSidebarIconAndText from "./SideBarIconAndText/StudentSettingSidebarIconAndText";

const StudentSettingSidebar = React.memo(function StudentSettingSidebar({
    selectedSettingTab,
    setSelectedSettingTab,
    tabs,
}) {
    return (
        <div className={`w-full h-full space-y-2 border-r border-gray-300`}>
            {tabs?.map((item, idx) => (
                <div
                    onClick={() => setSelectedSettingTab(item.text)}
                    className={`hover:text-emerald-600 transition-all duration-300  ${
                        selectedSettingTab === item.text
                            ? "text-emerald-600"
                            : "text-gray-800"
                    }`}
                >
                    <StudentSettingSidebarIconAndText
                        Icon={item.Icon}
                        text={item.text}
                    />
                </div>
            ))}
        </div>
    );
});

export default StudentSettingSidebar;
