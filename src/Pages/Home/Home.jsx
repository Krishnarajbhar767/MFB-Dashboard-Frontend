import React from "react";

import { useNavigate } from "react-router-dom";
import HomePageNavbar from "../../Home_PageComponents/HomePageNavbar";
import HomePageHeroSection from "./HomeComponents/Home_Page_Hero_Section";
import HomeCourseCategory from "./HomeComponents/HomeCourseCategory";
import HomeMostPopularCourses from "./HomeComponents/HomeMostPopularCourses";
import HomeWhyChooseUs from "./HomeComponents/HomeWhyChooseUs";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="w-screen h-screen overflow-x-hidden bg-gray-50 ">
            <div className="w-full h-fit">
                {/* Navbar */}
                <div className="">
                    <HomePageNavbar />
                </div>
                {/* Home Page First Section */}
                <div>
                    <HomePageHeroSection />
                </div>
                <div>
                    <HomeCourseCategory />
                </div>
                <div>
                    <HomeMostPopularCourses />
                </div>
                <div>
                    <HomeWhyChooseUs />
                </div>
            </div>
        </div>
    );
}

export default Home;
