export default function InnerPageHeader({ title, description }) {
    return (
        <div className="border h-auto        border-zinc-300 rounded-xl p-6 text-center mb-8" style={{
            background: "rgba(12, 12, 12, 0.0)", // Transparent background
            backdropFilter: "blur(15px)",        // Blur effect
            boxShadow: "rgb(110 109 109 / 25%) 1.5px 1px 2.8px inset", // Inner shadow
        }}>
            <h1 className="text-3xl font-bold text-white lg:pt-4 2xl:text-[3.65vw]">{title}</h1>
            {description && (
                <p className="text-gray-400 text-sm mt-2 lg:max-w-[700px]  mx-auto 2xl:text-[1.042vw]">
                    {description}
                </p>
            )}
        </div>
    );
}