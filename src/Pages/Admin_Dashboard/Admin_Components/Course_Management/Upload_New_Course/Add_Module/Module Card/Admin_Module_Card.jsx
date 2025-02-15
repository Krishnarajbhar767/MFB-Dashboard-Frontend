import React from "react";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";

const Admin_Module_Card = React.memo(({ name, description, lessonCount }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto w-full">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <p className="text-sm text-gray-500 mb-4">{lessonCount} Lessons</p>
            <div className="flex justify-between">
                <button className="flex items-center justify-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                    <FiEye className="mr-2" />
                    View
                </button>
                <button className="flex items-center justify-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                    <FiEdit className="mr-2" />
                    Edit
                </button>
                <button className="flex items-center justify-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                    <FiTrash2 className="mr-2" />
                    Delete
                </button>
            </div>
        </div>
    );
});

export default Admin_Module_Card;
