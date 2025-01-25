import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div
            className="w-full px-10 py-2 cursor-pointer text-[1rem]  border-b-2 border-gray-300  flex flex-row items-center justify-between 
        "
        >
            <div className="flex flex-row gap-5 items-center w-[40%]">
                <img
                    className="h-[50px] w-[140px] bg-blue-800 px-5 py-2 rounded-lg"
                    src="/mfbcourses-white-logo-1536x590.png.webp"
                    alt="logo"
                />

                {/* <input
                    type="text"
                    placeholder="Search "
                    className=" w-[100%] ml-20 outline-none rounded-2xl text-gray-700 font-normal px-5 py-2  bg-transparent  text-sm "
                /> */}
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

            {/* <div className="flex flex-row gap-10 items-center font-semibold uppercase text-[0.9rem] ">
        <NavLink to="/dashboard/teacher" >Teacher </NavLink>
        <NavLink to="/dashboard/student" >Student </NavLink>
        <NavLink to="/admin/dashboard" >Admin </NavLink>
      </div> */}

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
    );
}

export default Navbar;
