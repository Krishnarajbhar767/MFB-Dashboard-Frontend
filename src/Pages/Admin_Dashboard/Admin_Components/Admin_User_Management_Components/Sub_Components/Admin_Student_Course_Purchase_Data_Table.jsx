// Import necessary React hooks and components.
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi"; // Icon for edit action.
import { MdDeleteForever } from "react-icons/md"; // Icon for delete action.
import Admin_Edit_User_Purchase_Modal from "./Admin_Edit_User_Purchase_Modal"; // Modal component for editing user purchases.
import trash2 from "react-useanimations/lib/trash2";
import edit from "react-useanimations/lib/edit";
import UseAnimations from "react-useanimations";

function Admin_Student_Course_Purchase_Data_Table({
    tableData,
    setTableData,
    isFilterOpen,
}) {
    // Define table column headers.
    const tableHeadTitle = [
        "Tracking Id",
        "Student Name",
        "Email",
        "Amount",
        "Payment Mode",
        "Status",
        "Action",
    ];

    // State to store data for editing.
    const [editTableData, setEditTableData] = useState(null);

    // Handler for editing a table row.
    const handleEdit = async (tableData) => {
        setEditTableData(tableData); // Set selected table data for editing.
    };

    return (
        <div className={`relative ${isFilterOpen ? "mt-16" : "mt-0"}`}>
            {/* Render table */}
            <table>
                {/* Render table header */}
                <tr
                    className={`sticky bg-white border-none ${
                        isFilterOpen ? "top-[7.5rem]" : "top-[2.8rem]"
                    }`}
                >
                    {tableHeadTitle.map((title) => (
                        <th
                            key={title} // Add a key for list rendering.
                            style={{ border: "0px" }} // Inline styling for table header.
                            className="p-3 py-5 capitalize text-gray-800 font-medium tracking-tighter"
                        >
                            {title} {/* Display column title */}
                        </th>
                    ))}
                </tr>

                {/* Render table rows */}
                {tableData.map((item, idx) => {
                    return (
                        <tr
                            key={idx} // Add a key for list rendering.
                            className={`${
                                idx % 2 === 0 ? "bg-gray-200" : "" // Alternate row background for better visibility.
                            } capitalize text-sm font-medium text-gray-900`}
                        >
                            {/* Display tracking ID */}
                            <td className="py-5">{item.trackingId}</td>

                            {/* Display student name */}
                            <td className="py-5">{item.studentName}</td>

                            {/* Display email */}
                            <td className="py-5">{item.email}</td>

                            {/* Display payment amount */}
                            <td className="py-5">{item.amount}</td>

                            {/* Display payment mode */}
                            <td className="py-5">{item.paymentMode}</td>

                            {/* Display status with color coding */}
                            <td className="py-5">
                                <p
                                    className={`px-2 py-2 rounded-full ${
                                        item.status.toLowerCase() ===
                                            "success" &&
                                        "bg-green-200 text-green-800"
                                    } ${
                                        item.status.toLowerCase() ===
                                            "failed" &&
                                        "bg-red-300 text-red-600"
                                    } ${
                                        item.status.toLowerCase() ===
                                            "pending" &&
                                        "bg-yellow-100 text-yellow-400"
                                    }`}
                                >
                                    {item.status}
                                </p>
                            </td>

                            {/* Render action buttons */}
                            <td className="space-x-4 py-5">
                                {/* Edit button */}
                                <button
                                    className="text-blue-600 text-base"
                                    onClick={() => handleEdit(item)} // Trigger edit handler on click.
                                >
                                    <FiEdit />
                                </button>

                                {/* Delete button */}
                                <button className="text-red-500 text-base">
                                    <UseAnimations
                                        animation={trash2}
                                        size={25}
                                    />
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>

            {/* Render the edit modal if data is selected for editing */}
            {editTableData && (
                <Admin_Edit_User_Purchase_Modal
                    tableData={editTableData} // Pass selected data to modal.
                    setTableData={setEditTableData} // Handler to close modal or update data.
                />
            )}
        </div>
    );
}

export default Admin_Student_Course_Purchase_Data_Table;
