import React, { useState } from "react";
// import InnerPageHeader from "../components/common/InnerPageHeader";
import VirtualVideoList from "./VirtualVideoList";
import WorkHero from "./WorkHero";
// import VirtualVideoList from "../components/work/VirtualVideoList";
// import WorkHero from "../components/work/WorkHero";

const ProductionHouse = () => {
  const [activeTab, setActiveTab] = useState("filmes");

  return (
    <main className="bg-black min-h-screen text-white">
      <div className="pt-24 md:pt-40 px-4">
        <h1 className="text-center text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase">
          Production
        </h1>
        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto text-lg md:text-xl">
          Crafting cinematic experiences and high-impact visual stories for global brands.
        </p>
      </div>

      <div className="mt-10 md:mt-20">
        <WorkHero />
      </div>
      
      {/* Tab Navigation */}
      <div className="flex justify-start xl:ml-36 items-center gap-6 mt-10 mb-0 px-4">
        <button
          onClick={() => setActiveTab("construction")}
          className={`px-10 py-3 rounded-full text-lg uppercase tracking-wider font-semibold transition-all duration-300 ${
            activeTab === "construction"
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.6)] scale-105"
              : "bg-transparent border-2 border-gray-700 text-gray-400 hover:text-white hover:border-gray-400"
          }`}
        >
          Construction
        </button>
        <button
          onClick={() => setActiveTab("filmes")}
          className={`px-10 py-3 rounded-full text-lg uppercase tracking-wider font-semibold transition-all duration-300 ${
            activeTab === "filmes"
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.6)] scale-105"
              : "bg-transparent border-2 border-gray-700 text-gray-400 hover:text-white hover:border-gray-400"
          }`}
        >
          Filmes
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-10 min-h-[50vh]">
        {activeTab === "filmes" ? (
          <VirtualVideoList />
        ) : (
          <div className="flex items-center justify-center h-full min-h-[40vh] border border-white/10 rounded-2xl mx-4 md:mx-10 bg-white/5 backdrop-blur-sm">
            <p className="text-gray-400 text-2xl uppercase tracking-[0.3em] font-light animate-pulse">
              Coming Soon
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductionHouse;
