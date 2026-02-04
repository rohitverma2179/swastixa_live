import React, { memo } from 'react';
import { motion } from 'framer-motion';

const GridItem = memo(({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
            whileHover={{ y: -6 }}
            className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer bg-neutral-900 shadow-lg mb-4 sm:mb-6"
        >
            {/* Image Container with Aspect Ratio fallback */}
            <div className="relative w-full overflow-hidden bg-neutral-800">
                <img
                    src={item.image}
                    alt={item.title || "Social Media Content"}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                    loading="lazy"
                    decoding="async"
                />
            </div>

            {/* Overlay - Only render if title or category exists */}
            {(item.title || item.category) && (
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                flex flex-col justify-end p-5">
                    {item.category && (
                        <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-1">
                            {item.category}
                        </span>
                    )}
                    {item.title && (
                        <h3 className="text-white text-lg font-bold">
                            {item.title}
                        </h3>
                    )}
                </div>
            )}
        </motion.div>
    );
});

const SMMGrid = ({ smmContent }) => {
    if (!smmContent || smmContent.length === 0) return null;

    return (
        <section className="w-full min-h-screen  bg-black px-4 py-20">
            <div className="max-w-[2500px] mx-auto">
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 xl:columns-3 2xl:columns-4 gap-4 sm:gap-6">
                    {smmContent.map((item, index) => (
                        <GridItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(SMMGrid);