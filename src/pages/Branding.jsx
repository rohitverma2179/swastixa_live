import React, { Suspense, lazy, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// PDF Files (for modal view)
import bestmatePdf from '../assets/bestmate-brand-guidlines.pdf';
import gracePdf from '../assets/grace-aesthetic-brand-guidlines.pdf';

// Static Thumbnail Images (for card cover)
import bestmateThumb from '../assets/bestmate-guideline-thumb.png';
import graceThumb from '../assets/grace-guideline-thumb.png';

const StaticPDFCard = lazy(() => import('../components/work/StaticPDFCard.jsx'));
const PDFViewerModal = lazy(() => import('../components/work/PDFViewerModal.jsx'));

const Branding = () => {
    const navigate = useNavigate();
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    const handleOpenPdf = (pdfUrl, title) => {
        setSelectedPdf(pdfUrl);
        setModalTitle(title);
        setModalOpen(true);
    };

    const brandingDocs = [
        {
            id: 1,
            title: "Bestmate",
            pdf: bestmatePdf,
            thumbnail: bestmateThumb
        },
        {
            id: 2,
            title: "Grace Aesthetic",
            pdf: gracePdf,
            thumbnail: graceThumb
        }
    ];

    return (
        <main className="bg-black min-h-screen pt-24 md:pt-40">
            <div className="relative z-10 px-4">
                <h1 className='text-white text-center text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter'>
                    Branding & Identity
                </h1>

                <div className='text-white text-center mt-12 mb-16'>
                    <button
                        onClick={() => navigate('/work/SocialMedia')}
                        className="text-xl m-6 border px-8 py-2 rounded-sm transition-colors cursor-pointer border-white/30 text-white/70 hover:border-white hover:text-white"
                    >
                        Posts
                    </button>
                    <button
                        onClick={() => navigate('/work/reels')}
                        className="text-xl m-6 border px-8 py-2 rounded-sm transition-colors cursor-pointer border-white/30 text-white/70 hover:border-white hover:text-white"
                    >
                        Reels
                    </button>
                    <button
                        className="text-xl m-6 border px-8 py-2 rounded-sm transition-colors cursor-pointer bg-white text-black border-white"
                    >
                        Branding
                    </button>
                    {/* <button
                        onClick={() => navigate('/work/Print')}
                        className="text-xl m-6 border px-8 py-2 rounded-sm transition-colors cursor-pointer border-white/30 text-white/70 hover:border-white hover:text-white"
                    >
                        Print
                    </button> */}
                </div>

                <div className="max-w-[1400px] mx-auto pb-20">
                    <Suspense fallback={
                        <div className="w-full h-[30vh] flex items-center justify-center">
                            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                        </div>
                    }>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {brandingDocs.map((doc) => (
                                <StaticPDFCard 
                                    key={doc.id} 
                                    pdfUrl={doc.pdf}
                                    imageUrl={doc.thumbnail}
                                    title={doc.title} 
                                    onClick={() => handleOpenPdf(doc.pdf, doc.title)}
                                />
                            ))}
                        </div>
                    </Suspense>
                </div>
            </div>

            {/* PDF Viewer Lightbox Modal */}
            <Suspense fallback={null}>
                <PDFViewerModal 
                    pdfUrl={selectedPdf} 
                    isOpen={modalOpen} 
                    onClose={() => setModalOpen(false)} 
                    title={modalTitle} 
                />
            </Suspense>
        </main>
    );
};

export default Branding;