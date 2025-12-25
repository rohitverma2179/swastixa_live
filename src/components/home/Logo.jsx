const ICONS = [
  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(1).png",
    alt: "Signature Global",
    // link: "https://signatureglobal.in" 
  },
  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(10).png",
    alt: "Mahagun",
    // link: "https://mahagunindia.com"
  },
  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(11).png",
    alt: "Paramount",
    // link: "https://paramountgroup.co.in"
  },
  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(12).png",
    alt: "Flipkart",
    // link: "https://flipkart.com"
  },
  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(13).png",
    alt: "NFDC",
    // link: "https://nfdcindia.com"
  },
  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(14).png",
    alt: "UDS",
  },

  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(15).png",
    alt: "Ministry of Information and Broadcasting",
  },

  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(9).png",
    alt: "Munchon",
  },

  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(16).png",
    alt: "Munchon",
  },

  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(17).png",
    alt: "Munchon",
  },

  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(18).png",
    alt: "Munchon",
  },

  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(19).png",
    alt: "Munchon",
  },

  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(8).png",
    alt: "Munchon",
  },

  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(2).png",
    alt: "Munchon",
  },

  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(7).png",
    alt: "Munchon",
  },

  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(20).png",
    alt: "Munchon",
  },

  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(21).png",
    alt: "Munchon",
  },

  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(22).png",
    alt: "Munchon",
  },

  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(23).png",
    alt: "Munchon",
  },

  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(24).png",
    alt: "Munchon",
  },

  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(3).png",
    alt: "Munchon",
  },
  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(4).png",
    alt: "Munchon",
  },
  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(5).png",
    alt: "Munchon",
  },
  {
    url: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/Swastixa%20-%20LOGO%20/Logo-%20(6).png",
    alt: "Munchon",
  },


];


// constants (adjust if needed)
const ICONS_PER_PAGE_DEFAULT = 8;
const MOBILE_BREAKPOINT = 430;
const ICONS_PER_PAGE_MOBILE = 6;

// assume ICONS array is imported/defined above

