import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div>
            {!isMobileMenuOpen && (
                // MObile Menu
                <div className="h-[80px] w-full bg-[#77B254] sm:block md:hidden lg:hidden flex items-center px-3 justify-between">
                    {/* Logo Image */}
                    <div className="h-full py-2 ">
                        <img
                            src="https://www.mediafleetblue.com/images/logo-v1.png"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    {/* Hamberg Icon And MEnu */}
                    <div onClick={() => setIsMobileMenuOpen(true)}>
                        <span className="cursor-pointer text-6xl text-gray-800">
                            <CiMenuFries />
                        </span>
                    </div>
                </div>
            )}
            {isMobileMenuOpen && (
                <div className="h-[100vh] w-full lg:hidden md:hidden p-4">
                    <div
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="cursor-pointer text-6xl text-gray-800  flex items-center justify-end"
                    >
                        <span>
                            <RxCross1 />
                        </span>
                    </div>
                    <div className="flex items-center flex-col text-3xl font-medium capitalize space-y-4">
                        <h1>Home</h1>
                        <h1>About</h1>
                        <h1>Contact</h1>
                        <h1>Courses</h1>
                    </div>
                </div>
            )}
            <div
                className="w-full px-10 py-2 cursor-pointer text-[1rem]  border-b-2 border-gray-300  hidden
            lg:flex flex-row items-center justify-between 
            md:flex 
        "
            >
                <div className="flex flex-row gap-5 items-center w-[40%]">
                    <img
                        className="h-[50px] w-[140px] bg-blue-800 px-5 py-2 rounded-lg"
                        src="/mfbcourses-white-logo-1536x590.png.webp"
                        alt="logo"
                    />

                    <div className="ml-10 relative px-5 py-1 h-fit flex items-center gap-4 rounded-2xl border bg-[#F5F9FA] text-sm">
                        <button>
                            <IoSearch /> {/* Search button with icon */}
                        </button>
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-row items-center gap-5 text-[0.9rem] ">
                    <button
                        onClick={() => navigate("/")}
                        className="bg-blue-900 text-white cursor-pointer px-5 py-2 rounded-lg font-semibold uppercase "
                    >
                        HOME
                    </button>
                    <button className="bg-red-500 text-white flex flex-row gap-2 rounded-lg px-5 py-2 font-semibold uppercase">
                        Logout
                        <span className="text-[20px]">
                            <HiOutlineLogout />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
