import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  const titleName = "-I'M Liton Ali";

  const aboutMe =
    "I'm A Nigerian based webs designer and front-end developer focused on creating a clean & user friendly experiences. I am passionate about building excellent software that improves the lives of those around me.";

  return (
    <section className="bg-[#f1e8e6] pb-5">
      <div className=" container mx-auto flex lg:flex-row flex-col items-center justify-between gap-1 md:gap-5 lg:gap-10 pt-3 md:pt-12 lg:pt-20 lg:px-0 md:px-1 px-2">
        {/* left Section */}
        <div>
          <img
            className="w-[198px] h-[223px] md:w-[400px] md:h-[450px] lg:w-[617px] lg:h-[696px]"
            src="public\image\main.png.png"
            alt="Profile Logo"
          />
        </div>
        {/* Right Section */}
        <div className="flex flex-col items-center lg:items-start gap-2 md:gap-4 lg:gap-7">
          <div>
            <h1 className="text-[#FF9C01] text-[20px] md:text-2xl lg:text-4xl font-bold tracking-wider">
              {titleName}
            </h1>
            <span className="text-[#FF9C01] font-semibold tracking-wide text-[13px] md:text-[19px] lg:text-2xl">
              FrontEnd Developer
            </span>
          </div>
          <p className="w-[217px] md:w-[400px] lg:max-w-[597px] text-[9px] md:text-[18px] lg:text-[20px]">
            {aboutMe}
          </p>
          <div>
            <button className="flex items-center">
              <NavLink
                className=" bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-6 lg:px-9 lg:py-1 shadow-y-lg shadow-xl rounded-full lg:text-[20px] text-white lg:font-medium tracking-wide"
                to="contact"
              >
                Hire Me
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