export default function LogoCarousel() {
  const [page, setPage] = useState(0);
  const [iconsPerPage, setIconsPerPage] = useState(ICONS_PER_PAGE_DEFAULT);

  // 1) handle resize -> set iconsPerPage
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        setIconsPerPage(ICONS_PER_PAGE_MOBILE);
      } else {
        setIconsPerPage(ICONS_PER_PAGE_DEFAULT);
      }
    }

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2) compute total pages from ICONS length and iconsPerPage
  const totalPages = useMemo(() => {
    const totalIcons = ICONS.length;
    return Math.max(1, Math.ceil(totalIcons / iconsPerPage));
  }, [iconsPerPage]);

  // 3) clamp page when iconsPerPage or totalPages changes
  useEffect(() => {
    setPage((prev) => {
      // ensure page is within [0, totalPages-1]
      if (prev >= totalPages) return 0;
      return prev;
    });
  }, [totalPages]);

  // 4) single auto-slide effect (works for mobile & desktop)
  useEffect(() => {
    // if only one page, no need to start interval
    if (totalPages <= 1) return;

    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 4000); // 4s — change if you want faster/slower

    return () => clearInterval(interval);
  }, [totalPages]);

  // 5) slice current icons (memoized)
  const currentIcons = useMemo(() => {
    const start = page * iconsPerPage;
    return ICONS.slice(start, start + iconsPerPage);
  }, [page, iconsPerPage]);

  // 6) grid columns string — keep mobile 3 columns when iconsPerPage === 6
  const gridClasses =
    iconsPerPage === ICONS_PER_PAGE_MOBILE
      ? "grid grid-cols-3 gap-6 sm:gap-10 md:gap-14 lg:gap-20"
      : "grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 md:gap-14 lg:gap-20";

  return (
    <div className="min-h-1/2 sm:min-h-screen w-full flex items-center justify-center py-10">
      <div className="w-full max-w-[1250px] px-4">
        <div className={gridClasses}>
          {currentIcons.map((icon, idx) => (
            <a
              key={`${icon.url}_${idx}_${page}`}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-end justify-center group transition-transform duration-300 hover:scale-110"
            >
              <img
                src={icon.url}
                alt={icon.alt || `logo-${idx}`}
                loading="lazy"
                className="
                  h-28 w-28 
                  sm:h-32 sm:w-32 
                  md:h-40 md:w-40 
                  lg:h-48 lg:w-52 
                  object-contain 
                  grayscale 
                  group-hover:grayscale-0 
                  transition
                "
              />
            </a>
          ))}
        </div>

        {/* optional: page dots for debugging */}
        {/* <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`mx-1 w-3 h-3 rounded-full ${i === page ? 'bg-white' : 'bg-gray-500/40'}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}




















// import React, { useState, useEffect } from "react";
// import logo_1 from "/home_assets/company_logo/Swastixa website working compane logo-01.png"
// import logo_2 from "/home_assets/company_logo/Swastixa website working compane logo-02.png"
// import logo_3 from "/home_assets/company_logo/Swastixa website working compane logo-03.png"
// import logo_4 from "/home_assets/company_logo/Swastixa website working compane logo-04.png"
// import logo_5 from "/home_assets/company_logo/Swastixa website working compane logo-05.png"
// import logo_6 from "/home_assets/company_logo/Swastixa website working compane logo-06.png"
// import logo_7 from "/home_assets/company_logo/Swastixa website working compane logo-07.png"
// import logo_8 from "/home_assets/company_logo/Swastixa website working compane logo-08.png"
// import logo_9 from "/home_assets/company_logo/Swastixa website working compane logo-09.png"
// import logo_10 from "/home_assets/company_logo/Swastixa website working compane logo-10.png"
// import logo_11 from "/home_assets/company_logo/Swastixa website working compane logo-11.png"
// import logo_12 from "/home_assets/company_logo/Swastixa website working compane logo-12.png"
// import logo_13 from "/home_assets/company_logo/Swastixa website working compane logo-13.png"
// import logo_14 from "/home_assets/company_logo/Swastixa website working compane logo-14.png"
// import logo_15 from "/home_assets/company_logo/logo_15.png"
// import logo_16 from "/home_assets/company_logo/Swastixa website working compane logo-16.png"
// import logo_17 from "/home_assets/company_logo/Swastixa website working compane logo-17.png"
// import logo_18 from "/home_assets/company_logo/Swastixa website working compane logo-18.png"
// import logo_19 from "/home_assets/company_logo/Swastixa website working compane logo-19.png"
// import logo_20 from "/home_assets/company_logo/Swastixa website working compane logo-20.png"
// import logo_21 from "/home_assets/company_logo/logo_21.png"
// import logo_22 from "/home_assets/company_logo/logo_22.png"
// import logo_23 from "/home_assets/company_logo/logo_23.png"
// import logo_24 from "/home_assets/company_logo/logo_24.png"

// const ICONS = [
//   {
//     url: logo_1,
//     alt: "Signature Global",
//     // link: "https://signatureglobal.in" 
//   },
//   {
//     url: logo_2,
//     alt: "Mahagun",
//     // link: "https://mahagunindia.com"
//   },
//   {
//     url: logo_3,
//     alt: "Paramount",
//     // link: "https://paramountgroup.co.in"
//   },
//   {
//     url: logo_4,
//     alt: "Flipkart",
//     // link: "https://flipkart.com"
//   },
//   {
//     url: logo_5,
//     alt: "NFDC",
//     // link: "https://nfdcindia.com"
//   },
//   {
//     url: logo_6,
//     alt: "UDS",
//   },

//   {
//     url: logo_7,
//     alt: "Ministry of Information and Broadcasting",
//   },

//   {
//     url: logo_8,
//     alt: "Munchon",
//   },

//   {
//     url: logo_9,
//     alt: "Munchon",
//   },

//   {
//     url: logo_10,
//     alt: "Munchon",
//   },

//   {
//     url: logo_11,
//     alt: "Munchon",
//   },

//   {
//     url: logo_12,
//     alt: "Munchon",
//   },

//   {
//     url: logo_13,
//     alt: "Munchon",
//   },

//   {
//     url: logo_14,
//     alt: "Munchon",
//   },

//   {
//     url: logo_15,
//     alt: "Munchon",
//   },

//   {
//     url: logo_16,
//     alt: "Munchon",
//   },

//   {
//     url: logo_17,
//     alt: "Munchon",
//   },

//   {
//     url: logo_18,
//     alt: "Munchon",
//   },

//   {
//     url: logo_19,
//     alt: "Munchon",
//   },

//   {
//     url: logo_20,
//     alt: "Munchon",
//   },
//   {
//     url: logo_21,
//     alt: "Munchon",
//   },
//   {
//     url: logo_22,
//     alt: "Munchon",
//   },
//   {
//     url: logo_23,
//     alt: "Munchon",
//   },
//   {
//     url: logo_24,
//     alt: "Munchon",
//   },


// ];

// // const ICONS_PER_PAGE = 8;
// // const ICONS_PER_ROW = 4;
// // const TOTAL_ICONS = 20; // Set to the total number of icons in your array (40)
// // const TOTAL_PAGES = Math.ceil(TOTAL_ICONS / ICONS_PER_PAGE);

// // function LogoCarousel() {
// //   const [page, setPage] = useState(0);

// //   const [screenSize , setScreenSize] = useState(0)

// //   if(window.innerHtml == "426px"){
// //     const ICONS_PER_PAGE = 6;
// //   }

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setPage((prev) => (prev + 1) % TOTAL_PAGES);
// //     }, 4000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   // Slice icons for current page
// //   const currentIcons = ICONS.slice(page * ICONS_PER_PAGE, page * ICONS_PER_PAGE + ICONS_PER_PAGE);

// //   return (

// //     <div className="min-h-screen w-full flex items-center justify-center py-10">
// //       <div className="w-full max-w-[1250px] px-4">

// //         {/* GRID RESPONSIVE */}
// //         <div
// //           className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 md:gap-14 lg:gap-20 auto-rows-auto "
// //         >
// //           {currentIcons.map((icon, idx) => (
// //             <a
// //               key={icon.url + idx + page}
// //               href={icon.link}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="flex items-end justify-center group transition-transform duration-300 hover:scale-110"
// //             >
// //               <img
// //                 src={icon.url}
// //                 alt={icon.alt}
// //                 className="
// //               h-28 w-28 
// //               sm:h-32 sm:w-32 
// //               md:h-40 md:w-40 
// //               lg:h-48 lg:w-52 
// //               object-contain 
// //               grayscale 
// //               group-hover:grayscale-0 
// //               transition
// //             "
// //                 loading="lazy"
// //               />
// //             </a>
// //           ))}
// //         </div>

// //         {/* PAGE NUMBER (OPTIONAL) */}
// //         <div className="flex justify-center mt-8">
// //           <span className="text-white text-lg opacity-60">
// //             {/* {page + 1} / {TOTAL_PAGES}  */}
// //           </span>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default LogoCarousel;



// const BASE_ICONS_PER_PAGE = 8;
// const BASE_ICONS_PER_ROW = 4;
// const TOTAL_ICONS = ICONS.length;   // ✅ FIXED (Add this line)

// export default function LogoCarousel() {
//   const [page, setPage] = useState(0);
//   const [iconsPerPage, setIconsPerPage] = useState(BASE_ICONS_PER_PAGE);
//   const [iconsPerRow, setIconsPerRow] = useState(BASE_ICONS_PER_ROW);

//   useEffect(() => {
//     function handleResize() {
//       if (window.innerWidth <= 426) {
//         setIconsPerPage(6);
//         setIconsPerRow(3);
//       } else {
//         setIconsPerPage(BASE_ICONS_PER_PAGE);
//         setIconsPerRow(BASE_ICONS_PER_ROW);
//       }
//     }

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const TOTAL_PAGES = Math.ceil(TOTAL_ICONS / iconsPerPage);

//   const currentIcons = ICONS.slice(
//     page * iconsPerPage,
//     page * iconsPerPage + iconsPerPage
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPage((prev) => (prev + 1) % TOTAL_PAGES);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [TOTAL_PAGES]);

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center py-10">
//       <div className="w-full max-w-[1250px] px-4">

