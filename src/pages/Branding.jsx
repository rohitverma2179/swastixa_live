import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import bestmatePdf from '../assets/bestmate-brand-guidlines.pdf';
import gracePdf from '../assets/grace-aesthetic-brand-guidlines.pdf';

const PDFCard = lazy(() => import('../components/work/PDFCard.jsx'));

const Branding = () => {
    const navigate = useNavigate();

    const brandingDocs = [
        {
            id: 1,
            title: "Bestmate",
            pdf: bestmatePdf
        },
        {
            id: 2,
            title: "Grace Aesthetic",
            pdf: gracePdf
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
                                <PDFCard key={doc.id} pdfUrl={doc.pdf} title={doc.title} />
                            ))}
                        </div>
                    </Suspense>
                </div>
            </div>
        </main>
    );
};

export default Branding;
