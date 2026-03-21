import { useRef, useState, useEffect } from "react";

const VideoPlayer = ({ src, poster }) => {
  if (!src) return null;

  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // 1. Observer for Pre-loading (Large Margin)
  useEffect(() => {
    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: "800px" }
    );

    if (containerRef.current) loadObserver.observe(containerRef.current);
    return () => loadObserver.disconnect();
  }, []);

  // 2. Observer for Play/Pause (Strict Viewport)
  useEffect(() => {
    const playObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "-10%" }
    );

    if (containerRef.current) playObserver.observe(containerRef.current);
    return () => playObserver.disconnect();
  }, []);

  // 3. Play/Pause Logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Crucial iOS/Mac fix: explicitly setting DOM element attributes 
    // bypasses Safari's strict React autoplay-blocking bugs
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    if (isVisible) {
      video.play().catch((err) => { 
        console.warn("iOS/Safari autoplay blocked:", err); 
      });
    } else {
      video.pause();
    }
  }, [isVisible, shouldLoad]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[33vh] sm:h-[60vh] md:h-[70vh] lg:h-[95vh]
        max-w-[95vw] md:max-w-[98vw] xl:max-w-[80vw]
        overflow-hidden rounded-2xl bg-neutral-900
        flex items-center justify-center shadow-3xl border border-white/5"
    >
      {/* Poster Backtrack */}
      {(!isReady || !shouldLoad) && (
        <div className="absolute inset-0 z-10 transition-opacity duration-700 pointer-events-none">
          <img
            src={poster}
            alt="video preview"
            className="w-full h-full object-cover blur-sm opacity-50"
          />
          {/* Simple Clean Spinner */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white/10 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {shouldLoad && (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          controls
          playsInline
          preload="metadata"
          onLoadedData={() => setIsReady(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ${isReady ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
        />
      )}
    </div>
  );
};


export default VideoPlayer;
