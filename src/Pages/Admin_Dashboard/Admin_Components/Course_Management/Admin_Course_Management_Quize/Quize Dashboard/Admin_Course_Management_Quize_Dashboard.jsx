import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import {
    HiOutlineChartBar,
    HiOutlineUsers,
    HiOutlineClock,
} from "react-icons/hi";
import { FiFilter } from "react-icons/fi";
import SelectDropDown from "../../../../../../Common_Components/Form_Components/SelectDropDown";
import Admin_Course_Management_Quize_Card from "./Quize Card/Admin_Course_Management_Quize_Card";

function Admin_Course_Management_Quize_Dashboard() {
    const { register, handleSubmit, getValues, setValue } = useForm();
    const navigate = useNavigate();
    const { allQuizzes } = useSelector((state) => state?.quize);

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Quiz Dashboard
                </h1>
                <button
                    onClick={() => {
                        navigate("/admin/course_management/add_new_quize/");
                    }}
                    className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-sm"
                >
                    <FaPlus size={14} />
                    <span>Create New Quiz</span>
                </button>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-white p-5 rounded-xl shadow-sm mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search Field */}
                    <div className="md:w-1/2 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <IoSearch className="text-gray-400" size={18} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search quizzes by title, category or author..."
                            className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg  focus:border-transparent outline-none transition-all focus:ring-2 text-sm font-normal"
                        />
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row gap-4 md:w-1/2">
                        <div className="relative md:w-1/2">
                            {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiFilter className="text-gray-400" size={16} />
                            </div> */}
                            <SelectDropDown
                                register={register}
                                inputName={"quizeFilterCategory"}
                                defaultOption={"Filter by Category"}
                                className="w-full pl-10 appearance-none"
                            />
                        </div>
                        <div className="relative md:w-1/2">
                            {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiFilter className="text-gray-400" size={16} />
                            </div> */}
                            <SelectDropDown
                                register={register}
                                inputName={"quizeFilterOptions"}
                                defaultOption={"Sort by"}
                                className="w-full pl-10 appearance-none"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Quiz Cards Section */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Your Quizzes
                </h2>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[500px] overflow-y-auto pr-2"
                    id="quizesCardContainer"
                >
                    {allQuizzes?.flatMap((item) =>
                        item.quizes?.map((quize) => (
                            <div key={quize._id} className="w-full">
                                <Admin_Course_Management_Quize_Card
                                    quize={quize}
                                    courseTitle={item.courseTitle}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Analytics Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                    Quiz Analytics Overview
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Analytics Card 1 */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 transition-all hover:shadow-md">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium mb-1">
                                    Total Participants
                                </p>
                                <h3 className="text-3xl font-bold text-gray-900">
                                    1,234
                                </h3>
                                <p className="text-green-600 text-sm font-medium mt-2 flex items-center">
                                    <span className="mr-1">↑</span> 12% last
                                    month
                                </p>
                            </div>
                            <div className="bg-black bg-opacity-5 p-3 rounded-lg">
                                <HiOutlineUsers
                                    className="text-gray-700"
                                    size={24}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Analytics Card 2 */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 transition-all hover:shadow-md">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium mb-1">
                                    Average Score
                                </p>
                                <h3 className="text-3xl font-bold text-gray-900">
                                    76%
                                </h3>
                                <p className="text-red-600 text-sm font-medium mt-2 flex items-center">
                                    <span className="mr-1">↓</span> 3% last
                                    month
                                </p>
                            </div>
                            <div className="bg-black bg-opacity-5 p-3 rounded-lg">
                                <HiOutlineChartBar
                                    className="text-gray-700"
                                    size={24}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Analytics Card 3 */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 transition-all hover:shadow-md">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium mb-1">
                                    Avg. Completion Time
                                </p>
                                <h3 className="text-3xl font-bold text-gray-900">
                                    14:32
                                </h3>
                                <p className="text-green-600 text-sm font-medium mt-2 flex items-center">
                                    <span className="mr-1">↑</span> 8% faster
                                </p>
                            </div>
                            <div className="bg-black bg-opacity-5 p-3 rounded-lg">
                                <HiOutlineClock
                                    className="text-gray-700"
                                    size={24}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Placeholder for charts */}
                <div className="mt-8 h-64 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
                    <p className="text-gray-400">
                        Quiz performance charts will appear here
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Admin_Course_Management_Quize_Dashboard;
