// // "use client";
// // import { useEffect } from "react";
// // import Lenis from "lenis";

// // const cards = [
// //   {
// //     title: "Careers",
// //     text: "At iProspect, we offer a comprehensive suite of services designed to drive impactful growth.",
// //     img: "https://via.placeholder.com/600x400"
// //   },
// //   {
// //     title: "Marketing",
// //     text: "Our marketing strategy blends creativity with performance-driven insights.",
// //     img: "https://via.placeholder.com/600x400"
// //   },
// //   {
// //     title: "Brand Experience",
// //     text: "We build immersive brand experiences that leave lasting impressions.",
// //     img: "https://via.placeholder.com/600x400"
// //   },
// //   {
// //     title: "Technology",
// //     text: "Innovation and technology drive our digital transformation solutions.",
// //     img: "https://via.placeholder.com/600x400"
// //   },
// //   {
// //     title: "Strategy",
// //     text: "We design strategies that deliver measurable business outcomes.",
// //     img: "https://via.placeholder.com/600x400"
// //   },
// //   {
// //     title: "Development",
// //     text: "High-performance development solutions tailored to your business.",
// //     img: "https://via.placeholder.com/600x400"
// //   },
// //   {
// //     title: "AI Solutions",
// //     text: "Unlock the future with AI-powered automation and insights.",
// //     img: "https://via.placeholder.com/600x400"
// //   },
// //   {
// //     title: "Creative Studio",
// //     text: "Our creative studio produces stunning visuals and digital assets.",
// //     img: "https://via.placeholder.com/600x400"
// //   },
// //   {
// //     title: "Content Strategy",
// //     text: "Content that connects, engages, and drives conversion.",
// //     img: "https://via.placeholder.com/600x400"
// //   },
// //   {
// //     title: "Consulting",
// //     text: "We help businesses grow with smart, data-driven consulting.",
// //     img: "https://via.placeholder.com/600x400"
// //   }
// // ];

// // export default function ScrollStack() {
// //   useEffect(() => {
// //     const lenis = new Lenis({ smooth: true });
// //     function raf(time) {
// //       lenis.raf(time);
// //       requestAnimationFrame(raf);
// //     }
// //     requestAnimationFrame(raf);
// //   }, []);

// //   return (
// //     <section className="w-full bg-black text-white py-24 px-6 md:px-16">
// //       <div className="relative flex flex-col items-center space-y-20">

// //         {cards.map((card, index) => (
// //           <div
// //             key={index}
// //             className="relative w-full max-w-5xl bg-black border border-gray-500 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row gap-10 will-change-transform"
// //             style={{
// //               transform: `translateY(${index * 40}px)`,
// //               zIndex: 50 - index
// //             }}
// //           >
// //             {/* Left Content */}
// //             <div className="md:w-1/2">
// //               <h2 className="text-4xl md:text-5xl font-bold mb-4">
// //                 {card.title}
// //               </h2>
// //               <p className="text-gray-300 text-lg">
// //                 {card.text}
// //               </p>
// //             </div>

// //             {/* Right Image */}
// //             <div className="md:w-1/2">
// //               <img
// //                 src={card.img}
// //                 alt={card.title}
// //                 className="w-full h-64 md:h-80 rounded-xl object-cover bg-gray-300"
// //               />
// //             </div>
// //           </div>
// //         ))}

// //       </div>
// //     </section>
// //   );
// // }

// "use client";
// import ScrollStack, { ScrollStackItem } from "./ScrollStack";
// import { useEffect } from "react";

