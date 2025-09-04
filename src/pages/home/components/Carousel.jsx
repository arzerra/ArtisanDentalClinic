import { useState, useEffect } from "react";

export default function ImageCarousel() {
  const images = [
    "/images/pages/home/carousel/carousel1.jpg",
    "/images/pages/home/carousel/carousel2.jpg",
    "/images/pages/home/carousel/carousel3.jpg",
    "/images/pages/home/carousel/carousel4.jpg",
    "/images/pages/home/carousel/carousel5.jpg",
    "/images/pages/home/carousel/carousel6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="max-w-[600px] w-full h-[600px] relative overflow-hidden rounded-xl mt-10 border-10 border-white rounded-3xl">
    {images.map((img, index) => (
      <div
        key={index}
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
          index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <img
          src={img}
          alt={`Carousel ${index + 1}`}
          className="w-full h-full object-contain mx-auto"
        />
      </div>
      ))}

      {/* Optional: navigation dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
