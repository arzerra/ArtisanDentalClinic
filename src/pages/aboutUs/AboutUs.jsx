
export default function AboutUs() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-start bg-gray-100 pb-[100px]"> 
        <div className="relative w-full max-h-[800px] overflow-hidden">
          <img
            src="/images/pages/about/bg/1.jpg"
            loading="eager"
            fetchPriority="high"
            alt="background"
            className="
              object-cover object-[50%_70%] w-full blur-[1px] lg:blur-[5px]
              h-[350px] sm:h-[600px] md:h-[600px] lg:h-[350px]
            "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/10 to-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center pt-0 sm:pt-20">
            <h1 className="font-['Archivo_Black'] text-white text-4xl sm:text-5xl font-bold drop-shadow-lg">
              About Us
            </h1>
          </div>         
        </div>

        <div className="max-w-[1100px] w-[85%] sm:w-full mt-2 sm:mt-5">
            <h1 className="font-['Anton'] mt-5 text-gray-8s00 text-xl sm:text-5xl text-justify sm:text-center" >
                Welcome to Artisan Dental</h1>
        </div>
        <div className="max-w-[1100px] w-[85%] sm:w-full mt-2 sm:mt-5">
            <h1 className="font-['Barlow_Condensed'] mt-5 text-gray-500 text-xl sm:text-3xl text-justify sm:text-center" >
                Where healthy smiles are crafted with care, comfort, and expertise. 
                We’re here to make your dental journey stress-free and give you every reason to smile with confidence..</h1>
        </div>

              <section className="max-w-[1100px] w-full px-6 sm:px-0 mt-12 mx-auto">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 border rounded-lg shadow-sm">
            <h4 className="font-semibold">Compassion & Comfort</h4>
            <p className="mt-2 text-gray-600">
              We put your comfort first at every step of your dental journey.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h4 className="font-semibold">Expert Care</h4>
            <p className="mt-2 text-gray-600">
              Our team applies the latest dental techniques with a gentle touch.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h4 className="font-semibold">Trust & Integrity</h4>
            <p className="mt-2 text-gray-600">
              Delivering honest, personalized care that earns your smile and
              trust.
            </p>
          </div>
        </div>
      </section>

        <div className="max-w-[1100px] w-[85%] h-[400px] sm:w-full mt-2 sm:mt-5">

        </div>

      </div>
    </>
  )
}
