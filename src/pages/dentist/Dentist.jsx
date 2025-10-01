
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
                    <h1 className="font-['Archivo_Black'] text-white text-5xl sm:text-7xl font-bold drop-shadow-lg"             
                    style={{
                    textShadow: '1px 1px 0px black'
                    }}>
                    Meet the Dentist
                    </h1>
                </div>
            </div>

          <div className="max-w-[1000px] w-[85%] sm:w-full mt-2 sm:mt-10">
              <h1 className="font-['Barlow_Condensed'] mt-5 text-gray-500 text-xl sm:text-3xl text-center" data-aos="zoom-in-up">
                  Our team ensures every visit is professional, friendly, and tailored to your needs.</h1>
          </div>
          
            <div className="max-w-[1100px] w-full h-auto mt-5 sm:mt-20 flex flex-col sm:flex-row items-center text-center gap-10 mx-auto" data-aos="zoom-in-up">
              <div className="flex-1 flex flex-col items-center order-2 sm:order-1">
                <img 
                  src="/images/pages/dentist/bg/5.jpg" 
                  alt="profile" 
                  className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] border-6 border-[#FAD691] rounded-full hidden sm:block"
                />
                <h1 className="text-xl sm:text-3xl font-semibold mt-0 sm:mt-4">Dr. Ellen Plariza-Pasamba</h1>
                <h2 className="text-sm sm:text-xl text-gray-700 mt-2">General Dentistry & Orthodontics</h2>
              </div>
              <div className="flex-1 mt-6 sm:mt-0 order-1 sm:order-2">
                <img
                  src="/images/pages/dentist/bg/1.jpg"
                  alt="Dentist"
                  className="w-full max-w-[300px] sm:max-w-[500px] h-auto 
                             bg-white border-3 border-black rounded-none 
                            shadow-[15px_15px_0_-2.5px_#fff,15px_15px_0_0_#000]"
                />
              </div>
            </div>

            <div className="max-w-[1100px] w-full h-auto mt-20 flex flex-col sm:flex-row items-center text-center gap-10 mx-auto" data-aos="zoom-in-up">
              <div className="flex-1 mt-6 sm:mt-0">
                <img
                  src="/images/pages/dentist/bg/2.jpg"
                  alt="Dentist"
                  className="w-full max-w-[300px] sm:max-w-[500px] h-auto  bg-white border-3 border-black rounded-none 
                             shadow-[15px_15px_0_-2.5px_#fff,15px_15px_0_0_#000]"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-xl sm:text-3xl font-semibold">Stay Calm & Wear Your PPE</h1>
                <h2 className="text-sm sm:text-xl text-gray-700 mt-2">Safety first, always protected</h2>
              </div>
            </div>

            <div className="max-w-[1100px] w-full h-auto mt-20 flex flex-col sm:flex-row items-center text-center gap-10 mx-auto" data-aos="zoom-in-up">
              <div className="flex-1 flex flex-col items-center order-2 sm:order-1">
                <h1 className="text-xl sm:text-3xl font-semibold">Meet Our Secretary!</h1>
                <h2 className="text-sm sm:text-xl text-gray-700 mt-2">Ever Reliable Grace</h2>
              </div>
              <div className="flex-1 mt-6 sm:mt-0 order-1 sm:order-2">
                <img
                  src="/images/pages/dentist/bg/3.jpg"
                  alt="Dentist"
                  className="w-full max-w-[300px] sm:max-w-[500px] h-auto bg-white border-3 border-black rounded-none 
                             shadow-[15px_15px_0_-2.5px_#fff,15px_15px_0_0_#000]"
                />    
              </div>
            </div>

            

        </div>
        </>
    );
}