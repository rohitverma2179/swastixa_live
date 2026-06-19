import LogoCarousel from "../components/home/Logo";
import LightRays from "../components/services/LightRays";
import ServiceCards from "../components/services/servicecards";
import OurApproach from "../components/services/OurApproach";
import WhyCompany from "../components/services/Whycompany";

const Services = () => {
    return (
        <div className="bg-black min-h-screen ">
            <div style={{ width: '100%', height: '650px', position: 'relative' }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1}
                    lightSpread={0.5}
                    rayLength={3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0}
                    distortion={0}
                    className="custom-rays"
                    pulsating={false}
                    fadeDistance={1}
                    saturation={1}
                />
            </div>
            <ServiceCards />
            <OurApproach />
            <WhyCompany />
            <LogoCarousel />
        </div>
    );
};

export default Services;