//         <div
//           className={`grid grid-cols-${iconsPerRow} gap-6 sm:gap-10 md:gap-14 lg:gap-20`}
//         >
//           {currentIcons.map((icon, idx) => (
//             <a
//               key={icon.url + idx + page}
//               href={icon.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-end justify-center group transition-transform duration-300 hover:scale-110"
//             >
//               <img
//                 src={icon.url}
//                 alt={icon.alt}
//                 className="
//                   h-28 w-28 
//                   sm:h-32 sm:w-32 
//                   md:h-40 md:w-40 
//                   lg:h-48 lg:w-52 
//                   object-contain 
//                   grayscale 
//                   group-hover:grayscale-0 
//                   transition
//                 "
//                 loading="lazy"
//               />
//             </a>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect , useMemo } from "react";
// import logo_1 from "/home_assets/company_logo/Swastixa website working compane logo-01.png"
// import logo_2 from "/home_assets/company_logo/Swastixa website working compane logo-02.png"
// import logo_3 from "/home_assets/company_logo/Swastixa website working compane logo-03.png"
// import logo_4 from "/home_assets/company_logo/Swastixa website working compane logo-04.png"
// import logo_5 from "/home_assets/company_logo/Swastixa website working compane logo-05.png"
// import logo_6 from "/home_assets/company_logo/Swastixa website working compane logo-06.png"
// import logo_7 from "/home_assets/company_logo/Swastixa website working compane logo-07.png"
// import logo_8 from "/home_assets/company_logo/Swastixa website working compane logo-08.png"
// import logo_9 from "/home_assets/company_logo/Swastixa website working compane logo-09.png"
// import logo_10 from "/home_assets/company_logo/Swastixa website working compane logo-10.png"
// import logo_11 from "/home_assets/company_logo/Swastixa website working compane logo-11.png"
// import logo_12 from "/home_assets/company_logo/Swastixa website working compane logo-12.png"
// import logo_13 from "/home_assets/company_logo/Swastixa website working compane logo-13.png"
// import logo_14 from "/home_assets/company_logo/Swastixa website working compane logo-14.png"
// import logo_15 from "/home_assets/company_logo/logo_15.png"
// import logo_16 from "/home_assets/company_logo/Swastixa website working compane logo-16.png"
// import logo_17 from "/home_assets/company_logo/Swastixa website working compane logo-17.png"
// import logo_18 from "/home_assets/company_logo/Swastixa website working compane logo-18.png"
// import logo_19 from "/home_assets/company_logo/Swastixa website working compane logo-19.png"
// import logo_20 from "/home_assets/company_logo/Swastixa website working compane logo-20.png"
// import logo_21 from "/home_assets/company_logo/logo_21.png"
// import logo_22 from "/home_assets/company_logo/logo_22.png"
// import logo_23 from "/home_assets/company_logo/logo_23.png"
// import logo_24 from "/home_assets/company_logo/logo_24.png"





