import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
// import heroVideo from "/hero_03.mp4";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // useEffect(() => {
  //   // 🌀 Initialize Lenis smooth scroll
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth curve
  //     smoothWheel: true,
  //     smoothTouch: false,
  //   });

  //   // Lenis + RAF (requestAnimationFrame loop)
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   // 🧩 GSAP ScrollTrigger setup
  //   const videoEl = videoRef.current;
  //   const containerEl = containerRef.current;


  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: containerEl,
  //       start: "top top",
  //       end: "+=200",
  //       scrub: true,
  //       pin: true,
  //     },
  //   });

  //   // 🎬 Video scaling animation
  //   tl.to(videoEl, {
  //     scale: 1.5,
  //     width: "100vw",
  //     height: "100vh",
  //     borderRadius: 0,
  //     duration: 2,
  //     ease: "power2.inOut",
  //   });

  //   gsap.set(videoEl, {
  //     scale: 1,
  //     width: "80vw",
  //     height: "100vh",
  //     borderRadius: "0rem",
  //   });

  //   // Cleanup
  //   return () => {
  //     lenis.destroy();
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);



  useEffect(() => {
    // 🌀 Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const videoEl = videoRef.current;
    const containerEl = containerRef.current;

    // 👇 If screen width is LESS than 430px → NO GSAP animation
    if (window.innerWidth <= 430) {
      gsap.set(videoEl, {
        scale: 1,
        width: "100%",
        height: "auto",
        borderRadius: "0rem",
      });

      return () => {
        lenis.destroy();
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
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  return (
    <>
      <div
        ref={containerRef}
        className="min-h-1/2 sm:min-h-screen flex flex-col items-center justify-center px-4 bg-white overflow-hidden" >
        {/* Heading Section */}
        <h1 className="heading  pt-10 sm:pt-28 text-center text-[22px] font-bold sm:text-[28px] md:text-[38px] lg:text-[50px] xl:text-[68px]  leading-snug text-gray-800 max-w-6xl">
          Creativity That Flows From Culture <br /> Culture Guides Us. Creativity Defines Us</h1>

        {/* Video Section */}
        <div className="mt-8 w-full flex justify-center relative z-10">

          <video
            ref={videoRef}
            src="https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20HOME/home-page-Hero-video-1.mp4"
            // src="https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/PARAMPARA.mp4"
            // src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
          >

          </video>
        </div>
      </div>
    </>
  );
};

export default Hero;
