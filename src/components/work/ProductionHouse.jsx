// import React from 'react'
// const ProductionHouse = () => {
//   console.log("ProductionHouse")
//   return (

//   )
// }

// export default ProductionHouse



// import InnerPageHeader from "../components/common/InnerPageHeader";
import VirtualVideoList from "./VirtualVideoList";
import WorkHero from "./WorkHero";
// import VirtualVideoList from "../components/work/VirtualVideoList";
// import WorkHero from "../components/work/WorkHero";

const ProductionHouse = () => {
  return (
    <main className="bg-black min-h-screen text-white">
      <div className="pt-24 md:pt-40 px-4">
        <h1 className="text-center text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase">
          Production <span className="text-blue-500">House</span>
        </h1>
        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto text-lg md:text-xl">
          Crafting cinematic experiences and high-impact visual stories for global brands.
        </p>
      </div>

      <div className="mt-10 md:mt-20">
        <WorkHero />
      </div>

      <div className="mt-20">
        <VirtualVideoList />
      </div>
    </main>
  );
};


export default ProductionHouse;
