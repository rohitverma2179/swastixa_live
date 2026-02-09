import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../../assets/home-page-Hero-video-1.mp4"



gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    const containerEl = containerRef.current;

    if (!videoEl || !containerEl) return;

    // 👇 If screen width is LESS than 430px → NO GSAP animation
    if (window.innerWidth <= 430) {
      gsap.set(videoEl, {
        scale: 1,
        width: "100%",
        height: "auto",
        borderRadius: "0rem",
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    // 🧩 GSAP ScrollTrigger (Only for screens ABOVE 430px)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerEl,
        start: "top top",
        end: "+=200",
        scrub: true,
        pin: true,
      },
    });

    gsap.set(videoEl, {
      scale: 1,
      width: "80vw",
      height: "100vh",
      borderRadius: "0rem",
    });

    tl.to(videoEl, {
      scale: 1.2,
      y: "-20%",
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      duration: 2,
      ease: "power2.inOut",
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="min-h-1/2 sm:min-h-screen flex flex-col items-center justify-center px-4 bg-white overflow-hidden"
      >
        {/* Heading Section */}
        <h1 className="heading pt-10 sm:pt-28 text-center text-[22px] font-bold sm:text-[28px] md:text-[38px] lg:text-[50px] xl:text-[68px] leading-snug text-gray-800 max-w-6xl">
          Creativity That Flows From Culture <br />
          Culture Guides Us. Creativity Defines Us
        </h1>

        {/* Video Section */}
        <div className="mt-8 w-full flex justify-center relative z-10">
          <video
            ref={videoRef}
            className="w-full min-h-[60vh] object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;