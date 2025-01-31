import React from "react";
import HomePageNavbar from "../../Home_PageComponents/HomePageNavbar";
import GlobalFooter from "../../Common_Components/GlobalFooter";
import StyledInput from "../../Common_Components/Form_Components/StyledInput";
import {
    FaEnvelope,
    FaFacebook,
    FaLinkedin,
    FaMessage,
    FaSquareInstagram,
    FaTwitter,
    FaUser,
} from "react-icons/fa6";
import { useForm } from "react-hook-form";
import ContactUsInput from "./ContactUsInput";
import IconBtn from "../../Common_Components/IconBtn";
import { IoCallSharp } from "react-icons/io5";
function ContactUsPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        console.log("Printing Contact Us Form Data", data);
    };
    return (
        <>
            {/* <HomePageNavbar /> */}
            <div className="w-full h-auto  bg-gray-100" id="about-us-page">
                {/* Wrapper For Max WIdth 12xx px */}
                <div className="max-w-7xl mx-auto  text-mainTextColor p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-7 lg:gap-10 justify-center">
                    {/* One Div For Image Container.... */}
                    <div className=" lg:w-1/4 py-6 px-3 text-sm rounded-md bg-gradient-to-b from-[#4393F1] to-[#A0CCF8] text-gray-100 space-y-2">
                        <h1 className="text-lg font-medium">Get In Touch</h1>
                        {/* Visit us  */}
                        <div className="space-y-[2px]">
                            <h2 className="mb-1 font-medium text-base">
                                Visit Us
                            </h2>
                            <p className="text-sm font-light">
                                Come say hello at outr office HQ.
                            </p>
                            <p className="text-sm font-normal capitalize">
                                Jagatganj Varanasi,Uttar Pradesh,221001
                            </p>
                        </div>
                        {/* Chat to us  */}
                        <div className="space-y-[2px]">
                            <h2 className="mb-1 font-medium text-base">
                                Chat To Us
                            </h2>
                            <p className="text-sm font-light">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                            <p className="text-sm font-normal capitalize">
                                mediafleetblue@gmail.com
                            </p>
                        </div>
                        {/* Call Us */}
                        <div className="space-y-[2px]">
                            <h2 className="mb-1 font-medium text-base">
                                Call Us
                            </h2>
                            <p className="text-sm font-light">
                                Mon-Sat 9AM - 6AM
                            </p>
                            <p className="text-sm font-normal capitalize">
                                91XXXXXXXXX
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-1 font-medium text-base">
                                Social Media
                            </h2>
                            <div className="flex gap-4 mt-2 text-2xl">
                                <span>
                                    <FaSquareInstagram />
                                </span>
                                <span>
                                    <FaFacebook />
                                </span>
                                <span>
                                    <FaTwitter />
                                </span>
                                <span>
                                    <FaLinkedin />
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* This FOrm Contain All The Form Input ANd Data.. */}
                    <form
                        className="lg:w-1/3  space-y-2 border border-gray-300 shadow-sm rounded-md p-4 rou"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="flex gap-4">
                            <div className="relative w-1/2">
                                <FaUser className="absolute left-3 top-3 text-gray-400" />
                                <ContactUsInput
                                    placeholder={"First Name"}
                                    required={"First Name Is Required"}
                                    register={register}
                                    inputName="firstName"
                                    error={errors.firstName}
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 font-medium text-xs mt-1">
                                        {errors.firstName.message}*
                                    </p>
                                )}
                            </div>
                            <div className="relative w-1/2">
                                <FaUser className="absolute left-3 top-3 text-gray-400" />
                                <ContactUsInput
                                    placeholder={"Last Name"}
                                    required={"Last Name Is Required"}
                                    register={register}
                                    inputName="lastName"
                                    error={errors.lastName}
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 font-medium text-xs mt-1">
                                        {errors.lastName.message}*
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                            <ContactUsInput
                                placeholder={"Email"}
                                required={"Email  Is Required"}
                                register={register}
                                inputName="email"
                                error={errors.email}
                                type={"email"}
                            />
                            {errors.email && (
                                <p className="text-red-500 font-medium text-xs mt-1">
                                    {errors.email.message}*
                                </p>
                            )}
                        </div>
                        <div className="relative">
                            <IoCallSharp className="absolute left-3 top-3 text-gray-400" />
                            <ContactUsInput
                                placeholder={"Phone Number"}
                                required={"Phone Number Is Required"}
                                register={register}
                                inputName="phone"
                                error={errors.phone}
                                type={"tel"}
                            />
                            {errors.phone && (
                                <p className="text-red-500 font-medium text-xs mt-1">
                                    {errors.phone.message}*
                                </p>
                            )}
                        </div>
                        <div className="relative">
                            {/* <FaMessage className="absolute left-3 top-1/ text-gray-400" /> */}
                            {/* <ContactUsInput
                                placeholder={"Message"}
                                required={"Message Is Required"}
                                register={register}
                                inputName="message"
                                error={errors.message}
                                type={"text"}
                            /> */}
                            <textarea
                                name="message"
                                {...register("message", {
                                    required: "Message Is Required",
                                })}
                                placeholder="Enter Your Message Here"
                                className="px-10 py-16  flex  w-full rounded-md  shadow-sm border border-gray-200 focus:border-blue-500 outline-none font-normal text-center"
                            ></textarea>
                            {errors.message && (
                                <p className="text-red-500 font-medium text-xs mt-1">
                                    {errors.message.message}*
                                </p>
                            )}
                        </div>
                        <button type="submit" className="w-full">
                            <IconBtn color={"#4789DE"}>Send Message</IconBtn>
                        </button>
                    </form>
                </div>
            </div>
            {/* <GlobalFooter /> */}
        </>
    );
}

export default ContactUsPage;
