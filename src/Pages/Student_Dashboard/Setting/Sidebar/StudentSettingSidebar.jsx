import React from "react";

import StudentSettingSidebarIconAndText from "./SideBarIconAndText/StudentSettingSidebarIconAndText";

const StudentSettingSidebar = React.memo(function StudentSettingSidebar({
    selectedSettingTab,
    setSelectedSettingTab,
    tabs,
}) {
    return (
        <div
            className={` h-full  md:border-r  flex md:flex-col gap-4 md:gap-0 items-center md:items-start lg:flex-col flex-nowrap overflow-x-scroll md:overflow-hidden p-3 md:p-0 `}
        >
            {tabs?.map((item, idx) => (
                <div
                    className={`hover:text-emerald-600  h-fit  text-nowrap  transition-all w-fit  duration-300  ${
                        selectedSettingTab === item.text
                            ? "text-emerald-600"
                            : "text-gray-800"
                    }`}
                    onClick={() => setSelectedSettingTab(item.text)}
                >
                    <StudentSettingSidebarIconAndText
                        Icon={item.Icon}
                        text={item.text}
                        selectedSettingTab={selectedSettingTab}
                    />
                </div>
            ))}
        </div>
    );
});

export default StudentSettingSidebar;
