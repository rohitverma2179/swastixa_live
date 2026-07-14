import { useEffect, useRef, useState } from "react";
import TextWriteAnimation from "./TextWriteAnimation";

export default function HeroSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // Force autoplay compatibility for Safari & iOS
    videoEl.setAttribute("muted", "");
    videoEl.setAttribute("playsinline", "");
    videoEl.muted = true;
    videoEl.defaultMuted = true;
    videoEl.playsInline = true;

    // Programmatic play trigger for Safari
    const playVideo = () => {
      videoEl.play().catch((err) => {
        console.warn("HeroSecond video autoplay blocked: ", err);
      });
    };

    playVideo();
    videoEl.addEventListener("loadedmetadata", playVideo);
    videoEl.addEventListener("loadeddata", playVideo);
    videoEl.addEventListener("canplay", playVideo);

    return () => {
      videoEl.removeEventListener("loadedmetadata", playVideo);
      videoEl.removeEventListener("loadeddata", playVideo);
      videoEl.removeEventListener("canplay", playVideo);
    };
  }, [shouldLoad]);

  return (
    <section ref={containerRef} className="w-full min-h-[71vh] bg-white flex justify-center items-center px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        {/* Left Text Section */}
        <div className="text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug">
            DIGITAL AGENCY FOR <br />
            <span className="text-blue-500">
              {" "}
              <TextWriteAnimation />{" "}
            </span>
            <br />
            ROOTED IN CULTURE
          </h1>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center items-center w-full max-w-md min-h-[300px] bg-neutral-50 rounded-lg overflow-hidden relative">
          {shouldLoad ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full max-w-md object-contain block"
              style={{ border: "none", outline: "none" }}
            >
              <source
                src="https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20HOME/Hero-2nd-video.mp4"
                type="video/mp4"
              />
            </video>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-neutral-200 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
