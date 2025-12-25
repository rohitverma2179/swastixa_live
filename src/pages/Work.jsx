import React, { useEffect, useState } from "react";
import WorkHero from "../components/work/WorkHero";
import WorkFilterSearch from "../components/work/WorkFilterSearch";
import WorkData from "../components/work/workData";
import { Oval } from 'react-loader-spinner';
import { div } from "framer-motion/client";
import InnerPageHeader from "../components/common/innerPageHeader";

export default function Work() {
  return (
    <>
      <div className="bg-black">
        {/* <div className="h-1/2 pt-10 w-full xl:max-w-[1400px] mx-auto">
          <InnerPageHeader title="Work" description="At Swastixa, our Work represents thoughtful execution, creative excellence, and purposeful results. Every project reflects our commitment to quality, clarity, and cultural values, shaping meaningful experiences that support growth and long-term impact." />
        </div> */}
        <WorkHero />
        {/* <WorkFilterSearch /> */}
        <WorkData />
      </div>
    </>
  );
}


// // import VirtualVideoList from "../components/VirtualVideoList";
// import InnerPageHeader from "../components/common/InnerPageHeader";
// import VirtualVideoList from "../components/work/VirtualVideoList";
// import WorkHero from "../components/work/WorkHero";

// const Work = () => {
//   return (
//     <main className="bg-black">
//       {/* <InnerPageHeader
//         title="Work"
//         description="High-performance creative work powered by optimized video delivery."
//         /> */}

//         <WorkHero />
//       <VirtualVideoList />
//     </main>
//   );
// };

// export default Work;
