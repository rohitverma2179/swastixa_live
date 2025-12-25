

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import swastixa from "/swastixa.png";
import swastixawhite from "../../assets/Swastixa_white.png";

// import { swastixa } from '/';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  // const [menuIcon , setMenuIcon] = useState()

  const menuItems = ["WORK", "ABOUT", "BLOG", "CAREERS", "CONTACT"];

  // === Sidebar Animation Variants === //
  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };


  const handleMenuClick = (item) => {
    setIsOpen(false);

    if (item === "CONTACT") {
      navigate("/#contact");
    } else {
      navigate(`/${item.toLowerCase()}`);
    }
  };


  const itemVariants = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };

  // === Animated Text Hover === //
  const AnimatedText = ({ text }) => (
    <motion.span
      className="inline-block overflow-hidden"
      whileHover="hover"
      initial="initial"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{
            initial: { y: 0 },
            hover: {
              y: [-5, 5, 0],
              color: "#3a6cf4",
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                delay: i * 0.02,
              },
            },
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <nav className={`top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 transition-colors duration-300 ${isHome ? "bg-white" : "bg-black"}`}>
      {/* ===== Logo ===== */}
      <Link
        to="/"
        onClick={() => setIsOpen(false)}
        className="flex items-center h-10 space-x-2"
      >
        {/* <img src= {`{${isHome ? "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/swastixa.png" : swastixawhite}`}}    alt="Logo" className="w-55 h-20 object-contain" /> */}
        <img
          src={
            isHome
              ? "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/swastixa/swastixa.png"
              : swastixawhite
          }
          alt="Logo"
          className="w-55 h-20 object-contain"
        />

      </Link>


      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-lg hover:bg-gray-200 transition z-50"
      >
        <div className="space-y-1.5 relative w-6 h-6">
          {/* Line 1 */}
          <span
            className={`
        block w-6 h-0.5 bg-gray-700 absolute left-0 transition-all duration-300
        ${isOpen ? "rotate-45 top-3" : "top-1"}
      `}
          ></span>

          {/* Line 2 */}
          <span
            className={`
        block w-6 h-0.5 bg-gray-700 absolute left-0 transition-all duration-300
        ${isOpen ? "opacity-0" : "top-3"}
      `}
          ></span>

          {/* Line 3 */}
          <span
            className={`
        block w-6 h-0.5 bg-gray-700 absolute left-0 transition-all duration-300
        ${isOpen ? "-rotate-45 top-3" : "top-5"}
      `}
          ></span>
        </div>
      </button>



      {/* ===== Sidebar (Menu) ===== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0   border-none z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className=" fixed top-0 right-0 backdrop-blur -[max(1.1pc,_min(1.389vw,_26.6px))] w-[70%]  bg-white/55 sm:w-[60%] md:w-[26%] h-full    text-[#243E84] z-50 flex flex-col justify-between p-8 pr-7 pt-6 bg-cover bg-center"
              // bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(0,0,0,1)_64%)] backdrop-blur-[14px]">
              // style={{
              //   backgroundImage:
              //     "url('https://res.cloudinary.com/dzsotenu5/image/upload/v1763026713/Black-bg_-_swastixa_rljrh0.png')",
              // }}
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="self-end p-1 rounded-lg hover:bg-gray-200 transition bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1
                       1 0 111.414 1.414L11.414 10l4.293 
                       4.293a1 1 0 01-1.414 1.414L10 
                       11.414l-4.293 4.293a1 1 0 
                       01-1.414-1.414L8.586 10 4.293 
                       5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>


              {/* Menu Items */}
              <motion.ul
                className="space-y-6 text-center mt-10"
                initial="hidden"
                animate="show"
              >
                {menuItems.map((item, i) => (
                  // <motion.li
                  //   key={i}
                  //   variants={itemVariants}
                  //   className="sm:text-[42px] text-3xl font-extrabold tracking-tight cursor-pointer"
                  //   onClick={() => setIsOpen(false)}
                  // >
                  //   <Link to={`/${item.toLowerCase()}`}>
                  //     <AnimatedText text={item} />
                  //   </Link>
                  // </motion.li>
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="sm:text-[42px] text-3xl font-extrabold tracking-tight cursor-pointer"
                    onClick={() => handleMenuClick(item)}
                  >
                    <AnimatedText text={item} />
                  </motion.li>
                ))}
              </motion.ul>



              {/* Social Icons */}
              <motion.div
                className="flex justify-center space-x-6 mt-12"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {["facebook-f", "instagram", "linkedin-in"].map((icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="text-blue-600 hover:text-blue-400 text-2xl"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}