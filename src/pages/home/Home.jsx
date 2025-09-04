import Carousel from "./components/Carousel.jsx";
import Typewriter from "typewriter-effect";
import { useEffect, useRef, useState } from "react";


export default function Home() {

  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

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
      <div className=" relative w-full max-h-[800px] overflow-hidden">
        <img
          src="/images/pages/home/bg/6.jpg"
          loading="eager"
          fetchPriority="high"
          alt="background"
          className="
            object-cover object-[50%_100%]  w-full  blur-[1px] lg:blur-[1.6px]
            h-[600px] sm:h-[600px] md:h-[650px] lg:h-[800px] 
            scale-100 sm:scale-150 md:scale-100 lg:scale-100
            transition-transform duration-4000 ease-in-out
            hover:scale-120 slide-up-scale
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-start mt-60 sm:mt-75 px-4 text-center">
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

      <div className="max-w-[1100px] w-full -mt-20 sm:-mt-25 px-9 sm:px-4 relative z-10">
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
              <span>12:00 PM - 4:00 PM</span>
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

      <div className="max-w-[1100px] w-full h-auto mt-30 flex flex-col items-center text-center">
        <h1 ref={ref}
            className={`font-['Archivo_Black'] text-black text-2xl sm:text-3xl md:text-5xl drop-shadow-lg mt-1 sm:mt-4 ${
            inView ? "slide-up" : ""}`}>Samples</h1>
            <Carousel/>
      </div>

      {/* <div className="max-w-[1100px] w-full mx-auto mt-10">
        <div className="w-full aspect-[16/9]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2061.4304467370603!2d125.61204895455377!3d7.071562200446328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d5c7123831b%3A0xd48a43fd8d616825!2sEmilia%20Mindanao%20Souvenir%20Center!5e1!3m2!1sen!2sph!4v1756973264394!5m2!1sen!2sph"
            className="w-[550px] h-[600px] border-10 border-white rounded-3xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div> */}

      {/* <div className="relative w-full h-[350px] mt-40 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/images/pages/home/bg/6.jpg')" }}>
      <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-[1100px] w-full h-auto">
        </div>
      </div> */}


    </div>
  );
}