// const cards = [
//   {
//     title: "Careers",
//     text: "At iProspect, we offer a comprehensive suite of services designed to drive impactful growth.",
//     img: "https://via.placeholder.com/600x400"
//   },
//   {
//     title: "Marketing",
//     text: "Our marketing strategy blends creativity with performance-driven insights.",
//     img: "https://via.placeholder.com/600x400"
//   },
//   {
//     title: "Brand Experience",
//     text: "We build immersive brand experiences that leave lasting impressions.",
//     img: "https://via.placeholder.com/600x400"
//   },
//   {
//     title: "Technology",
//     text: "Innovation and technology drive our digital transformation solutions.",
//     img: "https://via.placeholder.com/600x400"
//   },
//   {
//     title: "Strategy",
//     text: "We design strategies that deliver measurable business outcomes.",
//     img: "https://via.placeholder.com/600x400"
//   },
//   {
//     title: "Development",
//     text: "High-performance development solutions tailored to your business.",
//     img: "https://via.placeholder.com/600x400"
//   },
//   {
//     title: "AI Solutions",
//     text: "Unlock the future with AI-powered automation and insights.",
//     img: "https://via.placeholder.com/600x400"
//   },
//   {
//     title: "Creative Studio",
//     text: "Our creative studio produces stunning visuals and digital assets.",
//     img: "https://via.placeholder.com/600x400"
//   },
//   {
//     title: "Content Strategy",
//     text: "Content that connects, engages, and drives conversion.",
//     img: "https://via.placeholder.com/600x400"
//   },
//   {
//     title: "Consulting",
//     text: "We help businesses grow with smart, data-driven consulting.",
//     img: "https://via.placeholder.com/600x400"
//   }
// ];

// export default function ScrollStackCards() {
//   return (
//     <section className="w-full bg-black text-white py-24 px-6 md:px-16">
//       <ScrollStack
//         useWindowScroll={true}
//         itemStackDistance={40}
//         itemScale={0.02}
//         baseScale={0.85}
//         blurAmount={0}
//       >
//         {cards.map((card, index) => (
//           <ScrollStackItem
//             key={index}
//             itemClassName="border border-gray-600 rounded-3xl bg-black p-10 md:p-16 flex flex-col md:flex-row gap-10"
//           >
//             {/* LEFT CONTENT */}
//             <div className="md:w-1/2">
//               <h2 className="text-4xl md:text-5xl font-bold mb-4">{card.title}</h2>
//               <p className="text-gray-300 text-lg">{card.text}</p>
//             </div>

//             {/* RIGHT IMAGE */}
//             <div className="md:w-1/2">
//               <img
//                 src={card.img}
//                 alt={card.title}
//                 className="w-full h-64 md:h-80 rounded-xl object-cover bg-gray-300"
//               />
//             </div>
//           </ScrollStackItem>
//         ))}
//       </ScrollStack>
//     </section>
//   );
// }































// import React from "react";
// import Tilt from "react-parallax-tilt";



// // import hvideo_1 from "/home_assets/workvideo/workHeroVideo/FILM_1_LUCKY_HOUSE._OPT_1-2.mp4"
// // import video1   from "/home_assets/workvideo/workHeroVideo/Time To Aarize _ Brand Film _ Aarize Group x Tiger Shroff 1080p.mp4"
// // import hvideo_5  from "/home_assets/workvideo/workHeroVideo/FILM_2_RENOVATION._OPT_2.mp4"
// // import hvideo_4 from "/home_assets/workvideo/workHeroVideo/FILM_3_DADI_DAY_CARE _OPT_1-2.mp4"
// // // import hvideo_5 from "/home_assets/workvideo/workHeroVideo/Ricardo low 2.mp4"
// // import hvideo_2   from "/home_assets/workvideo/BigAds/FILM 2 MOTION SENSOR 20SEC English_1.mp4"
// // // import hvideo_5 from "/home_assets/workvideo/workHeroVideo/Ricardo low 2.mp4"
// // // import hvideo_5 from "../../../public/home_assets/workvideo/workHeroVideo/FILM_2_RENOVATION._OPT_2.mp4"


