import React from "react";

function CenterFillButton({ text }) {
    return (
        <button class="relative h-12 min-w-40 overflow-hidden border border-[#2E68FF] text-[#2E68FF] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#2E68FF] before:duration-300 before:ease-out hover:text-white hover:shadow-[#2E68FF] hover:before:h-40 hover:before:w-full hover:before:opacity-80 rounded-3xl px-4">
            <span class="relative z-10">{text}</span>
        </button>
    );
}

export default CenterFillButton;
