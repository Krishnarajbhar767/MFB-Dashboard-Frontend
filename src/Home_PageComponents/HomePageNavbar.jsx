import React, { useState } from "react";
import IconBtn from "../Common_Components/IconBtn";
import { Link, NavLink } from "react-router-dom";
import sampleLogo from "../assets/sample_logo.png";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
function HomePageNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="w-full border-b border-gray-300  ">
            {!isMobileMenuOpen && (
                <nav className="max-w-7xl  h-[60px] mx-auto flex items-center justify-between ">
                    {/* Logo Container */}
                    <div className="lg:w-32  w-28 h-full border-green-600 ">
                        <img
                            src={sampleLogo}
                            className="w-full h-full object-contain"
                        />
                        {/* <h1 className="text-sm">Media Fleet Blue </h1> */}
                    </div>
                    {/* Items Container */}
                    <div className="space-x-6 text-sm md:text-xs lg:text-sm font-medium text-mainTextColor bg-[#F2F2F2]  capitalize lg:px-10 lg:py-3 py-3 px-3  rounded-3xl  hidden md:block lg:block">
                        <Link
                            to={"/"}
                            className="hover:text-[#2E68FF] transition-all duration-200"
                        >
                            Home{" "}
                        </Link>
                        <Link
                            className="hover:text-[#2E68FF] transition-all duration-200"
                            to={"/aboutus"}
                        >
                            About Us{" "}
                        </Link>
                        <Link
                            className="hover:text-[#2E68FF] transition-all duration-200"
                            to={"/contactus"}
                        >
                            Contact Us{" "}
                        </Link>
                        <Link className="hover:text-[#2E68FF] transition-all duration-200">
                            Our Courses
                        </Link>
                        <Link className="hover:text-[#2E68FF] transition-all duration-200">
                            Our Mentors
                        </Link>
                    </div>
                    {/* Login And SIgn Up Container and hemberg menu icon */}
                    <div className=" gap-4 px-2 lg:px-10   flex ">
                        {/* <Link
                            to={"/login"}
                            className="lg:px-4 lg:py-2 border border-gray-400 rounded-md  text-sm font-medium px-2 text-mainTextColor hidden md:block lg:block "
                        >
                            Log In
                        </Link> */}
                        <Link
                            to={"/login"}
                            className="lg:px-4 lg:py-2 px-2 py-2 rounded-md  text-sm font-medium text-gray-600 border border-gray-300 hidden md:block lg:block"
                        >
                            Log in
                        </Link>
                        <Link
                            to={"/signup"}
                            className="lg:px-4 lg:py-2 px-2 py-2 rounded-md bg-[#2E68FF] text-sm font-medium text-gray-50 hidden md:block lg:block"
                        >
                            Sign Up
                        </Link>
                    </div>
                    {/* Mobile Menu Bar..... */}
                    <div className="md:hidden pr-3 text-5xl text-mainTextColor font-medium">
                        <span
                            className="cursor-pointer "
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <CiMenuFries />
                        </span>
                    </div>
                    {/* mobile menu.... */}
                </nav>
            )}
            {isMobileMenuOpen && (
                <nav className="h-screen w-screen px-2 py-1 text-mainTextColor">
                    <h2
                        className="text-center  flex justify-end text-5xl cursor-pointer "
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <RxCross2 />
                    </h2>
                    <div className=" flex flex-col items-center gap-2 text-2xl font-medium capitalize">
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Contact Us</Link>
                        <Link>Our Courses</Link>
                    </div>
                </nav>
            )}
        </div>
    );
}

export default HomePageNavbar;
