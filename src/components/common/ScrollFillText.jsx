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
      className="bg-black min-h-screen flex items-center mb-10"
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
