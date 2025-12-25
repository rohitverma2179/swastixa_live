// // ...existing code...
// import React, { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import HomeAbout from "./HomeAbout";
// import EndToEndExcellence from "./EndToEndExcellence";
// import ForthSection from "./ForthSection";

// gsap.registerPlugin(ScrollTrigger);

// const TOTAL_FRAMES = 199;

// const ThreeSection = () => {
//     const canvasRef = useRef(null);
//     const wrapperRef = useRef(null);
//     const [images, setImages] = useState([]);

//     // PRELOAD FRAMES
//     useEffect(() => {
//         const arr = [];
//         for (let i = 1; i <= TOTAL_FRAMES; i++) {
//             const img = new Image();
//             img.src = `/frames/watermarked_preview_${String(i).padStart(3, "0")}.jpg`;
//             arr.push(img);
//         }
//         setImages(arr);
//     }, []);

//     // CANVAS + PIN + ANIMATION
//     useEffect(() => {
//         if (images.length === 0) return;

//         const canvas = canvasRef.current;
//         const wrapper = wrapperRef.current;
//         const ctx = canvas.getContext("2d");

//         let scale = window.devicePixelRatio || 1;

//         const setCanvasSize = () => {
//             scale = window.devicePixelRatio || 1;
//             // set backing store size to high DPI, CSS size via style
//             canvas.width = 1920 * scale;
//             canvas.height = 1080 * scale;
//             canvas.style.width = "100%";
//             canvas.style.height = "100vh";
//             ctx.setTransform(scale, 0, 0, scale, 0, 0); // reset + scale
//         };
//         setCanvasSize();

//         const state = { frame: 0 };

//         const render = () => {
//             const img = images[state.frame];
//             if (!img) return;
//             // clear using CSS pixels (divide by scale)
//             ctx.clearRect(0, 0, canvas.width / scale, canvas.height / scale);
//             ctx.drawImage(img, 0, 0, canvas.width / scale, canvas.height / scale);
//         };

//         // ensure first frame renders when loaded
//         const firstImg = images[0];
//         if (firstImg) {
//             if (firstImg.complete) render();
//             else firstImg.onload = render;
//         }

//         // PIN CANVAS
//         const pinTrigger = ScrollTrigger.create({
//             trigger: wrapper,
//             start: "top top",
//             end: "7500px",
//             pin: canvas,
//             scrub: true,
//         });

//         // FRAME ANIMATION
//         const tween = gsap.to(state, {
//             frame: TOTAL_FRAMES - 1,
//             roundProps: "frame", // round frames to integers
//             ease: "none",
//             scrollTrigger: {
//                 trigger: wrapper,
//                 start: "top top",
//                 end: "8000px",
//                 scrub: true,
//             },
//             onUpdate: render,
//         });

//         // handle resize
//         const onResize = () => {
//             setCanvasSize();
//             render();
//             ScrollTrigger.refresh();
//         };
//         window.addEventListener("resize", onResize);

//         // cleanup
//         return () => {
//             window.removeEventListener("resize", onResize);
//             tween.kill();
//             pinTrigger.kill();
//             ScrollTrigger.getAll().forEach(st => st.kill());
//             gsap.killTweensOf(state);
//         };
//     }, [images]);

//     return (
//         <div
//             ref={wrapperRef}
//             id="three-section-wrapper"
//             style={{
//                 width: "100%",
//                 position: "relative",
//                 background: "white",
//             }}
//         >
//             {/* FIXED CANVAS */}
//             <canvas
//                 ref={canvasRef}
//                 style={{
//                     width: "100%",
//                     height: "100vh",
//                     position: "relative",
//                     zIndex: 1,
//                     pointerEvents: "none",
//                 }}
//             />

//             {/* ONLY HOMEABOUT — starts at same viewport as canvas */}
//             <div
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100vh",
//                     zIndex: 5,
//                 }}
//             >
//                 <HomeAbout />
//             </div>

//             <div
//                 style={{
//                     position: "absolute",
//                     top: 2800,
//                     left: 0,
//                     width: "100%",
//                     height: "100vh",
//                     zIndex: 6,
//                 }}
//             >
//                 <EndToEndExcellence />
//             </div>
//             <div
//                 style={{
//                     position: "absolute",
//                     top: 3700,
//                     left: 0,
//                     width: "100%",
//                     height: "100vh",
//                     zIndex: 7,
//                 }}
//             >
//                 <ForthSection />
//             </div>
//         </div>
//     );
// };

