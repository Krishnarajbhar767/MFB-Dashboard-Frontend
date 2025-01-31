import React from "react";

function AboutUsOurStory() {
    return (
        <div className=" text-gray-200 p-6 space-y-4 max-w-7xl mx-auto ">
            <h1 className="text-center md:text-2xl font-medium">Our Story</h1>
            <p className="mx-auto lg:w-1/2 md:w-[80%]  text-center text-sm  font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                blanditiis consectetur corrupti non esse, numquam nostrum. Error
                nisi cupiditate animi! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Fugiat, sed!
            </p>
            {/* The Three Card Container.. */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-6 text-mainTextColor">
                <div className="lg:w-[20%] bg-white flex items-center flex-col p-4 gap-2 rounded-md ">
                    <img
                        src="https://img.freepik.com/premium-vector/brain-inside-light-bulb-with-abstract-design_1280751-50670.jpg"
                        alt="our story box1 image"
                        className="w-24 h-24 mix-blend-multiply  object-cover"
                    />
                    <h1 className="text-xl font-medium">The Beginning</h1>
                    <p className="text-center font-normal text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Fugit dolore placeat excepturi. Doloribus itaque
                        veritatis dolores error inventore, maiores deserunt?
                    </p>
                </div>
                <div className="lg:w-[20%] bg-white flex items-center flex-col p-4 gap-2 rounded-md ">
                    <img
                        src="https://img.freepik.com/premium-vector/brain-inside-light-bulb-with-abstract-design_1280751-50670.jpg"
                        alt="our story box1 image"
                        className="w-24 h-24 mix-blend-multiply  object-cover"
                    />
                    <h1 className="text-xl font-medium">The Beginning</h1>
                    <p className="text-center font-normal text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Fugit dolore placeat excepturi. Doloribus itaque
                        veritatis dolores error inventore, maiores deserunt?
                    </p>
                </div>
                <div className="lg:w-[20%] bg-white flex items-center flex-col p-4 gap-2 rounded-md ">
                    <img
                        src="https://img.freepik.com/premium-vector/brain-inside-light-bulb-with-abstract-design_1280751-50670.jpg"
                        alt="our story box1 image"
                        className="w-24 h-24 mix-blend-multiply  object-cover"
                    />
                    <h1 className="text-xl font-medium">The Beginning</h1>
                    <p className="text-center font-normal text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Fugit dolore placeat excepturi. Doloribus itaque
                        veritatis dolores error inventore, maiores deserunt?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsOurStory;
