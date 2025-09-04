import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CenteredCarousel() {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const images = [
    "/images/pages/home/carousel/carousel1.jpg",
    "/images/pages/home/carousel/carousel2.jpg",
    "/images/pages/home/carousel/carousel3.jpg",
    "/images/pages/home/carousel/carousel4.jpg",
    "/images/pages/home/carousel/carousel5.jpg",
    "/images/pages/home/carousel/carousel6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  const prevSlide = () => {
    setCurrentIndex(prevIndex);
  };

  const nextSlide = () => {
    setCurrentIndex(nextIndex);
  };

    useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change 3000 to whatever delay you want in ms

    return () => clearInterval(interval); // Cleanup
  }, [currentIndex]); // Re-run when currentIndex changes

  return (
    <div className="relative max-w-[1100px] w-full h-full mx-auto mt-5 sm:mt-15 flex items-center justify-center overflow-hidden" data-aos="zoom-in" >
      
      {/* Left image (previous) */}
      <img
        src={images[prevIndex]}
        alt="Previous"
        className="absolute left-1 sm:left-0 w-1/3 h-full object-cover scale-90 blur-sm rounded-2xl transition-all duration-500"
      />

      {/* Center image (current) */}
      <img
        src={images[currentIndex]}
        alt="Current"
        className="relative z-10 w-[300px] sm:w-1/2 h-full object-cover rounded-3xl transition-all duration-500 border-5 sm:border-10 border-[#FFFFF0]"
      />

      {/* Right image (next) */}
      <img
        src={images[nextIndex]}
        alt="Next"
        className="absolute right-1 sm:right-0 w-1/3 h-full object-cover scale-90 blur-sm rounded-2xl transition-all duration-500"
      />

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-60 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hidden sm:block"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-60 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hidden sm:block"
      >
        &#10095;
      </button>
    </div>
  );
}
