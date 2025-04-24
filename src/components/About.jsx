import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const About = () => {
  const fName = "Liton";
  const lName = "Ali";
  const Frelance = "Available";
  const Language = "English, Bangla";
  const Country = "Bangladeshi";
  const Email = "mdlitonali9118@gmail.com";
  const Address = "Rajshahi, Bangladesh";
  const Phone = "+8801791182660";
  const exparience = "1+";
  const projects = "50+";

  return (
    <section>
      <div className="pb-16">
        {/* top section */}
        <div className="bg-[#F5F5F5]/30">
          <div className="container mx-auto py-2 md:py-5 lg:py-10">
            <div className="lg:bg-[url('src/assets/RESUME.png')] bg-center bg-no-repeat">
              <div className="md:py-1 lg:py-4">
                <h1 className="text-center text-[#000000] font-semibold text-xl md:2xl lg:text-4xl">
                  About <span className="text-[#FF9C01] font-bold">ME</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="container mx-auto lg:w-3/5 flex lg:flex-row flex-col items-center justify-center lg:justify-between gap-3 md:gap-7 lg:gap-10 pt-3 md:pt-10 lg:pt-20">
          {/* left part */}
          <div className="text-center">
            <h1 className="font-medium text-2xl tracking-wide pb-2 md:pb-5 lg:pb-10">
              PERSONAL <span className="text-[#FF9C01] font-bold">INFOS</span>
              <span>
                <hr className="text-[#FF9C01] mt-2" />
              </span>
            </h1>

            <div className="flex gap-2 md:gap-5  lg:gap-10 text-start justify-between lg:justify-center items-center">
              <div className="space-y-1 md:space-y-[6px] lg:space-y-2">
                <h1 className="text-[#000000]/50 text-[12px] md:text-[15px] lg:text-base">
                  First Name:
                  <span className="text-black font-medium tracking-wide">
                    {fName}
                  </span>
                </h1>
                <h1 className="text-[#000000]/50 text-[12px] md:text-[15px] lg:text-base">
                  Freelance:
                  <span className="text-black font-medium tracking-wide">
                    {Frelance}
                  </span>
                </h1>
                <h1 className="text-[#000000]/50 text-[12px] md:text-[15px] lg:text-base">
                  Language:
                  <span className="text-black font-medium tracking-wide">
                    {Language}
                  </span>
                </h1>
                <h1 className="text-[#000000]/50 text-[12px] md:text-[15px] lg:text-base">
                  Email:
                  <span className="text-black font-medium tracking-wide">
                    {Email}
                  </span>
                </h1>
              </div>
              <div className="space-y-1 md:space-y-[6px] lg:space-y-2">
                <h1 className="text-[#000000]/50 text-[12px] md:text-[15px] lg:text-base">
                  Last Name:{" "}
                  <span className="text-black font-medium tracking-wide">
                    {lName}
                  </span>
                </h1>
                <h1 className="text-[#000000]/50 text-[12px] md:text-[15px] lg:text-base">
                  Nationalty:{" "}
                  <span className="text-black font-medium tracking-wide">
                    {Country}
                  </span>
                </h1>
                <h1 className="text-[#000000]/50 text-[12px] md:text-[15px]  lg:text-base text-nowrap ">
                  Address:{" "}
                  <span className="text-black font-medium tracking-wide">
                    {Address}
                  </span>
                </h1>
                <h1 className="text-[#000000]/50 text-[12px] md:text-[15px] lg:text-base">
                  Phone:{" "}
                  <span className="text-black font-medium tracking-wide">
                    {Phone}
                  </span>
                </h1>
              </div>
            </div>
            <button type="button">
              <a
                href="src\assets\main.png"
                download
                className="flex items-center py-5 relative"
              >
                <p className="font-medium text-xl border lg:border-2 border-[#FF9C01] px-10 py-1 rounded-full">
                  Download CV
                </p>
                <FaFileDownload className="bg-[#FF9C01] w-12 h-12 p-2 rounded-full absolute right-[-10px]" />
              </a>
            </button>
          </div>
          {/* right part */}
          <div className="flex flex-row lg:flex-col gap-x-10 md:gap-y-8 ">
            <div className="border lg:border-2 border-[#FF9C01] p-5">
              <h1 className="text-[#FF9C01] font-medium lg:font-bold text-3xl">
                {exparience}
              </h1>
              <p className="ps-5 text-black/50 text-[12px] md:text-base">
                YEARS OF
              </p>
              <p className="ps-5 text-black/50 text-[12px] md:text-base">
                EXPERIENCE
              </p>
            </div>
            <div className="border lg:border-2 border-[#FF9C01] p-5">
              <h1 className="text-[#FF9C01] font-medium lg:font-bold text-3xl">
                {projects}
              </h1>
              <p className="ps-5 text-black/50 text-[12px] md:text-base">
                FINISHED
              </p>
              <p className="ps-5 text-black/50 text-[12px] md:text-base">
                PROJECTS
              </p>
            </div>
          </div>
        </div>
        {/* skills section */}
        <div className="container mx-auto flex flex-col items-center pt-6 md:pt-12 lg:pt-20">
          <h1 className="font-semibold text-base md:text-lg lg:text-2xl py-2 md:py-4 lg:py-6">
            I've been working with the following technologies
            <span>
              <hr className="mt-2 text-[#FF9C01]" />
            </span>
          </h1>
          <div className="flex flex-row gap-5">
            <h1 className="flex items-center gap-1 text-[10px] md:text-base">
              <GiCheckMark classname="text-[#FF9C01]" />
              <h2 className="font-medium tracking-wide">REACT.JS</h2>
            </h1>
            <h1 className="flex items-center gap-1 text-[10px] md:text-base">
              <GiCheckMark classname="text-[#FF9C01]" />
              <h2 className="font-bold   tracking-wide">JAVASCRIPT</h2>
            </h1>
            <h1 className="flex items-center gap-1 text-[10px] md:text-base">
              <GiCheckMark classname="text-[#FF9C01]" />
              <h2 className="font-bold   tracking-wide">TYPESCRIPT</h2>
            </h1>
            <h1 className="flex items-center gap-1 text-[10px] md:text-base">
              <GiCheckMark /> <h2 className="font-bold tracking-wide">HTML5</h2>
            </h1>
          </div>
          <div className="flex flex-row gap-5 pt-2 ">
            <h1 className="flex items-center gap-1 text-[10px] md:text-base">
              <GiCheckMark classname="text-[#FF9C01]" />
              <h2 className="font-bold tracking-wide">REACT ROUTER</h2>
            </h1>
            <h1 className="flex items-center gap-1 text-[10px] md:text-base">
              <GiCheckMark classname="text-[#FF9C01]" />
              <h2 className="font-bold tracking-wide">TAILWIND CSS</h2>
            </h1>
            <h1 className="flex items-center  gap-1 text-[10px] md:text-base">
              <GiCheckMark />
              <h2 className="font-bold tracking-wide">Material UI</h2>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
