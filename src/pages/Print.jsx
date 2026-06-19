import React, { lazy, Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import local PDF assets
import filePdf from '../assets/File.pdf';
import eGrowthPdf from '../assets/eGrowth_Brand Guidlines.pdf';

// Lazy loaded components
const PDFCard = lazy(() => import('../components/work/PDFCard.jsx'));
const PDFViewerModal = lazy(() => import('../components/work/PDFViewerModal.jsx'));

// Mock static data for other items in the staggered grid
const printProjects = [
  {
    id: 1,
    title: "Swastixa Creative Portfolio",
    type: "pdf",
    pdfUrl: filePdf,
    colSpan: "md:col-span-5",
    aspectRatio: "aspect-[16/11]"
  },
  {
    id: 2,
    title: "eGrowth Brand Guidelines",
    type: "pdf",
    pdfUrl: eGrowthPdf,
    colSpan: "md:col-span-7",
    aspectRatio: "aspect-[16/9]"
  },
  {
    id: 3,
    title: "Premium Corporate Stationery Kit",
    category: "STATIONERY",
    type: "static",
    colSpan: "md:col-span-7",
    aspectRatio: "aspect-[16/9]",
    gradient: "from-blue-950/50 via-slate-900/30 to-black",
    glowColor: "group-hover:border-blue-500/50",
    textColor: "text-blue-400",
    svg: (
      <svg className="w-16 h-16 opacity-25 group-hover:opacity-45 transition-opacity duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Eco-Friendly Cosmetic Packaging",
    category: "PACKAGING",
    type: "static",
    colSpan: "md:col-span-5",
    aspectRatio: "aspect-[16/11]",
    gradient: "from-emerald-950/50 via-neutral-900/30 to-black",
    glowColor: "group-hover:border-emerald-500/50",
    textColor: "text-emerald-400",
    svg: (
      <svg className="w-16 h-16 opacity-25 group-hover:opacity-45 transition-opacity duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Vibrant Brand Identity Book",
    category: "BRANDING",
    type: "static",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[16/11]",
    gradient: "from-purple-950/50 via-neutral-900/30 to-black",
    glowColor: "group-hover:border-purple-500/50",
    textColor: "text-purple-400",
    svg: (
      <svg className="w-14 h-14 opacity-25 group-hover:opacity-45 transition-opacity duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Art & Culture Festival Poster",
    category: "POSTER DESIGN",
    type: "static",
    colSpan: "md:col-span-5",
    aspectRatio: "aspect-[16/11]",
    gradient: "from-amber-950/50 via-neutral-900/30 to-black",
    glowColor: "group-hover:border-amber-500/50",
    textColor: "text-amber-400",
    svg: (
      <svg className="w-16 h-16 opacity-25 group-hover:opacity-45 transition-opacity duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 7,
    title: "Luxury Real Estate Brochure",
    category: "EDITORIAL",
    type: "static",
    colSpan: "md:col-span-3",
    aspectRatio: "aspect-[4/3]",
    gradient: "from-rose-950/50 via-neutral-900/30 to-black",
    glowColor: "group-hover:border-rose-500/50",
    textColor: "text-rose-400",
    svg: (
      <svg className="w-12 h-12 opacity-25 group-hover:opacity-45 transition-opacity duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 8,
    title: "Annual Business Report",
    category: "REPORTS",
    type: "static",
    colSpan: "md:col-span-3",
    aspectRatio: "aspect-[4/3]",
    gradient: "from-cyan-950/50 via-neutral-900/30 to-black",
    glowColor: "group-hover:border-cyan-500/50",
    textColor: "text-cyan-400",
    svg: (
      <svg className="w-12 h-12 opacity-25 group-hover:opacity-45 transition-opacity duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  },
  {
    id: 9,
    title: "Premium Velvet Business Cards",
    category: "STATIONERY",
    type: "static",
    colSpan: "md:col-span-9",
    aspectRatio: "aspect-[3/1]",
    gradient: "from-red-950/50 via-neutral-900/30 to-black",
    glowColor: "group-hover:border-red-500/50",
    textColor: "text-red-400",
    svg: (
      <svg className="w-20 h-20 opacity-25 group-hover:opacity-45 transition-opacity duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  }
];

const Print = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleOpenPdf = (pdfUrl, title) => {
    if (window.innerWidth < 768) {
      window.open(pdfUrl, '_blank');
    } else {
      setSelectedPdf(pdfUrl);
      setSelectedTitle(title);
      setModalOpen(true);
    }
  };

  return (
    <main className="bg-black min-h-screen pt-24 md:pt-40">
      <div className="relative z-10 px-4">
        {/* Header section */}
        <h1 className='text-white text-center text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter heading' data-aos="fade-down">
          Print Media & Identity
        </h1>

        {/* Unified Navigation Tabs */}
        <div className='text-white text-center mt-12 mb-16 flex flex-wrap justify-center gap-2' data-aos="fade-up">
          <button
            onClick={() => navigate('/work/SocialMedia')}
            className="text-xl m-2 md:m-4 border px-8 py-2 rounded-sm transition-colors cursor-pointer border-white/30 text-white/70 hover:border-white hover:text-white"
          >
            Posts
          </button>
          <button
            onClick={() => navigate('/work/reels')}
            className="text-xl m-2 md:m-4 border px-8 py-2 rounded-sm transition-colors cursor-pointer border-white/30 text-white/70 hover:border-white hover:text-white"
          >
            Reels
          </button>
          <button
            onClick={() => navigate('/work/Branding')}
            className="text-xl m-2 md:m-4 border px-8 py-2 rounded-sm transition-colors cursor-pointer border-white/30 text-white/70 hover:border-white hover:text-white"
          >
            Branding
          </button>
          {/* <button
            className="text-xl m-2 md:m-4 border px-8 py-2 rounded-sm transition-colors cursor-pointer bg-white text-black border-white"
          >
            Print
          </button> */}
        </div>

        {/* Portfolio Staggered Bento Grid */}
        <div className="max-w-[1100px] mx-auto pb-28">
          <Suspense fallback={
            <div className="w-full h-[50vh] flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            </div>
          }>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {printProjects.map((project, index) => {
                const animDelay = index * 100;
                
                if (project.type === 'pdf') {
                  return (
                    <div
                      key={project.id}
                      className={`${project.colSpan} flex`}
                      data-aos="fade-up"
                      data-aos-delay={animDelay}
                    >
                      <PDFCard
                        pdfUrl={project.pdfUrl}
                        title={project.title}
                        onClick={() => handleOpenPdf(project.pdfUrl, project.title)}
                        customAspectRatio={project.aspectRatio}
                      />
                    </div>
                  );
                }

                // Render premium static cards for mock portfolio items
                return (
                  <div
                    key={project.id}
                    className={`${project.colSpan} ${project.aspectRatio} group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 flex flex-col justify-between shadow-2xl transition-all duration-500 select-none ${project.glowColor}`}
                    data-aos="fade-up"
                    data-aos-delay={animDelay}
                  >
                    {/* Abstract Geometric Glow Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`} />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-700 group-hover:scale-110">
                      {project.svg}
                    </div>

                    {/* Category tag */}
                    <div className="absolute top-4 right-4 bg-white/5 backdrop-blur-md border border-white/10 text-white/50 text-[10px] font-bold font-mono px-2.5 py-1 rounded-md tracking-widest z-10 uppercase">
                      {project.category}
                    </div>

                    {/* Hover Information Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10 pointer-events-none">
                      <span className={`text-xs font-bold font-mono tracking-widest uppercase mb-1 ${project.textColor}`}>
                        {project.category}
                      </span>
                      <h3 className="text-white text-lg font-bold tracking-tight mb-1">{project.title}</h3>
                      <p className="text-white/40 text-xs font-medium">Concept & Art Direction</p>
                    </div>

                    {/* Bottom Title bar (Visible by default) */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 border-t border-white/5 flex items-center justify-between z-10">
                      <span className="text-white/80 font-medium truncate text-sm">{project.title}</span>
                      <span className="text-xs text-white/40 group-hover:text-white transition-colors">Project</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Suspense>
        </div>
      </div>

      {/* PDF Dynamic Viewer Modal */}
      <Suspense fallback={null}>
        <PDFViewerModal
          isOpen={modalOpen}
          pdfUrl={selectedPdf}
          title={selectedTitle}
          onClose={() => {
            setModalOpen(false);
            setSelectedPdf(null);
            setSelectedTitle("");
          }}
        />
      </Suspense>
    </main>
  );
};

export default Print;