// export default ThreeSection;



// gsap.registerPlugin(ScrollTrigger);


// const ThreeSection = () => {
//     const canvasRef = useRef(null);
//     const wrapperRef = useRef(null);
//     const [images, setImages] = useState([]);
//     const [isMobile, setIsMobile] = useState(false);

//     // Detect screen size
//     useEffect(() => {
//         const checkMobile = () => {
//             setIsMobile(window.innerWidth <= 425);
//         };
//         checkMobile();
//         window.addEventListener("resize", checkMobile);

//         return () => window.removeEventListener("resize", checkMobile);
//     }, []);

//     // If mobile — STOP ALL animations, no canvas.
//     if (isMobile) {
//         return (
//             <div style={{ width: "100%", background: "white" }}>
//                 <HomeAbout />
//                 <EndToEndExcellence />
//                 <ForthSection />
//             </div>
//         );
//     }

//     // DESKTOP MODE → PRELOAD FRAMES
//     useEffect(() => {
//         const arr = [];
//         for (let i = 1; i <= TOTAL_FRAMES; i++) {
//             const img = new Image();
//             img.src = `/frames/watermarked_preview_${String(i).padStart(3, "0")}.jpg`;
//             arr.push(img);
//         }
//         setImages(arr);
//     }, []);

//     // DESKTOP MODE → CANVAS + SCROLL ANIMATION
//     useEffect(() => {
//         if (images.length === 0 || isMobile) return;

//         const canvas = canvasRef.current;
//         const wrapper = wrapperRef.current;
//         const ctx = canvas.getContext("2d");
//         let scale = window.devicePixelRatio || 1;

//         const setCanvasSize = () => {
//             scale = window.devicePixelRatio || 1;

//             canvas.width = 1920 * scale;
//             canvas.height = 1080 * scale;

//             canvas.style.width = "100%";
//             canvas.style.height = "100vh";

//             ctx.setTransform(scale, 0, 0, scale, 0, 0);
//         };
//         setCanvasSize();

//         const state = { frame: 0 };

//         const render = () => {
//             const img = images[state.frame];
//             if (!img) return;
//             ctx.clearRect(0, 0, canvas.width / scale, canvas.height / scale);
//             ctx.drawImage(img, 0, 0, canvas.width / scale, canvas.height / scale);
//         };

//         if (images[0].complete) render();
//         else images[0].onload = render;

//         // Pin & animate frames
//         const pinTrigger = ScrollTrigger.create({
//             trigger: wrapper,
//             start: "top top",
//             end: "7500px",
//             pin: canvas,
//             scrub: true,
//         });

//         const tween = gsap.to(state, {
//             frame: TOTAL_FRAMES - 1,
//             roundProps: "frame",
//             ease: "none",
//             scrollTrigger: {
//                 trigger: wrapper,
//                 start: "top top",
//                 end: "8000px",
//                 scrub: true,
//             },
//             onUpdate: render,
//         });

//         // Resize handling
//         const onResize = () => {
//             setCanvasSize();
//             render();
//             ScrollTrigger.refresh();
//         };
//         window.addEventListener("resize", onResize);

//         return () => {
//             window.removeEventListener("resize", onResize);
//             tween.kill();
//             pinTrigger.kill();
//             ScrollTrigger.getAll().forEach((t) => t.kill());
//         };
//     }, [images, isMobile]);

//     return (
//         <div
//             ref={wrapperRef}
//             style={{
//                 width: "100%",
//                 position: "relative",
//                 background: "white",
//             }}
//         >
//             {/* DESKTOP: FIXED CANVAS */}
//             <canvas
//                 ref={canvasRef}
//                 style={{
//                     width: "100%",
//                     height: "100vh",
//                     position: "relative",
//                     zIndex: 1,
//                     pointerEvents: "none",
//                 }}
//             />

//             {/* COMPONENTS OVER CANVAS */}
//             <div
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     width: "100%",
//                     height: "100vh",
//                     zIndex: 5,
//                 }}
//             >
//                 <HomeAbout />
//             </div>

//             <div
//                 style={{
//                     position: "absolute",
//                     top: 3100,
//                     width: "100%",
//                     height: "100vh",
//                     zIndex: 6,
//                 }}
//             >
//                 <EndToEndExcellence />
//             </div>

//             <div
//                 style={{
//                     position: "absolute",
//                     top: 3500,
//                     width: "100%",
//                     height: "100vh",
//                     zIndex: 7,
//                 }}
//             >
//                 <ForthSection />
//             </div>
//         </div>
//     );
// };

