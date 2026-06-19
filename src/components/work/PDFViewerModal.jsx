import React, { useEffect, useRef, useState } from 'react';

// Sub-component for rendering individual page thumbnails in the sidebar
const PDFThumbnailItem = ({ pdf, pageNum, isActive, onClick }) => {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Auto-scroll the active thumbnail into view in the sidebar
  useEffect(() => {
    if (isActive && canvasRef.current) {
      const scrollParent = canvasRef.current.closest('.overflow-y-auto');
      const card = canvasRef.current.closest('.group');
      if (scrollParent && card) {
        const parentRect = scrollParent.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();

        // Scroll into view if it's outside the parent viewport
        if (cardRect.top < parentRect.top || cardRect.bottom > parentRect.bottom) {
          card.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
        }
      }
    }
  }, [isActive]);

  useEffect(() => {
    let isMounted = true;

    const renderThumbnail = async () => {
      try {
        const page = await pdf.getPage(pageNum);
        if (!isMounted) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        const unscaledViewport = page.getViewport({ scale: 1 });
        
        // Target width of 140px for sidebar thumbnails
        const scale = 140 / unscaledViewport.width;
        const viewport = page.getViewport({ scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
        if (isMounted) {
          setLoading(false);
        }
      } catch (err) {
        console.error(`Error rendering thumbnail for page ${pageNum}:`, err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    renderThumbnail();

    return () => {
      isMounted = false;
    };
  }, [pdf, pageNum]);

  return (
    <div
      onClick={onClick}
      className={`group relative flex flex-col items-center gap-1.5 p-2.5 rounded-xl cursor-pointer transition-all duration-300 select-none ${
        isActive
          ? 'bg-blue-50/35 border-2 border-blue-500 shadow-[0_4px_12px_rgba(59,130,246,0.15)] scale-[1.02]'
          : 'bg-neutral-50/80 border border-neutral-200/80 hover:border-neutral-400 hover:bg-neutral-100/70'
      }`}
    >
      <div className={`relative w-full aspect-[3/4] rounded-lg overflow-hidden flex items-center justify-center border transition-colors duration-300 ${
        isActive ? 'border-blue-200 bg-white' : 'border-neutral-200 bg-neutral-100'
      }`}>
        {loading && (
          <div className="w-5 h-5 border-2 border-neutral-300 border-t-blue-500 rounded-full animate-spin absolute" />
        )}
        {error ? (
          <span className="text-neutral-400 text-xs">Page {pageNum}</span>
        ) : (
          <canvas
            ref={canvasRef}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              loading ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )}
      </div>
      <span className={`text-[10px] font-mono tracking-wider transition-colors duration-300 ${
        isActive ? 'text-blue-600 font-bold' : 'text-neutral-400 group-hover:text-neutral-600'
      }`}>
        PAGE {pageNum.toString().padStart(2, '0')}
      </span>
    </div>
  );
};

const loadPdfjs = () => {
  if (window.pdfjsLib) return Promise.resolve();
  if (window.pdfjsPromise) return window.pdfjsPromise;

  window.pdfjsPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js';
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
      resolve();
    };
    script.onerror = (err) => {
      window.pdfjsPromise = null; // Allow retrying on network error
      reject(err);
    };
    document.body.appendChild(script);
  });

  return window.pdfjsPromise;
};

// Main Modal Component
const PDFViewerModal = ({ pdfUrl, isOpen, onClose, title = "Document Viewer" }) => {
  const [pdf, setPdf] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const mainCanvasRef = useRef(null);
  const containerRef = useRef(null);
  const renderTaskRef = useRef(null);

  // Load PDF.js from CDN if not already loaded, then load the PDF document
  useEffect(() => {
    if (!isOpen || !pdfUrl) return;

    let isMounted = true;
    setLoading(true);
    setError(false);
    setPdf(null);
    setNumPages(0);
    setCurrentPage(1);

    const loadPdfjsAndDocument = async () => {
      try {
        await loadPdfjs();

        if (!isMounted) return;

        // Fetch PDF Document
        const loadingTask = window.pdfjsLib.getDocument(pdfUrl);
        const loadedPdf = await loadingTask.promise;
        
        if (isMounted) {
          setPdf(loadedPdf);
          setNumPages(loadedPdf.numPages);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error loading PDF document:', err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    loadPdfjsAndDocument();

    return () => {
      isMounted = false;
    };
  }, [pdfUrl, isOpen]);

  // Render the current active page in the main area
  const renderCurrentPage = async () => {
    if (!pdf || !isOpen) return;

    try {
      setPageLoading(true);

      // Cancel any ongoing rendering task to prevent canvas overlapping
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }

      const page = await pdf.getPage(currentPage);
      const canvas = mainCanvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const context = canvas.getContext('2d');
      const unscaledViewport = page.getViewport({ scale: 1 });

      // Calculate the fit scale dynamically based on the container dimensions
      const padding = 32; // Fit tightly inside the modal container
      const containerWidth = container.clientWidth - padding;
      const containerHeight = container.clientHeight - padding;

      const scale = Math.min(
        containerWidth / unscaledViewport.width,
        containerHeight / unscaledViewport.height
      );

      const viewport = page.getViewport({ scale: scale || 1 });

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      const renderTask = page.render(renderContext);
      renderTaskRef.current = renderTask;
      await renderTask.promise;
      setPageLoading(false);
    } catch (err) {
      if (err.name === 'HeadingStatus' || err.name === 'RenderingCancelledException') {
        return;
      }
      console.error('Error rendering page:', err);
      setPageLoading(false);
    }
  };

  // Trigger page render when document, current page or size changes
  useEffect(() => {
    renderCurrentPage();
  }, [pdf, currentPage]);

  // Re-render page on window resize to maintain responsiveness
  useEffect(() => {
    if (!isOpen) return;
    
    const handleResize = () => {
      renderCurrentPage();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, pdf, currentPage]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNextPage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentPage, numPages]);

  const handleNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-100 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 md:p-12 select-none"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Centered White Modal Box Container */}
      <div className="bg-white rounded-3xl p-6 shadow-2xl flex flex-row items-stretch max-w-6xl w-full h-[80vh] md:h-[85vh] relative overflow-hidden">
        
        {/* Main View Area (Left / Center) */}
        <div className="flex-1 flex flex-col relative min-w-0" ref={containerRef}>
          
          {/* Subtle Document Title Tag */}
          <div className="absolute top-2 left-4 z-10 pointer-events-none">
            <span className="text-neutral-400 text-[10px] font-mono tracking-wider uppercase">{title}</span>
          </div>

          {/* PDF Page Display Container */}
          <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden bg-neutral-50 rounded-2xl border border-neutral-100">
            {loading && (
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-neutral-200 border-t-blue-500 rounded-full animate-spin" />
                <span className="text-neutral-400 text-sm font-medium font-mono">Loading Document...</span>
              </div>
            )}

            {error && (
              <div className="text-center text-neutral-500">
                <svg className="w-12 h-12 mx-auto mb-3 text-red-500/85" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <h4 className="text-lg font-bold mb-1">Failed to Load PDF</h4>
                <p className="text-sm text-neutral-400">The file could not be loaded.</p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-md text-neutral-700 text-sm transition-colors cursor-pointer border border-neutral-200"
                >
                  Close Viewer
                </button>
              </div>
            )}

            {/* Canvas for rendering PDF page */}
            {!loading && !error && (
              <div className="relative max-w-full max-h-full flex items-center justify-center rounded-xl overflow-hidden shadow-lg border border-neutral-200/50 bg-white">
                {pageLoading && (
                  <div className="absolute inset-0 bg-white/60 flex items-center justify-center backdrop-blur-xs z-10">
                    <div className="w-8 h-8 border-3 border-neutral-200 border-t-blue-500 rounded-full animate-spin" />
                  </div>
                )}
                <canvas
                  ref={mainCanvasRef}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
          </div>

          {/* Floating Navigation Arrows */}
          {!loading && !error && numPages > 1 && (
            <>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-neutral-200 bg-white/90 text-neutral-600 flex items-center justify-center shadow-md transition-all duration-300 z-20 cursor-pointer ${
                  currentPage === 1
                    ? 'opacity-20 cursor-not-allowed'
                    : 'hover:bg-neutral-100 hover:text-neutral-900 hover:scale-105 active:scale-95'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                onClick={handleNextPage}
                disabled={currentPage === numPages}
                className={`absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-neutral-200 bg-white/90 text-neutral-600 flex items-center justify-center shadow-md transition-all duration-300 z-20 cursor-pointer ${
                  currentPage === numPages
                    ? 'opacity-20 cursor-not-allowed'
                    : 'hover:bg-neutral-100 hover:text-neutral-900 hover:scale-105 active:scale-95'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}

          {/* Bottom Page Status Indicator */}
          <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center z-10 pointer-events-none">
            {!loading && !error && (
              <div className="flex items-center gap-4 px-4 py-1.5 rounded-full bg-white/90 border border-neutral-200 text-neutral-500 font-mono text-xs shadow-md pointer-events-auto">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`hover:text-neutral-900 transition-colors cursor-pointer ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
                >
                  ◀
                </button>
                <span>{currentPage} / {numPages}</span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === numPages}
                  className={`hover:text-neutral-900 transition-colors cursor-pointer ${currentPage === numPages ? 'opacity-30 cursor-not-allowed' : ''}`}
                >
                  ▶
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Page Sidebar (Thumbnails) */}
        <div className="w-48 lg:w-56 border-l border-neutral-100 flex flex-col h-full z-10 pl-4">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-neutral-100">
            <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-wider font-mono">Pages</span>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-500 transition-all cursor-pointer"
              title="Close Viewer (Esc)"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable list of thumbnails */}
          <div className="flex-1 overflow-y-auto flex flex-col gap-3 pr-1 scrollbar-thin">
            {!loading && !error && pdf && (
              Array.from({ length: numPages }, (_, i) => i + 1).map((pageNum) => (
                <PDFThumbnailItem
                  key={pageNum}
                  pdf={pdf}
                  pageNum={pageNum}
                  isActive={currentPage === pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                />
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PDFViewerModal;
