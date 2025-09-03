import Carousel from "./components/Carousel.jsx";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-start bg-gray-100 pb-[100px]">
        {/* Background */}
    <div className="w-full max-h-[700px] overflow-hidden">
      <img
        src="/images/pages/home/bg/1.jpg"
        loading="eager" fetchpriority="high"
        alt="background"
        className="
          object-cover w-full lg:blur-[1.5px] sm:blur-[0.5px]
          h-[300px] sm:h-[300px] md:h-[700px] lg:h-[650px] 
          object-[center_0%] sm:object-[center_35%] md:object-[center_25%] lg:object-[center_23%]
          scale-150 sm:scale-150 md:scale-110 lg:scale-100"
      />
      {/* <div className="absolute inset-0 flex flex-col items-center justify-start justify-start mt-70">
        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
          "Time Heals Everything" 
        </h1>
        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
          Except cavities,
        </h1>
        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
          those need a dentist,
        </h1><br />
        <button className="px-6 py-3 text-white border border-white rounded-full text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg hover:bg-white hover:text-black transition duration-300">
          Book Now!
        </button>
      </div> */}
      <div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-20">
      <h1 className="font-['Archivo_Black'] text-white text-2xl sm:text-4xl md:text-5xl drop-shadow-lg">
        Your Trusted Dental Healthcare
      </h1><br />

      <h1 className="font-['Archivo_Black'] text-white text-2xl sm:text-4xl md:text-5xl drop-shadow-lg">
          <Typewriter
            options={{
              strings: ["Quality", "Affordable", "Exceptional"],
              autoStart: true,
              loop: true,
            }}
          />
      </h1><br /><br />

        <p className="text-white text-2xl sm:text-4xl md:text-2xl font-bold drop-shadow-lg">
          As your dental care partner, we’re dedicated to keeping your smile strong and healthy.
        </p>
      </div>
    </div>

      <div className="max-w-[1100px] w-full h-auto">
        {/* TITLE */}
        <div className="container h-[350px] mt-40">
        </div>

        {/* <Carousel /> */}
      </div>
    </div>
  );
}
