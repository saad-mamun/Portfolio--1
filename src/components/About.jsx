import React from "react";
import { FaFileDownload } from "react-icons/fa";


const About = () => {

  const fName = "Liton";
  const lName = "Ali";
  const Frelance = "Available";
  const Language = "English, Bangla";
  const Country = "Bangladeshi";
  const Email = "mdlitonali9118@gmail.com";
  const Address = "Rajshahi, Bangladesh";
  const Phone = "+8801791182660";
  const exparience = "1+"



  return (
    <section>
      <div className="pb-16">
        {/* top section */}
        <div className="bg-[#F5F5F5]/30">
          <div className="container mx-auto py-10">
            <div className="bg-[url('src/assets/RESUME.png')] bg-center bg-no-repeat">
              <div className="py-4">
                <h1 className="text-center text-[#000000] font-semibold text-4xl">
                  About <span className="text-[#FF9C01] font-bold">ME</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="container mx-auto w-3/5 flex md:flex-row flex-col items-center justify-between gap-5 md:gap-10 lg:gap-20 pt-20">
          {/* left part */}
          <div className="text-center">
            <h1 className="font-medium text-2xl tracking-wide pb-10">
              PERSONAL <span className="text-[#FF9C01] font-bold">INFOS</span>
              <span>
                <hr className="text-[#FF9C01] mt-2" />
              </span>
            </h1>

            <div className="flex gap-20 text-start justify-center items-center">
              <div className="space-y-2">
                <h1 className="text-[#000000]/50">
                  First Name:{" "}
                  <span className="text-black font-medium tracking-wide">
                    {fName}
                  </span>
                </h1>
                <h1 className="text-[#000000]/50">
                  Freelance:{" "}
                  <span className="text-black font-medium tracking-wide">
                    {Frelance}
                  </span>
                </h1>
                <h1 className="text-[#000000]/50">
                  Language:{" "}
                  <span className="text-black font-medium tracking-wide">
                    {Language}
                  </span>
                </h1>
                <h1 className="text-[#000000]/50">
                  Email:{" "}
                  <span className="text-black font-medium tracking-wide">
                    {Email}
                  </span>
                </h1>
              </div>
              <div className="space-y-2">
                <h1 className="text-[#000000]/50">
                  Last Name:{" "}
                  <span className="text-black font-medium tracking-wide">
                    {lName}
                  </span>
                </h1>
                <h1 className="text-[#000000]/50">
                  Nationalty:{" "}
                  <span className="text-black font-medium tracking-wide">
                    {Country}
                  </span>
                </h1>
                <h1 className="text-[#000000]/50">
                  Address:{" "}
                  <span className="text-black font-medium tracking-wide">
                    {Address}
                  </span>
                </h1>
                <h1 className="text-[#000000]/50">
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
                <p className="font-medium text-xl border-2 border-[#FF9C01] px-10 py-1 rounded-full">
                  Download CV
                </p>
                <FaFileDownload className="bg-[#FF9C01] w-12 h-12 p-2 rounded-full absolute right-[-10px]" />
              </a>
            </button>
          </div>
          {/* right part */}
          <div className="space-y-8">
            <div className="border-2 border-[#FF9C01] p-5">
              <h1 className="text-[#FF9C01] font-bold text-3xl">
                {exparience}
              </h1>
              <p className="ps-5 text-black/50">YEARS OF</p>
              <p className="ps-5 text-black/50">EXPERIENCE</p>
            </div>
            <div className="border-2 border-[#FF9C01] p-5">
              <h1 className="text-[#FF9C01] font-bold text-3xl">
                {exparience}
              </h1>
              <p className="ps-5 text-black/50">YEARS OF</p>
              <p className="ps-5 text-black/50">EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
