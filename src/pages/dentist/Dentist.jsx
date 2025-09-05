
export default function Dentist(){

    return(
        <>
        <div className="w-full flex flex-col items-center justify-start bg-gray-100 pb-[100px]">
            <div className="relative w-full max-h-[800px] overflow-hidden">
                <img
                src="/images/pages/dentist/bg/bg2.jpg"
                loading="eager"
                fetchPriority="high"
                alt="background"
                className="
                object-cover object-[50%_60%] w-full blur-[1px] lg:blur-[5px]
                h-[350px] sm:h-[600px] md:h-[600px] lg:h-[350px]
                "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/10 to-black/40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center pt-0 sm:pt-20">
                    <h1 className="font-['Archivo_Black'] text-white text-4xl sm:text-5xl font-bold drop-shadow-lg">
                    Meet the Dentist
                    </h1>
                </div>
            </div>

            <div className="max-w-[1100px] w-full h-auto mt-20 flex flex-col sm:flex-row items-center text-center gap-10 mx-auto">

              {/* Text Section */}
              <div className="flex-1">
                <h1 className="text-2xl font-semibold">Dr. Ellen Plariza-Pasamba</h1>
                <h2 className="text-xl text-gray-700 mt-2">General Dentistry & Orthodontics</h2>
                <p className="text-gray-600 mt-4">"𝖮𝗇𝖾 S𝗆𝗂𝗅𝖾 𝖺𝗍 𝖺 T𝗂𝗆𝖾"</p>
              </div>

              {/* Image Section */}
              <div className="flex-1 mt-6 sm:mt-0">
                <img
                  src="/images/pages/dentist/bg/1.jpg"
                  alt="Dentist"
                  className="w-full max-w-[500px] h-auto rounded-lg"
                />
              </div>

            </div>


        </div>
        </>
    );
}