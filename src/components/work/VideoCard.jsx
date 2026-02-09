

import React, { useEffect, useRef, useState } from "react";

const VideoCard = ({ src }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // 👀 Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          setShouldLoad(true);
        } else {
          videoRef.current?.pause();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "200px",
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // ▶️ Play ONLY when ready + visible
  useEffect(() => {
    if (isVisible && isReady) {
      videoRef.current?.play().catch(() => {});
    }
  }, [isVisible, isReady]);

  return (
    <div
      ref={containerRef}
      className="
        w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]
        max-w-[95vw] md:max-w-[90vw] xl:max-w-[80vw]
        overflow-hidden rounded-xl bg-black
        flex items-center justify-center
      "
    >
      {!shouldLoad ? (
        <div className="text-white/60 text-sm">Loading preview…</div>
      ) : (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          controls
          preload="auto"
          className="w-full h-full object-cover"
          onCanPlayThrough={() => setIsReady(true)}
        />
      )}
    </div>
  );
};

export default VideoCard;
