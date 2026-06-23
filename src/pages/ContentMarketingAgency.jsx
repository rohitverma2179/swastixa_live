import React from 'react'
import ExcellenceHero from '../components/websitedevelopment/ExcellenceHero'
import LogoCarousel from '../components/home/Logo'
import ServiceCards from '../components/services/servicecards'
import PortfolioCarousel from '../components/websitedevelopment/portfolioData'
import WhyChooseUs from '../components/websitedevelopment/WhyChooseUs'
import HowWeWork from '../components/websitedevelopment/HowWeWork'
import CaseStudies from '../components/websitedevelopment/caseStudies'
import FAQSection from '../components/websitedevelopment/FAQSection'

const ContentMarketingAgency = () => {
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

export default ContentMarketingAgency