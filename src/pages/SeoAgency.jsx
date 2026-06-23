import React from 'react'
import ExcellenceHero from '../components/seoagency/ExcellenceHero'
import LogoCarousel from '../components/home/Logo'
import ServiceCards from '../components/services/servicecards'
import WhyChooseUs from '../components/seoagency/WhyChooseUs'
import HowWeWork from '../components/seoagency/HowWeWork'
import CaseStudies from '../components/seoagency/caseStudies'
import FAQSection from '../components/seoagency/FAQSection'

const SeoAgency = () => {
    return (
        <div className="bg-black min-h-screen">
            <ExcellenceHero />
            <WhyChooseUs />
            <HowWeWork />
            <CaseStudies />
            <LogoCarousel />
            <ServiceCards />
            <FAQSection />
        </div>


    )
}

export default SeoAgency