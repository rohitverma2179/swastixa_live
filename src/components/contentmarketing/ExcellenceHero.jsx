import React from "react";
import {  useNavigate } from "react-router-dom";


const ExcellenceHero = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-black min-h-screen flex items-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-[520px]">

            <h1
              className="
                text-white
                uppercase
                font-light
                tracking-[4px]
                text-[34px]
                md:text-[42px]
                lg:text-[52px]
                leading-[1.15]
              "
            >
              Engineered For Excellence
            </h1>

            <p
              className="
                mt-6
                text-[rgba(139,139,139,0.9)]
                text-[15px]
                leading-[1.9]
                max-w-[500px]
              "
            >
              DEV_CORE is a technical partner for ambitious brands. We fuse
              architectural precision with creative vision to deliver digital
              products that outperform the competition.
            </p>


            <button
              className="
                mt-10
                bg-[#1F1F22]
                text-white
                font-medium
                px-10
                py-5
                rounded-xl
                transition-all
                duration-300
                hover:bg-[#2A2A2E]
                hover:scale-[1.02]
              "
              onClick={() => {
              Navigate("/#contact");
            }}
            >
              
              Start Your Project
            </button>

            {/* TRUSTED BY */}
            <div className="flex gap-5 mt-14 items-start">
              <div className="w-[2px] h-[54px] bg-white opacity-80"></div>

              <div>
                <p
                  className="
                    text-white
                    uppercase
                    tracking-[2px]
                    text-[13px]
                    leading-7
                    font-light
                  "
                >
                  Trusted By Innovators At
                </p>

                <p
                  className="
                    text-[#D5D5D5]
                    uppercase
                    tracking-[2px]
                    text-[13px]
                    leading-7
                    font-light
                  "
                >
                  TechGiant / Nexus / Global_Retail
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[560px]">

              {/* IMAGE CARD */}
              <div
                className="
                  overflow-hidden
                  rounded-[28px]
                  shadow-[0_20px_80px_rgba(255,255,255,0.04)]
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                  alt="Team Meeting"
                  className="
                    w-full
                    h-[420px]
                    md:h-[480px]
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>

              {/* CODE CARD */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExcellenceHero;