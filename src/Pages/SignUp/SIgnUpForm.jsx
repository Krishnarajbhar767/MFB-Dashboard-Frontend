import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";

import { IoArrowBackOutline, IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const onSubmit = (data) => {
        console.log("Signup Form Submitted", data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 relative">
            <Link
                to={"/"}
                className="absolute top-8 lg:top-10 left-[10%] -translate-x-[50%] text-gray-300 capitalize  items-center gap-3 font-medium md:flex hidden"
            >
                <span className="text-3xl">
                    <IoArrowBackOutline />
                </span>{" "}
                Back TO Home
            </Link>
            <div className="w-full max-w-lg p-10 space-y-6 md:bg-gray-900 md:shadow-lg md:rounded-2xl text-white">
                <h2 className="text-3xl font-normal text-center">Sign Up</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 text-sm text-gray-400"
                >
                    <div className="flex space-x-4 ">
                        <div className="relative w-1/2">
                            <FaUser className="absolute left-3 top-4 text-gray-400" />
                            <input
                                type="text"
                                {...register("firstName", {
                                    required: "First Name is required",
                                })}
                                placeholder="First Name"
                                className="pl-10 p-3 w-full rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none font-normal "
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-sm">
                                    {errors.firstName.message}
                                </p>
                            )}
                        </div>
                        <div className="relative w-1/2">
                            <FaUser className="absolute left-3 top-4 text-gray-400" />
                            <input
                                type="text"
                                {...register("lastName", {
                                    required: "Last Name is required",
                                })}
                                placeholder="Last Name"
                                className=" outline-none pl-10 p-3 w-full rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500"
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-sm">
                                    {errors.lastName.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="relative">
                        <IoCallSharp className="absolute left-3 top-4 text-gray-400" />
                        <input
                            type="tel"
                            {...register("phone", {
                                required: "Phone Number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Invalid Phone Number",
                                },
                            })}
                            placeholder="Phone Number"
                            className="pl-10 p-3 w-full rounded-md bg-gray-800 outline-none border border-gray-700 focus:border-blue-500"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address",
                                },
                            })}
                            placeholder="Email"
                            className="pl-10 p-3 outline-none w-full rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="relative">
                        <FaLock className="absolute outline-none left-3 top-4 text-gray-400" />
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Must be at least 6 characters",
                                },
                            })}
                            placeholder="Password"
                            className="pl-10 p-3 outline-none w-full rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500"
                        />
                        <span
                            className="absolute right-3 top-4 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {errors.password && (
                            <p className="text-red-500 text-sm">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-4 text-gray-400" />
                        <input
                            type="password"
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: (value) =>
                                    value === watch("password") ||
                                    "Passwords do not match",
                            })}
                            placeholder="Confirm Password"
                            className="pl-10 p-3 w-full outline-none rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-500 rounded-md hover:bg-blue-600 transition text-gray-200"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="text-center mt-4 text-gray-400">
                    <p>
                        Already have an account?{" "}
                        <Link
                            to={"/login"}
                            className="text-blue-400 cursor-pointer"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
