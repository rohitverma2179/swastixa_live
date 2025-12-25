
import TextWriteAnimation from "./TextWriteAnimation";
// import featcher_video from "/Hero-2nd-video.mp4"

export default function HeroSection() {

  return (

    <section className="w-full min-h-[70vh] bg-white flex justify-center items-center px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl w-full">

        {/* Left Text Section */}
        <div className="text-left  lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug">
            DIGITAL AGENCY FOR <br />
            <span className="text-blue-500"> <TextWriteAnimation /> </span> 
            <br />
            ROOTED IN CULTURE
          </h1>
        </div> 


        {/* <div className="text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug">
            <TextWriteAnimation />
          </h1>
        </div> */}


        {/* DIGITAL AGENCY FOR BRAND STRATEGY | ROOTED IN CULTURE
DIGITAL AGENCY FOR SOCIAL MEDIA | ROOTED IN CULTURE
DIGITAL AGENCY FOR CONTENT MARKETING | ROOTED IN CULTURE
DIGITAL AGENCY FOR GRAPHIC DESIGN | ROOTED IN CULTURE
DIGITAL AGENCY FOR WEB DEVELOPMENT | ROOTED IN CULTURE
DIGITAL AGENCY FOR VIDEO PRODUCTION | ROOTED IN CULTURE
DIGITAL AGENCY FOR SEO & ANALYTICS | ROOTED IN CULTURE */}



        {/* Right Image Section */}
        <div className="flex justify-center items-center">
          <video
            // src={featcher_video}
            src="https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20HOME/Hero-2nd-video.mp4"
            // alt="Digital Experience"
            className="w-[100%] max-w-md object-contain"
            autoPlay
            loop
            muted
          />
        </div>

      </div>
    </section>

  );
}
