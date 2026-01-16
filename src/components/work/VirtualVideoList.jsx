

import { useRef, useState, useEffect } from "react";

import { useVirtualizer } from "@tanstack/react-virtual";
import { videoList } from "../../data/videoList";
import VideoPlayer from "./VideoPlayer";

const VirtualVideoList = () => {
  const containerRef = useRef(null);
  const [scrollMargin, setScrollMargin] = useState(0);

  // Measure initial offset immediately to prevent jumping
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setScrollMargin(rect.top + scrollTop);
      }
    };

    measure();
    // Re-measure after a short delay to account for dynamic content like hero videos
    const timer = setTimeout(measure, 500);
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(timer);
    };
  }, []);

  const rowVirtualizer = useVirtualizer({
    count: videoList.length,
    getScrollElement: () => (typeof document !== "undefined" ? document.documentElement : null),
    estimateSize: () => 800,
    overscan: 10, // Increased significantly for smoother up/down scrolling
    scrollMargin: scrollMargin,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();

  return (
    <div
      ref={containerRef}
      className="w-full bg-black relative"
      style={{ minHeight: "80vh" }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: "relative",
          width: "100%",
        }}
      >
        {virtualItems.map((row) => {
          const video = videoList[row.index];
          if (!video) return null;

          return (
            <div
              key={video.id}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${row.size}px`,
                transform: `translateY(${row.start - scrollMargin}px)`,
                willChange: "transform",
              }}
              className="flex justify-center items-center py-10 md:py-20 px-4"
            >
              <VideoPlayer
                src={video.src}
                poster={`/posters/${video.id}.webp`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};




export default VirtualVideoList;
