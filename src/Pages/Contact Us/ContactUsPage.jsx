import React from "react";
import HomePageNavbar from "../../Home_PageComponents/HomePageNavbar";
import GlobalFooter from "../../Common_Components/GlobalFooter";
import StyledInput from "../../Common_Components/Form_Components/StyledInput";
import UseAnimations from "react-useanimations";
import linkedin from "react-useanimations/lib/linkedin";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import twitter from "react-useanimations/lib/twitter";
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
                            <div className="flex gap-2 mt-2 text-2xl">
                                <span className="border rounded-full p-1">
                                    <UseAnimations
                                        animation={instagram}
                                        strokeColor="white"
                                        size={30}
                                    />
                                    {/* <FaSquareInstagram /> */}
                                </span>
                                <span className="border rounded-full p-1 ">
                                    <UseAnimations
                                        animation={facebook}
                                        strokeColor="white"
                                        size={30}
                                    />
                                    {/* <FaFacebook /> */}
                                </span>
                                <span className="border rounded-full p-1 ">
                                    <UseAnimations
                                        animation={twitter}
                                        strokeColor="white"
                                        size={30}
                                    />
                                    {/* <FaTwitter /> */}
                                </span>
                                <span className="border rounded-full p-1 ">
                                    <UseAnimations
                                        animation={linkedin}
                                        size={30}
                                        strokeColor="white"
                                    />
                                    {/* <FaLinkedin /> */}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* This FOrm Contain All The Form Input ANd Data.. */}
                    <form
                        className="lg:w-1/3  space-y-2 border border-gray-300 shadow-sm rounded-md p-4 "
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
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.358063424892!2d82.99623627438147!3d25.325763126483196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2d12862ccd93%3A0x796782fc90ad6a2f!2sMedia%20FleetBlue!5e0!3m2!1sen!2sin!4v1738743476561!5m2!1sen!2sin"
                        height="450"
                        className="border lg:w-[350px]"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            {/* <GlobalFooter /> */}
        </>
    );
}

export default ContactUsPage;
