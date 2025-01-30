import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const onSubmit = (data) => {
        console.log("Login Form Submitted", data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-950 to-gray-800 relative">
            <Link
                to={"/"}
                className="absolute  md:pl-0 top-3 md:top-10 md:left-[10%] -translate-x-[50%] text-gray-300 capitalize  items-center gap-3 font-medium text-sm hidden md:flex"
            >
                <span className="md:text-3xl">
                    <IoArrowBackOutline />
                </span>{" "}
                Back To Home
            </Link>

            <div className="w-full max-w-md p-8 space-y-6 md:bg-gray-900 md:shadow-xl md;rounded-xl text-white">
                <h2 className="text-2xl font-normal text-center tracking-wide ">
                    Welcome Back
                </h2>
                <p className="text-gray-400 text-center">Login to continue</p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5 text-sm text-gray-400"
                >
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-4 text-gray-500" />
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
                            className="pl-10 p-3 w-full rounded-md bg-gray-800 border border-gray-700 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition outline-none"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-4 text-gray-500" />
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
                            className="pl-10 p-3 w-full rounded-md bg-gray-800 border border-gray-700 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition outline-none"
                        />
                        <span
                            className="absolute right-3 top-4 cursor-pointer text-gray-500"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="form-checkbox outline-none bg-gray-800 border-gray-700 rounded text-blue-400 focus:ring-blue-400"
                            />
                            <span className="text-gray-400">Remember me</span>
                        </label>
                        <Link
                            to="/forgot-password"
                            className="text-blue-400 hover:text-blue-300"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-500 rounded-md hover:bg-blue-600 transition font-medium text-gray-200"
                    >
                        Sign In
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-400">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-blue-400 hover:text-blue-300"
                        >
                            Sign Up Now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