// // import hvideo_1 from "/home_assets/workvideo/workHeroVideo/film 1.mp4"
// // import video1   from "/home_assets/workvideo/workHeroVideo/film 2.mp4"
// // import hvideo_5  from "/home_assets/workvideo/workHeroVideo/film 3.mp4"
// // import hvideo_4 from "/home_assets/workvideo/workHeroVideo/film 4.mp4"
// // import hvideo_2 from "/home_assets/workvideo/workHeroVideo/film 5.mp4"
// // import hvideo_5 from "/home_assets/workvideo/workHeroVideo/Ricardo low 2.mp4"
// // import    from "/home_assets/workvideo/BigAds/FILM 2 MOTION SENSOR 20SEC English_1.mp4"
// // import hvideo_5 from "/home_assets/workvideo/workHeroVideo/Ricardo low 2.mp4"
// // import hvideo_5 from "../../../public/home_assets/workvideo/workHeroVideo/FILM_2_RENOVATION._OPT_2.mp4"



// // const heroVideoData = [
// //   { id: 1, src: hvideo_1 },
// //   { id: 2, src: hvideo_2 },
// //   { id: 3, src: hvideo_3 },
// //   { id: 4, src: hvideo_4 },
// //   { id: 5, src: hvideo_5 },
// // ]

// const WorkHero = () => {





//   return (

//     <section className=" w-full h-auto md:h-[70vh] mb-44 flex items-center justify-center md:pt-24 bg-black overflow-hidden py-10  md:py-0">
//       {/* MAIN WRAPPER */}
//       <div
//         className=" 
//           relative w-full max-w-6xl h-auto
//           md:h-[400px] 
//           flex md:block
//           flex-col items-center gap-4
//         ">
//         {/* === MOBILE COLUMN VIEW (below 425px) === */}
//         <div className="flex md:hidden flex-col px-2 items-center gap-4 w-full">
//           <div className="max-w-[500px] w-[391px]   h-[155px] bg-[#2f2d2d] rounded-xl">
//             <video
//               className="w-screen h-full object-cover "
//               src="https://swastixa.b-cdn.net/WORK-Page-5V%20(1).mp4"
//               autoPlay
//               loop
//               muted
//               playsInline
//             ></video>
//           </div>
//           <div className="max-w-[500px] w-[391px]   h-[155px] bg-[#ededed] rounded-xl">
//             <video
//               className="w-full h-full object-cover "
//               src="https://swastixa.b-cdn.net/WORK-Page-5V%20(2).mp4 "
//               autoPlay
//               loop
//               muted
//               playsInline
//             ></video>
//           </div>
//           <div className="max-w-[500px] w-[391px]  h-[155px] bg-[#bdb9b9] rounded-xl">
//             <video
//               className="w-full h-full object-cover "
//               src="https://swastixa.b-cdn.net/WORK-Page-5V%20(3).mp4 "
//               autoPlay
//               loop
//               muted
//               playsInline
//             ></video>
//           </div>
//           <div className="max-w-[500px] w-[391px]   h-[155px] bg-[#d9d9d9] rounded-xl">
//             <video
//               className="w-full h-full object-cover "
//               src="https://swastixa.b-cdn.net/WORK-Page-5V%20(4).mp4 "
//               autoPlay
//               loop
//               muted
//               playsInline
//             ></video>
//           </div>
//           <div className="max-w-[500px] w-[391px]  h-[155px] bg-[#625f5f] rounded-xl">
//             <video
//               className="w-full h-full object-cover "
//               src="https://swastixa.b-cdn.net/WORK-Page-5V%20(5).mp4 "
//               autoPlay
//               loop
//               muted
//               playsInline
//             ></video>
//           </div>
//         </div>

//         {/* === DESKTOP OVERLAPPING VIEW (425px and up) === */}

//         <Tilt
//           className="background-stripes  parallax-effect-glare-scale"
//           perspective={1000}
//           glareEnable={true}
//           glareMaxOpacity={0.1}

//         >
//           <div className="hidden md:block w-full h-full  relative">
//             {/* CARD 1 - Top Left (Dark) */}
//             <div
//               className="
//               absolute 
//               top-0 left-2/12 
//               [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
//               [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
//               [@media(min-width:767px)_and_(max-width:950px)]:left-10
//               md-lg:w-[200px]
//               w-[32.58%]
//               md:w-[391px]
//               h-[15.5%]
//               md:h-[180px]
//               rounded-xl shadow-xl
//             "
//             >
//               <video
//                 className="w-screen h-full object-cover "
//                 src="https://swastixa.b-cdn.net/WORK-Page-5V%20(1).mp4"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//               ></video>
//             </div>

