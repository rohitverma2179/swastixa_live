import React, { useState } from "react";
// import InnerPageHeader from "../components/common/InnerPageHeader";
import VirtualVideoList from "./VirtualVideoList";
import WorkHero from "./WorkHero";
// import VirtualVideoList from "../components/work/VirtualVideoList";
// import WorkHero from "../components/work/WorkHero";

const constructionVideos = [
  { id: 27, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/smart-world-sky-arc.mp4" },
  { id: 28, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/smart-world-trump-tower.mp4" },
  { id: 19, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/aarize.mp4" },
];

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
          {/* Crafting cinematic experiences and high-impact visual stories for brands. */}
        </p>
      </div>

      <div className="mt-10 md:mt-20">
        <WorkHero />
      </div>
      
      {/* Tab Navigation */}
      <div className="flex justify-start xl:ml-36 items-center gap-6 mt-0 mb-0 px-4">
        <button
          onClick={() => setActiveTab("filmes")}
          className={`px-10 py-3 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
            activeTab === "filmes"
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.6)] scale-105"
              : "bg-transparent border-2 border-gray-700 text-gray-400 hover:text-white hover:border-gray-400"
          }`}
        >
          Filmes
        </button>
        <button
          onClick={() => setActiveTab("construction")}
          className={`px-10 py-3 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
            activeTab === "construction"
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.6)] scale-105"
              : "bg-transparent border-2 border-gray-700 text-gray-400 hover:text-white hover:border-gray-400"
          }`}
        >
          Construction
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-10 min-h-[50vh]">
        {activeTab === "filmes" ? (
          <VirtualVideoList />
        ) : (
          <VirtualVideoList videos={constructionVideos} />
        )}
      </div>
    </main>
  );
};

export default ProductionHouse;
