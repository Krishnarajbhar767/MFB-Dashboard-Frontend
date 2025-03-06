import React from "react";
import IconBtn from "../IconBtn";

function ConfirmationModal({ modalData }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 w-[90%] max-w-md text-center">
                {/* Modal Content */}
                <h2 className="text-lg font-semibold text-gray-900">
                    {modalData?.text1}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{modalData?.text2}</p>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 mt-5">
                    <button
                        onClick={modalData?.btn1Handler}
                        className="px-5 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md shadow-md transition-all"
                    >
                        {modalData.btn1Text}
                    </button>
                    <button
                        onClick={modalData?.btn2Handler}
                        className="px-5 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md shadow-md transition-all"
                    >
                        {modalData.btn2Text}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;
