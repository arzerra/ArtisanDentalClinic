import { useState, useEffect } from "react";

export default function Carousel() {
  const slides = [
    "/images/carousel/carousel1.jpg",
    "/images/carousel/carousel2.jpg",
    "/images/carousel/carousel3.jpg",
    "/images/carousel/carousel4.jpg",
  ];

        // duplicate slides for looping
        const loopedSlides = [...slides, ...slides];

        const [current, setCurrent] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
            setCurrent((prev) => prev + 1);
            }, 7000); // auto slide every 3s
            return () => clearInterval(interval);
        }, []);

        // Reset to start seamlessly
        useEffect(() => {
            if (current >= slides.length) {
            const timeout = setTimeout(() => setCurrent(0), 700); // match transition duration
            return () => clearTimeout(timeout);
            }
        }, [current]);

    return(
        <div className="w-full flex flex-col items-center justify-start bg-gray-100 pb-[100px]">

            <div className="max-w-[1100px] w-full h-auto">
                
                {/* TITLE*/}
                <div className="h-[350px] mt-40">
                    <h1 className="text-4xl">"Time Heals Everything" 
                    Except cavities, 
                    those need a dentist,</h1>
                </div>

                {/* CAROUSEL */}
                <div className="overflow-hidden h-full relative">
                    <div className="text-center text-2xl mb-10">
                         <h1 >Sample Cases</h1>
                    </div>

                <div
                    className="flex transition-transform duration-700 ease-in-out space-x-8"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {loopedSlides.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-1/2 h-auto object-cover flex-shrink-0"
                    />
                    ))}
                </div>
                <button
                    onClick={() => setCurrent((prev) => prev - 1)}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full z-10"
                >
                    ❮
                </button>
                <button
                    onClick={() => setCurrent((prev) => prev + 1)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full z-10"
                >
                    ❯
                </button>
                </div>


            </div>
        </div>
    )
}
