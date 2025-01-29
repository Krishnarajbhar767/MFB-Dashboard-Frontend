import React from "react";
import { FaRegCircle, FaRegSquareFull } from "react-icons/fa6";
import { IoTriangleOutline } from "react-icons/io5";
import { PiShapesLight } from "react-icons/pi";
import { TbCircleTriangle } from "react-icons/tb";

function HomeWhyChooseUs() {
    return (
        <div className="max-w-7xl mx-auto py-8 md:py-16 px-4">
            {/* Main Heading */}
            <div className="flex flex-col md:flex-row">
                <h1 className="w-full md:w-1/2 lg:text-5xl md:text-4xl text-[1.75rem]  mx-auto   capitalize  text-[#2F2F68] leading-tight  font-medium ">
                    From <span className="text-[#FF696B]">Knowledge</span> To{" "}
                    <br />
                    Action
                </h1>
                {/* <h1 className="w-full md:w-1/2 lg:text-5xl md:text-4xl text-4xl  mx-auto   capitalize  text-[#2F2F68] leading-tight  font-medium md:hidden lg:hidden">
                    From <span className="text-[#FF696B]">Knowledge</span> To{" "}
                    Action
                </h1> */}
                <p className="w-full md:w-1/2 text-sm text-mainTextColor text-left px-0 md:px-3 lg:px-0">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo, iure quod minus, dolorem facilis voluptatibus
                    reiciendis deserunt impedit eius ipsum possimus quisquam
                    vitae! Commodi ducimus est quo! Ratione, delectus in?
                </p>
            </div>
            {/* Image And some Other stafff container */}

            <div className="mt-3 flex gap-4 md:gap-14 flex-col md:flex-row lg:flex-row">
                <img
                    src="https://img.freepik.com/free-photo/portrait-smiling-teenage-girl-holding-laptop-computer_231208-5332.jpg"
                    alt="why_choose_us_image"
                    className="w-[100%] md:w-[45%] rounded-lg object-cover lg:h-[472px] h-[200px] md:h-[465px]"
                />
                <div className="md:w-[65%] w-[100%]">
                    <h1 className="text-2xl md:text-3xl font-semibold text-mainTextColor md:leading-snug leading-none">
                        Why Choose <br /> Media Fleet Blue?
                    </h1>
                    {/* Some Pointer Container */}

                    <div className=" w-[100%] flex justify-between flex-wrap gap-y-6 mt-4">
                        <div className="flex items-center gap-3 w-1/2">
                            <span className="p-3 bg-blue-100 rounded-full lg:text-2xl text-sm text-mainBgBlue">
                                <TbCircleTriangle />
                            </span>
                            <p className="lg:text-lg text-sm  font-normal text-mainTextColor">
                                Veriety
                            </p>
                        </div>
                        <div className="flex items-center gap-3 w-1/2">
                            <span className="p-3 bg-blue-100 rounded-full lg:text-2xl text-base text-mainBgBlue">
                                <FaRegCircle />
                            </span>
                            <p className="lg:text-lg text-sm  font-normal text-mainTextColor">
                                Career advancement
                            </p>
                        </div>
                        <div className="flex items-center gap-3 w-1/2">
                            <span className="p-3 bg-blue-100 rounded-full lg:text-2xl text-base text-mainBgBlue">
                                <PiShapesLight />
                            </span>
                            <p className="lg:text-lg text-sm  font-normal text-mainTextColor">
                                Quality Education
                            </p>
                        </div>
                        <div className="flex items-center gap-3 w-1/2">
                            <span className="p-3 bg-blue-100 rounded-full lg:text-2xl text-base text-mainBgBlue">
                                <FaRegSquareFull />
                            </span>
                            <p className="lg:text-lg text-sm  font-normal text-mainTextColor">
                                Flexible learning options
                            </p>
                        </div>
                        <div className="flex items-center gap-3 w-1/2">
                            <span className="p-3 bg-blue-100 rounded-full lg:text-2xl text-base text-mainBgBlue">
                                <IoTriangleOutline />
                            </span>
                            <p className="lg:text-lg text-sm  font-normal text-mainTextColor">
                                Expert instruction
                            </p>
                        </div>
                    </div>
                    {/* Know More About Us Button */}
                    <div className="w-fit mx-auto md:mx-0">
                        <button className="text-xs px-5 py-4 bg-mainBgBlue rounded-full text-gray-50 font-medium mt-6 ">
                            More About Us
                        </button>
                    </div>

                    {/* avg. course rating and Active Enrolled Student Count Container... */}
                    <div className="w-full bg-[#ffdede] flex md:p-4 p-4    rounded-xl mt-6 items-center justify-evenly gap-16 md:gap-20  lg:gap-0 ">
                        <div className="">
                            <h2 className=" text-2xl text-[#FF696B] font-semibold">
                                4.8/5
                            </h2>
                            <h3 className="text-xs md:text-sm font-medium text-mainTextColor capitalize">
                                Average course rating
                            </h3>
                        </div>
                        <div className="">
                            <h2 className="text-2xl text-[#FF696B] font-semibold">
                                2K
                            </h2>
                            <h3 className="text-xs md:text-sm font-medium text-mainTextColor capitalize">
                                Active Student Enrolled
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeWhyChooseUs;
