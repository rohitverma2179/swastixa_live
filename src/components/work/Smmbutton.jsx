import React from 'react'

const Smmbutton = () => {
    return (
        <>
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
            <button
                onClick={() => navigate('/work/Print')}
                className="text-xl m-6 border px-8 py-2 rounded-sm transition-colors cursor-pointer border-white/30 text-white/70 hover:border-white hover:text-white"
            >
                Print
            </button>
        </>
    )
}

export default Smmbutton