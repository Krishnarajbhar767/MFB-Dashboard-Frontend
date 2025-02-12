import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import StyledInput from "../../../../../Common_Components/Form_Components/StyledInput";

function StudentPasswordSecuritySetting() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const changePasswordHandler = async (data) => {
        console.log("New Password Data ----->", data);
    };
    return (
        <div className="w-full ">
            <h1 className="text-gray-900 text-lg font-medium  py-2 bg-green-100 pl-4">
                Password & Security
            </h1>
            {/* Input Containers.. */}
            <form
                className="space-y-4 px-4 mt-2  mx-auto"
                onSubmit={handleSubmit(changePasswordHandler, () =>
                    console.log("Error While Submiting Change Password")
                )}
            >
                {/* Current Passowrd And New Password Container */}
                <div className="flex gap-4">
                    <div className="relative w-1/2">
                        <FaLock className="absolute outline-none left-3 top-4 text-gray-400" />

                        <StyledInput
                            borderColor={"#9ca3af"}
                            placeholder={"Current password "}
                            required={"Current Password is required"}
                            register={register}
                            inputName="currentPassword"
                            error={errors.currentPassword}
                            bgColor={"#fff"}
                            validation={{
                                minLength: {
                                    value: 6,
                                    message: "Must be at least 6 characters",
                                },
                            }}
                        />

                        {errors.currentPassword && (
                            <p className="text-red-500 text-sm">
                                {errors.currentPassword.message}
                            </p>
                        )}
                    </div>
                    <div className="relative w-1/2">
                        <FaLock className="absolute outline-none left-3 top-4 text-gray-400" />

                        <StyledInput
                            borderColor={"#9ca3af"}
                            placeholder={"New Password "}
                            required={"New password is required"}
                            register={register}
                            inputName="newPassword"
                            bgColor={"#fff"}
                            error={errors.newPassword}
                            validation={{
                                minLength: {
                                    value: 6,
                                    message: "Must be at least 6 characters",
                                },
                            }}
                        />

                        {errors.newPassword && (
                            <p className="text-red-500 text-sm">
                                {errors.newPassword.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="relative">
                    <FaLock className="absolute left-3 top-4 text-gray-400" />

                    <StyledInput
                        borderColor={"#9ca3af"}
                        type={showPassword ? "text" : "password"}
                        placeholder={"Confirm password"}
                        required={"Confirm password is required"}
                        register={register}
                        inputName="confirmPassword"
                        error={errors.confirmPassword}
                        bgColor={"#fff"}
                        validation={{
                            validate: (value) =>
                                value === watch("newPassword") ||
                                "Passwords do not match",
                        }}
                    />
                    <span
                        className="absolute right-3 top-4 cursor-pointer text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>
                <div className="flex items-center justify-end mt-4">
                    <button
                        type="submit"
                        class="py-2.5 px-6 text-sm font-normal rounded-lg bg-green-600 text-gray-100 cursor-pointer text-center shadow-xs transition-all duration-500 hover:bg-green-700"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default StudentPasswordSecuritySetting;