//             {/* CARD 2 - Top Right (Light) */}
//             <div
//               className=" 
//               absolute
//               top-0 right-36
//               [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
//               [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
//               [@media(min-width:767px)_and_(max-width:950px)]:right-10

//               w-[32.58%]
//               md:w-[391px]
//               h-[15.5%]
//               md:h-[180px]
//               rounded-xl shadow-sm
//             "
//             >
//               <video
//                 className="w-full h-full object-cover "
//                 src="https://swastixa.b-cdn.net/WORK-Page-5V%20(2).mp4 "
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//               ></video>
//             </div>

//             {/* CARD 3 - Center (Gray) */}
//             <div
//               className="
//               relative
//                top-24 left-1/3 
//                [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
//               [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]

//               w-[32.58%]
//               md:w-[391px]
//               h-[15.5%]
//               md:h-[180px]
//               rounded-xl shadow-xl z-20
//             "
//             >
//               <video
//                 className="w-full h-full object-cover "
//                 src="https://swastixa.b-cdn.net/WORK-Page-5V%20(3).mp4 "
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//               ></video>
//             </div>

//             {/* CARD 4 - Bottom Left (Light Gray) */}
//             <div
//               className="
//               absolute 
//               bottom-2 left-20
//               [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
//               [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
//               [@media(min-width:767px)_and_(max-width:1130px)]:left-36
//               [@media(min-width:767px)_and_(max-width:950px)]:left-7
//               w-[32.58%]
//               md:w-[391px]
//               h-[15.5%]
//               md:h-[180px]
//               rounded-xl shadow-xl
//             "
//             ><video
//               className="w-full h-full object-cover "
//               src="https://swastixa.b-cdn.net/WORK-Page-5V%20(4).mp4 "
//               autoPlay
//               loop
//               muted
//               playsInline
//             ></video>
//             </div>

//             {/* CARD 5 - Bottom Right (Dark Gray) */}
//             <div
//               className="
//               absolute
//               bottom-0 right-64
//               [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
//               [@media(min-width:767px)_and_(max-width:1130px)]:right-44
//               [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
//               [@media(min-width:767px)_and_(max-width:950px)]:right-14
//               w-[32.58%]
//               md:w-[391px]
//               h-[15.5%]
//               md:h-[180px]
//               rounded-xl shadow-xl
//             "
//             >
//               <video
//                 className="w-full h-full object-cover "
//                 src="https://swastixa.b-cdn.net/WORK-Page-5V%20(5).mp4 "
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//               ></video>
//             </div>
//           </div>
//         </Tilt >
//       </div>
//     </section>
//   );
// };

// export default WorkHero;




// import React, { useState } from "react";
// import Tilt from "react-parallax-tilt";
// import { Oval } from 'react-loader-spinner';

