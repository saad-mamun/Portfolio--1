import React from "react";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Contact = () => {

  const MyEmail = "mdlitonali9118@gmail.com";
  const phoneNumber = "+8801791182660"
  const brefMail = "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision"
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      formData.append("access_key", "07661246-184e-4668-9ff0-2c69a9b56b2d");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
      }
    };


  return (
    <section className="bg-[#F5F5F5] h-screen">
      <div className="container mx-auto md:w-3/5 py-3 md:py-10 lg:py-16">
        <div>
          <h1 className="font-semibold text-xl md:text-2xl lg:text-4xl text-center">
            GET IN <span className="text-[#FF9C01]">TOUCH</span>
          </h1>
        </div>
        {/* flex section */}
        <div className="flex lg:flex-row flex-col items-center lg:items-start gap-5 md:gap-10 lg:gap-16 justify-between pt-5 md:pt-10 lg:pt-16">
          {/* left section */}
          <div>
            <div className="space-y-3">
              <h1 className="text-[#FF9C01] font-semibold text-xl md:text-2xl">
                LET'S TALK ABOUT YOUR PROJECT
              </h1>
              <p className="max-w-[330px] font-medium text-[#57636C] text-[13px] md:text-base">
                {brefMail}
              </p>
              <div className="flex items-center gap-2">
                <FaMailBulk className="w-[30px] md:w-[40px] h-[20px] md:h-[40px] text-[#FF9C01]" />
                <div>
                  <h1 className="text-[10px] md:text-base text-[#57636C]">
                    MAIL ME
                  </h1>
                  <p className="font-semibold text-[12px] md:text-base">
                    {MyEmail}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="w-[30px] md:w-[40px] h-[20px] md:h-[40px] text-[#FF9C01]" />
                <div>
                  <h1 className="text-[10px] md:text-base text-[#57636C]">
                    CALL ME
                  </h1>
                  <p className="font-semibold text-[12px] md:text-base">
                    {phoneNumber}
                  </p>
                </div>
              </div>
            </div>
            {/* social icons */}
            <div className="flex gap-3 mt-3 md:mt-6 lg:mt-9">
              <a href="https://github.com/saad-mamun" target="_blank">
                <FaGithub className="w-[30px] h-[30px] text-[#FF9C01]" />
              </a>
              <a href="https://x.com/MdLiton65961236" target="_blank">
                <FaTwitter className="w-[30px] h-[30px] text-[#FF9C01]" />
              </a>
              <a
                href="https://www.instagram.com/litonalmamun9118/"
                target="_blank"
              >
                <FaSquareInstagram className="w-[30px] h-[30px] text-[#FF9C01]" />
              </a>
              <a href="https://www.facebook.com/TTP2660" target="_blank">
                <FaFacebook className="w-[30px] h-[30px] text-[#FF9C01]" />
              </a>
            </div>
          </div>
          {/* right section */}
          <div>
            <div>
              <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="NAME"
                      className="   border-2 hover:border-blue-500 border-[#57636C]  px-2 py-[2px] md:px-4  md:py-1 bg-white rounded-lg placeholder-amber-[#57636C]"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="EMAIL"
                      className=" border-2 hover:border-blue-500 border-[#57636C] px-2 py-[2px] md:px-4  md:py-1 bg-white rounded-lg placeholder-amber-[#57636C]"
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="SUBJECT"
                    className="border-2 hover:border-blue-500 border-[#57636C]  px-2 py-[2px] md:px-4  md:py-1 bg-white rounded-lg placeholder-amber-[#57636C]"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="border-2 hover:border-blue-500 border-[#57636C]  px-2 py-[2px] md:px-4  md:py-1 bg-white rounded-lg placeholder-amber-[#57636C]"
                  ></textarea>
                  <button
                    type="submit"
                    className=" px-4 py-1 rounded-full w-[270px] font-bold text-xl bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white"
                  >
                    Submit Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
