import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Oval } from 'react-loader-spinner';

// =============================
// CARD DATA FOR BOTH VIEW
// =============================




const videoCards = [
  {
    id: 1,
    src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/Top-5-video--animation/WORK-Page-5V%20(1).mp4",
    mobileBg: "bg-[#2f2d2d]",
    className: `
      absolute 
      top-0 left-[17%] 
      w-[32.58%] h-[15.5%]
      rounded-xl shadow-xl
      md:w-[391px] md:h-[180px]
      [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
      [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
      [@media(min-width:767px)_and_(max-width:950px)]:left-10
    `,
  },
  {
    id: 2,
    src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/Top-5-video--animation/WORK-Page-5V%20(2).mp4",
    mobileBg: "bg-[#ededed]",
    className: `
      absolute 
      top-0 right-36
      w-[32.58%] h-[15.5%]
      rounded-xl shadow-sm
      md:w-[391px] md:h-[180px]
      [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
      [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
      [@media(min-width:767px)_and_(max-width:950px)]:right-10
    `,
  },
  {
    id: 3,
    src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/Top-5-video--animation/WORK-Page-5V%20(3).mp4",
    mobileBg: "bg-[#bdb9b9]",
    className: `
      relative
      top-24 left-1/3
      w-[32.58%] h-[15.5%]
      rounded-xl shadow-xl z-20
      md:w-[391px] md:h-[180px]
      [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
      [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
    `,
  },
  {
    id: 4,
    src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/Top-5-video--animation/WORK-Page-5V%20(4).mp4",
    mobileBg: "bg-[#d9d9d9]",
    className: `
      absolute
      top-58 left-20
      w-[32.58%] h-[15.5%]
      rounded-xl shadow-xl
      md:w-[391px] md:h-[180px]
      [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
      [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
      [@media(min-width:767px)_and_(max-width:1130px)]:left-36
      [@media(min-width:767px)_and_(max-width:950px)]:left-7
    `,
  },
  {
    id: 5,
    src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/Top-5-video--animation/WORK-Page-5V%20(5).mp4",
    mobileBg: "bg-[#625f5f]",
    className: ` 
      absolute
      top-58 right-64
      w-[32.58%] h-[15.5%]
      rounded-xl shadow-xl  
      md:w-[391px] md:h-[180px]
      [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
      [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
      [@media(min-width:767px)_and_(max-width:1130px)]:right-44
      [@media(min-width:767px)_and_(max-width:950px)]:right-14
    `,
  },
];

// =============================
// REUSABLE VIDEO CARD
// =============================
const VideoCard = ({ src, className }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`${className} overflow-hidden bg-black`}>
      {/* Loader (Show Until Video Loads) */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-30">
          <Oval
            height={40}
            width={40}
            color="#ffffff"
            secondaryColor="#4fa94d"
            strokeWidth={4}
            strokeWidthSecondary={4}
            ariaLabel="oval-loading"
            visible={true}
          />
        </div>
      )}

      {/* Video */}
      <video
        className={`w-full h-full object-cover transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"
          }`}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setLoading(false)}
      ></video>
    </div>
  );
};


// =============================
// MAIN COMPONENT
// =============================
const WorkHero = () => {

  return (
    <section className="w-full h-auto md:h-[70vh] mb-20 md:mb-44 flex items-center justify-center pt-10 md:pt-24 bg-transparent overflow-hidden">

      <div className="relative w-full max-w-6xl h-auto md:h-[400px] flex flex-col md:block items-center gap-4">

        {/* ===== MOBILE VIEW (< 768px) ===== */}
        <div className="flex md:hidden flex-col px-4 items-center gap-6 w-full">
          {videoCards.map((v) => (
            <div
              key={v.id}
              className={`w-full max-w-[400px] aspect-video rounded-xl overflow-hidden shadow-lg ${v.mobileBg}`}
            >
              <video
                className="w-full h-full object-cover"
                src={v.src}
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
          ))}
        </div>

        {/* ===== DESKTOP VIEW (>= 768px) ===== */}
        <div className="hidden md:block w-full h-full">
          <Tilt
            className="w-full h-full relative"
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.1}
          >
            {videoCards.map((v) => (
              <VideoCard key={v.id} src={v.src} className={v.className} />
            ))}
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default WorkHero;