// const ICONS_PER_PAGE_DESKTOP = 8;
// const ICONS_PER_PAGE_MOBILE = 6;
// const TOTAL_ICONS = 20;

// function LogoCarousel() {
//   const [page, setPage] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect Mobile Screen <= 425px
//   useEffect(() => {
//     function checkMobile() {
//       setIsMobile(window.innerWidth <= 425);
//     }

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // TOTAL PAGES CALCULATION
//   const TOTAL_PAGES = isMobile
//     ? Math.ceil(TOTAL_ICONS / ICONS_PER_PAGE_MOBILE)
//     : Math.ceil(TOTAL_ICONS / ICONS_PER_PAGE_DESKTOP);

//   // AUTO SLIDE (Mobile + Desktop Both)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setPage((prev) => (prev + 1) % TOTAL_PAGES);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [TOTAL_PAGES]);

//   // SLICE ICONS ACCORDING TO DEVICE
//   const currentIcons = isMobile
//     ? ICONS.slice(
//         page * ICONS_PER_PAGE_MOBILE,
//         page * ICONS_PER_PAGE_MOBILE + ICONS_PER_PAGE_MOBILE
//       )
//     : ICONS.slice(
//         page * ICONS_PER_PAGE_DESKTOP,
//         page * ICONS_PER_PAGE_DESKTOP + ICONS_PER_PAGE_DESKTOP
//       );

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center py-10">
//       <div className="w-full max-w-[1250px] px-4">

//         {/* GRID LAYOUT */}
//         <div
//           className="
//           grid 
//           grid-cols-2 
//           sm:grid-cols-2 
//           md:grid-cols-3 
//           lg:grid-cols-4 
//           gap-6 sm:gap-10 md:gap-14 lg:gap-20
//         ">
//           {currentIcons.map((icon, idx) => (
//             <a
//               key={icon.url + idx + page}
//               href={icon.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-end justify-center group transition-transform duration-300 hover:scale-110"
//             >
//               <img
//                 src={icon.url}
//                 alt={icon.alt}
//                 className="
//                   h-28 w-28 
//                   sm:h-32 sm:w-32 
//                   md:h-40 md:w-40 
//                   lg:h-48 lg:w-52 
//                   object-contain 
//                   grayscale 
//                   group-hover:grayscale-0 
//                   transition
//                 "
//                 loading="lazy"
//               />
//             </a>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }
