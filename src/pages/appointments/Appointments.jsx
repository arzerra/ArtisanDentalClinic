import { Link } from "react-router-dom";

export default function Appointments(){
    return(
        <>
        <div className="w-full flex flex-col items-center justify-start bg-gray-100 pb-[100px]">
            <div className="relative w-full max-h-[800px] overflow-hidden">
                <img
                    src="/images/pages/appointment/bg/1.jpg"
                    loading="eager"
                    fetchPriority="high"
                    alt="background"
                    className="
                    object-cover object-[50%_53%] w-full blur-[1.5px] lg:blur-[0.5px]
                    h-[350px] sm:h-[600px] md:h-[600px] lg:h-[800px]
                    "
                />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/10 to-black/40"></div>
            </div>


            <div className="max-w-[1100px] w-full -mt-25 sm:-mt-50 px-9 sm:px-4 relative z-10">
            <div className="grid grid-cols-1">
                <div className="bg-white shadow-lg rounded-2xl p-10 sm:p-10 text-center">
                <h2 className="font-['Archivo_Black'] text-black text-4xl sm:text-4xl font-bold drop-shadow-lg">Our Services</h2>
                <p className="text-gray-600">Providing trusted dental care backed by years of skill and expertise.</p>
                <p className="text-gray-600">Providing trusted dental care backed by years of skill and expertise.</p>
                <p className="text-gray-600">Providing trusted dental care backed by years of skill and expertise.</p>
                <p className="text-gray-600">Providing trusted dental care backed by years of skill and expertise.</p>
                <p className="text-gray-600">Providing trusted dental care backed by years of skill and expertise.</p>
                <p className="text-gray-600">Providing trusted dental care backed by years of skill and expertise.</p>
                <p className="text-gray-600">Providing trusted dental care backed by years of skill and expertise.</p>
                <p className="text-gray-600">Providing trusted dental care backed by years of skill and expertise.</p>
                <p className="text-gray-600">Providing trusted dental care backed by years of skill and expertise.</p>
                </div>
            </div>
            </div>

        </div>
        </>
    )
}