import React from 'react'
import WorkHero from '../WorkHero'
import SMMGrid from '../SMMGrid'
import CircularGallery from '../CircularGallery'
import MagicBento from '../../common/MagicBento'
import smmContent from '../../../data/smmContent.js'

const SocialMediaManagement = () => {
  
  

  return (
    <main className="bg-black">
      {/* <InnerPageHeader
        title="Work"
        description="High-performance creative work powered by optimized video delivery."
        /> */}
      {/* <WorkFilterSearch /> */}
      {/* <WorkHero /> */}



      {/* <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={4} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} scrollSpeed={5} />

      </div> */}
      <h2 className='pt-24 md:pt-40 lg:pt-60 2xl:pt-80 text-white text-center text-4xl md:text-6xl font-bold tracking-tighter'>Social Media Management</h2>
      {/* <MagicBento> */}
        {/* <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        /> */}
      <SMMGrid smmContent={smmContent} />
    </main>
  )
}

export default SocialMediaManagement