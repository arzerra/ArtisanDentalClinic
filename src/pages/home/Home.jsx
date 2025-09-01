

export default function Home(){

    const slides = [
        "/images/carousel/backgroundCarousel/1.jpg",
        "/images/carousel/backgroundCarousel/2.jpg",
        "/images/carousel/backgroundCarousel/3.jpg",
        "/images/carousel/backgroundCarousel/4.jpg",
    ]

    return(
        <div className="w-full flex flex-col items-center justify-start bg-gray-100 pb-[100px]">
            <div className="w-full h-[500px] border border-red-500 flex overflow-hidden">
                {slides.map((src, index) => (
                    <img key={index}
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[500px] object-cover"/>
                ))}
            </div>
            <div className="w-full h-[350px] flex justify-center items-end pb-[90px] bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: `
                    linear-gradient(to bottom, rgba(128, 128, 128, 0.3),rgba(128, 128, 128, 0.0)   ),
                    url("/images/background/contactUs.jpg")`
                }}>
            </div>
            <div className="w-full h-[350px] border border-red-500">
            </div>
        </div>
    )
}
