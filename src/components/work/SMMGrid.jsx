import React from 'react';
import { motion } from 'framer-motion';


const SMMGrid = ({smmContent}) => {

    return (
        <>
            <section className="w-full min-h-screen bg-black px-4 py-20">
                <div className="max-w-[2500px] mx-auto">
                    {/* <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
                        Social Portfolio
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Curating bdigital experiences that resonate and engage tailored for modern brands.
                    </p>
                </div> */}

                    {/* Grid Layout (Uniform Cells) */}
                    {/* Pinterest / Masonry Grid */}
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                        {smmContent.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ y: -6 }}
                                className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer bg-neutral-900 shadow-lg"
                            >
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            flex flex-col justify-end p-5">
                                    <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-1">
                                        {item.category}
                                    </span>
                                    <h3 className="text-white text-lg font-bold">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default SMMGrid;







// const SMMGrid = () => {
//   return (
//     <section className="w-full min-h-screen bg-black px-4 py-20">
//       <div className="max-w-[2500px] mx-auto">

//         <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 sm:gap-6 space-y-6">

//           {smmContent.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.05 }}
//               whileHover={{
//                 y: -10,
//                 rotateX: 6,
//                 rotateY: -6,
//                 scale: 1.02
//               }}
//               className="magic-bento break-inside-avoid relative rounded-2xl overflow-hidden bg-neutral-900 cursor-pointer"
//             >

//               {/* Glow Layer */}
//               <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500
//                 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_60%)]" />

//               {/* Image */}
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 loading="lazy"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent 
//                 opacity-0 group-hover:opacity-100 transition duration-300
//                 flex flex-col justify-end p-5">
//                 <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-1">
//                   {item.category}
//                 </span>
//                 <h3 className="text-white text-lg font-bold leading-tight">
//                   {item.title}
//                 </h3>
//               </div>

//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default SMMGrid;
