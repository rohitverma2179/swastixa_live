import React, { useState, useRef, useEffect } from "react";
import Tilt from "react-parallax-tilt";

// Local Video Assets
import video1 from "../../assets/workhero/work-page-05-01.mp4";
import video2 from "../../assets/workhero/work-page-05-02.mp4";
import video3 from "../../assets/workhero/work-page-05-03.mp4";
import video4 from "../../assets/workhero/work-page-05-04.mp4";
import video5 from "../../assets/workhero/work-page-05-05.mp4";

const videoCards = [
  {
    id: 1,
    src: video1,
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
    src: video2,
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
    src: video3,
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
    src: video4,
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
    src: video5,
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

const VideoCard = ({ src, className, id, mobileBg, shadowColor = "rgba(0,0,0,0.5)" }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [nearViewport, setNearViewport] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Pre-load when near viewport
  useEffect(() => {
    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          loadObserver.disconnect();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.01,
      }
    );

    if (containerRef.current) loadObserver.observe(containerRef.current);
    return () => loadObserver.disconnect();
  }, []);

  // Stagger load trigger
  useEffect(() => {
    if (!nearViewport) return;
    // Stagger loading to prevent concurrent connection clogging in Safari
    const delay = (id - 1) * 250;
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [nearViewport, id]);

  // Observe visibility for play/pause
  useEffect(() => {
    const playObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) playObserver.observe(containerRef.current);
    return () => playObserver.disconnect();
  }, []);

  const setVideoRef = (el) => {
    videoRef.current = el;
    if (el) {
      el.setAttribute("muted", "");
      el.setAttribute("playsinline", "");
      el.muted = true;
      el.defaultMuted = true;
      el.playsInline = true;
    }
  };

  // Play / Pause Logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (isVisible) {
      video.play().catch((err) => {
        console.warn("Autoplay blocked for WorkHero video:", err);
      });
    } else {
      video.pause();
    }
  }, [isVisible, shouldLoad]);

  return (
    <div
      ref={containerRef}
      className={`${className} overflow-hidden ${mobileBg || "bg-neutral-900"} border border-white/5 backdrop-blur-sm transition-all duration-700`}
      style={{ boxShadow: `0 10px 30px ${shadowColor}` }}
    >
      {shouldLoad && (
        <video
          ref={setVideoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

// =============================
// MAIN COMPONENT
// =============================
const WorkHero = () => {
  return (
    <section className="w-full h-auto md:h-[80vh] mb-20 md:mb-44 flex items-center justify-center pt-10 md:pt-24 bg-transparent overflow-hidden">
      <div className="relative w-full max-w-6xl h-auto md:h-[400px] flex flex-col md:block items-center gap-4">

        {/* ===== MOBILE VIEW (< 768px) ===== */}
        <div className="flex md:hidden flex-col px-4 items-center gap-6 w-full">
          {videoCards.map((v) => (
            <VideoCard
              key={v.id}
              src={v.src}
              className="w-full max-w-[400px] aspect-video rounded-xl"
              id={v.id}
              mobileBg={v.mobileBg}
            />
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
              <VideoCard
                key={v.id}
                src={v.src}
                className={v.className}
                id={v.id}
                mobileBg={v.mobileBg}
              />
            ))}
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default WorkHero;