

import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// Layout
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AOS from "aos";

// Pages (Lazy Loaded)
const Home = lazy(() => import("./pages/Home"));
const Work = lazy(() => import("./pages/Work"));
const Careers = lazy(() => import("./pages/Careers"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const BlogInner = lazy(() => import("./pages/BlogInner"));
const ProductionHouse = lazy(() => import("./components/work/workpages/ProductionHouse"));
const SocialMediaManagement = lazy(() => import("./components/work/workpages/SocialMediaManagement"));
const WebsiteDevelopment = lazy(() => import("./components/work/workpages/WebsiteDevelopment"));
const DigitalMarketing = lazy(() => import("./components/work/workpages/DigitalMarketing"));

import "aos/dist/aos.css";
import "./App.css";
import ScrollToTop from "./components/common/ScrollToTop";
import CommingSoon from "./components/common/CommingSoon";

const PageLoader = () => (
  <div className="w-full h-screen bg-black flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000); // Increased a bit to actually see the logo video if intended, or set to 0 to be instant.

    return () => clearTimeout(timer);
  }, []);

  if (loader) {
    return (
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-black flex items-center justify-center">
        <video
          src="https://swastixa.b-cdn.net/Landing--page----S%20logo.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/workpages/ProductionHouse" element={<ProductionHouse />} />
          <Route path="/work/workpages/SocialMediaManagement" element={<SocialMediaManagement />} />
          <Route path="/work/workpages/WebsiteDevelopment" element={<WebsiteDevelopment />} />
          <Route path="/work/workpages/DigitalMarketing" element={<DigitalMarketing />} />
          <Route path="/awards" element={<CommingSoon />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogInner />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
