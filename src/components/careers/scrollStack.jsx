// // import { useLayoutEffect, useRef, useCallback } from 'react';
// // import Lenis from 'lenis';

// // export const ScrollStackItem = ({ children, itemClassName = '' }) => (
// //   <div
// //     className={`scroll-stack-card relative w-full h-80 my-8 p-12 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
// //     style={{
// //       backfaceVisibility: 'hidden',
// //       transformStyle: 'preserve-3d'
// //     }}
// //   >
// //     {children}
// //   </div>
// // );

// // const ScrollStack = ({
// //   children,
// //   className = '',
// //   itemDistance = 100,
// //   itemScale = 0.03,
// //   itemStackDistance = 30,
// //   stackPosition = '20%',
// //   scaleEndPosition = '10%',
// //   baseScale = 0.85,
// //   scaleDuration = 0.5,
// //   rotationAmount = 0,
// //   blurAmount = 0,
// //   useWindowScroll = false,
// //   onStackComplete
// // }) => {
// //   const scrollerRef = useRef(null);
// //   const stackCompletedRef = useRef(false);
// //   const animationFrameRef = useRef(null);
// //   const lenisRef = useRef(null);
// //   const cardsRef = useRef([]);
// //   const lastTransformsRef = useRef(new Map());
// //   const isUpdatingRef = useRef(false);

// //   const calculateProgress = useCallback((scrollTop, start, end) => {
// //     if (scrollTop < start) return 0;
// //     if (scrollTop > end) return 1;
// //     return (scrollTop - start) / (end - start);
// //   }, []);

// //   const parsePercentage = useCallback((value, containerHeight) => {
// //     if (typeof value === 'string' && value.includes('%')) {
// //       return (parseFloat(value) / 100) * containerHeight;
// //     }
// //     return parseFloat(value);
// //   }, []);

// //   const getScrollData = useCallback(() => {
// //     if (useWindowScroll) {
// //       return {
// //         scrollTop: window.scrollY,
// //         containerHeight: window.innerHeight,
// //         scrollContainer: document.documentElement
// //       };
// //     } else {
// //       const scroller = scrollerRef.current;
// //       return {
// //         scrollTop: scroller.scrollTop,
// //         containerHeight: scroller.clientHeight,
// //         scrollContainer: scroller
// //       };
// //     }
// //   }, [useWindowScroll]);

// //   const getElementOffset = useCallback(
// //     element => {
// //       if (useWindowScroll) {
// //         const rect = element.getBoundingClientRect();
// //         return rect.top + window.scrollY;
// //       } else {
// //         return element.offsetTop;
// //       }
// //     },
// //     [useWindowScroll]
// //   );

// //   const updateCardTransforms = useCallback(() => {
// //     if (!cardsRef.current.length || isUpdatingRef.current) return;

// //     isUpdatingRef.current = true;

// //     const { scrollTop, containerHeight, scrollContainer } = getScrollData();
// //     const stackPositionPx = parsePercentage(stackPosition, containerHeight);
// //     const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

// //     const endElement = useWindowScroll
// //       ? document.querySelector('.scroll-stack-end')
// //       : scrollerRef.current?.querySelector('.scroll-stack-end');

// //     const endElementTop = endElement ? getElementOffset(endElement) : 0;

// //     cardsRef.current.forEach((card, i) => {
// //       if (!card) return;

// //       const cardTop = getElementOffset(card);
// //       const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
// //       const triggerEnd = cardTop - scaleEndPositionPx;
// //       const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
// //       const pinEnd = endElementTop - containerHeight / 2;

// //       const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
// //       const targetScale = baseScale + i * itemScale;
// //       const scale = 1 - scaleProgress * (1 - targetScale);
// //       const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

// //       let blur = 0;
// //       if (blurAmount) {
// //         let topCardIndex = 0;
// //         for (let j = 0; j < cardsRef.current.length; j++) {
// //           const jCardTop = getElementOffset(cardsRef.current[j]);
// //           const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
// //           if (scrollTop >= jTriggerStart) {
// //             topCardIndex = j;
// //           }
// //         }

// //         if (i < topCardIndex) {
// //           const depthInStack = topCardIndex - i;
// //           blur = Math.max(0, depthInStack * blurAmount);
// //         }
// //       }

// //       let translateY = 0;
// //       const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

