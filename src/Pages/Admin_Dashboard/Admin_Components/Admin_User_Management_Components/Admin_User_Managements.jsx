// Import necessary React hooks and components.
import React, { useState, useEffect, useRef } from "react";
import IconBtn from "../../../../Common_Components/IconBtn"; // Custom reusable button component.
import { FaEdit, FaPlus } from "react-icons/fa"; // FontAwesome icons.
import { IoSearch } from "react-icons/io5"; // Ionicons for search icon.
import Admin_Student_Course_Purchase_Data_Table from "./Sub_Components/Admin_Student_Course_Purchase_Data_Table"; // Data table component.
import { studentPurchaseDataSample } from "../../../../Sampple_Data/activeStudent"; // Sample student purchase data.
import { TbFilterSearch } from "react-icons/tb"; // Tabler Icons for filter search.
import { CiMenuKebab } from "react-icons/ci"; // Icons for kebab menu.
import { MdDeleteForever } from "react-icons/md"; // Material Design icon for delete.
import { BiShow } from "react-icons/bi"; // Boxicons for show view.
// import Admin_Total_Student_Tabular_Data_Card from "./Sub_Components/Admin_Total_Student_Tabular_Data_Card"; // Summary card for student data.
import Admin_User_Purchase_Filter from "./Sub_Components/Admin_User_Purchase_Filter"; // Filter component for purchases.
import { useSelector, useDispatch } from "react-redux";

function Admin_User_Managements() {
    const store = useSelector((state) => state);
    console.log("Printing Redux Store", store);
    // State to store the main student purchase data.
    const [studentPurchaseData, setStudentPurchaseData] = useState([]);

    // State to store filtered data based on the search input.
    const [searchFiltredData, setSearchFiltredData] = useState([]);

    // State to control the visibility of the search modal.
    const [searchModalOpen, setSearchModalOpen] = useState(false);

    // State to control the filter modal visibility.
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Reference to the search result modal for outside click detection.
    const searchResultModalRef = useRef();

    // Effect to initialize the component and set initial data.
    useEffect(() => {
        setSearchModalOpen(true); // Open search modal on the first render.
        console.log("First Render");
        setStudentPurchaseData((prev) => studentPurchaseDataSample); // Set initial data using the sample.
    }, []);

    // Log filtered data for debugging.
    console.log("Printing Search FIltered Data", searchFiltredData);

    return (
        <div
            onClick={(e) => {
                // Close search modal if the click occurs outside of it.
                if (!searchResultModalRef?.current?.contains(e?.target)) {
                    setSearchModalOpen(false);
                }
            }}
            className="relative w-full h-full overflow-scroll scroller rounded-lg flex flex-col font-semibold "
        >
            {/* Summary card showing total student data */}

            {/* Top section for table controls: pagination, search, add button, and filter */}
            <div className="h-fit flex items-center justify-between px-5 py-2 rounded-lg sticky top-0 bg-white z-30">
                {/* Pagination and search input */}
                <div className="flex gap-10">
                    <div className="flex gap-2 text-sm capitalize text-gray-800 items-center">
                        <p>show</p>
                        <p>{10}</p> {/* Hardcoded number of entries */}
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="relative border-2 border-gray-500 px-5 py-1 h-fit flex items-center gap-4 rounded-lg">
                            <button>
                                <IoSearch /> {/* Search button with icon */}
                            </button>
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-transparent outline-none"
                                onChange={(e) => {
                                    const temp_data = [];
                                    setSearchModalOpen(true); // Open search modal when input changes.
                                    setStudentPurchaseData(
                                        studentPurchaseDataSample
                                    ); // Reset to original data.

                                    // Filter data based on search input.
                                    studentPurchaseData?.map((item, idx) => {
                                        const inputData = e.target.value
                                            .toLowerCase()
                                            .trim();
                                        console.log(inputData);
                                        if (!e.target.value) {
                                            setSearchFiltredData((prev) => []); // Clear filtered data if input is empty.
                                            return;
                                        }
                                        if (
                                            item.email
                                                .toLowerCase()
                                                .includes(inputData)
                                        ) {
                                            temp_data.push(item); // Add matching items to temporary data.
                                        }
                                        setSearchFiltredData(
                                            (prev) => temp_data
                                        ); // Update filtered data state.
                                    });
                                }}
                            />
                        </div>

                        {/* Display search results in a modal */}
                        {searchModalOpen && (
                            <div className="searchResultModal">
                                {searchFiltredData.length > 0 ? (
                                    <>
                                        <div
                                            ref={searchResultModalRef} // Reference for outside click detection.
                                            id="scrollerHide"
                                            className="overflow-y-scroll h-fit max-h-[50vh] rounded-md border border-solid min-h-[10vh] absolute -ml-10 top-12 left-auto right-auto bg-gray-50 text-black lg:min-w-[290px] max-w-fit px-5 text-sm tracking-tight flex flex-col border-collapse z-0"
                                        >
                                            {searchFiltredData?.map(
                                                (item, idx) => {
                                                    return (
                                                        <div className="relative cursor-pointer flex border-b items-center text-start gap-6 border-collapse py-2 px-1 border-gray-300 h-[65px] z-10">
                                                            {/* Display student profile image */}
                                                            <img
                                                                src={item.image}
                                                                height={50}
                                                                width={50}
                                                                className="object-fit rounded-full"
                                                            />

                                                            {/* Display student name and email */}
                                                            <div className="pr-16 items-start flex flex-col">
                                                                <p className="text-sm font-bold text-gray-900">
                                                                    {
                                                                        item.studentName
                                                                    }
                                                                </p>
                                                                <p className="text-sm font-normal tracking-tighter text-gray-800">
                                                                    {item.email}
                                                                </p>
                                                            </div>

                                                            {/* View button for additional actions */}
                                                            <div
                                                                className="absolute right-0 top-0 flex h-full items-center gap-[2px] text-white"
                                                                onClick={() => {
                                                                    alert(
                                                                        JSON.stringify(
                                                                            item
                                                                        )
                                                                    ); // Alert student data on click.
                                                                }}
                                                            >
                                                                <span className="bg-gray-700 p-2 rounded-full">
                                                                    <BiShow className="text-xl h-full" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    "" // No results found.
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Add student button */}
                <div className="ml-80">
                    <IconBtn color="#008200">
                        <FaPlus className="text-sm font-light text-gray-50" />{" "}
                        add student
                    </IconBtn>
                </div>

                {/* Toggle filter button */}
                <div
                    onClick={() => {
                        setIsFilterOpen(!isFilterOpen); // Toggle filter state.
                        console.log(
                            "Printing Is Filter Open....",
                            isFilterOpen
                        );
                    }}
                    className="cursor-pointer"
                >
                    <IconBtn color="#0047AB">
                        <TbFilterSearch className="text-sm font-light text-gray-50" />
                        Filter
                    </IconBtn>
                </div>
            </div>

            {/* Render filter component if the filter is open */}
            {isFilterOpen && (
                <Admin_User_Purchase_Filter setIsFilterOpen={setIsFilterOpen} />
            )}

            {/* Main table to display student purchase data */}
            <div className="p-5">
                <Admin_Student_Course_Purchase_Data_Table
                    tableData={studentPurchaseData}
                    setTableData={setStudentPurchaseData}
                    isFilterOpen={isFilterOpen}
                    // setIsFilterOpen = {setIsFilterOpen}
                />
            </div>
        </div>
    );
}

export default Admin_User_Managements;
