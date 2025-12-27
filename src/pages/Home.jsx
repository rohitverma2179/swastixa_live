import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import HeroSection from "../components/home/HeroSecond";
import HomeAbout from "../components/home/HomeAbout";
import ForthSection from "../components/home/HomeWork";
import EndToEndExcellence from "../components/home/EndToEndExcellence";
import LogoCarousel from "../components/home/Logo";
import ContactSection from "../components/common/Contact";
import TorchlightTextReveal from "../components/home/MouseGlowText";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  // useEffect(() => {
  //   if (location.hash === "#contact") {
  //     // const timer = setTimeout(() => {
  //     const el = document.getElementById("contactSection");
  //     if (el) {
  //       el.scrollIntoView({ behavior: "instant", block: "start" });
  //     }
  //     // }, 10);
  //     // return () => clearTimeout(timer);
  //   }
  // }, [location]);


  useEffect(() => {
    if (location.hash === "#contact") {


      const timer = setTimeout(() => {
        const el = document.getElementById("contactSection");
        if (el) {
          el.scrollIntoView({ behavior: "instant", block: "start" });

          // 🔥 URL se #contact remove (without reload)
          window.history.replaceState(
            null,
            "",
            location.pathname
          );
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <HeroSection />
      <HomeAbout />
      <EndToEndExcellence />
      <ForthSection />
      <LogoCarousel />
      <TorchlightTextReveal />
      <ContactSection />
    </main>
  );
}

// import React, { useEffect, Suspense, lazy } from "react";
// import { useLocation } from "react-router-dom";

// // Lazy imports
// const Hero = lazy(() => import("../components/home/Hero"));
// const HeroSection = lazy(() => import("../components/home/HeroSecond"));
// const HomeAbout = lazy(() => import("../components/home/HomeAbout"));
// const EndToEndExcellence = lazy(() => import("../components/home/EndToEndExcellence"));
// const ForthSection = lazy(() => import("../components/home/HomeWork"));
// const LogoCarousel = lazy(() => import("../components/home/Logo"));
// const TorchlightTextReveal = lazy(() => import("../components/home/MouseGlowText"));
// const ContactSection = lazy(() => import("../components/common/Contact"));

// const SectionLoader = () => (
//   <div className="w-full h-[40vh] flex items-center justify-center text-white/50">
//     Loading…
//   </div>
// );

// export default function Home() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash === "#contact") {
//       const timer = setTimeout(() => {
//         const el = document.getElementById("contactSection");
//         if (el) {
//           el.scrollIntoView({ behavior: "instant", block: "start" });

//           // Remove #contact from URL
//           window.history.replaceState(null, "", location.pathname);
//         }
//       }, 100);

//       return () => clearTimeout(timer);
//     }
//   }, [location]);

//   return (
//     <main>
//       <Suspense fallback={<SectionLoader />}>
//         <Hero />
//       </Suspense>

//       <Suspense fallback={<SectionLoader />}>
//         <HeroSection />
//       </Suspense>

//       <Suspense fallback={<SectionLoader />}>
//         <HomeAbout />
//       </Suspense>

//       <Suspense fallback={<SectionLoader />}>
//         <EndToEndExcellence />
//       </Suspense>

//       <Suspense fallback={<SectionLoader />}>
//         <ForthSection />
//       </Suspense>

//       <Suspense fallback={<SectionLoader />}>
//         <LogoCarousel />
//       </Suspense>

//       <Suspense fallback={<SectionLoader />}>
//         <TorchlightTextReveal />
//       </Suspense>

//       <Suspense fallback={<SectionLoader />}>
//         <ContactSection />
//       </Suspense>
//     </main>
//   );
// }

