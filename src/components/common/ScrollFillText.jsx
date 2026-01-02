// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const ScrollFillText = () => {
//   const sectionRef = useRef(null);


//   const phrases = [
//   "For us, creativity is a refined and strategic ",
//   "flow where deep understanding shapes ",
//   "ideas, thoughtful design creates balance,",
//   "and digital innovation transforms vision",
//   "into powerful and scalable solutions,",
//   "delivered with clarity, consistency,",
//   "and measurable performance across every stage",
//   "of the brand journey."
// ];



//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Target all our line divs
//       const lines = gsap.utils.toArray('.reveal-line');

//       lines.forEach((line) => {
//         gsap.to(line, {
//           backgroundPositionX: '0%',
//           ease: 'none',
//           scrollTrigger: {
//             trigger: line,
//             scrub: 1,
//             start: 'top 75%', // Starts filling when line is 75% down the screen
//             end: 'top 35%',   // Finishes filling when line reaches 35%
//           },
//         });
//       });
//     }, sectionRef);

//     return () => ctx.revert(); // Cleanup GSAP on unmount
//   }, []);

//   return (
//     <div ref={sectionRef} className="bg-zinc-950 min-h-[200vh] py-20">
//       {/* Spacer to allow for scrolling start */}
//       {/* <div className="h-[50vh] flex items-center justify-center text-zinc-500 italic">
//         Scroll down to reveal
//       </div> */}

//       <div className="px-6 md:px-20 max-w-7xl mx-auto">
//         {phrases.map((phrase, i) => (
//           <div 
//             key={i} 
//             className="reveal-line leading-[1.1] font-bold tracking-tighter cursor-default
//                        text-[10vw] md:text-[8vw] lg:text-[5vw]"
//             style={{
//               backgroundImage: 'linear-gradient(to right, white 50%, #27272a 50%)',
//               backgroundSize: '200% 100%',
//               backgroundPositionX: '100%',
//               color: 'transparent',
//               backgroundClip: 'text',
//               WebkitBackgroundClip: 'text',
//             }}
//           >
//             {phrase}
//           </div>
//         ))}
//       </div>
      
//       <div className="h-[100vh]" />
//     </div>
//   );
// };

// export default ScrollFillText;


// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const BrandManifesto = () => {
//   const containerRef = useRef(null);
//   const textRef = useRef(null);

//   const fullText = "For us, creativity is a refined and strategic flow where deep understanding shapes ideas, thoughtful design creates balance, and digital innovation transforms vision into powerful and scalable solutions, delivered with clarity, consistency, and measurable performance across every stage of the brand journey.";

//   useEffect(() => {
//     // 1. Split text into words for the most granular "scrape" effect
//     const words = fullText.split(" ");
//     const textElement = textRef.current;
    
//     // Clear existing text and inject wrapped words
//     textElement.innerHTML = words
//       .map(word => `<span class="word-wrapper inline-block mr-[0.25em]">${word}</span>`)
//       .join("");

//     const wordSpans = textElement.querySelectorAll('.word-wrapper');

//     const ctx = gsap.context(() => {
//       // 2. Loop through each word to create the ScrollTrigger
//       wordSpans.forEach((word) => {
//         gsap.to(word, {
//           backgroundPositionX: '0%',
//           ease: 'none',
//           scrollTrigger: {
//             trigger: word,
//             start: 'top 80%', // Starts coloring when word is near bottom
//             end: 'top 40%',   // Finishes coloring as it moves up
//             scrub: true,      // Tied directly to scroll
//           },
//         });
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section 
//       ref={containerRef} 
//       className="bg-[#0a0a0a] min-h-[150vh] flex flex-col items-center justify-center px-6 py-40"
//     >
//       <div className="max-w-6xl">
//         <h2 
//           ref={textRef}
//           className="font-bold leading-[1.1] tracking-tight text-[8vw] md:text-[6vw] lg:text-[5vw]"
//           style={{
//             // The "Magic" CSS for the fill effect
//             display: 'inline',
//           }}
//         >
//           {/* Words injected by GSAP useEffect */}
//         </h2>
//       </div>

//       <style jsx>{`
//         .word-wrapper {
//           background: linear-gradient(
//             to right, 
//             white 50%, 
//             rgb(63, 63, 70) 50%
//           );
//           background-size: 200% 100%;
//           background-position-x: 100%;
//           color: transparent;
//           background-clip: text;
//           -webkit-background-clip: text;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default BrandManifesto;



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFillText = () => {
  const sectionRef = useRef(null);
  const linesRef = useRef([]);

  const phrases = [
    "For us, creativity is a refined and strategic",
    "flow where deep understanding shapes",
    "ideas, thoughtful design creates balance,",
    "and digital innovation transforms vision",
    "into powerful and scalable solutions,",
    "delivered with clarity, consistency,",
    "and measurable performance across every ",
    "stage of the brand journey."
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".main-para",
          start: "-20% top",
          end: "+=80%",
          scrub: true,
          // pin: true,
          // markers: true,
        }
      });

      linesRef.current.forEach((line) => {
        tl.to(line, {
          backgroundPositionX: "0%",
          duration: 1,
          ease: "none",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black min-h-screen flex items-center"
    >
      <div className="main-para px-6 md:px-20 max-w-7xl mx-auto pt-[60vh]">
        {phrases.map((phrase, i) => (
          <div
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            className="leading-[1.1] font-bold tracking-tighter
                       text-[10vw] md:text-[8vw] lg:text-[4vw] "
            style={{
              // backgroundImage:
              //   "linear-gradient(to right, white 50%, #27272a 50%)",
              backgroundImage: "linear-gradient(to right, white 50%, rgba(39, 39, 42, 0) 50%)",
              backgroundSize: "200% 100%",
              backgroundPositionX: "100%",
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            {phrase}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollFillText;