// //       if (isPinned) {
// //         translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
// //       } else if (scrollTop > pinEnd) {
// //         translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
// //       }

// //       const newTransform = {
// //         translateY: Math.round(translateY * 100) / 100,
// //         scale: Math.round(scale * 1000) / 1000,
// //         rotation: Math.round(rotation * 100) / 100,
// //         blur: Math.round(blur * 100) / 100
// //       };

// //       const lastTransform = lastTransformsRef.current.get(i);
// //       const hasChanged =
// //         !lastTransform ||
// //         Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
// //         Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
// //         Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
// //         Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

// //       if (hasChanged) {
// //         const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
// //         const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

// //         card.style.transform = transform;
// //         card.style.filter = filter;

// //         lastTransformsRef.current.set(i, newTransform);
// //       }

// //       if (i === cardsRef.current.length - 1) {
// //         const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
// //         if (isInView && !stackCompletedRef.current) {
// //           stackCompletedRef.current = true;
// //           onStackComplete?.();
// //         } else if (!isInView && stackCompletedRef.current) {
// //           stackCompletedRef.current = false;
// //         }
// //       }
// //     });

// //     isUpdatingRef.current = false;
// //   }, [
// //     itemScale,
// //     itemStackDistance,
// //     stackPosition,
// //     scaleEndPosition,
// //     baseScale,
// //     rotationAmount,
// //     blurAmount,
// //     useWindowScroll,
// //     onStackComplete,
// //     calculateProgress,
// //     parsePercentage,
// //     getScrollData,
// //     getElementOffset
// //   ]);

// //   const handleScroll = useCallback(() => {
// //     updateCardTransforms();
// //   }, [updateCardTransforms]);

// //   const setupLenis = useCallback(() => {
// //     if (useWindowScroll) {
// //       const lenis = new Lenis({
// //         duration: 1.2,
// //         easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// //         smoothWheel: true,
// //         touchMultiplier: 2,
// //         infinite: false,
// //         wheelMultiplier: 1,
// //         lerp: 0.1,
// //         syncTouch: true,
// //         syncTouchLerp: 0.075
// //       });

// //       lenis.on('scroll', handleScroll);

// //       const raf = time => {
// //         lenis.raf(time);
// //         animationFrameRef.current = requestAnimationFrame(raf);
// //       };
// //       animationFrameRef.current = requestAnimationFrame(raf);

// //       lenisRef.current = lenis;
// //       return lenis;
// //     } else {
// //       const scroller = scrollerRef.current;
// //       if (!scroller) return;

// //       const lenis = new Lenis({
// //         wrapper: scroller,
// //         content: scroller.querySelector('.scroll-stack-inner'),
// //         duration: 1.2,
// //         easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// //         smoothWheel: true,
// //         touchMultiplier: 2,
// //         infinite: false,
// //         wheelMultiplier: 1,
// //         lerp: 0.1,
// //         syncTouch: true,
// //         syncTouchLerp: 0.075
// //       });

// //       lenis.on('scroll', handleScroll);

// //       const raf = time => {
// //         lenis.raf(time);
// //         animationFrameRef.current = requestAnimationFrame(raf);
// //       };
// //       animationFrameRef.current = requestAnimationFrame(raf);

// //       lenisRef.current = lenis;
// //       return lenis;
// //     }
// //   }, [handleScroll, useWindowScroll]);

// //   useLayoutEffect(() => {
// //     const scroller = scrollerRef.current;
// //     if (!scroller) return;

// //     const cards = Array.from(
// //       useWindowScroll
// //         ? document.querySelectorAll('.scroll-stack-card')
// //         : scroller.querySelectorAll('.scroll-stack-card')
// //     );

// //     cardsRef.current = cards;
// //     const transformsCache = lastTransformsRef.current;

// //     cards.forEach((card, i) => {
// //       if (i < cards.length - 1) {
// //         card.style.marginBottom = `${itemDistance}px`;
// //       }
// //       card.style.willChange = 'transform, filter';
// //       card.style.transformOrigin = 'top center';
// //       card.style.backfaceVisibility = 'hidden';
// //       card.style.transform = 'translateZ(0)';
// //       card.style.webkitTransform = 'translateZ(0)';
// //       card.style.perspective = '1000px';
// //       card.style.webkitPerspective = '1000px';
// //     });

