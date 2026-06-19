import React, { useEffect, useRef, useState } from 'react';

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

const PDFCard = ({ pdfUrl, title, onClick, customAspectRatio }) => {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(3/4); // Default to standard portrait
  
  useEffect(() => {
    let isMounted = true;

    const renderFirstPage = async () => {
      try {
        await loadPdfjs();
        if (!isMounted) return;

        const loadingTask = window.pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        if (!isMounted) return;

        const page = await pdf.getPage(1);
        if (!isMounted) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        
        const unscaledViewport = page.getViewport({ scale: 1 });
        const width = unscaledViewport.width;
        const height = unscaledViewport.height;
        
        if (isMounted) {
          setAspectRatio(width / height);
        }

        const scale = 500 / height;
        const viewport = page.getViewport({ scale });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
        if (isMounted) {
          setLoading(false);
        }
      } catch (err) {
        console.error('Error rendering PDF thumbnail:', err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    renderFirstPage();

    return () => {
      isMounted = false;
    };
  }, [pdfUrl]);

  return (
    <div
      onClick={onClick || (() => window.open(pdfUrl, '_blank'))}
      style={customAspectRatio ? {} : { aspectRatio: `${aspectRatio}` }}
      className={`group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer flex flex-col justify-between shadow-2xl hover:border-red-500/50 transition-colors duration-500 w-full ${customAspectRatio || ''}`}
    >
      {/* Canvas for PDF Page 1 */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
        {loading && (
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        )}
        {error && (
          <div className="text-white/40 text-center px-4">
            <span className="block text-4xl mb-2">📄</span>
            <span className="text-sm font-medium">Click to View PDF</span>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ${loading || error ? 'opacity-0' : 'opacity-100 group-hover:scale-105 transition-transform duration-700'}`}
        />
      </div>

      {/* PDF Indicator Icon / Badge */}
      <div className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-md tracking-wider flex items-center gap-1 z-10 shadow-lg">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        PDF
      </div>

      {/* Hover Information Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10 pointer-events-none">
        <h3 className="text-white text-lg font-bold tracking-tight mb-1">{title}</h3>
        <p className="text-red-400 text-sm font-medium flex items-center gap-1">
          Open Document
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </p>
      </div>

      {/* Bottom Title bar (Visible by default) */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 border-t border-white/5 flex items-center justify-between z-10">
        <span className="text-white/80 font-medium truncate text-sm">{title}</span>
        <span className="text-xs text-white/40 group-hover:text-red-400 transition-colors">View</span>
      </div>
    </div>
  );
};

export default PDFCard;