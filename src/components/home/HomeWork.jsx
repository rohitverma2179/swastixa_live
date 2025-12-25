// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { VimeoResponsivePlayer } from "./VimeoResponsivePlayer";

// gsap.registerPlugin(ScrollTrigger);

// const ForthSection = () => {
//   // const videoData = ["1139310479", "1139294246", "1139310380", "1139294025"];
//   // const videoData = ["1141581126", "1141581163", "1141581037", "1141586978"];
//   const videoData = ["1141640767", "1141641014", "1141581037", "1141641053"];


//   useEffect(() => {
//     if (window.innerWidth <= 426) return;
//     let tl4 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".forth-section",
//         start: "top top",
//         end: "+=500%",
//         scrub: 1,
//         pin: true,
//       },
//     });

//     tl4.fromTo(".rotate", { xPercent: 0 }, { xPercent: -84, ease: "none" });

//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <section
//       className="         forth-section 
//         w-full h-screen 
//         bg-center bg-cover overflow-hidden

//         max-[426px]:h-auto 
//         max-[426px]:pb-4   /* ⭐ padding bottom reduced */
//       "
//     >
//       <div
//         className="
//           forth-main 
//           w-[300%] h-full 
//           max-[426px]:w-full 
//           max-[426px]:h-auto
//         "
//       >
//         <div
//           className="
//             rotate 
//             flex items-center justify-start gap-[5vw] 
//             w-[calc((60vw*6)+(8vw*6))] 
//             h-full px-[5vw] pl-[20vw]
//             max-[426px]:w-full 
//             max-[426px]:flex-col 
//             max-[426px]:gap-1
//             max-[426px]:px-3 
//             max-[426px]:pl-3 
//             max-[426px]:pb-0   /* ⭐ reduce bottom padding */
//             max-[426px]:h-auto
//           "
//         >
//           {videoData.map((item, idx) => (
//             <div
//               key={idx}
//               className="
//                 fir-img 
//                 flex-none 
//                 w-[85vw] h-[85vh] 
//                 overflow-hidden rounded-xl mx-auto
//                 max-[426px]:w-full 
//                 max-[426px]:h-[250px]
//               "
//             >
//               <VimeoResponsivePlayer
//                 className="w-full h-full object-cover block rounded-xl"
//                 videoId={item}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ForthSection;



// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { VimeoResponsivePlayer } from "./VimeoResponsivePlayer";
// import Work_1 from "../../assets/home_work_video/work_1.mp4"
// import Work_2 from "../../assets/home_work_video/work_2.mp4"
// import Work_3 from "../../assets/home_work_video/work_3.mp4"
// import Work_4 from "../../assets/home_work_video/work_4.mp4"
// gsap.registerPlugin(ScrollTrigger);






// const ForthSection = () => {
//   const videoData = [Work_1, Work_2, Work_3, Work_4, ];




//   //   https://player.vimeo.com/video/1141640767?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
//   // https://player.vimeo.com/video/1141641014?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
//   // https://player.vimeo.com/video/1141641053?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479




//   useEffect(() => {
//     if (window.innerWidth <= 426) return;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".forth-section",
//         start: "top top",
//         end: "+=400%",
//         pin: true,
//         scrub: 1,
//         anticipatePin: 1,
//       },
//     });

//     // GPU accelerated smooth transform
//     tl.to(".rotate", {
//       x: () => -(window.innerWidth * 2.6),
//       ease: "power0.none",
//       duration: 1,
//     });

//     return () => ScrollTrigger.killAll();
//   }, []);

//   return (
//     <section className="forth-section w-full h-screen overflow-hidden bg-center bg-cover max-[426px]:h-auto max-[426px]:pb-3">
//       <div className="forth-main w-[300%] h-full max-[426px]:w-full max-[426px]:h-auto">

//         <div
//           className="
//             rotate will-change-transform
//             flex items-center justify-start gap-[5vw]
//             w-[calc((60vw*6)+(8vw*6))]
//             h-full px-[5vw] pl-[20vw]
//             max-[426px]:w-full 
//             max-[426px]:flex-col 
//             max-[426px]:gap-2
//             max-[426px]:px-3 
//             max-[426px]:pl-3 
//             max-[426px]:h-auto
//           "
//         >
//           {videoData.map((item, idx) => (
//             <div
//               key={idx}
//               className="
//                 fir-img 
//                 flex-none 
//                 w-[85vw] h-[85vh]
//                 overflow-hidden rounded-xl mx-auto
//                 max-[426px]:w-full 
//                 max-[426px]:h-[260px]
//               "
//             >
//               <video
//                 className="w-full h-full object-cover block rounded-xl"
//                 videoId={item}

