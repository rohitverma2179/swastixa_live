// // src/components/VideoCard.jsx

// import React from "react";

// const VideoCard = ({ src }) => {
//   return (
//     <div
//       className="
//         w-full 
//         h-[50vh] 
//         sm:h-[60vh] 
//         md:h-[70vh] 
//         lg:h-[80vh] 
//         xl:h-[90vh]
//         max-w-[95vw]
//         md:max-w-[90vw]
//         xl:max-w-[80vw]
//         overflow-hidden
//         rounded-xl 
//         border border-gray-700
//         shadow-lg
//       "
//     >
//       <video
//         src={src}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="w-full h-full object-cover"
//       ></video>
//     </div>
//   );
// };

// export default VideoCard;


// import React, { useEffect, useRef, useState } from "react";
// import { Oval } from "react-loader-spinner";

// const VideoCard = ({ src }) => {
//   const videoRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//           setIsVisible(true);   // Load video NOW
//           observer.disconnect(); // Stop observing
//         }
//       },
//       { threshold: 0.25 } // 25% visible → load fast
//     );

//     if (videoRef.current) observer.observe(videoRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={videoRef}
//       className=" 
//         w-full 
//         h-[50vh] 
//         sm:h-[60vh] 
//         md:h-[70vh] 
//         lg:h-[80vh] 
//         xl:h-[90vh]
//         max-w-[95vw]
//         md:max-w-[90vw]
//         xl:max-w-[80vw]
//         overflow-hidden
//         rounded-xl 
//         border border-black
//         shadow-lg
//         bg-black
//         flex justify-center items-center
//       "
//     >
//       {!isVisible ? (
//         // Loader placeholder
//         <div className="text-white text-sm opacity-70 text-center">Loading..</div>
//       ) : (
//         <video
//           src={src}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         ></video>
//       )}
//     </div>
//   );
// };

// export default VideoCard;



// import React, { useEffect, useRef, useState } from "react";

// const VideoCard = ({ src }) => {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);

//   const [shouldLoad, setShouldLoad] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
    
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];

//         // 👇 When video comes into view
//         if (entry.isIntersecting) {
//           setShouldLoad(true);

//           if (videoRef.current) {
//             videoRef.current.play().catch(() => {});
//             setIsPlaying(true);
//           }
//         } 
//         // 👇 When video goes out of view
//         else {
//           if (videoRef.current) {
//             videoRef.current.pause();
//             setIsPlaying(false);
//           }
//         }
//       },
//       {
//         threshold: 0.35, // 35% visible
//         rootMargin: "100px", // preload slightly before view
//       }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="
//         w-full 
//         h-[50vh] 
//         sm:h-[60vh] 
//         md:h-[70vh] 
//         lg:h-[80vh] 
//         xl:h-[90vh]
//         max-w-[95vw]
//         md:max-w-[90vw]
//         xl:max-w-[80vw]
//         overflow-hidden
//         rounded-xl 
//         border border-black
//         shadow-lg
//         bg-black
//         flex justify-center items-center
//       "
//     >
//       {!shouldLoad ? (
//         // ⏳ Placeholder (no video load yet)
//         <div className="text-white text-sm opacity-70">
//           Loading...
//         </div>
//       ) : (
//         <video
//           ref={videoRef}
//           src={src}
//           muted
//           loop
//           playsInline
//           preload="none"        // ❗ IMPORTANT: no preload
//           className="w-full h-full object-cover"
//         />
//       )}
//     </div>
//   );
// };

// export default VideoCard;



// import React, { useEffect, useRef, useState } from "react";

// const VideoCard = ({ src }) => {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);

//   const [shouldLoad, setShouldLoad] = useState(false);
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         const video = videoRef.current;

//         // 🟢 Near viewport → START FETCHING
//         if (entry.isIntersecting) {
//           setShouldLoad(true);

//           if (video && isReady) {
//             video.play().catch(() => {});
//           }
//         }
//         // 🔴 Out of viewport → PAUSE
//         else {
//           if (video) video.pause();
//         }
//       },
//       {
//         threshold: 0.25,
//         rootMargin: "200px", // 🔥 FETCH BEFORE VIEW
//       }
//     );

//     if (containerRef.current) observer.observe(containerRef.current);

//     return () => observer.disconnect();
//   }, [isReady]);

//   return (
//     <div
//       ref={containerRef}
//       className="
//         w-full 
//         h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]
//         max-w-[95vw] md:max-w-[90vw] xl:max-w-[80vw]
//         overflow-hidden rounded-xl bg-black
//         flex items-center justify-center
//       "
//     >
//       {!shouldLoad ? (
//         // ⏳ Placeholder (no fetch yet)
//         <div className="text-white/60 text-sm">Loading preview…</div>
//       ) : (
//         <video
//           ref={videoRef}
//           src={src}
//           muted
//           loop
//           playsInline
//           controls
//           preload="auto"                 // 🔥 FETCH VIDEO
//           className="w-full h-full object-cover"
//           onCanPlayThrough={() => {
//             setIsReady(true);
//             videoRef.current?.play().catch(() => {});
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default VideoCard;

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