// //     setupLenis();

// //     updateCardTransforms();

// //     return () => {
// //       if (animationFrameRef.current) {
// //         cancelAnimationFrame(animationFrameRef.current);
// //       }
// //       if (lenisRef.current) {
// //         lenisRef.current.destroy();
// //       }
// //       stackCompletedRef.current = false;
// //       cardsRef.current = [];
// //       transformsCache.clear();
// //       isUpdatingRef.current = false;
// //     };
// //   }, [
// //     itemDistance,
// //     itemScale,
// //     itemStackDistance,
// //     stackPosition,
// //     scaleEndPosition,
// //     baseScale,
// //     scaleDuration,
// //     rotationAmount,
// //     blurAmount,
// //     useWindowScroll,
// //     onStackComplete,
// //     setupLenis,
// //     updateCardTransforms
// //   ]);

// //   // Container styles based on scroll mode
// //   const containerStyles = useWindowScroll
// //     ? {
// //         // Global scroll mode - no overflow constraints
// //         overscrollBehavior: 'contain',
// //         WebkitOverflowScrolling: 'touch',
// //         WebkitTransform: 'translateZ(0)',
// //         transform: 'translateZ(0)'
// //       }
// //     : {
// //         // Container scroll mode - original behavior
// //         overscrollBehavior: 'contain',
// //         WebkitOverflowScrolling: 'touch',
// //         scrollBehavior: 'smooth',
// //         WebkitTransform: 'translateZ(0)',
// //         transform: 'translateZ(0)',
// //         willChange: 'scroll-position'
// //       };

// //   const containerClassName = useWindowScroll
// //     ? `relative w-full ${className}`.trim()
// //     : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim();

// //   return (
// //     <div className={containerClassName} ref={scrollerRef} style={containerStyles}>
// //       <div className="scroll-stack-inner pt-[20vh] px-20 pb-[50rem] min-h-screen">
// //         {children}
// //         {/* Spacer so the last pin can release cleanly */}
// //         <div className="scroll-stack-end w-full h-px" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ScrollStack;



// // import { useLayoutEffect, useRef, useCallback } from 'react';
// // import Lenis from '@studio-freight/lenis';

// // export const ScrollStackItem = ({ children, itemClassName = '' }) => (
// //   <div
// //     className={`scroll-stack-card relative w-full h-80 my-8 p-12 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
// //     style={{
// //       backfaceVisibility: 'hidden',
// //       transformStyle: 'preserve-3d'
// //     }}
// //   >
// //     {children}
// //   </div>
// // );

// // const ScrollStack = ({
// //   children,
// //   className = '',
// //   itemDistance = 100,
// //   itemScale = 0.03,
// //   itemStackDistance = 30,
// //   stackPosition = '20%',
// //   scaleEndPosition = '10%',
// //   baseScale = 0.85,
// //   scaleDuration = 0.5,
// //   rotationAmount = 0,
// //   blurAmount = 0,
// //   useWindowScroll = false,
// //   onStackComplete
// // }) => {
// //   const scrollerRef = useRef(null);
// //   const lenisRef = useRef(null);
// //   const animationFrameRef = useRef(null);

// //   // --- Lenis RAF loop ---
// //   const raf = useCallback(time => {
// //     if (lenisRef.current) lenisRef.current.raf(time);
// //     animationFrameRef.current = requestAnimationFrame(raf);
// //   }, []);

// //   const setupLenis = useCallback(() => {
// //     if (lenisRef.current) return;

// //     const lenis = new Lenis({
// //       wrapper: useWindowScroll ? undefined : scrollerRef.current,
// //       content: useWindowScroll ? undefined : scrollerRef.current.querySelector('.scroll-stack-inner'),
// //       duration: 1.2,
// //       easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// //       smooth: true,
// //       smoothTouch: true
// //     });

// //     lenis.on('scroll', () => {
// //       // You can call your card transforms here if needed
// //     });

// //     lenisRef.current = lenis;
// //     animationFrameRef.current = requestAnimationFrame(raf);
// //   }, [raf, useWindowScroll]);

// //   useLayoutEffect(() => {
// //     setupLenis();

// //     return () => {
// //       if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
// //       if (lenisRef.current) lenisRef.current.destroy();
// //     };
// //   }, [setupLenis]);

