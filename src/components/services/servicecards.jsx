import React from 'react';

const serviceList = [
  {
    number: '01',
    title: 'SEO Agency',
    description: 'Turn search traffic into business growth with proven SEO strategies.'
  },
  {
    number: '02',
    title: 'Content Marketing',
    description: 'Turn ideas into impactful content that connects with your audience and drives results.'
  },
  {
    number: '03',
    title: 'Social Media Marketing',
    description: 'Manage your brand on social platforms with strategic content that boosts engagement and growth.'
  },
  {
    number: '04',
    title: 'Performance Marketing',
    description: 'Achieve faster growth with performance focused marketing strategies built for measurable outcomes.'
  },
  {
    number: '05',
    title: 'Website Development',
    description: 'Create modern, responsive websites that deliver seamless performance and strong user experience.'
  },
  {
    number: '06',
    title: 'Video Production House',
    description: 'Produce compelling videos that bring your brand message to life and connect with your audience.'
  }
];

const ServiceCards = () => {
  return (
    <section className="bg-black text-white py-12 px-6 sm:px-12 lg:px-24 xl:px-32 flex flex-col items-start text-left w-full select-none">
      {/* Upper Title Section */}
      <div className="max-w-4xl mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-[46px] font-extrabold tracking-tight mb-4 text-white leading-none">
          What we do
        </h1>
        <p className="text-[#a1a1aa] text-base sm:text-lg font-light leading-relaxed max-w-3xl">
          We help brands grow through strategy, <br /> content, advertising, search visibility, <br /> social media and performance marketing.
        </p>
      </div>

      {/* Sub Title Section */}
      <div className="mb-8">
        <span className="text-[#71717a] text-[11px] font-semibold uppercase tracking-[0.2em] block mb-1.5">
          Our Services
        </span>
        <h2 className="text-2xl sm:text-[32px] font-extrabold tracking-tight text-white leading-tight">
          Everything Your Brand Needs
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {serviceList.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 rounded-[12px] bg-[#121214] border border-[#232326] hover:border-[#38383c] hover:bg-[#151518] hover:-translate-y-1 transition-all duration-300 min-h-[190px] group cursor-pointer"
            style={{
              boxShadow: '0 4px 25px rgba(0, 0, 0, 0.35)'
            }}
          >
            {/* Number */}
            <div className="text-[#71717a] group-hover:text-[#a1a1aa] font-medium text-base mb-3 transition-colors duration-300">
              {service.number}
            </div>

            {/* Description */}
            <p className="text-[#a1a1aa] group-hover:text-zinc-300 text-sm sm:text-[15px] leading-relaxed mb-5 font-light transition-colors duration-300">
              {service.description}
            </p>

            {/* Title */}
            <h3 className="text-white group-hover:text-blue-400 font-semibold text-lg sm:text-[20px] tracking-tight transition-colors duration-300 mt-auto">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;