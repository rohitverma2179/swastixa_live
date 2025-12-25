// import React from "react";
// import Particles from "./Particles";

// const EndToEndExcellence = () => {
//   return (
//     // <section className="  flex items-center justify-center min-h-[50vh] sm:min-h-[70vh]  p-[12px] sm:p-6">



//      <section className="relative flex items-center justify-center min-h-[50vh] sm:min-h-[70vh] p-[12px] sm:p-6 overflow-hidden">

//       {/* ==== PARTICLES BACKGROUND ==== */}
//       <Particles
//         particleCount={300}
//         particleColors={["#ffffff"]}
//         particleBaseSize={120}
//       />

//       {/* ==== WRAPPER WITH VIDEO BACKGROUND ==== */}
//       <div className=" w-full max-w-[1364px] rounded-[10px] overflow-hidden">

//         {/* === VIDEO BACKGROUND === */}
//         {/* <video
//           className="absolute inset-0 w-full h-full object-cover z-0"
//           src="https://res.cloudinary.com/dzsotenu5/video/upload/v1763031857/envato_video_gen_Nov_06_2025_9_33_55_vrj50d.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//         /> */}

//         {/* === CONTENT BOX (NO VIDEO INSIDE) === */}
//         <div
//           className="relative z-10 w-full h-full p-10 text-center"
//           style={{
//             background: "#0c0c0c00",
//             backdropFilter: "blur(15px)",
//             boxShadow: "rgb(0 0 0 / 25%) 1.5px 1px 2.8px inset",
//           }}


//     //       background: ;
//     // backdrop-filter: blur(15px);
//     // box-shadow: ;
//         >
//           <h1 className="text-white text-[29px] md:text-7xl font-bold">
//             Excellence<span className="text-blue-500"> Through</span> Flow
//           </h1>

//           <p className="text-gray-300 text-left text-lg sm:text-xl mt-6 max-w-3xl mx-auto">
//             Website development, digital marketing, in-house production—all under one roof. Every touchpoint connects perfectly, creating balanced ecosystems that deliver results.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EndToEndExcellence;


// import React from "react";
// import Particles from "./Particles"; // Make sure the path is correct

// const EndToEndExcellence = () => {
//   return (
//     <section className="relative flex items-center justify-center min-h-[50vh] sm:min-h-[70vh] p-[12px] sm:p-6 overflow-hidden">
//       {/* ==== PARTICLES BACKGROUND ==== */}
//       <Particles
//         particleCount={6000}
//         particleColors={["#ffffff"]}
//         particleBaseSize={120}
//       />

//       {/* ==== WRAPPER ==== */}
//       <div className="relative z-20 w-full max-w-[1364px] rounded-[10px] overflow-hidden">

//         {/* === CONTENT BOX === */}
//         <div
//           className="relative w-full h-full p-10 text-center"
//           style={{
//             background: "rgba(12, 12, 12, 0.0)", // Transparent background
//             backdropFilter: "blur(15px)",        // Blur effect
//             boxShadow: "rgb(0 0 0 / 25%) 1.5px 1px 2.8px inset", // Inner shadow
//           }}
//         >
//           <h1 className="text-white text-[29px] md:text-7xl font-bold">
//             Excellence <span className="text-blue-500">Through</span> Flow
//           </h1>

//           <p className="text-gray-300 text-left text-lg sm:text-xl mt-6 max-w-3xl mx-auto">
//             Website development, digital marketing, in-house production—all under one roof. Every touchpoint connects perfectly, creating balanced ecosystems that deliver results.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EndToEndExcellence;





import React from "react";
import Particles from "./Particles"; // Make sure this path is correct

const EndToEndExcellence = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[50vh] sm:min-h-[70vh] p-[12px] sm:p-6 overflow-hidden">

      {/* ==== PARTICLES BACKGROUND ==== */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleBaseSize={120}
          particleColors={['#2196F3', '#FFFFFF']}
          particleCount={350}
          particleSpread={25}
          speed={0.3}
          // particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* ==== CONTENT WRAPPER ==== */}
      <div className="relative z-20 w-full max-w-[1364px] rounded-[10px] overflow-hidden">

        {/* === CONTENT BOX === */}
        <div
          className="relative w-full h-full p-10 text-center"
          style={{
            background: "rgba(12, 12, 12, 0.0)", // Transparent background
            backdropFilter: "blur(15px)",        // Blur effect
            boxShadow: "rgb(110 109 109 / 25%) 1.5px 1px 2.8px inset", // Inner shadow
          }}
        >
          <h1 className="text-white text-[29px] md:text-7xl font-bold">
            Excellence <span className="text-blue-500">Through</span> Flow
          </h1>

          <p className="text-gray-300 text-left lg:text-center text-[18px]  sm:text-xl mt-6 max-w-3xl mx-auto">
            Website development, digital marketing, in-house production—all under one roof. Every touchpoint connects perfectly, creating balanced ecosystems that deliver results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EndToEndExcellence;
