import React from "react";

function ShiningButton({ text }) {
    return (
        // <button class="before:ease relative h-12 min-w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-52 rounded-full px-4">
        //     <span relative="relative z-10"> {text}</span>
        // </button>
        <button class="before:ease relative h-12 min-w-40 overflow-hidden border border-[#2E68FF] bg-[#2E68FF] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#2E68FF] hover:before:-translate-x-52 rounded-full px-4">
            <span relative="relative z-10"> {text}</span>
        </button>
    );
}

export default ShiningButton;
