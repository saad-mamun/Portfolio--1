import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Footer";
import Footerone from "./Footerone";

const Home = () => {
  const titleName = "-I'M Liton Ali";

  const aboutMe =
    "I'm Liton, a frontend developer with 1 year of experience building responsive and dynamic web applications. I specialize in Next.js, React.js, JavaScript, Tailwind CSS, Material UI, CSS, and HTML. I'm passionate about creating clean, user-friendly interfaces and continuously improving my skills to deliver high-quality web experiences.";

  return (
    <section>
      <div className="bg-[#f1e8e6] pb-5">
        <div className=" container mx-auto flex lg:flex-row flex-col items-center justify-between gap-1 md:gap-5  pt-3 md:pt-12 lg:pt-20  md:px-1 px-2">
          {/* left Section */}
          <div>
            <img
              className="w-[198px] h-[223px] md:w-[400px] md:h-[450px] lg:w-[617px] lg:h-[696px]"
              src="https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/472138886_1109627913947233_8736298291278056247_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEQN3IJc8bmQo0i17T9tJwNnQmIdBQLxhidCYh0FAvGGJTWMC3aCsKGrUgHV3uzKxS4brhLKJpz_b6mxYRT8G-e&_nc_ohc=mtoAiXGWD-oQ7kNvwGnY7DY&_nc_oc=AdlnRoh99P2mU7baHQCSoiELatMK68xNpB2uGeszCpW6DvWjSPQMSnBTxeOR9hyeV-I&_nc_zt=23&_nc_ht=scontent.fdac41-2.fna&_nc_gid=N11xDGxURyPHIK82D8J5tQ&oh=00_AfGaiYKB7MnZnTAcM9Zx-EGOfa6CNLrx2QRnRGS3ZdDrUA&oe=68195EE3"
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
            <p className="w-[217px] md:w-[400px] lg:max-w-[597px] text-[9px] md:text-[17px] lg:text-[19px] opacity-90">
              {aboutMe}
            </p>
            <div>
              <button className="flex items-center">
                <NavLink
                  className=" bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-6 md:px-8 lg:px-9 py-1 shadow-y-lg shadow-xl rounded-full lg:text-[20px] text-white lg:font-medium tracking-wide"
                  to="contact"
                >
                  Hire Me
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Contact />
      <Footerone />
    </section>
  );
};

export default Home;