// //   // --- Container styles ---
// //   const containerClassName = useWindowScroll
// //     ? `relative w-full ${className}`
// //     : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`;

// //   const containerStyles = useWindowScroll
// //     ? {}
// //     : { willChange: 'scroll-position', WebkitOverflowScrolling: 'touch' };

// //   return (
// //     <div ref={scrollerRef} className={containerClassName} style={containerStyles}>
// //       <div className="scroll-stack-inner pt-[20vh] px-20 pb-[50rem] min-h-screen">
// //         {children}
// //         <div className="scroll-stack-end w-full h-px" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ScrollStack;
// import { useLayoutEffect, useRef, useCallback } from 'react';
// import Lenis from 'lenis';
// import './ScrollStack.css';

// export const ScrollStackItem = ({ children, itemClassName = '' }) => (
//   <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
// );

// const ScrollStack = ({
//   children,
//   className = '',
//   itemDistance = 100,
//   itemScale = 0.03,
//   itemStackDistance = 30,
//   stackPosition = '20%',
//   scaleEndPosition = '10%',
//   baseScale = 0.85,
//   scaleDuration = 0.5,
//   rotationAmount = 0,
//   blurAmount = 0,
//   useWindowScroll = false,
//   onStackComplete
// }) => {
//   const scrollerRef = useRef(null);
//   const stackCompletedRef = useRef(false);
//   const animationFrameRef = useRef(null);
//   const lenisRef = useRef(null);
//   const cardsRef = useRef([]);
//   const lastTransformsRef = useRef(new Map());
//   const isUpdatingRef = useRef(false);

//   const calculateProgress = useCallback((scrollTop, start, end) => {
//     if (scrollTop < start) return 0;
//     if (scrollTop > end) return 1;
//     return (scrollTop - start) / (end - start);
//   }, []);

//   const parsePercentage = useCallback((value, containerHeight) => {
//     if (typeof value === 'string' && value.includes('%')) {
//       return (parseFloat(value) / 100) * containerHeight;
//     }
//     return parseFloat(value);
//   }, []);

//   const getScrollData = useCallback(() => {
//     if (useWindowScroll) {
//       return {
//         scrollTop: window.scrollY,
//         containerHeight: window.innerHeight,
//         scrollContainer: document.documentElement
//       };
//     } else {
//       const scroller = scrollerRef.current;
//       return {
//         scrollTop: scroller.scrollTop,
//         containerHeight: scroller.clientHeight,
//         scrollContainer: scroller
//       };
//     }
//   }, [useWindowScroll]);

//   const getElementOffset = useCallback(
//     element => {
//       if (useWindowScroll) {
//         const rect = element.getBoundingClientRect();
//         return rect.top + window.scrollY;
//       } else {
//         return element.offsetTop;
//       }
//     },
//     [useWindowScroll]
//   );

//   const updateCardTransforms = useCallback(() => {
//     if (!cardsRef.current.length || isUpdatingRef.current) return;

//     isUpdatingRef.current = true;

//     const { scrollTop, containerHeight, scrollContainer } = getScrollData();
//     const stackPositionPx = parsePercentage(stackPosition, containerHeight);
//     const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

//     const endElement = useWindowScroll
//       ? document.querySelector('.scroll-stack-end')
//       : scrollerRef.current?.querySelector('.scroll-stack-end');

//     const endElementTop = endElement ? getElementOffset(endElement) : 0;

//     cardsRef.current.forEach((card, i) => {
//       if (!card) return;

//       const cardTop = getElementOffset(card);
//       const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
//       const triggerEnd = cardTop - scaleEndPositionPx;
//       const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
//       const pinEnd = endElementTop - containerHeight / 2;

//       const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
//       const targetScale = baseScale + i * itemScale;
//       const scale = 1 - scaleProgress * (1 - targetScale);
//       const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

//       let blur = 0;
//       if (blurAmount) {
//         let topCardIndex = 0;
//         for (let j = 0; j < cardsRef.current.length; j++) {
//           const jCardTop = getElementOffset(cardsRef.current[j]);
//           const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
//           if (scrollTop >= jTriggerStart) {
//             topCardIndex = j;
//           }
//         }

