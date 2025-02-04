import React from "react";

function IconBtn({ children, color, handler, textColor }) {
    console.log(color);
    return (
        <div
            style={{
                backgroundColor: color,
                color: textColor ? textColor : "#fff",
            }}
            className={`
        group
          relative overflow-hidden flex gap-1 items-center justify-center 
          text-sm px-4 py-2 rounded-md transition-all shadow-2xl
          before:content-[''] before:absolute before:h-0 before:w-0 before:rounded-full 
          before:bg-orange-600 before:duration-500 before:ease-out
          hover:shadow-orange-600 hover:before:h-56 hover:before:w-full
      
          hover:text-white
          border
        `}
            id="hoverTarget"
        >
            <span className="relative z-10 flex items-center justify-center gap-4 group-hover:text-white">
                {children && children}
            </span>
        </div>
    );
}

export default IconBtn;
