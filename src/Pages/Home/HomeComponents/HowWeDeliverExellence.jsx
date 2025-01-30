import React from "react";
import stepByStepImg from "../../../assets/stepbystep.svg";
function HowWeDeliverExellence() {
    return (
        <div className="bg-[#EEF3FF] py-10 ">
            <div className="max-w-7xl  mx-auto ">
                <h1 className="text-5xl  mx-auto   capitalize  text-[#2F2F68]  leading-tight  font-medium">
                    How We <span className="text-[#FF696B]">Deliver</span>{" "}
                    <br />
                    Exellence
                </h1>
                <div className="w-full lg:h-[600px] relative text-mainTextColor hidden md:block">
                    <img
                        src={stepByStepImg}
                        className="bg-transparent object-contain w-full h-full mix-blend-multiply"
                    />
                    {/* Step 1 */}
                    <div className="lg:w-[230px] min-h-[165px] bg-white absolute z-10 top-[67.5%] left-[9%] p-3 space-y-2 rounded-md shadow-md">
                        <h1 className="text-xl font-medium">
                            Explore Categories
                        </h1>
                        <p className="text-sm">
                            Browse Through our various course Categories to find
                            the area that intresets you the most.
                        </p>
                    </div>
                    {/* Step 2 */}
                    <div className="lg:w-[230px] min-h-[165px] bg-white absolute z-10 top-[51%] left-[31%] p-3 space-y-2 rounded-md shadow-md">
                        <h1 className="text-xl font-medium">
                            Explore Categories
                        </h1>
                        <p className="text-sm">
                            Browse Through our various course Categories to find
                            the area that intresets you the most.
                        </p>
                    </div>
                    {/* Step 3 */}
                    <div className="lg:w-[230px] min-h-[165px] bg-white absolute z-10 top-[41%] left-[53%] p-3 space-y-2 rounded-md shadow-md">
                        <h1 className="text-xl font-medium">
                            Explore Categories
                        </h1>
                        <p className="text-sm">
                            Browse Through our various course Categories to find
                            the area that intresets you the most.
                        </p>
                    </div>
                    {/* Step 4 */}
                    <div className="lg:w-[230px] min-h-[165px] bg-white absolute z-10 top-[23%] left-[72.5%] p-3 space-y-2 rounded-md shadow-md">
                        <h1 className="text-xl font-medium">
                            Explore Categories
                        </h1>
                        <p className="text-sm">
                            Browse Through our various course Categories to find
                            the area that intresets you the most.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowWeDeliverExellence;

//