// export default ThreeSection;





// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import HomeAbout from "./HomeAbout";
// import EndToEndExcellence from "./EndToEndExcellence";
// import ForthSection from "./ForthSection";
// import React, { useRef, useEffect, useState } from "react";

// const TOTAL_FRAMES = 199;


// const ThreeSection = () => {
//     const canvasRef = useRef(null);
//     const wrapperRef = useRef(null);
//     const [images, setImages] = useState([]);
//     const [isMobile, setIsMobile] = useState(false);

//     // Detect screen size
//     useEffect(() => {
//         const checkMobile = () => setIsMobile(window.innerWidth <= 430);
//         checkMobile();
//         window.addEventListener("resize", checkMobile);
//         return () => window.removeEventListener("resize", checkMobile);
//     }, []);

//     // PRELOAD FRAMES (only Desktop)
//     useEffect(() => {
//         if (isMobile) return;

//         const arr = [];
//         for (let i = 1; i <= TOTAL_FRAMES; i++) {
//             const img = new Image();
//             // img.src = `/frames/watermarked_preview_${String(i).padStart(3, "0")}.jpg`;
//             img.src = `/frames/s_1 (${i}).png`;

//             arr.push(img);
//         }
//         setImages(arr);
//     }, [isMobile]);

//     // CANVAS + SCROLL ANIMATION (only Desktop)
//     useEffect(() => {
//         if (isMobile || images.length === 0) return;

//         const canvas = canvasRef.current;
//         const wrapper = wrapperRef.current;
//         const ctx = canvas.getContext("2d");
//         let scale = window.devicePixelRatio || 1;

//         const setCanvasSize = () => {
//             scale = window.devicePixelRatio || 1;
//             canvas.width = 1920 * scale;
//             canvas.height = 1080 * scale;
//             canvas.style.width = "100%";
//             canvas.style.height = "100vh";
//             ctx.setTransform(scale, 0, 0, scale, 0, 0);
//         };

//         setCanvasSize();

//         const state = { frame: 0 };
//         const render = () => {
//             const img = images[state.frame];
//             if (!img) return;
//             ctx.clearRect(0, 0, canvas.width / scale, canvas.height / scale);
//             ctx.drawImage(img, 0, 0, canvas.width / scale, canvas.height / scale);
//         };

//         if (images[0].complete) render();
//         else images[0].onload = render;

//         const pinTrigger = ScrollTrigger.create({
//             trigger: wrapper,
//             start: "top top",
//             end: "7500px",
//             pin: canvas,
//             scrub: true,
//         });

//         const tween = gsap.to(state, {
//             frame: TOTAL_FRAMES - 1,
//             roundProps: "frame",
//             ease: "none",
//             scrollTrigger: {
//                 trigger: wrapper,
//                 start: "top top",
//                 end: "8000px",
//                 scrub: true,
//             },
//             onUpdate: render,
//         });

//         const onResize = () => {
//             setCanvasSize();
//             render();
//             ScrollTrigger.refresh();
//         };

//         window.addEventListener("resize", onResize);

//         return () => {
//             window.removeEventListener("resize", onResize);
//             tween.kill();
//             pinTrigger.kill();
//             ScrollTrigger.getAll().forEach((t) => t.kill());
//         };
//     }, [images, isMobile]);

//     // ----- RETURN KE ANDAR CONDITIONAL RENDER -----
//     if (isMobile) {
//         return (
//             <div style={{ width: "100%", background: "white" }}>
//                 <HomeAbout />
//                 <EndToEndExcellence />
//                 <ForthSection />
//             </div>
//         );
//     }

//     return (
//         <div ref={wrapperRef} style={{ width: "100%", position: "relative", background: "white" }}>
//             <canvas ref={canvasRef} style={{ width: "100%", height: "100vh", position: "relative", zIndex: 1 }} />

//             <div style={{ position: "absolute", top: 0, width: "100%", height: "100vh", zIndex: 5 }}>
//                 <HomeAbout />
//             </div>

//             <div style={{ position: "absolute", top: 3100, width: "100%", height: "100vh", zIndex: 6 }}>
//                 <EndToEndExcellence />
//             </div>

//             <div style={{ position: "absolute", top: 3500, width: "100%", height: "100vh", zIndex: 7 }}>
//                 <ForthSection />
//             </div>
//         </div>
//     );
// };


// export default ThreeSection;

