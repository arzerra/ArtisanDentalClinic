import Carousel from "./components/Carousel.jsx";
import Typewriter from "typewriter-effect";
import { useEffect, useRef, useState } from "react";
import { FaFacebook   } from "react-icons/fa";


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
            h-[550px] sm:h-[600px] md:h-[600px] lg:h-[800px] 
            scale-100 sm:scale-150 md:scale-100 lg:scale-100
            transition-transform duration-4000 ease-in-out
            hover:scale-120 slide-up-scale
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-start mt-40 sm:mt-80 md:mt-50 px-4 text-center" >
          <h1 className="font-medium text-white text-sm sm:text-xl md:text-xl drop-shadow-lg">
            Today is {day} of {month}
          </h1>
          <h1 className="font-['Archivo_Black'] text-white text-3xl sm:text-3xl md:text-5xl drop-shadow-lg mt-1 sm:mt-4">
            Your Trusted Dental Care that is
          </h1>
          <h1 className="font-['Archivo_Black'] text-white text-3xl sm:text-3xl md:text-5xl drop-shadow-lg">
            <Typewriter
              options={{
                strings: ["Quality", "Affordable", "Exceptional"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-white font-light text-lg sm:text-lg md:text-2xl font-bold drop-shadow-lg mt-8 sm:mt-10">
            As your dental care partner, we’re dedicated to keeping your smile strong and healthy.
          </p>
        </div>
      </div>
    <div>

      <div className="max-w-[1100px] w-full -mt-25 sm:-mt-25 px-9 sm:px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-10">
          <div className="bg-white shadow-lg rounded-2xl p-10 sm:p-10 text-center hover:scale-105 transition-transform" data-aos="fade-up">
            <h2 className="text-xl font-bold mb-2">High Quality Dental Care</h2>
            <p className="text-gray-600">Delivering exceptional dental treatments with precision, care, and compassion.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-10 sm:p-10 text-center hover:scale-105 transition-transform" data-aos="fade-up" data-aos-duration="2000">
            <h2 className="text-xl font-bold mb-2">Experienced Professional</h2>
            <p className="text-gray-600">Providing trusted dental care backed by years of skill and expertise.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-10 sm:p-10 text-center hover:scale-105 transition-transform"  data-aos="fade-up" data-aos-duration="2500">
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

    <div className="max-w-[1100px] w-full h-auto mt-20 flex flex-col items-center text-center">
        <h1 ref={ref} className="font-['Smooch_Sans'] text-black text-4xl sm:text-3xl md:text-5xl drop-shadow-lg mt-1 sm:mt-3" data-aos="zoom-in-up">What We Do</h1>
        <p className="text-gray-600 text-md sm:text-xl mt-2 sm:mt-4 px-10" data-aos="zoom-in-up"> Discover the range of dental services we provide to keep your smile healthy and bright. </p>
    <div className="max-w-[1100px] w-full h-auto mt-2 sm:mt-5 grid grid-cols-2 sm:grid-cols-4">

      {/* Preventive */}
      <div className="group w-36 sm:w-44 h-44 [perspective:1000px] mx-auto" data-aos="zoom-in">
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front */}
          <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden">
            <img src="/images/icon/tooth/Preventive.png" alt="Preventive" className="w-20 h-20 sm:w-25 sm:h-25" />
            <p className="mt-2 text-sm sm:text-base font-medium text-gray-700">Preventive</p>
          </div>
          {/* Back */}
          <div className="absolute inset-0 flex items-center justify-center p-2 text-center bg-transparent [transform:rotateY(180deg)] backface-hidden">
            <p className="text-gray-600 text-md border border-black p-2 rounded-md">Cleanings, exams, and fluoride to stop problems before they start.</p>
          </div>
        </div>
      </div>

      {/* Restorative */}
      <div className="group w-36 sm:w-44 h-44 [perspective:1000px] mx-auto" data-aos="zoom-in">
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden">
            <img src="/images/icon/tooth/Restorative.png" alt="Restorative" className="w-20 h-20 sm:w-25 sm:h-25" />
            <p className="mt-2 text-sm sm:text-base font-medium text-gray-700">Restorative</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-2 text-center bg-transparent [transform:rotateY(180deg)] backface-hidden">
            <p className="text-gray-600 text-md border border-black p-2 rounded-md">Fillings, crowns, and bridges to repair damaged or missing teeth.</p>
          </div>
        </div>
      </div>

      {/* Cosmetic */}
      <div className="group w-36 sm:w-44 h-44 [perspective:1000px] mx-auto" data-aos="zoom-in">
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden">
            <img src="/images/icon/tooth/Cosmetic.png" alt="Cosmetic" className="w-20 h-20 sm:w-25 sm:h-25" />
            <p className="mt-2 text-sm sm:text-base font-medium text-gray-700">Cosmetic</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-2 text-center bg-transparent [transform:rotateY(180deg)] backface-hidden">
            <p className="text-gray-600 text-md border border-black p-2 rounded-md">Teeth whitening, veneers, and bonding to enhance your smile.</p>
          </div>
        </div>
      </div>

      {/* Orthodontics */}
      <div className="group w-36 sm:w-44 h-44 [perspective:1000px] mx-auto" data-aos="zoom-in">
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden">
            <img src="/images/icon/tooth/Orthodontics.png" alt="Orthodontics" className="w-20 h-20 sm:w-25 sm:h-25" />
            <p className="mt-2 text-sm sm:text-base font-medium text-gray-700">Orthodontics</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-2 text-center bg-transparent [transform:rotateY(180deg)] backface-hidden">
            <p className="text-gray-600 text-md border border-black p-2 rounded-md">Braces and aligners to straighten teeth and improve bite.</p>
          </div>
        </div>
      </div>

      {/* Periodontal */}
      <div className="group w-36 sm:w-44 h-44 [perspective:1000px] mx-auto" data-aos="zoom-in">
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden">
            <img src="/images/icon/tooth/Periodontal.png" alt="Periodontal" className="w-20 h-20 sm:w-25 sm:h-25" />
            <p className="mt-2 text-sm sm:text-base font-medium text-gray-700">Periodontal</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-2 text-center bg-transparent [transform:rotateY(180deg)] backface-hidden">
            <p className="text-gray-600 text-md border border-black p-2 rounded-md">Treatments for gum disease and supporting structures of teeth.</p>
          </div>
        </div>
      </div>

      {/* Oral Surgery */}
      <div className="group w-36 sm:w-44 h-44 [perspective:1000px] mx-auto" data-aos="zoom-in">
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden">
            <img src="/images/icon/tooth/Oral.png" alt="Oral Surgery" className="w-20 h-20 sm:w-25 sm:h-25" />
            <p className="mt-2 text-sm sm:text-base font-medium text-gray-700">Oral Surgery</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-2 text-center bg-transparent [transform:rotateY(180deg)] backface-hidden">
            <p className="text-gray-600 text-md border border-black p-2 rounded-md">Extractions, implants, and surgical solutions for oral health.</p>
          </div>
        </div>
      </div>

      {/* Pediatric */}
      <div className="group w-36 sm:w-44 h-44 [perspective:1000px] mx-auto" data-aos="zoom-in">
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden">
            <img src="/images/icon/tooth/Pediatric.png" alt="Pediatric" className="w-20 h-20 sm:w-25 sm:h-25" />
            <p className="mt-2 text-sm sm:text-base font-medium text-gray-700">Pediatric</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-2 text-center bg-transparent [transform:rotateY(180deg)] backface-hidden">
            <p className="text-gray-600 text-md border border-black p-2 rounded-md">Gentle dental care tailored for children and young patients.</p>
          </div>
        </div>
      </div>

      {/* Emergency */}
      <div className="group w-36 sm:w-44 h-44 [perspective:1000px] mx-auto" data-aos="zoom-in">
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden">
            <img src="/images/icon/tooth/Emergency.png" alt="Emergency" className="w-20 h-20 sm:w-25 sm:h-25" />
            <p className="mt-2 text-sm sm:text-base font-medium text-gray-700">Emergency</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-2 text-center bg-transparent [transform:rotateY(180deg)] backface-hidden">
            <p className="text-gray-600 text-md border border-black p-2 rounded-md">Immediate care for urgent dental pain, injury, or infection.</p>
          </div>
        </div>
      </div>
    </div>
    </div>

      <div className="max-w-[1100px] w-full h-auto mt-20 flex flex-col items-center text-center">
        <h1 ref={ref} className="font-['Smooch_Sans'] text-black text-4xl sm:text-3xl md:text-5xl drop-shadow-lg" data-aos="zoom-in-up">Our Work</h1>
        <p className="text-gray-600 text-md sm:text-xl mt-2 sm:mt-4 px-10" data-aos="zoom-in-up"> Take a look at some of the results we’ve achieved for our patients. </p>
        <Carousel/>
      </div>


      <div className="w-full h-[280px] sm:h-[400px] mt-20 sm:mt-30 relative overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/pages/home/bg/8.jpg')" }} data-aos="fade-right">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-6xl font-bold drop-shadow-lg">
            "Time Heals Everything" 
          </h1>
          <p className="text-white text-md sm:text-3xl mt-2 sm:mt-4 drop-shadow-md">
            ...except cavities, they need a dentist!
          </p>
        </div>
      </div>


      <div className="w-[95%] sm:w-full max-w-[1080px] h-[150px] sm:h-[130px] bg-white shadow-md rounded-2xl mt-20 mx-auto flex flex-col sm:flex-row items-center justify-between px-10 py-4">
        <p className="text-gray-700 text-3xl sm:text-4xl font-medium mb-5 sm:mb-0">
          Follow us on Facebook
        </p>
        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-x-2 px-8 py-4 overflow-hidden group bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold rounded-full transition-all ease-out duration-300"
        >
          <span
            className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 -skew-x-12 group-hover:-translate-x-40 ease"
          ></span>

          <FaFacebook className="relative text-xl" />
          <span className="relative">@ArtisanDental</span>
        </a>
      </div>

      <div className="max-w-[1100px] w-full mx-auto mt-20 items-center text-center px-3" >
        <h1 ref={ref} className="font-['Smooch_Sans'] text-black text-4xl sm:text-3xl md:text-5xl drop-shadow-lg mt-1 sm:mt-4" data-aos="zoom-in-up">Our Location</h1>
        <p className="text-gray-600 text-md sm:text-xl mt-2 sm:mt-4 px-2" data-aos="zoom-in-up"> Room 8, 2nd Floor, Emilia Mindanao Souvenir Center, CM Recto St., Claveria, Davao City</p>
        <div className="w-full max-w-[1100px] mx-auto rounded-3xl overflow-hidden border-5 sm:border-8 border-[#FFFFF0] mt-5 sm:mt-10" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2061.4304467370603!2d125.61204895455377!3d7.071562200446328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d5c7123831b%3A0xd48a43fd8d616825!2sEmilia%20Mindanao%20Souvenir%20Center!5e1!3m2!1sen!2sph!4v1756973264394!5m2!1sen!2sph"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  );
}
