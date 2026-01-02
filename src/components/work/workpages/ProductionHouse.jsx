// import React from 'react'
// const ProductionHouse = () => {
//   console.log("ProductionHouse")
//   return (

//   )
// }

// export default ProductionHouse



// import InnerPageHeader from "../components/common/InnerPageHeader";
import VirtualVideoList from "../VirtualVideoList";
import WorkHero from "../WorkHero";
// import VirtualVideoList from "../components/work/VirtualVideoList";
// import WorkHero from "../components/work/WorkHero";

const ProductionHouse = () => {
  return (
    <main className="bg-black">
      {/* <InnerPageHeader
        title="Work"
        description="High-performance creative work powered by optimized video delivery."
        /> */}
      {/* <WorkFilterSearch /> */}
      <WorkHero />
      <VirtualVideoList />
    </main>
  );
};

export default ProductionHouse;
