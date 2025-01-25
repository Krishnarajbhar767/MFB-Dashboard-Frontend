import React from "react";

function Student_Discover_Course_Card() {
    return (
        <div className="w-[32%] bg-white rounded-lg shadow-md p-3">
            {/* COurse Image Container.. */}
            <img
                src="https://img-c.udemycdn.com/course/480x270/764164_de03_5.jpg"
                alt="course_card_image"
                className="h-[160px] w-full object-cover rounded-xl"
            />
            {/* Course Title */}
            <div className="flex  ">
                <h1 className="max-w-[60%] my-3 text-[17px] font-semibold text-gray-700">
                    Web Devlopement 2025 Batch
                </h1>
                <div className="my-3">⭐⭐⭐⭐⭐</div>
            </div>
            {/* Aurthor PROFIle ANd Name */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 max-w-[50%]">
                    <img
                        src=""
                        height={30}
                        width={30}
                        className="rounded-full bg-green-500"
                    />

                    {/* author Name */}
                    <h2 className="text-gray-600 text-sm">Media Fleet Blue</h2>
                </div>
                <h3 className="max-w-[50%] text-emerald-700 text-xl font-semibold">
                    $399
                </h3>
            </div>
        </div>
    );
}

export default Student_Discover_Course_Card;
