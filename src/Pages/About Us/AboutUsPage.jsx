import React from "react";
import UseAnimations from "react-useanimations";
// EVERY ANIMATION NEEDS TO BE IMPORTED FIRST -> YOUR BUNDLE WILL INCLUDE ONLY WHAT IT NEEDS
import instagram from "react-useanimations/lib/instagram";
import facebook from "react-useanimations/lib/facebook";
import twitter from "react-useanimations/lib/twitter";
import linkedin from "react-useanimations/lib/linkedin";

import { useState, useEffect } from "react";

export default function AboutUsPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="bg-gradient-to-b from-[#F7F7F7] to-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
                <div
                    className={`text-center mb-16 transition-opacity duration-1000 ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        Welcome to{" "}
                        <span className="text-indigo-600">Media FleetBlue</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Empowering businesses with innovative media solutions
                        and cutting-edge technology.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {featuresData.map((feature) => (
                            <div
                                key={feature.name}
                                className={`relative transition-all duration-1000 delay-${
                                    feature.id * 200
                                } ${
                                    isVisible
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 -translate-x-4"
                                }`}
                            >
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <feature.icon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                                        {feature.name}
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div
                    className={`mt-20 transition-all duration-1000 delay-500 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                    }`}
                >
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Our Story
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Founded in 2010, FleetBlue began as a small startup with
                        a big vision: to revolutionize the media industry
                        through technology and innovation. Over the years, we've
                        grown from a team of five passionate individuals to a
                        global company serving clients across six continents.
                    </p>
                    <p className="mt-4 text-lg text-gray-500">
                        Our journey has been marked by continuous learning,
                        adaptation, and a relentless pursuit of excellence.
                        We've weathered industry changes, embraced new
                        technologies, and always kept our clients' needs at the
                        forefront of our innovations.
                    </p>
                </div>

                <div
                    className={`mt-20 transition-all duration-1000 delay-700 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                    }`}
                >
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Our Mission
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        At FleetBlue, our mission is to empower businesses of
                        all sizes with cutting-edge media solutions that drive
                        growth, engagement, and success. We strive to be at the
                        forefront of technological advancements, constantly
                        innovating to provide our clients with the tools they
                        need to thrive in an ever-evolving digital landscape.
                    </p>
                    <p className="mt-4 text-lg text-gray-500">
                        We are committed to fostering a culture of creativity,
                        collaboration, and continuous improvement. Our team is
                        dedicated to delivering exceptional value to our
                        clients, partners, and the communities we serve, while
                        maintaining the highest standards of integrity and
                        professionalism.
                    </p>
                </div>

                <div
                    className={`mt-20 transition-all duration-1000 delay-900 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                    }`}
                >
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Our Team
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Our diverse team of experts brings together a wealth of
                        experience from various fields including media,
                        technology, design, and business strategy. We believe
                        that our strength lies in our people – their passion,
                        creativity, and commitment to excellence.
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="text-center">
                                <div className="space-y-4">
                                    <img
                                        className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 object-cover"
                                        src={
                                            member.imageUrl ||
                                            "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                                        }
                                        alt=""
                                    />
                                    <div className="space-y-2">
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                            <h3>{member.name}</h3>
                                            <p className="text-indigo-600">
                                                {member.role}
                                            </p>
                                        </div>
                                        {/* Team Social ICons */}
                                        <ul className="flex justify-center space-x-5">
                                            <li>
                                                <a
                                                    href={member.instagramUrl}
                                                    className="text-gray-400 hover:text-gray-500"
                                                >
                                                    <UseAnimations
                                                        animation={instagram}
                                                    />
                                                </a>
                                            </li>
                                            {/* Team Socia */}
                                            <li>
                                                <a
                                                    href={member.linkedinUrl}
                                                    className="text-gray-400 hover:text-gray-500"
                                                >
                                                    <UseAnimations
                                                        animation={linkedin}
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href={member.twitterUrl}
                                                    className="text-gray-400 hover:text-gray-500"
                                                >
                                                    <UseAnimations
                                                        animation={twitter}
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href={member.facebookUrl}
                                                    className="text-gray-400 hover:text-gray-500"
                                                >
                                                    <UseAnimations
                                                        animation={facebook}
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const featuresData = [
    {
        id: 1,
        name: "Innovative Solutions",
        description:
            "We leverage cutting-edge technology to deliver innovative media solutions that keep our clients ahead of the curve.",
        icon: ({ className }) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={className}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
            </svg>
        ),
    },
    {
        id: 2,
        name: "Customer-Centric Approach",
        description:
            "Our team is dedicated to understanding and meeting the unique needs of each client, ensuring tailored solutions and exceptional service.",
        icon: ({ className }) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={className}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
        ),
    },
    {
        id: 3,
        name: "Global Reach",
        description:
            "With a presence in over 30 countries, we offer localized expertise combined with global insights to drive your success worldwide.",
        icon: ({ className }) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={className}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
    },
    {
        id: 4,
        name: "Award-Winning Team",
        description:
            "Our talented professionals have been recognized with numerous industry awards for their creativity and technical excellence.",
        icon: ({ className }) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={className}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
            </svg>
        ),
    },
];

const teamMembers = [
    {
        name: "Jane Cooper",
        role: "CEO & Founder",
        imageUrl:
            "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        twitterUrl: "#",
        linkedinUrl: "#",
        instagramUrl: "#",
        facebookUrl: "#",
    },
    {
        name: "Cody Fisher",
        role: "CTO",
        imageUrl:
            "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        twitterUrl: "#",
        linkedinUrl: "#",
        instagramUrl: "#",
        facebookUrl: "#",
    },
    {
        name: "Esther Howard",
        role: "Head of Design",
        imageUrl:
            "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
        twitterUrl: "#",
        linkedinUrl: "#",
        instagramUrl: "#",
        facebookUrl: "#",
    },
];
