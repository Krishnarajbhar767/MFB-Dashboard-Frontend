import React from "react";

function HomePageHeroSection() {
    return (
        <div className="max-w-7xl  mx-auto py-8">
            {/* Main Title Of HEro Sexxtion */}
            <h1 className="text-6xl  mx-auto   capitalize font-semibold text-[#2F2F68] text-center leading-snug  mt-10">
                Brightening the <span className="text-[#FF696B]">Journey</span>{" "}
                <br />
                to to success Ahead
            </h1>
            <p className="text-center text-wrap lg:w-1/2 mx-auto  text-sm text-[#2F2F68] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                commodi sit officia porro in voluptas mollitia explicabo earum
                quod perspiciatis doloremque magnam et ipsa esse quis sapiente,
                recusandae aliquam? Dolore!
            </p>
            {/* Buttons Container */}
            <div className="flex  items-center justify-center  gap-4 mt-4 text-[#2E68FF] font-nedium tracking-wide text-sm">
                <button className="px-5 py-4 border bg-[#2E68FF] rounded-full text-gray-200">
                    Start learning today
                </button>
                <button className="px-5 py-4 border border-[#2E68FF] rounded-full">
                    Explore programs
                </button>
            </div>
            {/* Key Static Container And Some Other Image Contaier*/}
            <div className="flex w-full  gap-12 justify-center   p-3">
                {/* Key static Container */}
                <div className="border-[2px] border-gray-300  h-fit rounded-md  p-3 space-y-2">
                    <h2 className="text-2xl font-medium text-[#2F2F68]">
                        Key Static
                    </h2>
                    {/* Total COurse */}
                    <div className=" bg-blue-100 px-3 py-4 rounded-lg">
                        <h3 className="text-blue-500 text-xl font-medium">
                            500+
                            <span className="text-[#2F2F68] ml-3 text-sm font-medium">
                                Total Courses
                            </span>
                        </h3>
                    </div>
                    {/* Total Instructor */}
                    <div className=" bg-green-100 px-3 py-4 rounded-lg">
                        <h3 className="text-green-500 text-xl font-medium">
                            500+
                            <span className="text-[#2F2F68] ml-3 text-sm font-medium">
                                Expert Tutors
                            </span>
                        </h3>
                    </div>
                </div>
                {/* Image ! */}
                <div className="lg:h-[250px] w-1/3  mt-6">
                    <img
                        src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?semt=ais_hybrid"
                        className="w-full h-full object-cover  rounded-lg object-top"
                    />
                </div>
                {/* Image 2 */}
                <div className=" lg:h-[200px] w-[25%] mt-12">
                    <img
                        src="https://media.istockphoto.com/id/1265928184/photo/smiling-arab-girl-with-headset-studying-online-using-laptop.jpg?s=612x612&w=0&k=20&c=zOBD1QxEr4jYRqLvADDcCTGfo1BNnE5-_FUzFjd_zBM="
                        className="w-full h-full object-cover object-top rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePageHeroSection;
