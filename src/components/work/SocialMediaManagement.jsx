import React, { lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom';
import smmContent from '../../data/smmContent.js'

// Lazy load heavy components for better initial performance
const SMMGrid = lazy(() => import('./SMMGrid.jsx'));
const ReelsGrid = lazy(() => import('./ReelsGrid.jsx'));
const CircularGallery = lazy(() => import('./CircularGallery.jsx'));

import { reelsData } from '../../data/reelsData.js'

const SocialMediaManagement = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section with Circular Gallery */}
      {/* <section style={{ height: '600px', position: 'relative' }}>
        <Suspense fallback={<div className="w-full h-full bg-neutral-900 animate-pulse" />}>
          <CircularGallery
            bend={4}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            scrollSpeed={5}
          />
        </Suspense>
      </section> */}

      {/* Main Content */}
      <div className="relative z-10">
        <h1 className='pt-24 md:pt-40 lg:pt-60 2xl:pt-30 text-white text-center text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter'>
          Social Media <span class="text-blue-500">Management</span>
        </h1>
        <div className='text-white text-center mt-12'>
          <button
            className="text-xl m-6 border px-8 py-2 rounded-sm transition-colors cursor-pointer bg-white text-black border-white"
          >
            Posts
          </button>
          <button
            onClick={() => navigate('/work/reels')}
            className="text-xl m-6 border px-8 py-2 rounded-sm transition-colors cursor-pointer border-white/30 text-white/70 hover:border-white hover:text-white"
          >
            Reels
          </button>
        </div>

        <Suspense fallback={
          <div className="w-full min-h-[50vh] flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          </div>
        }>
          <SMMGrid smmContent={smmContent} />
        </Suspense>
      </div>
    </main>
  )
}

export default SocialMediaManagement