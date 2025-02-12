import React from "react";

const StudentSettingSidebarIconAndText = React.memo(
    function StudentSettingSidebarIconAndText({ Icon, text }) {
        console.log("Icon", Icon);
        return (
            <div className="flex items-center gap-4 py-2">
                <span className="text-xl">
                    <Icon />
                </span>
                <span className="font-medium text-sm">{text}</span>
            </div>
        );
    }
);

export default StudentSettingSidebarIconAndText;
