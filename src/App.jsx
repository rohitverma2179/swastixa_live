

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// Layout
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AOS from "aos";

// Pages
import Home from "./pages/Home";
import Work from "./pages/Work";
import Awards from "./pages/Awards";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import "aos/dist/aos.css";


import "./App.css";
import CustomCursor from "./components/common/CustomCursor";
import CommingSoon from "./components/common/CommingSoon";
import { Audio } from "react-loader-spinner";
import HomeAbout from "./components/home/HomeAbout";
import About from "./pages/About";
import ContactSection from "./components/common/Contact";
import BlogInner from "./pages/BlogInner";
import ScrollToTop from "./components/common/ScrollToTop";
// import BlogInner from "./pages/BlogInner";
// import CustomCursor from "./components/common/CustomCursor";

export default function App() {
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,   // animation sirf ek baar
      offset: 120,
    });
  }, []);

  useEffect(() => {
    // Loader 2.5 sec ke liye show hoga
    const timer = setTimeout(() => {
      setLoader(false);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  // 👉 If loader true → show loader only
  if (loader) {
    return (
      <div className="fixed inset-0 w-full h-full overflow-hidden m-0 p-0">
        <video
          src="https://swastixa.b-cdn.net/Landing--page----S%20logo.mp4 "
          className="absolute inset-0 w-full h-full object-cover m-0 p-0"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    );
  }






  // 👉 After loader finished → show website
  return (
    <>
      <ScrollToTop />
      <Header />
      {/* <CustomCursor /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        </Routes> */}

      {/* comming soon page  */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/awards" element={<CommingSoon />} />
        <Route path="/careers" element={<Careers />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/contact" element={<ContactSection />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogInner />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}