//         if (i < topCardIndex) {
//           const depthInStack = topCardIndex - i;
//           blur = Math.max(0, depthInStack * blurAmount);
//         }
//       }

//       let translateY = 0;
//       const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

//       if (isPinned) {
//         translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
//       } else if (scrollTop > pinEnd) {
//         translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
//       }

//       const newTransform = {
//         translateY: Math.round(translateY * 100) / 100,
//         scale: Math.round(scale * 1000) / 1000,
//         rotation: Math.round(rotation * 100) / 100,
//         blur: Math.round(blur * 100) / 100
//       };

//       const lastTransform = lastTransformsRef.current.get(i);
//       const hasChanged =
//         !lastTransform ||
//         Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
//         Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
//         Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
//         Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

//       if (hasChanged) {
//         const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
//         const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

//         card.style.transform = transform;
//         card.style.filter = filter;

//         lastTransformsRef.current.set(i, newTransform);
//       }

//       if (i === cardsRef.current.length - 1) {
//         const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
//         if (isInView && !stackCompletedRef.current) {
//           stackCompletedRef.current = true;
//           onStackComplete?.();
//         } else if (!isInView && stackCompletedRef.current) {
//           stackCompletedRef.current = false;
//         }
//       }
//     });

//     isUpdatingRef.current = false;
//   }, [
//     itemScale,
//     itemStackDistance,
//     stackPosition,
//     scaleEndPosition,
//     baseScale,
//     rotationAmount,
//     blurAmount,
//     useWindowScroll,
//     onStackComplete,
//     calculateProgress,
//     parsePercentage,
//     getScrollData,
//     getElementOffset
//   ]);

//   const handleScroll = useCallback(() => {
//     updateCardTransforms();
//   }, [updateCardTransforms]);

//   const setupLenis = useCallback(() => {
//     if (useWindowScroll) {
//       const lenis = new Lenis({
//         duration: 1.2,
//         easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//         smoothWheel: true,
//         touchMultiplier: 2,
//         infinite: false,
//         wheelMultiplier: 1,
//         lerp: 0.1,
//         syncTouch: true,
//         syncTouchLerp: 0.075
//       });

//       lenis.on('scroll', handleScroll);

//       const raf = time => {
//         lenis.raf(time);
//         animationFrameRef.current = requestAnimationFrame(raf);
//       };
//       animationFrameRef.current = requestAnimationFrame(raf);

//       lenisRef.current = lenis;
//       return lenis;
//     } else {
//       const scroller = scrollerRef.current;
//       if (!scroller) return;

//       const lenis = new Lenis({
//         wrapper: scroller,
//         content: scroller.querySelector('.scroll-stack-inner'),
//         duration: 1.2,
//         easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//         smoothWheel: true,
//         touchMultiplier: 2,
//         infinite: false,
//         gestureOrientationHandler: true,
//         normalizeWheel: true,
//         wheelMultiplier: 1,
//         touchInertiaMultiplier: 35,
//         lerp: 0.1,
//         syncTouch: true,
//         syncTouchLerp: 0.075,
//         touchInertia: 0.6
//       });

//       lenis.on('scroll', handleScroll);

//       const raf = time => {
//         lenis.raf(time);
//         animationFrameRef.current = requestAnimationFrame(raf);
//       };
//       animationFrameRef.current = requestAnimationFrame(raf);

//       lenisRef.current = lenis;
//       return lenis;
//     }
//   }, [handleScroll, useWindowScroll]);

//   useLayoutEffect(() => {
//     const scroller = scrollerRef.current;
//     if (!scroller) return;

//     const cards = Array.from(
//       useWindowScroll
//         ? document.querySelectorAll('.scroll-stack-card')
//         : scroller.querySelectorAll('.scroll-stack-card')
//     );

//     cardsRef.current = cards;
//     const transformsCache = lastTransformsRef.current;

//     cards.forEach((card, i) => {
//       if (i < cards.length - 1) {
//         card.style.marginBottom = `${itemDistance}px`;
//       }
//       card.style.willChange = 'transform, filter';
//       card.style.transformOrigin = 'top center';
//       card.style.backfaceVisibility = 'hidden';
//       card.style.transform = 'translateZ(0)';
//       card.style.webkitTransform = 'translateZ(0)';
//       card.style.perspective = '1000px';
//       card.style.webkitPerspective = '1000px';
//     });

