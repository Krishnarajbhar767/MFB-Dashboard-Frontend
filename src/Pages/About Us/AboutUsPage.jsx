import React from "react";
import HomePageNavbar from "../../Home_PageComponents/HomePageNavbar";
import GlobalFooter from "../../Common_Components/GlobalFooter";
import AboutUsWhoWeAre from "./AboutUsWhoWeAre";
import AboutUsOurStory from "./AboutUsOurStory";

function AboutUsPage() {
    // Todo ----> 31/01/2025 - OverFlow Element
    return (
        <>
            {/* <HomePageNavbar /> */}
            <div className="w-full h-auto bg-[#F7F7F7]" id="about-us-page">
                {/* Wrapper For Max WIdth 12xx px */}
                <div className="max-w-7xl mx-auto  text-mainTextColor space-y-4  p-4 ">
                    <h1 className="text-center text-2xl md:text-[1.7rem] font-semibold capitalize lg:w-1/3 mx-auto ">
                        Welcome To media FleetBlue
                    </h1>
                    <h2 className=" lg:w-1/3 md:w-1/2 mx-auto text-center text-sm font-medium ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Corporis, aspernatur.
                    </h2>
                    {/* Whoo We Are Section */}
                    <div className="">
                        <AboutUsWhoWeAre />
                    </div>
                </div>

                <div className="w-full bg-[#0B1344] ">
                    <AboutUsOurStory />
                </div>

                <div className="max-w-7xl mx-auto py-4 text-mainTextColor p-4">
                    <h1 className="text-2xl font-semibold ">Our Misson</h1>
                    <p className="font-normal text-sm  md:text-left text-center ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iure deleniti similique ipsam dolorum repellendus
                        quod explicabo in laudantium, doloribus quidem magnam,
                        cumque molestias provident nostrum nulla soluta quasi
                        officia libero voluptatem nobis minima. Voluptatibus,
                        nemo corrupti ipsa fuga eveniet excepturi voluptatum
                        odit repellat maxime illum, harum nam pariatur corporis,
                        laudantium nesciunt! Accusantium nemo doloremque
                        repellendus. Tempore cumque suscipit enim atque,
                        reprehenderit modi reiciendis corrupti ratione error
                        quibusdam dicta voluptatem facere natus provident
                        placeat nobis alias, magnam recusandae. Qui tenetur quis
                        minima, quia molestias animi quidem porro exercitationem
                        ipsam commodi, natus incidunt vitae optio sint omnis
                        voluptatibus aliquid sit sequi corrupti, nemo distinctio
                        quisquam ut ullam? Perspiciatis tenetur maxime, impedit
                        inventore repellendus repudiandae sunt facere aspernatur
                        sequi non minus, unde dolore consectetur cumque omnis
                        ipsum quaerat rem blanditiis. Corrupti adipisci deleniti
                        error, in dolorum eos minus, blanditiis obcaecati, culpa
                        mollitia quibusdam assumenda porro quos! Asperiores
                        beatae porro minima, assumenda esse fugiat laboriosam
                        dicta facere fuga tempora cum repudiandae earum,
                        voluptas corrupti, fugit quam neque accusantium
                        doloribus velit ratione. Dolore reiciendis placeat
                        nesciunt dolor vitae fuga quas beatae illum corporis
                        fugiat. Tenetur aspernatur perferendis iste fugit
                        molestiae tempore alias sit cupiditate animi? Delectus
                        quasi ipsa harum eligendi quis libero doloribus odit
                        laborum.
                    </p>
                </div>
            </div>
            {/* <GlobalFooter /> */}
        </>
    );
}

export default AboutUsPage;
