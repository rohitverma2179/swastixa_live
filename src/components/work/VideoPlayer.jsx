// import { useRef, useState } from "react";
// import { useVideoObserver } from "../../hooks/useVideoObserver";
// // import { useVideoObserver } from "../hooks/useVideoObserver";

// const VideoPlayer = ({ src, poster }) => {
//     const videoRef = useRef(null);
//     const [loaded, setLoaded] = useState(false);

//     useVideoObserver(videoRef);

//     return (
//         <div className="w-full h-[80vh] bg-black rounded-xl overflow-hidden">
//             {!loaded && (
//                 <img
//                     src={poster}
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                     alt="video preview"
//                 />
//             )}

//             <video
//                 ref={videoRef}
//                 src={src}
//                 muted
//                 playsInline
//                 preload="none"
//                 onLoadedData={() => setLoaded(true)}
//                 className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
//             />
//         </div>
//     );
// };

// export default VideoPlayer;

import { useRef, useState } from "react";
import { useVideoObserver } from "../../hooks/useVideoObserver";

const VideoPlayer = ({ src, poster }) => {
  if (!src) return null;

  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useVideoObserver(videoRef);

  return (
    <div className="w-full h-[80vh] bg-black rounded-xl overflow-hidden relative">
      {!loaded && (
        <img
          src={poster}
          alt="video preview"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <video
        ref={videoRef}
        src={src}
        muted
        controls
        autoPlay           // 🔥 REQUIRED
        playsInline
        preload="none"
        onCanPlay={() => setLoaded(true)} // 🔥 BETTER than onLoadedData
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoPlayer;