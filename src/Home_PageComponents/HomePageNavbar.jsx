import React from "react";
import IconBtn from "../Common_Components/IconBtn";
import { Link, NavLink } from "react-router-dom";
import sampleLogo from "../assets/sample_logo.png";
function HomePageNavbar() {
    return (
        <div className="w-full border-b border-gray-300  ">
            <nav className="max-w-7xl  h-[60px] mx-auto flex items-center justify-between ">
                {/* Logo Container */}
                <div className="w-36 h-full border-green-600 ">
                    <img
                        src={sampleLogo}
                        className="w-full h-full object-contain"
                    />
                    {/* <h1 className="text-sm">Media Fleet Blue </h1> */}
                </div>
                {/* Items Container */}
                <div className="space-x-6 text-sm font-medium text-mainTextColor bg-[#F2F2F2]  capitalize px-10 py-3 rounded-3xl ">
                    <Link className="hover:text-[#2E68FF] transition-all duration-200">
                        Home{" "}
                    </Link>
                    <Link className="hover:text-[#2E68FF] transition-all duration-200">
                        About Us{" "}
                    </Link>
                    <Link className="hover:text-[#2E68FF] transition-all duration-200">
                        Contact Us{" "}
                    </Link>
                    <Link className="hover:text-[#2E68FF] transition-all duration-200">
                        Our Courses
                    </Link>
                    <Link className="hover:text-[#2E68FF] transition-all duration-200">
                        Our Mentors
                    </Link>
                </div>
                {/* Login And SIgn Up Container */}
                <div className="flex gap-4">
                    <button className="px-4 py-2 border border-gray-400 rounded-md text-gray-800 text-sm font-medium">
                        Log In
                    </button>
                    <button className="px-4 py-2 rounded-md bg-[#2E68FF] text-sm font-medium text-gray-200">
                        Sign Up
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default HomePageNavbar;