//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ForthSection;













// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Work_1 from "../../assets/home_work_video/work_1.mp4"
// import Work_2 from "../../assets/home_work_video/work_2.mp4"
// import Work_3 from "../../assets/home_work_video/work_3.mp4"
// import Work_4 from "../../assets/home_work_video/work_4.mp4"
// // import { VimeoResponsivePlayer } from "./VimeoResponsivePlayer";

// gsap.registerPlugin(ScrollTrigger);

// const ForthSection = () => {
//   const videoData = [Work_1,
//     Work_2,
//     Work_3,
//     Work_4];

//   useEffect(() => {
//     if (window.innerWidth <= 426) return;

//     let tl4 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".forth-section",
//         start: "top top",
//         end: "+=500%",
//         scrub: 2,
//         pin: true,
//       },
//     });

//     tl4.fromTo(".rotate", { xPercent: 0 }, { xPercent: -84, ease: "none" });

//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <section
//       className="
//         forth-section 
//         w-full h-screen 
//         bg-center bg-cover overflow-hidden

//         max-[426px]:h-auto 
//         max-[426px]:pb-4   /* ⭐ padding bottom reduced */
//       "
//     >
//       <div
//         className="
//           forth-main 
//           w-[300%] h-full 
//           max-[426px]:w-full 
//           max-[426px]:h-auto
//         "
//       >
//         <div
//           className="
//             rotate 
//             flex items-center justify-start gap-[5vw] 
//             w-[calc((60vw*6)+(8vw*6))] 
//             h-full px-[5vw] pl-[20vw]
//             max-[426px]:w-full 
//             max-[426px]:flex-col 
//             max-[426px]:gap-1
//             max-[426px]:px-3 
//             max-[426px]:pl-3 
//             max-[426px]:pb-0   /* ⭐ reduce bottom padding */
//             max-[426px]:h-auto
//           "
//         >
//           {videoData.map((item, idx) => (
//             <div
//               key={idx}
//               className="
//                 fir-img 
//                 flex-none 
//                 w-[85vw] h-[85vh] 
//                 overflow-hidden rounded-xl mx-auto

//                 max-[426px]:w-full 
//                 max-[426px]:h-[250px]
//               "
//             >
//               <video
//                 className="w-full h-full object-cover block rounded-xl"
//                 src={item}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ForthSection;









// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import work_1 from "../../assets/home_work_video/work_1.mp4"
// import work_2 from "../../assets/home_work_video/work_2.mp4"
// import work_3 from "../../assets/home_work_video/work_3.mp4"
// import work_4 from "../../assets/home_work_video/work_4.mp4"
// gsap.registerPlugin(ScrollTrigger);

// const videoList = [
//  work_1 ,
//  work_2 ,
//  work_3 ,
//   work_4 ,
// ];

// const ForthSection = () => {
//   useEffect(() => {
//     if (window.innerWidth <= 426) return;

//     let tl4 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".forth-section",
//         start: "top top",
//         end: "+=500%",
//         scrub: 1,
//         pin: true,
//       },
//     });

//     tl4.fromTo(".rotate", { xPercent: 0 }, { xPercent: -84, ease: "none" });

//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <section
//       className="forth-section w-full h-screen bg-center bg-cover overflow-hidden max-[426px]:h-auto max-[426px]:pb-4"
//     >
//       <div className="forth-main w-[300%] h-full max-[426px]:w-full max-[426px]:h-auto">

//         {videoList.map((src, index) => (
//           <div
//             key={index}
//             className="rotate
//             flex items-center justify-start gap-[5vw]
//             w-[calc((60vw*6)+(8vw*6))]
//             h-full px-[5vw] pl-[20vw]
//             max-[426px]:w-full
//             max-[426px]:flex-col
//             max-[426px]:gap-1
//             max-[426px]:px-3
//             max-[426px]:pl-3
//             max-[426px]:pb-0
//             max-[426px]:h-auto"
//           >
//             <div
//               className="fir-img flex-none
//               w-[85vw] h-[85vh]
//               overflow-hidden rounded-xl mx-auto
//               max-[426px]:w-full
//               max-[426px]:h-[250px]"
//             >
//               <video
//                 src={src}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-full object-cover block rounded-xl"
//               />
//             </div>
//           </div>
//         ))}

