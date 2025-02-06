import React, { useEffect } from "react";
import IconBtn from "../../../../../../Common_Components/IconBtn";
import { FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import SelectDropDown from "../../../../../../Common_Components/Form_Components/SelectDropDown";
import { useForm } from "react-hook-form";
import Admin_Course_Management_Quize_Card from "./Quize Card/Admin_Course_Management_Quize_Card";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Admin_Course_Management_Quize_Dashboard() {
    const { register, handleSubmit, getValues, setValue } = useForm();

    const navigate = useNavigate();
    const { allQuizes } = useSelector((state) => state.quize);
    // TODO : On First Render Call api/get-all-quizes To get All Quize Data..
    useEffect(() => {}, [console.log("Printing Quizes", allQuizes)]);
    return (
        <div className="px-8 py-4">
            {/* FIrst Heading And Add Quize Button */}
            <div className="flex items-center justify-between">
                <h1>Quize Dashboard</h1>
                <button
                    onClick={() => {
                        navigate("/admin/course_management/add_new_quize/");
                    }}
                >
                    <IconBtn color={"#000f"}>
                        <FaPlus />
                        Create New Quize
                    </IconBtn>
                </button>
            </div>
            {/* Search Field and Drop Down Filter Container*/}
            <div className="flex gap-4 mt-6">
                {/* Search Main Container */}
                <div className="w-[60%] shadow-sm rounded-md">
                    <div className=" relative px-5 py-1 h-fit flex items-center gap-4 rounded-md border bg-white text-sm">
                        <span className="text-gray-500">
                            <IoSearch /> {/* Search button with icon */}
                        </span>
                        <input
                            type="text"
                            placeholder="Search Quizes....."
                            className="bg-transparent outline-none w-full text-gray-700 font-light tracking-wide"
                        />
                    </div>
                </div>
                {/* Filter by Category */}
                <div className="w-[20%] text-gray-800 shadow-sm rounded-md">
                    <SelectDropDown
                        register={register}
                        inputName={"quizeFilterCategory"}
                        defaultOption={"Choose A Category"}
                    />
                </div>
                {/* Filter Some Other OPtion */}
                <div className="w-[205] text-gray-800 shadow-sm rounded-md">
                    <SelectDropDown
                        register={register}
                        inputName={"quizeFilterOptions"}
                        defaultOption={"Other Filter Option"}
                    />
                </div>
            </div>
            {/* Quizes Card Container */}
            <div
                className="flex  gap-2 mt-6 flex-wrap justify-start   max-h-[405px] w-full overflow-scroll"
                id="quizesCardContainer"
            >
                {allQuizes?.map((quize, idx) => {
                    return (
                        <div className="min-w-[32%] max-w-[32.7%]">
                            <Admin_Course_Management_Quize_Card quize={quize} />
                        </div>
                    );
                })}
            </div>

            {/* Quize Analytic And Graph Container.... */}
            <div className="h-[600px] bg-white mt-6 shadow-sm border border-gray-200 rounded-md px-4 py-6">
                <h1 className="text-gray-700">Quize Analytics Overview</h1>
                {/* ANylayitic Cards  */}
                <div className="flex items-center my-2 gap-2">
                    <div className="w-1/3 bg-gray-200 rounded-md px-3 py-2 text-sm font-normal text-gray-800 space-y-1">
                        <h1>Total Participiant</h1>
                        <h2 className="text-base font-medium text-gray-900">
                            1234
                        </h2>
                        <h3>+12% last Month</h3>
                    </div>
                    <div className="w-1/3 bg-gray-200 rounded-md px-3 py-2 text-sm font-normal text-gray-800 space-y-1">
                        <h1>Total Participiant</h1>
                        <h2 className="text-base font-medium text-gray-900">
                            1234
                        </h2>
                        <h3>+12% last Month</h3>
                    </div>
                    <div className="w-1/3 bg-gray-200 rounded-md px-3 py-2 text-sm font-normal text-gray-800 space-y-1">
                        <h1>Total Participiant</h1>
                        <h2 className="text-base font-medium text-gray-900">
                            1234
                        </h2>
                        <h3>+12% last Month</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin_Course_Management_Quize_Dashboard;