//     setupLenis();

//     updateCardTransforms();

//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//       if (lenisRef.current) {
//         lenisRef.current.destroy();
//       }
//       stackCompletedRef.current = false;
//       cardsRef.current = [];
//       transformsCache.clear();
//       isUpdatingRef.current = false;
//     };
//   }, [
//     itemDistance,
//     itemScale,
//     itemStackDistance,
//     stackPosition,
//     scaleEndPosition,
//     baseScale,
//     scaleDuration,
//     rotationAmount,
//     blurAmount,
//     useWindowScroll,
//     onStackComplete,
//     setupLenis,
//     updateCardTransforms
//   ]);

//   return (
//     <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
//       <div className="scroll-stack-inner">
//         {children}
//         {/* Spacer so the last pin can release cleanly */}
//         <div className="scroll-stack-end" />
//       </div>
//     </div>
//   );
// };

// export default ScrollStack;






































// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";

// gsap.registerPlugin(ScrollTrigger);

// const cardData = [
//     { id: 1, title: "Software Engineer", color: "#FF6B6B" },
//     { id: 2, title: "Product Manager", color: "#4ECDC4" },
//     { id: 3, title: "UX Designer", color: "#45B7D1" },
//     { id: 4, title: "Data Scientist", color: "#96CEB4" },
//     { id: 5, title: "DevOps Engineer", color: "#FFEEAD" },
//     { id: 6, title: "Frontend Developer", color: "#D4A5A5" },
//     // { id: 7, title: "Backend Developer", color: "#9B59B6" },
//     // { id: 8, title: "QA Engineer", color: "#3498DB" },
//     // { id: 9, title: "Technical Writer", color: "#E67E22" },
//     // { id: 10, title: "Security Analyst", color: "#2ECC71" },
// ];

// export default function ScrollStac() {
//     const containerRef = useRef(null);
//     const cardsRef = useRef([]);

//     useEffect(() => {
//         const lenis = new Lenis({
//             smooth: true,
//             duration: 1.2, // Smoother scroll
//         });

//         function raf(time) {
//             lenis.raf(time);
//             requestAnimationFrame(raf);
//         }
//         requestAnimationFrame(raf);

//         // Clean up old triggers
//         ScrollTrigger.getAll().forEach(t => t.kill());

//         const cards = cardsRef.current;

//         cards.forEach((card, i) => {
//             if (!card || i === cards.length - 1) return; // Last card doesn't need to scale away

//             const nextCard = cards[i + 1];

//             // Animate the CURRENT card (i) based on the NEXT card's (i+1) position
//             gsap.to(card, {
//                 scale: 0.9, // Scale down to 90%
//                 opacity: 1, // Keep opacity full or reduce slightly if desired
//                 filter: "brightness(0.8)", // Dim the card behind
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: nextCard,
//                     start: "top bottom", // When next card enters viewport bottom
//                     end: "top 20%",     // When next card overlaps the stack area (approx)
//                     scrub: true,
//                     // markers: true, // debug
//                 }
//             });
//         });

//         return () => {
//             lenis.destroy();
//             ScrollTrigger.getAll().forEach(t => t.kill());
//         };
//     }, []);

//     return (
//         <section ref={containerRef} className="min-h-screen bg-[#f1efe5] font-mono py-20 pb-[20vh]">
//             <div className="w-full flex flex-col items-center gap-10">
//                 <h1 className="text-4xl md:text-6xl font-bold text-[#274E5F] mb-10 text-center sticky top-10 z-0">
//                     Lorem ipsum dolor.
//                 </h1>

//                 <div className="w-full flex flex-col items-center">
//                     {cardData.map((item, i) => (
//                         <div
//                             key={item.id}
//                             ref={(el) => (cardsRef.current[i] = el)}
//                             className="card sticky w-[85vw] max-w-[1000px] h-[350px] md:h-[500px]
//                             flex flex-col justify-center items-center gap-4
//                             bg-white rounded-[2rem] border border-gray-200
//                             shadow-[0_-5px_20px_rgba(0,0,0,0.1)]
//                             origin-top overflow-hidden transition-shadow"
//                             style={{
//                                 // Stagger the stickiness so they stack with a slight offset
//                                 top: `calc(15% + ${i * 10}px)`,
//                                 zIndex: i + 1,
//                                 marginBottom: "40vh", // Adds scrolling space between cards
//                                 backgroundColor: item.color
//                             }}
//                         >
//                             <h2 className="text-4xl md:text-7xl font-bold text-white drop-shadow-md">
//                                 {item.id}
//                             </h2>
//                             <span className="text-xl md:text-3xl font-medium text-white/90 uppercase tracking-widest">
//                                 {item.title}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }















// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";

// gsap.registerPlugin(ScrollTrigger);

// const cardData = [
//     { id: 1, title: "Software Engineer", color: "#FF6B6B" },
//     { id: 2, title: "Product Manager", color: "#4ECDC4" },
//     { id: 3, title: "UX Designer", color: "#45B7D1" },
//     { id: 4, title: "Data Scientist", color: "#96CEB4" },
//     { id: 5, title: "DevOps Engineer", color: "#FFEEAD" },
//     // { id: 6, title: "Frontend Developer", color: "#D4A5A5" },
//     // { id: 7, title: "Backend Developer", color: "#9B59B6" },
//     // { id: 8, title: "QA Engineer", color: "#3498DB" },
//     // { id: 9, title: "Technical Writer", color: "#E67E22" },
//     // { id: 10, title: "Security Analyst", color: "#2ECC71" },
// ];

// export default function ScrollStac() {
//     const cardsRef = useRef([]);

//     useEffect(() => {
//         // Initialize Lenis for smooth momentum scrolling
//         const lenis = new Lenis({
//             smooth: true,
//             duration: 1.2,
//         });

//         function raf(time) {
//             lenis.raf(time);
//             requestAnimationFrame(raf);
//         }
//         requestAnimationFrame(raf);

//         // GSAP Animation
//         const cards = cardsRef.current;

//         cards.forEach((card, index) => {
//             if (!card) return;

//             const total = cards.length;

//             // Calculate a dynamic scale to create the stacking depth effect
//             // The last card (top of stack visually) isn't scaled down as much
//             const scaleValue = 1 - 0.05 * (total - index - 1);

//             ScrollTrigger.create({
//                 trigger: card,
//                 start: "top 15%", // Adjust where it starts pinning
//                 end: `+=${window.innerHeight}`, // How long it stays pinned
//                 top: "15%",
//                 pin: true,
//                 pinSpacing: false,
//                 scrub: true,
//                 onUpdate: (self) => {
//                     // Optional: Add more dynamic interactions here
//                 }
//             });

//             // Animate scale and opacity as they stack
//             gsap.to(card, {
//                 scrollTrigger: {
//                     trigger: card,
//                     start: "top 15%",
//                     end: `+=${window.innerHeight * 2}`,
//                     scrub: true,
//                 },
//                 scale: scaleValue,
//                 transformOrigin: "top center",
//                 ease: "none",
//             });
//         });

//         return () => {
//             lenis.destroy();
//             ScrollTrigger.getAll().forEach(t => t.kill());
//         };
//     }, []);

//     return (
//         <section className="min-h-screen bg-[#f1efe5] font-mono py-20 pb-[50vh]">
//             <div className="w-full flex flex-col items-center gap-10">
//                 <h1 className="text-4xl md:text-6xl font-bold text-[#274E5F] mb-20 text-center">
//                     Open Positions
//                 </h1>

//                 {cardData.map((item, i) => (
//                     <div
//                         key={item.id}
//                         ref={(el) => (cardsRef.current[i] = el)}
//                         className="card sticky w-[85vw] max-w-[1000px] h-[350px] md:h-[500px]
//               flex flex-col justify-center items-center gap-4
//               bg-white rounded-[2rem] border border-gray-200
//               shadow-[0_-5px_20px_rgba(0,0,0,0.05)]
//               origin-top overflow-hidden
//             "
//                         style={{
//                             top: `calc(15% + ${i * 15}px)`, // Offset each card slightly for a physical stack look
//                             zIndex: i + 1,
//                             backgroundColor: item.color // Use dynamic color for visual distinction
//                         }}
//                     >
//                         <h2 className="text-4xl md:text-7xl font-bold text-white drop-shadow-md">
//                             {item.id}
//                         </h2>
//                         <span className="text-xl md:text-3xl font-medium text-white/90 uppercase tracking-widest">
//                             {item.title}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
