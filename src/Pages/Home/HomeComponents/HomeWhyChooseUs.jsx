import React from "react";
import { FaRegCircle, FaRegSquareFull } from "react-icons/fa6";
import { IoTriangleOutline } from "react-icons/io5";
import { PiShapesLight } from "react-icons/pi";
import { TbCircleTriangle } from "react-icons/tb";

function HomeWhyChooseUs() {
    return (
        <div className="max-w-7xl mx-auto py-6 px-4">
            {/* Main Heading */}
            <div className="flex">
                <h1 className="w-1/2 text-5xl  mx-auto   capitalize  text-[#2F2F68] leading-tight  font-medium">
                    From <span className="text-[#FF696B]">Knowledge</span> To{" "}
                    <br />
                    Action
                </h1>
                <p className="w-1/2 text-sm text-mainTextColor text-left">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo, iure quod minus, dolorem facilis voluptatibus
                    reiciendis deserunt impedit eius ipsum possimus quisquam
                    vitae! Commodi ducimus est quo! Ratione, delectus in?
                </p>
            </div>
            {/* Image And some Other stafff container */}

            <div className="mt-3 flex gap-14">
                <img
                    src="https://img.freepik.com/free-photo/portrait-smiling-teenage-girl-holding-laptop-computer_231208-5332.jpg"
                    alt="why_choose_us_image"
                    className="w-[45%] rounded-lg object-cover lg:h-[400px]"
                />
                <div className="w-[65%]">
                    <h1 className="text-3xl font-semibold text-mainTextColor leading-snug">
                        Why Choose <br /> Media Fleet Blue?
                    </h1>
                    {/* Some Pointer Container */}

                    <div className=" w-[100%] flex justify-between flex-wrap gap-y-6 mt-4">
                        <div className="flex items-center gap-3 w-1/2">
                            <span className="p-3 bg-blue-100 rounded-full text-2xl text-mainBgBlue">
                                <TbCircleTriangle />
                            </span>
                            <p className="text-lg font-normal text-mainTextColor">
                                Veriety
                            </p>
                        </div>
                        <div className="flex items-center gap-3 w-1/2">
                            <span className="p-3 bg-blue-100 rounded-full text-2xl text-mainBgBlue">
                                <FaRegCircle />
                            </span>
                            <p className="text-lg font-normal text-mainTextColor">
                                Career advancement
                            </p>
                        </div>
                        <div className="flex items-center gap-3 w-1/2">
                            <span className="p-3 bg-blue-100 rounded-full text-2xl text-mainBgBlue">
                                <PiShapesLight />
                            </span>
                            <p className="text-lg font-normal text-mainTextColor">
                                Quality Education
                            </p>
                        </div>
                        <div className="flex items-center gap-3 w-1/2">
                            <span className="p-3 bg-blue-100 rounded-full text-2xl text-mainBgBlue">
                                <FaRegSquareFull />
                            </span>
                            <p className="text-lg font-normal text-mainTextColor">
                                Flexible learning options
                            </p>
                        </div>
                        <div className="flex items-center gap-3 w-1/2">
                            <span className="p-3 bg-blue-100 rounded-full text-2xl text-mainBgBlue">
                                <IoTriangleOutline />
                            </span>
                            <p className="text-lg font-normal text-mainTextColor">
                                Expert instruction
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeWhyChooseUs;
