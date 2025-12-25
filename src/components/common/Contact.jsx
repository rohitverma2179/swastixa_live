import React, { useRef } from "react";

import { sendForm } from "@emailjs/browser";
// import contact_bg from "/home_assets/HomeBg/Bg--Swastixa--contact.png";

export default function ContactSection() {

  const formRef = useRef();

  const sendEmail = (e) => {

    e.preventDefault();
    sendForm(
      "service_f6q0v1f",     // service_xxx
      "__ejs-test-mail-service__",      // template_xxx
      formRef.current,
      "uaro4bNv3-b5A1rLM"      // public key
    )
      .then(
        () => {
          alert("Message Sent Successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("FAILED... " + error.text);
        }
      );
  };

  return (
    <section id="contactSection"
      className="relative w-full min-h-screen py-20 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${"https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Bg--Swastixa--contact.png"})`,
      }}
    >
      {/* Black Overlay */}
      <div className="absolute "></div>

      <div className="relative z-10 w-[95%] md:w-[85%] lg:w-[80%] max-w-6xl">

        <h1 className="text-white  text-4xl md:text-7xl font-bold mb-4">
          Contact Us
        </h1>

        <div className=" bg-[#843c29]/25  backdrop-blur-md  rounded-2xl p-6 md:p-10 flex flex-col justify-between md:flex-row  gap-10">

          {/* FORM */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="w-full md:w-[40%] flex   flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Enter Your name"
              className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/70 py-3 focus:outline-none"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Enter Your Email"
              className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/70 py-3 focus:outline-none"
              required
            />

            <input
              type="text"
              name="mobile"
              placeholder="Enter Your Mobile no."
              className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/70 py-3 focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Enter Your Query"
              name="mobile"
              className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/70 py-3 focus:outline-none"
              required
            />

            <button className="text-white mt-6 w-fit relative 
                   after:content-[''] after:absolute after:left-0 after:bottom-0 
                   after:h-[2px] after:w-full after:bg-neutral-200 
                   after:scale-x-0 after:origin-left 
                   after:transition-transform after:duration-300 
                   hover:after:scale-x-100">
              Contact Us
            </button>

          </form>

          {/* CONTACT INFO */}
          <div className="w-full md:w-[40%] text-white flex text-end flex-col gap-2">
            <div>
              <h2 className="text-lg md:text-2xl font-bold">Swastixa Services LLP</h2>
              {/* <p className="opacity-90 text-[18px]"><span className="font-bold text-[22px]">Head Office : </span   > Plot No. 2-A,</p> */}
              <p className="opacity-90 text-[18px]"><span className="font-bold text-[22px]">Head Office </span   ></p>
              <p className="opacity-90 text-[18px] ">Plot No. 2-A, Kh. No. 51/1, Third Floor,</p>
              <p className="opacity-90 text-[18px] "></p>
              <p className="opacity-90 text-[18px] ">Jai Vihar, Najafgarh Road,</p>
              <p className="opacity-90 text-[18px] ">Near Sant Haridas School,</p>
              <p className="opacity-90 text-[18px] ">Delhi - 110043</p>
            </div>
            <br />
            <div>
              <h2 className="text-lg md:text-2xl font-bold">Registered Office</h2>
              <p className="opacity-90 text-[18px]">Plot No. J04A, Kh. No. 2/19, 2/21, 22,</p>
              <p className="opacity-90 text-[18px]"> Street 12, Shiv Ram Park,</p>
              <p className="opacity-90 text-[18px]"></p>
              <p className="opacity-90 text-[18px]">Nangloi, New Delhi - 110041</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
