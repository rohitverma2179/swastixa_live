// // import { FixedSizeList as List } from "react-window";
// // // import ReactWindow from "react-window";

// // // const { FixedSizeList } = ReactWindow;
// // // import VideoPlayer from "./VideoPlayer";
// // // import { videoList } from "../data/videoList";
// // // import  {videoList}  from "../../data/videoList";
// // // import { List } from "react-window";
// // import VideoPlayer from "./VideoPlayer";
// // import { videoList } from "../../data/videoList.js";

// // const Row = ({ index, style }) => {
// //   const video = videoList[index];

// //   return (
// //     <div style={style} className="flex justify-center py-20">
// //       <VideoPlayer
// //         src={video.src}
// //         poster={`/posters/${video.id}.webp`}
// //       />
// //     </div>
// //   );
// // };

// // const VirtualVideoList = () => {
// //   return (
// //     <List
// //       height={window.innerHeight}
// //       itemCount={videoList.length}
// //       itemSize={700}
// //       width="100%"
// //     >
// //       {Row}
// //     </List>
// //   );
// // };

// // export default VirtualVideoList;


// import { useRef } from "react";
// import { useVirtualizer } from "@tanstack/react-virtual";
// import { videoList } from "../../data/videoList";
// import VideoPlayer from "./VideoPlayer";
// // import VideoPlayer from "./VideoPlayer";
// // import { videoList } from "../data/videoList";

// const VirtualVideoList = () => {
//   const parentRef = useRef(null);

//   const rowVirtualizer = useVirtualizer({
//     count: videoList.length,
//     getScrollElement: () => parentRef.current,
//     estimateSize: () => 750,
//     overscan: 2, // Netflix style smoothness
//   });

//   console.log(rowVirtualizer.getVirtualItems());

//   return (
//     <div
//       ref={parentRef}
//       className="h-screen w-full overflow-auto bg-black"
//     >
//       <div
//         style={{
//           height: `${rowVirtualizer.getTotalSize()}px`,
//           position: "relative",
//         }}
//       >
//         {rowVirtualizer.getVirtualItems().map((virtualRow) => {
//           const video = videoList[virtualRow.index];
//           if (!video?.src) return null;

//           return (
//             <div
//               key={video.id}
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 transform: `translateY(${virtualRow.start}px)`,
//               }}
//               className="flex justify-center py-24"
//             >
//               <VideoPlayer
//                 src={video.src}
//                 poster={`/posters/${video.id}.webp`}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default VirtualVideoList;



import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { videoList } from "../../data/videoList";
import VideoPlayer from "./VideoPlayer";

const VirtualVideoList = () => {
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: videoList.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => window.innerHeight * 0.9,
    overscan: 3,
  });

  return (
    <div
      ref={parentRef}
      className="h-screen w-full overflow-auto bg-black"
    >
      <div
        style={{
          height: rowVirtualizer.getTotalSize(),
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((row) => {
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
                transform: `translateY(${row.start}px)`,
              }}
              className="flex justify-center py-24"
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
