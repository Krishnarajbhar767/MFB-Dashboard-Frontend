import React from "react";

const StudentSettingSidebarIconAndText = React.memo(
    function StudentSettingSidebarIconAndText({
        Icon,
        text,
        selectedSettingTab,
    }) {
        console.log("Icon", Icon);
        return (
            <div className="flex items-center gap-4 py-2 w-fit relative">
                {/* Selected Tab Border Line */}
                {selectedSettingTab === text && (
                    <div className="w-[105%] bg-violet-700 h-[2px] absolute -bottom-3 md:hidden"></div>
                )}
                <span className="text-xl">
                    <Icon />
                </span>
                <span className="font-medium text-sm ">{text}</span>
            </div>
        );
    }
);

export default StudentSettingSidebarIconAndText;
