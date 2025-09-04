import Carousel from "./components/Carousel.jsx";
import Typewriter from "typewriter-effect";

export default function Home() {

  const getDayWithSuffix = (day) => {
    if (day > 3 && day < 21) return day + "th"; // handles 11th–19th
    switch (day % 10) {
      case 1: return day + "st";
      case 2: return day + "nd";
      case 3: return day + "rd";
      default: return day + "th";
    }
  };

  const today = new Date();
  const day = getDayWithSuffix(today.getDate());
  const month = today.toLocaleString("default", { month: "long" });

  return (
    <div className="w-full flex flex-col items-center justify-start bg-gray-100 pb-[100px]">
        {/* Background */}
      <div className=" relative w-full max-h-[700px] overflow-hidden">
        <img
          src="/images/pages/home/bg/6.jpg"
          loading="eager"
          fetchPriority="high"
          alt="background"
          className="
            object-cover w-full lg:blur-[1.5px] sm:blur-[0.5px]
            h-[600px] sm:h-[600px] md:h-[650px] lg:h-[700px] 
            scale-100 sm:scale-150 md:scale-100 lg:scale-100
            transition-transform duration-4000 ease-in-out
            hover:scale-110 slide-up-scale
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-start mt-60 sm:mt-65 px-4 text-center">
          <h1 className="font-['Archivo_Black'] text-white text-md sm:text-xl md:text-xl drop-shadow-lg">
            Today is {day} of {month}
          </h1>
          <h1 className="font-['Archivo_Black'] text-white text-3xl sm:text-3xl md:text-5xl drop-shadow-lg mt-1 sm:mt-4">
            Your Trusted Dental Care that is
          </h1>
          <h1 className="font-['Archivo_Black'] text-white text-3xl sm:text-3xl md:text-5xl drop-shadow-lg mt-5 sm:mt-10">
            <Typewriter
              options={{
                strings: ["Quality", "Affordable", "Exceptional"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-white font-light text-lg sm:text-lg md:text-2xl font-bold drop-shadow-lg mt-5 sm:mt-10">
            As your dental care partner, we’re dedicated to keeping your smile strong and healthy.
          </p>
        </div>
      </div>
    <div>

  <div className="max-w-[1100px] w-full -mt-20 sm:-mt-25 px-7 sm:px-4 relative z-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-10">
      <div className="bg-white shadow-lg rounded-2xl p-10 sm:p-10 text-center hover:scale-105 transition-transform slide-up">
        <h2 className="text-xl font-bold mb-2">High Quality Dental Care</h2>
        <p className="text-gray-600">Delivering exceptional dental treatments with precision, care, and compassion.</p>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-10 sm:p-10 text-center hover:scale-105 transition-transform slide-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-xl font-bold mb-2">Experienced Professional</h2>
        <p className="text-gray-600">Providing trusted dental care backed by years of skill and expertise.</p>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-10 sm:p-10 text-center hover:scale-105 transition-transform slide-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-xl font-bold mb-2">Open from 10am to 5pm</h2>
        <div className="text-gray-600 space-y-2">
        <div className="flex justify-between">
          <span>Mon - Fri:</span>
          <span>10:00 AM - 5:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span>Sat:</span>
          <span>12:00 AM - 4:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span>Sun:</span>
          <span>Closed</span>
        </div>
      </div>
      </div>
    </div>
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
