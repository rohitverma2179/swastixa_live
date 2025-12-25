// import React, { useEffect, useRef, useState } from "react";

// const sections = [
//   {
//     id: "section1",
//     counter: "01",
//     title: "Intro",
//     body: "Timeline-style navigation. Scroll down to see what happens, or click on a number in the nav.",
//   },
//   {
//     id: "section2",
//     counter: "02",
//     title: "Section 2 Title",
//     body: "Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.",
//   },
//   {
//     id: "section3",
//     counter: "03",
//     title: "Section 3 Title",
//     body: "Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.",
//   },
//   {
//     id: "section4",
//     counter: "04",
//     title: "Section 4 Title",
//     body: "Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.",
//   },
//   {
//     id: "section5",
//     counter: "05",
//     title: "Section 5 Title",
//     body: "Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.",
//   },
//   {
//     id: "section6",
//     counter: "06",
//     title: "Section 6 Title",
//     body: "Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.",
//   },
// ];

// const bgColors = [
//   "bg-white text-black",
//   "bg-[#F64747]",
//   "bg-[#22A7F0]",
//   "bg-[#F9690E]",
//   "bg-[#9B59B6]",
//   "bg-[#03C9A9]",
//   "bg-[#ffcc00] text-black",
// ];

// const TimelineNav = () => {
//   const [activeId, setActiveId] = useState("section1");
//   const sectionRefs = useRef({});

//   // Smooth scroll (replacement for jQuery animate)
//   const handleNavClick = (id) => (e) => {
//     e.preventDefault();
//     const el = sectionRefs.current[id];
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   // Scroll‑spy: detect which section is in view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visible = entries
//           .filter((e) => e.isIntersecting)
//           .sort(
//             (a, b) =>
//               a.boundingClientRect.top - b.boundingClientRect.top
//           );

//         if (visible[0]) {
//           setActiveId(visible[0].target.id);
//         }
//       },
//       {
//         threshold: 0.6,
//       }
//     );

//     Object.values(sectionRefs.current).forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen font-['Roboto_Slab'] font-light text-white relative">
//       {/* Nav wrapper */}
//       <nav className="fixed inset-y-0 left-0 flex flex-col justify-end p-[30px] pointer-events-none">
//         <ul className="ml-[30px] mb-[100px] space-y-4 pointer-events-auto">
//           {sections.map((item, idx) => {
//             const active = activeId === item.id;
//             return (
//               <li
//                 key={item.id}
//                 className={`relative mb-4 transition-all duration-300 ${
//                   active ? "pl-4 pointer-events-none" : ""
//                 }`}
//               >
//                 {/* vertical line like :after */}
//                 <span
//                   className={`absolute left-[-30px] top-[15px] border-l-2 border-t-2 border-white block ${
//                     active
//                       ? "w-[35px] h-[400px] top-[35px]"
//                       : "w-[20px] h-[250px]"
//                   }`}
//                 />
//                 <a
//                   href={`#${item.id}`}
//                   onClick={handleNavClick(item.id)}
//                   className={`block text-white transition-all duration-150 ${
//                     !active ? "hover:pl-4" : ""
//                   }`}
//                 >
//                   <span
//                     className={`block transition-all duration-150 ${
//                       active ? "text-[48px]" : "text-[24px]"
//                     }`}
//                   >
//                     {item.counter}
//                   </span>

//                   <h3
//                     className={`text-[32px] font-light overflow-hidden transition-all duration-300 ${
//                       active
//                         ? "h-[40px] opacity-100"
//                         : "h-0 opacity-0"
//                     } w-[300px]`}
//                   >
//                     {item.title}
//                   </h3>

//                   <p
//                     className={`text-[18px] font-thin overflow-hidden transition-all duration-300 ${
//                       active
//                         ? "h-[100px] opacity-100"
//                         : "h-0 opacity-0"
//                     } w-[300px]`}
//                   >
//                     <strong>{idx === 0 && "Timeline-style navigation"}</strong>
//                     {idx === 0 ? (
//                       <>. Scroll down to see what happens, or click on a number in the nav.</>
//                     ) : (
//                       item.body
//                     )}
//                   </p>
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       {/* Sections */}
//       <div className="ml-[0]">
//         {sections.map((item, index) => (
//           <section
//             key={item.id}
//             id={item.id}
//             ref={(el) => (sectionRefs.current[item.id] = el)}
//             className={`h-screen text-[40px] font-thin flex items-center justify-center ${
//               bgColors[index + 1] || "bg-[#22A7F0]"
//             }`}
//           >
//             {index === 0
//               ? "Scroll down or use the nav."
//               : `Section ${index + 1}`}
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TimelineNav;
