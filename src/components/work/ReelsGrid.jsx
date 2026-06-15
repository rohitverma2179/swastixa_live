import React, { memo, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ReelItem = memo(({ item, index }) => {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInViewport, setIsInViewport] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        let timer;
        if (isInViewport) {
            timer = setTimeout(() => {
                setShouldLoad(true);
            }, 250); // Stagger loading to prevent network congestion
        } else {
            setShouldLoad(false);
            setIsLoaded(false); // Reset load state when out of view
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isInViewport]);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true;
            video.defaultMuted = true;
            video.playsInline = true;
        }
    }, [shouldLoad]);

    useEffect(() => {
        if (isHovered && videoRef.current) {
            videoRef.current.play().catch(err => console.log("Video play failed:", err));
        } else if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isHovered]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "100px" }}
            onViewportEnter={() => setIsInViewport(true)}
            onViewportLeave={() => setIsInViewport(false)}
            transition={{ duration: 0.5, delay: (index % 5) * 0.05 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative aspect-9/16 rounded-2xl overflow-hidden bg-neutral-900 group cursor-pointer border border-white/10"
        >
            {shouldLoad && (
                <video
                    ref={videoRef}
                    src={item.video}
                    poster={item.poster || undefined}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={() => setIsLoaded(true)}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
            )}

            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
            )}

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                {/* <h3 className="text-white text-lg font-bold tracking-tight">{item.title}</h3> */}
                {/* <p className="text-white/60 text-sm">Watch Reel</p> */}
            </div>

            {/* Play Icon Overlay for non-hovered state */}
            {!isHovered && isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                    </div>
                </div>
            )}
        </motion.div>
    );
});

const shuffleArray = (array) => {
    if (!array) return [];
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

const ReelsGrid = ({ reels }) => {
    const [shuffledReels, setShuffledReels] = useState(() => shuffleArray(reels));

    useEffect(() => {
        setShuffledReels(shuffleArray(reels));
    }, [reels]);

    return (
        <section className="w-full bg-black px-4 py-10 md:py-20">
            <div className="max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {shuffledReels.map((item, index) => (
                        <ReelItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(ReelsGrid);