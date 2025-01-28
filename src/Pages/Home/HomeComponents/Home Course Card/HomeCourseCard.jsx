import React from "react";
import { CiVideoOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

function HomeCourseCard() {
    return (
        <div className="w-1/4 h-fit bg-white p-3 rounded-md space-y-2 shadow-md">
            <img
                src="https://miro.medium.com/v2/resize:fit:1400/0*5ZFFHxD7lu3-leZY"
                alt="course_thumbnail"
                className="rounded-md w-full h-40 border  object-cover"
            />
            {/* Course Others Data */}
            <div className="flex items-center justify-between text-mainTextColor ">
                {/* How many Video */}
                <div className="flex items-center gap-2">
                    <span>
                        <CiVideoOn />
                    </span>
                    <p>50 videos</p>
                </div>
                {/* Total TIme Of COurse */}
                <div className="flex items-center gap-2">
                    <span>
                        <IoTimeOutline />
                    </span>
                    <p>7:50 hours</p>
                </div>
            </div>
            <h2 className="text-lg  font-medium text-mainTextColor">
                Web Development With Mern Stack
            </h2>
            <h1 className="text-[#FF696B] text-xl font-semibold">$399</h1>
        </div>
    );
}

export default HomeCourseCard;