// // =============================
// // CARD DATA FOR BOTH VIEW
// // =============================
// const videoCards = [
//   {
//     id: 1,
//     src: "https://swastixa.b-cdn.net/WORK-Page-5V%20(1).mp4",
//     mobileBg: "bg-[#2f2d2d]",
//     className: `
//       absolute 
//       top-0 left-[17%] 
//       w-[32.58%] h-[15.5%]
//       rounded-xl shadow-xl
//       md:w-[391px] md:h-[180px]
//       [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
//       [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
//       [@media(min-width:767px)_and_(max-width:950px)]:left-10
//     `,
//   },
//   {
//     id: 2,
//     src: "https://swastixa.b-cdn.net/WORK-Page-5V%20(2).mp4",
//     mobileBg: "bg-[#ededed]",
//     className: `
//       absolute 
//       top-0 right-36
//       w-[32.58%] h-[15.5%]
//       rounded-xl shadow-sm
//       md:w-[391px] md:h-[180px]
//       [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
//       [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
//       [@media(min-width:767px)_and_(max-width:950px)]:right-10
//     `,
//   },
//   {
//     id: 3,
//     src: "https://swastixa.b-cdn.net/WORK-Page-5V%20(3).mp4",
//     mobileBg: "bg-[#bdb9b9]",
//     className: `
//       relative
//       top-24 left-1/3
//       w-[32.58%] h-[15.5%]
//       rounded-xl shadow-xl z-20
//       md:w-[391px] md:h-[180px]
//       [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
//       [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
//     `,
//   },
//   {
//     id: 4,
//     src: "https://swastixa.b-cdn.net/WORK-Page-5V%20(4).mp4",
//     mobileBg: "bg-[#d9d9d9]",
//     className: `
//       absolute
//       top-58 left-20
//       w-[32.58%] h-[15.5%]
//       rounded-xl shadow-xl
//       md:w-[391px] md:h-[180px]
//       [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
//       [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
//       [@media(min-width:767px)_and_(max-width:1130px)]:left-36
//       [@media(min-width:767px)_and_(max-width:950px)]:left-7
//     `,
//   },
//   {
//     id: 5,
//     src: "https://swastixa.b-cdn.net/WORK-Page-5V%20(5).mp4",
//     mobileBg: "bg-[#625f5f]",
//     className: ` 
//       absolute
//       top-58 right-64
//       w-[32.58%] h-[15.5%]
//       rounded-xl shadow-xl  
//       md:w-[391px] md:h-[180px]
//       [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
//       [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
//       [@media(min-width:767px)_and_(max-width:1130px)]:right-44
//       [@media(min-width:767px)_and_(max-width:950px)]:right-14
//     `,
//   },
// ];

// // =============================
// // REUSABLE VIDEO CARD
// // =============================
// const VideoCard = ({ src, className }) => {
//   const [loading, setLoading] = useState(true);

//   return (
//     <div className={`${className} overflow-hidden bg-black`}>
//       {/* Loader (Show Until Video Loads) */}
//       {loading && (
//         <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-30">
//           <Oval
//             height={40}
//             width={40}
//             color="#ffffff"
//             secondaryColor="#4fa94d"
//             strokeWidth={4}
//             strokeWidthSecondary={4}
//             ariaLabel="oval-loading"
//             visible={true}
//           />
//         </div>
//       )}

//       {/* Video */}
//       <video
//         className={`w-full h-full object-cover transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"
//           }`}
//         src={src}
//         autoPlay
//         loop
//         muted
//         playsInline
//         onLoadedData={() => setLoading(false)}
//       ></video>
//     </div>
//   );
// };


// // =============================
// // MAIN COMPONENT
// // =============================
// const WorkHero = () => {

//   return (
//     <section className="w-full h-auto md:h-[70vh] mb-20 md:mb-44 flex items-center justify-center pt-10 md:pt-24 bg-transparent overflow-hidden">

//       <div className="relative w-full max-w-6xl h-auto md:h-[400px] flex flex-col md:block items-center gap-4">

//         {/* ===== MOBILE VIEW (< 768px) ===== */}
//         <div className="flex md:hidden flex-col px-4 items-center gap-6 w-full">
//           {videoCards.map((v) => (
//             <div
//               key={v.id}
//               className={`w-full max-w-[400px] aspect-video rounded-xl overflow-hidden shadow-lg ${v.mobileBg}`}
//             >
//               <video
//                 className="w-full h-full object-cover"
//                 src={v.src}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//               ></video>
//             </div>
//           ))}
//         </div>

//         {/* ===== DESKTOP VIEW (>= 768px) ===== */}
//         <div className="hidden md:block w-full h-full">
//           <Tilt
//             className="w-full h-full relative"
//             perspective={1000}
//             glareEnable={true}
//             glareMaxOpacity={0.1}
//           >
//             {videoCards.map((v) => (
//               <VideoCard key={v.id} src={v.src} className={v.className} />
//             ))}
//           </Tilt>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WorkHero;



// import React, { useEffect, useState } from "react";
