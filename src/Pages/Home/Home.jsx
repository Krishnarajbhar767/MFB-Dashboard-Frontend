import React from "react";

import { useNavigate } from "react-router-dom";
import HomePageNavbar from "../../Home_PageComponents/HomePageNavbar";
import HomePageHeroSection from "./HomeComponents/Home_Page_Hero_Section";
import HomeCourseCategory from "./HomeComponents/HomeCourseCategory";
import HomeMostPopularCourses from "./HomeComponents/HomeMostPopularCourses";
import HomeWhyChooseUs from "./HomeComponents/HomeWhyChooseUs";
import HowWeDeliverExellence from "./HomeComponents/HowWeDeliverExellence";
import HomeWhatOurStudentSays from "./HomeComponents/HomeWhatOurStudentSays";
import HomeMeetOurTutors from "./HomeComponents/HomeMeetOurTutors"; // we can remove it
import GlobalFooter from "../../Common_Components/GlobalFooter";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="">
            <div className="w-full h-fit">
                {/* Navbar */}
                {/* <div className="">
                    <HomePageNavbar />
                </div> */}
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
                <div>
                    <HowWeDeliverExellence />
                </div>
                <div>
                    <HomeWhatOurStudentSays />
                </div>
            </div>
            {/* <GlobalFooter /> */}
        </div>
    );
}

export default Home;
