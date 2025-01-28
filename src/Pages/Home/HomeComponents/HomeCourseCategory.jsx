import React from "react";
import { IoIosLaptop } from "react-icons/io";

function HomeCourseCategory() {
    return (
        <div className="bg-[#EEF3FF] py-10 ">
            <div className="max-w-7xl  mx-auto ">
                <h1 className="text-5xl  mx-auto   capitalize  text-[#2F2F68] text-center leading-tight  font-medium">
                    Explore Diverse Learning Paths Within <br /> Our Courses{" "}
                    <span className="text-[#FF696B]">Categories</span>
                    <br />
                </h1>
                <p className="text-center text-wrap lg:w-1/2 mx-auto  text-sm text-[#2F2F68] font-medium mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore commodi sit officia porro in voluptas mollitia
                    explicabo earum quod perspiciatis doloremque magnam et ipsa
                    esse quis sapiente, recusandae aliquam? Dolore!
                </p>

                {/* Some Course Catgorys */}
                <div className="flex flex-wrap gap-4 justify-center my-4 mt-10">
                    {/* Course Catgory */}
                    <div className="w-1/5  flex  items-center gap-3 bg-white p-3 py-4 rounded-lg ">
                        <span className="text-5xl leading-none font-thin text-blue-600">
                            <IoIosLaptop />
                        </span>
                        <h2 className="text-sm text-gray-700 font-medium">
                            Computer Science
                        </h2>
                    </div>
                    <div className="w-1/5  flex  items-center gap-3 bg-white p-3 py-4 rounded-lg ">
                        <span className="text-5xl leading-none font-thin text-blue-600">
                            <IoIosLaptop />
                        </span>
                        <h2 className="text-sm text-gray-700 font-medium">
                            Programming
                        </h2>
                    </div>
                    <div className="w-1/5  flex  items-center gap-3 bg-white p-3 py-4 rounded-lg ">
                        <span className="text-5xl leading-none font-thin text-blue-600">
                            <IoIosLaptop />
                        </span>
                        <h2 className="text-sm text-gray-700 font-medium">
                            Software Development
                        </h2>
                    </div>
                    <div className="w-1/5  flex  items-center gap-3 bg-white p-3 py-4 rounded-lg ">
                        <span className="text-5xl leading-none font-thin text-blue-600">
                            <IoIosLaptop />
                        </span>
                        <h2 className="text-sm text-gray-700 font-medium">
                            Computer Science
                        </h2>
                    </div>
                    <div className="w-1/5  flex  items-center gap-3 bg-white p-3 py-4 rounded-lg ">
                        <span className="text-5xl leading-none font-thin text-blue-600">
                            <IoIosLaptop />
                        </span>
                        <h2 className="text-sm text-gray-700 font-medium">
                            Computer Science
                        </h2>
                    </div>
                    <div className="w-1/5  flex  items-center gap-3 bg-white p-3 py-4 rounded-lg ">
                        <span className="text-5xl leading-none font-thin text-blue-600">
                            <IoIosLaptop />
                        </span>
                        <h2 className="text-sm text-gray-700 font-medium">
                            Computer Science
                        </h2>
                    </div>
                    <div className="w-1/5  flex  items-center gap-3 bg-white p-3 py-4 rounded-lg ">
                        <span className="text-5xl leading-none font-thin text-blue-600">
                            <IoIosLaptop />
                        </span>
                        <h2 className="text-sm text-gray-700 font-medium">
                            Computer Science
                        </h2>
                    </div>
                    <div className="w-1/5  flex  items-center justify-center gap-3 bg-[#2E68FF] p-3 py-4 rounded-lg ">
                        <h2 className="text-base text-gray-50 font-medium capitalize ">
                            Explore All Categories
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCourseCategory;
