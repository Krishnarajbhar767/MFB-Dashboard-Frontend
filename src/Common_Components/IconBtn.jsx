import React from "react";

function IconBtn({ children, color, handler }) {
    console.log(color);
    return (
        <div
            style={{ backgroundColor: color }}
            className={` h-fit flex gap-3 items-center justify-center text-sm px-4 py-2 rounded-md text-gray-50 font-normal capitalize tracking-wide `}
        >
            {children && children}
        </div>
    );
}

export default IconBtn;