//       </div>
//     </section>
//   );
// };

// export default ForthSection;







// it is a working code 


// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Work_1 from "/home_assets/home_work_video/work_1.mp4";
// import Work_2 from "/home_assets/home_work_video/work_2.mp4";
// import Work_3 from "/home_assets/home_work_video/work_3.mp4";
// import Work_4 from "/home_assets/home_work_video/work_4.mp4";

// gsap.registerPlugin(ScrollTrigger);

// const ForthSection = () => {
//   const videoData = [Work_1, Work_2, Work_3, Work_4];

//   useEffect(() => {
//     if (window.innerWidth <= 426) return;

//     let tl4 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".forth-section",
//         start: "top top",
//         end: "+=500%",
//         scrub: 1.5,
//         pin: true,
//       },
//     });

//     tl4.fromTo(".rotate", { xPercent: 0 }, { xPercent: -84, ease: "none" });

//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <section className="forth-section w-full h-screen overflow-hidden max-[426px]:h-auto max-[426px]:pb-4">
//       <div className="forth-main w-[300%] h-full max-[426px]:w-full max-[426px]:h-auto">

//         <div className="rotate flex items-center justify-start gap-[5vw] 
//             w-[calc((60vw*6)+(8vw*6))] h-full px-[5vw] pl-[20vw]
//             max-[426px]:w-full max-[426px]:flex-col 
//             max-[426px]:gap-1 max-[426px]:px-3 
//             max-[426px]:pl-3 max-[426px]:pb-0 max-[426px]:h-auto">

//           {videoData.map((item, idx) => (
//             <div
//               key={idx}
//               className="fir-img flex-none 
//                 w-[85vw] h-[85vh] overflow-hidden rounded-sm mx-auto max-[426px]:mb-5
//                 max-[426px]:w-full max-[426px]:h-[250px]"
//             >
//               <video
//                 src={item}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-full object-cover block rounded-sm"
//               />
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ForthSection;





import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Work_1 from "/home_assets/home_work_video/work_1.mp4";
// import Work_2 from "/home_assets/home_work_video/work_2.mp4";
// import Work_3 from "/home_assets/home_work_video/work_3.mp4";
// import Work_4 from "/home_assets/home_work_video/work_4.mp4";
import Particles from "./Particles";

gsap.registerPlugin(ScrollTrigger);

const ForthSection = () => {
  const videoData = ["https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20HOME/Main%20-%20Work%20-%20mp4/work-2%20(1).mp4", "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20HOME/Main%20-%20Work%20-%20mp4/work-2%20(2).mp4", "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20HOME/Main%20-%20Work%20-%20mp4/work-2%20(3).mp4", "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20HOME/Main%20-%20Work%20-%20mp4/work-2%20(4).mp4"];

  useEffect(() => {
    if (window.innerWidth <= 426) return;

    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".forth-section",
        start: "top top",
        end: "+=500%",
        scrub: 1.5,
        pin: true,
      },
    });

    tl4.fromTo(".rotate", { xPercent: 0 }, { xPercent: -74.6, ease: "none" });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="forth-section relative w-full h-screen overflow-hidden max-[426px]:h-auto max-[426px]:pb-4">

      {/* ===== Particles Background ===== */}
      <Particles
        particleBaseSize={120}
        particleColors={['#2196F3', '#FFFFFF']}
        particleCount={350}
        particleSpread={25}
        speed={0.3}
        // particleBaseSize={200}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <div className="forth-main w-[300%] h-full max-[426px]:w-full max-[426px]:h-auto relative z-20">

        <div
          className="rotate flex items-center justify-start gap-[5vw] 
            w-[calc((60vw*6)+(8vw*6))] h-full px-[5vw] pl-[1vw]
            max-[426px]:w-full max-[426px]:flex-col 
            max-[426px]:gap-1 max-[426px]:px-3 
            max-[426px]:pl-3 max-[426px]:pb-0 max-[426px]:h-auto"
        >
          {videoData.map((item, idx) => (
            <div
              key={idx}
              className="fir-img flex-none 
                w-[85vw] h-[85vh] lg:h-[90vh] overflow-hidden rounded-sm mx-auto max-[426px]:mb-5
                max-[426px]:w-full max-[426px]:h-[250px]"
            >
              <video
                src={item}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover block rounded-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForthSection;
