import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function HomeWhatOurStudentSays() {
    return (
        <div className="py-10 ">
            <div className="max-w-7xl  mx-auto ">
                <h1 className="text-5xl  mx-auto   capitalize  text-[#2F2F68]  leading-tight  font-medium md:text-center">
                    What Our <span className="text-[#FF696B]">Students</span>{" "}
                    Says
                </h1>

                {/* Image ANd Main List COntainer */}
                <div className="w-full md:flex  md:justify-center mt-4 md:gap-8">
                    {/* IMge1 */}
                    <div className="w-[18%] h-52 md:self-end">
                        <img
                            src="https://pixahive.com/wp-content/uploads/2020/10/Beautiful-girl-read-book-130423-pixahive.jpg"
                            className="h-full w-full object-cover rounded-md"
                        />
                    </div>
                    {/* Main Container */}
                    <div className="md:h-[350px] border-2  border-pink-300 w-[40%] rounded-lg text-mainTextColor flex flex-col   items-center justify-center p-3 relative">
                        {/* Student Identity Container... */}
                        <div className="flex flex-col items-center">
                            <img
                                src="https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-hipster-model-dressed-warm-overcoat-posing-studio_158538-11453.jpg?w=360"
                                alt="studnt dp"
                                className="w-16 h-16 rounded-full object-cover object-top"
                            />
                            <h2 className="font-medium mt-1">Student Name</h2>
                        </div>
                        <h3 className="text-center mt-3 text-base font-semibold">
                            “ Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Eligendi error eos, minus
                            necessitatibus laborum nostrum „
                        </h3>
                        <div className="flex gap-2 absolute -bottom-[1.7rem]">
                            <span className="p-3 text-2xl bg-pink-200 border-2 border-pink-300 rounded-full text-pink-400">
                                <BsArrowLeft />
                            </span>
                            <span className="p-3 text-2xl bg-pink-200 border-2 border-pink-300 rounded-full text-pink-400">
                                <BsArrowRight />
                            </span>
                        </div>
                    </div>
                    {/* Image2 Container */}
                    <div className="w-[15%] h-44 md:mt-14">
                        <img
                            src="https://img.freepik.com/free-photo/young-brunette-woman-oversized-jacket-jeans-holds-phone-white-notebooks-attractive-girl-with-black-bag-poses-orange-background_197531-29244.jpg"
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeWhatOurStudentSays;
