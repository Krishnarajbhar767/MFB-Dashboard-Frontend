import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";

import { IoArrowBackOutline, IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import StyledInput from "../../Common_Components/Form_Components/StyledInput";
import UseAnimations from "react-useanimations";
import visibility2 from "react-useanimations/lib/visibility2";
import arrowLeftCircle from "react-useanimations/lib/arrowLeftCircle";
import IconBtn from "../../Common_Components/IconBtn";
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
                className="absolute  md:pl-0 top-3  lg:top-10 md:left-[9%] -translate-x-[50%] text-gray-300 capitalize  items-center gap-2 font-medium text-xs lg:text-sm hidden md:flex"
            >
                <span className="lg:text-3xl text-xl">
                    {/* <IoArrowBackOutline /> */}
                    <UseAnimations
                        animation={arrowLeftCircle}
                        strokeColor="white"
                    />
                </span>{" "}
                Back To Home
            </Link>
            <div className="w-full max-w-lg p-10 space-y-6 md:bg-gray-900 md:shadow-lg md:rounded-2xl text-white">
                <h2 className="text-3xl font-normal text-center">Sign Up</h2>
                <form
                    onSubmit={handleSubmit(onSubmit, (err) =>
                        console.log("Printing error Of SIgn UP FOrm", err)
                    )}
                    className="space-y-4 text-sm text-gray-400"
                >
                    <div className="flex space-x-4 ">
                        <div className="relative w-1/2">
                            <FaUser className="absolute left-3 top-4 text-gray-400" />
                            <StyledInput
                                placeholder={"First Name"}
                                required={"First Name Is Required"}
                                register={register}
                                inputName="firstName"
                                error={errors.firstName}
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-sm">
                                    {errors.firstName.message}
                                </p>
                            )}
                        </div>
                        <div className="relative w-1/2">
                            <FaUser className="absolute left-3 top-4 text-gray-400" />
                            <StyledInput
                                placeholder={"Last Name"}
                                required={"Last Name Is Required"}
                                register={register}
                                inputName="lastName"
                                error={errors.lastName}
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
                        <StyledInput
                            placeholder={"Phone Number"}
                            type={""}
                            required={"Phone Number Is Required"}
                            register={register}
                            inputName="phone"
                            error={errors.phone}
                            validation={{
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Invalid Phone Number",
                                },
                            }}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
                        <StyledInput
                            type={"email"}
                            placeholder={"Email "}
                            required={"Email Is Required"}
                            register={register}
                            inputName="email"
                            error={errors.email}
                            validation={{
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address",
                                },
                            }}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="relative">
                        <FaLock className="absolute outline-none left-3 top-4 text-gray-400" />

                        <StyledInput
                            type={showPassword ? "text" : "password"}
                            placeholder={"Password "}
                            required={"Password Is Required"}
                            register={register}
                            inputName="password"
                            error={errors.email}
                            validation={{
                                minLength: {
                                    value: 6,
                                    message: "Must be at least 6 characters",
                                },
                            }}
                        />
                        <span
                            className="absolute right-3 top-4 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >
                            {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
                            <UseAnimations
                                animation={visibility2}
                                strokeColor="white"
                            />
                        </span>
                        {errors.password && (
                            <p className="text-red-500 text-sm">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-4 text-gray-400" />

                        <StyledInput
                            type={showPassword ? "text" : "password"}
                            placeholder={"Confirm Password"}
                            required={"Confirm Password is required"}
                            register={register}
                            inputName="confirmPassword"
                            error={errors.email}
                            validation={{
                                validate: (value) =>
                                    value === watch("password") ||
                                    "Passwords do not match",
                            }}
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-mainBgBlue border-non rounded-lg"
                    >
                        <IconBtn border={"none"}>Sign Up</IconBtn>
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
