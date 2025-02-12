import React, { useState } from "react";
import checkbox from "react-useanimations/lib/checkbox";
import UseAnimations from "react-useanimations";
import toast from "react-hot-toast";
function StudentDeleteAccountSetting() {
    const [isUserConfirmedDelete, setIsUserConfirmedDelete] = useState(false);
    const deleteAccountHandler = () => {
        if (!isUserConfirmedDelete) {
            toast.error("Please confirm first.");
        }
    };
    return (
        <div className="">
            <h1 className="text-gray-900 text-lg font-medium  py-2 bg-green-100 pl-4 ">
                Delete Account
            </h1>

            <div className="px-4 mt-3 space-y-3">
                <p className="w-[80%] text-sm font-normal text-gray-600">
                    When you delete your account,You lose acces to your front
                    account service, and we permanently delete your personal
                    data, you can cancel your deletion before 14 days.
                </p>
                <label className="flex items-center space-x-2 -ml-3">
                    <span>
                        <UseAnimations
                            animation={checkbox}
                            strokeColor="black"
                            className="cursor-pointer"
                            onClick={() =>
                                setIsUserConfirmedDelete(!isUserConfirmedDelete)
                            }
                        />
                    </span>
                    <span className="text-gray-600 text-xs font-medium">
                        Confirm that i want to delete my account
                    </span>
                </label>
                <div className="flex items-center justify-end gap-4">
                    <button
                        type="button"
                        class="py-2.5 px-6 text-sm rounded-lg border border-solid border-emerald-200 text-emerald-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-emerald-600 hover:text-white"
                    >
                        Learn more
                    </button>
                    <button
                        onClick={deleteAccountHandler}
                        type="button"
                        class="py-2.5 px-6 text-sm rounded-lg border cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 bg-red-500  hover:bg-red-700 text-white"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StudentDeleteAccountSetting;
