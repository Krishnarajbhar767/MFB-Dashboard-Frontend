import React from "react";
import {
    FaFacebook,
    FaLinkedin,
    FaSquareInstagram,
    FaTwitter,
} from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";

function GlobalFooter() {
    return (
        <div className="w-full bg-[#F2F2F2] py-4 border-t border-gray-300">
            <div className="max-w-7xl mx-auto flex md:flex-row flex-col md:justify-between gap-5 items-center  md:gap-0 py-4 md:py-8 text-gray-700 px-4 md:px-4">
                {/* Logo ANd ABout COmapny */}
                <div className="lg:max-w-[30%] md:max-w-[20%] space-y-4 ">
                    {/* Logo */}
                    <img
                        src="https://www.mediafleetblue.com/images/logo-v1.png"
                        className="h-14 w-28 bg-blue-400 object-contain"
                    />
                    {/* about mdeia fleet blue.... */}
                    <p className="text-sm text-mainTextColor">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad ut officiis facilis magni fuga voluptate odit, quis
                        labore natus praesentium blanditiis voluptatem, eum
                        mollitia modi ipsa atque porro dolores debitis?
                    </p>
                </div>
                {/* Pages */}
                <div className="md:space-y-4 text-center md:text-start">
                    <h1 className="lg:text-lg  font-medium">Pages</h1>
                    <ul className="text-sm font-normal">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Our Mentors</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                {/* Acticle */}
                <div className="md:space-y-4 text-center md:text-start">
                    <h1 className="lg:text-lg  font-medium">Article</h1>
                    <ul className="text-sm font-normal">
                        <li>Study Exam </li>
                        <li>About</li>
                        <li>Study Abroad</li>
                        <li>Future Scope</li>
                    </ul>
                </div>
                {/* Contact us */}
                <div className="md:space-y-4 text-center md:text-start">
                    <h1 className="lg:text-lg  font-medium">Contact Us</h1>
                    <ul className="text-sm font-normal text-center ">
                        <li className="flex items-center gap-2 font-normal">
                            <span className="text-mainBgBlue">
                                <TfiEmail />
                            </span>
                            <p>hello@example.com</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-mainBgBlue">
                                <IoMdCall />
                            </span>
                            +91XXXXXXXXX
                        </li>
                    </ul>
                </div>
                {/* Conect with us Social Media.. */}
                <div className="md:space-y-4 text-center md:text-start">
                    <h1 className=" lg:text-lg  font-medium">
                        Connect With Us
                    </h1>
                    {/* Social ICon */}
                    <div className="flex gap-4 mt-2 text-2xl ">
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
                {/* Line */}
            </div>
            <div className="max-w-7xl mx-auto h-[1px] bg-gray-400"></div>
            <h2 className="text-center mt-4 text-mainTextColor">
                Crafted with ❤️ by{" "}
                <span>
                    <a href="https://www.instagram.com/krishnarajbhar777">
                        Krishna
                    </a>
                </span>{" "}
                |{" "}
                <a href="https://www.mediafleetblue.com/">
                    © 2025 Media Fleet Blue
                </a>
            </h2>
        </div>
    );
}

export default GlobalFooter;
