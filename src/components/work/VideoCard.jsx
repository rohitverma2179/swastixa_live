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


import React, { useEffect, useRef, useState } from "react";
import { Oval } from "react-loader-spinner";

const VideoCard = ({ src }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);   // Load video NOW
          observer.disconnect(); // Stop observing
        }
      },
      { threshold: 0.25 } // 25% visible → load fast
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={videoRef}
      className=" 
        w-full 
        h-[50vh] 
        sm:h-[60vh] 
        md:h-[70vh] 
        lg:h-[80vh] 
        xl:h-[90vh]
        max-w-[95vw]
        md:max-w-[90vw]
        xl:max-w-[80vw]
        overflow-hidden
        rounded-xl 
        border border-black
        shadow-lg
        bg-black
        flex justify-center items-center
      "
    >
      {!isVisible ? (
        // Loader placeholder
        <div className="text-white text-sm opacity-70 text-center">Loading..</div>
      ) : (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        ></video>
      )}
    </div>
  );
};

export default VideoCard;
