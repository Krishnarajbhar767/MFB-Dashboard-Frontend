import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div>
            {/* Mobile Navbar */}
            <div className="h-[80px] w-full bg-red-400 sm:block md:hidden lg:hidden flex items-center px-3 justify-between">
                {/* Logo Image */}
                <div className="h-full py-2 ">
                    <img
                        src="https://www.mediafleetblue.com/images/logo-v1.png"
                        className="h-full w-full object-cover"
                    />
                </div>
                {/* Hamberg Icon And MEnu */}
                <div>
                    <span className="text-6xl text-gray-800 cursor-pointer">
                        <CiMenuFries />
                    </span>
                </div>
            </div>
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
