import React from "react";

function AboutUsWhoWeAre() {
    return (
        <div className=" md:flex lg:px-20 md:px-3 md:items-center w-full lg:gap-0 md:gap-4 ">
            {/* Container... For Text */}
            <div className="md:w-1/2 space-y-2 ">
                <h2 className="md:text-2xl font-medium text-2xl md:text-left text-center">
                    Who We Are
                </h2>
                <p className="text-sm font-normal">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iure quos quod architecto nesciunt harum eligendi ullam
                    perferendis nostrum sed, deserunt earum fugit iste corrupti?
                    Et quisquam perferendis delectus tenetur ab voluptates
                    doloribus, explicabo obcaecati enim, quam quasi aperiam
                    facilis corrupti, cum aliquam. Delectus doloremque enim
                    dignissimos velit inventore aliquid, quibusdam aut ipsum
                    autem, deleniti hic vitae natus facilis, odio quae qui
                    dolore itaque a molestiae! Veritatis nostrum ullam facere
                    voluptatem optio omnis magni porro cum atque? Sunt suscipit
                    rem voluptate?
                </p>
                <div className="w-fit mx-auto ">
                    <button className="bg-mainTextColor text-gray-50 px-4 py-2 text-sm font-normal rounded-sm mt-3">
                        Meet The Team
                    </button>
                </div>
            </div>
            {/* COntainer... For Images  */}
            <div className=" md:w-1/2 h-auto md:h-[400px] ">
                <img
                    src="https://blog.tubikstudio.com/wp-content/uploads/2018/02/design_party_graphic_design_tubik.png"
                    alt="aboutUs Who We Are "
                    className="mix-blend-multiply w-full h-full object-cover  overlow-hidden"
                />
            </div>
        </div>
    );
}

export default AboutUsWhoWeAre;
