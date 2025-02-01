import React from "react";

function IconBtn({ children, color, handler, textColor }) {
    console.log(color);
    return (
        <div
            style={{
                backgroundColor: color,
                color: textColor ? textColor : "#E0E0E0",
            }}
            className={` h-fit flex gap-1 items-center justify-center text-sm  px-4 py-2 rounded-md ${
                textColor ? `text-[${textColor}]` : "text-gray-100"
            } font-normal capitalize tracking-normal `}
        >
            {children && children}
        </div>
    );
}

export default IconBtn;
