import React from "react";
import { FaUsers, FaLightbulb, FaGlobe, FaTrophy } from "react-icons/fa";
import AboutUsWhoWeAre from "./AboutUsWhoWeAre";
import AboutUsOurStory from "./AboutUsOurStory";

function AboutUsPage2() {
    return (
        <div
            className="w-full min-h-screen bg-gradient-to-b from-[#F7F7F7] to-white"
            id="about-us-page"
        >
            {/* Wrapper For Max Width 1280px */}
            <div className="max-w-7xl mx-auto text-mainTextColor space-y-8 p-4 md:p-8">
                <header className="text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-700">
                        Welcome To FleetBlue Media
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Empowering businesses with innovative media solutions
                        and cutting-edge technology.
                    </p>
                </header>

                {/* Who We Are Section */}
                <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <AboutUsWhoWeAre />
                </section>

                {/* Our Story Section */}
                <section className="bg-[#0B1344] text-white rounded-lg shadow-md p-6 md:p-8">
                    <AboutUsOurStory />
                </section>

                {/* Our Mission Section */}
                <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Our Mission
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        At FleetBlue Media, our mission is to revolutionize the
                        media landscape by providing innovative,
                        technology-driven solutions that empower businesses to
                        thrive in the digital age. We are committed to
                        delivering exceptional value to our clients through our
                        expertise, creativity, and unwavering dedication to
                        excellence.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        We strive to be at the forefront of technological
                        advancements, constantly innovating to provide our
                        clients with the tools they need to succeed in an
                        ever-evolving digital landscape. Our team is dedicated
                        to fostering a culture of creativity, collaboration, and
                        continuous improvement, ensuring that we consistently
                        deliver results that exceed expectations.
                    </p>
                </section>

                {/* Key Features Section */}
                <section className="bg-indigo-50 rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                        Why Choose FleetBlue Media
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FeatureCard
                            icon={<FaLightbulb className="text-indigo-500" />}
                            title="Innovative Solutions"
                            description="Cutting-edge technology to keep you ahead of the curve."
                        />
                        <FeatureCard
                            icon={<FaUsers className="text-indigo-500" />}
                            title="Customer-Centric Approach"
                            description="Tailored solutions to meet your unique needs."
                        />
                        <FeatureCard
                            icon={<FaGlobe className="text-indigo-500" />}
                            title="Global Reach"
                            description="Localized expertise with global insights."
                        />
                        <FeatureCard
                            icon={<FaTrophy className="text-indigo-500" />}
                            title="Award-Winning Team"
                            description="Recognized for creativity and technical excellence."
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-white rounded-lg shadow p-6 flex items-start space-x-4">
            <div className="flex-shrink-0">
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}

export default AboutUsPage2;
