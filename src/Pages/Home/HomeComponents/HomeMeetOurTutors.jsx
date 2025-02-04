import React from "react";
import ShiningButton from "../../../Common_Components/modal/ShiningButton";
import CenterFillButton from "../../../Common_Components/modal/CenterFillButton";

function HomeMeetOurTutors() {
    return (
        <div className="w-full bg-[#FFFBEE] ">
            <div className="max-w-7xl  mx-auto py-8 ">
                <h1 className="text-2xl  md:text-4xl lg:text-[2.660rem]  mx-auto   capitalize font-semibold text-mainTextColor text-center leading-snug  mt-0 md:mt-6 lg:mt-10 italic ">
                    Meet The <span className="text-[#FF696B]">Tutors</span>{" "}
                    Behind Your Learning Journey
                </h1>
                {/* tutors Details container... */}
                <div className="text-mainTextColor h-fit flex flex-col md:flex-wrap md:flex-row justify-center py-3 gap-8 px-4 md:px-0 lg:px-0">
                    <div className=" space-y-1  ">
                        <img
                            src="https://us.123rf.com/450wm/benzoix/benzoix2004/benzoix200401452/144268568-teaching-education-and-university-lifestyle-concept-good-looking-smart-young-asian-female-teacher.jpg"
                            alt="tutor name"
                            className="md:h-[200px] md:w-[200px] lg:h-[170px]  lg:w-[170px] rounded-lg object-cover aspect-square"
                        />
                        <h2 className=" text-xl md:text-lg font-medium">
                            Billy Vasquize
                        </h2>
                        <h3 className=" text-lg leading-none md:text-base font-normal">
                            Instructor
                        </h3>
                    </div>{" "}
                    <div className=" space-y-1  ">
                        <img
                            src="https://us.123rf.com/450wm/benzoix/benzoix2004/benzoix200401452/144268568-teaching-education-and-university-lifestyle-concept-good-looking-smart-young-asian-female-teacher.jpg"
                            alt="tutor name"
                            className="md:h-[200px] md:w-[200px] lg:h-[170px]  lg:w-[170px] rounded-lg object-cover aspect-square"
                        />
                        <h2 className=" text-xl md:text-lg font-medium">
                            Billy Vasquize
                        </h2>
                        <h3 className=" text-lg leading-none md:text-base font-normal">
                            Instructor
                        </h3>
                    </div>{" "}
                    <div className=" space-y-1  ">
                        <img
                            src="https://us.123rf.com/450wm/benzoix/benzoix2004/benzoix200401452/144268568-teaching-education-and-university-lifestyle-concept-good-looking-smart-young-asian-female-teacher.jpg"
                            alt="tutor name"
                            className="md:h-[200px] md:w-[200px] lg:h-[170px]  lg:w-[170px] rounded-lg object-cover aspect-square"
                        />
                        <h2 className=" text-xl md:text-lg font-medium">
                            Billy Vasquize
                        </h2>
                        <h3 className=" text-lg leading-none md:text-base font-normal">
                            Instructor
                        </h3>
                    </div>{" "}
                    <div className=" space-y-1  ">
                        <img
                            src="https://us.123rf.com/450wm/benzoix/benzoix2004/benzoix200401452/144268568-teaching-education-and-university-lifestyle-concept-good-looking-smart-young-asian-female-teacher.jpg"
                            alt="tutor name"
                            className="md:h-[200px] md:w-[200px] lg:h-[170px]  lg:w-[170px] rounded-lg object-cover aspect-square"
                        />
                        <h2 className=" text-xl md:text-lg font-medium">
                            Billy Vasquize
                        </h2>
                        <h3 className=" text-lg leading-none md:text-base font-normal">
                            Instructor
                        </h3>
                    </div>{" "}
                    <div className=" space-y-1  ">
                        <img
                            src="https://us.123rf.com/450wm/benzoix/benzoix2004/benzoix200401452/144268568-teaching-education-and-university-lifestyle-concept-good-looking-smart-young-asian-female-teacher.jpg"
                            alt="tutor name"
                            className="md:h-[200px] md:w-[200px] lg:h-[170px]  lg:w-[170px] rounded-lg object-cover aspect-square"
                        />
                        <h2 className=" text-xl md:text-lg font-medium">
                            Billy Vasquize
                        </h2>
                        <h3 className=" text-lg leading-none md:text-base font-normal">
                            Instructor
                        </h3>
                    </div>
                </div>
                {/* Horizontal Line..... */}
                <div className="h-[1px] w-full bg-gray-400 mt-4"></div>
                <div className="flex justify-evenly flex-col md:flex-row items-center md:items-start">
                    <h1 className="md:max-w-[40%] w-11/12 mt-4 text-mainTextColor text-center md:text-start">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Neque tempora error eveniet nemo commodi corrupti
                        atque?
                    </h1>

                    <div className="flex flex-col md:flex-row lg:flex-row  items-center justify-center  gap-4 mt-4 text-[#2E68FF] font-nedium tracking-wide text-sm md:max-w-[50%]">
                        {/* <button className="px-5 py-4 border bg-[#2E68FF] rounded-full text-gray-200">
                            Meet our all tutors
                        </button>
                        <button className="px-5 py-4 border border-[#2E68FF] rounded-full focus:bg-mainBgBlue focus:text-gray-50">
                            view all courses
                        </button> */}
                        <ShiningButton text={"Meet our all tutors"} />
                        <CenterFillButton text={"view all courses"} />
                    </div>
                </div>
            </div>
            {/* Straight  Line And And Meet All Tutor Button  */}
        </div>
    );
}

export default HomeMeetOurTutors;
