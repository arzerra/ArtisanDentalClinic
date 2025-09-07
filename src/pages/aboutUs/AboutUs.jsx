import NumberCounter from './components/NumberCounter.jsx';
import Button from './components/Button.jsx';
import { Link } from "react-router-dom";


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
            <h1 className="font-['Rock_Salt'] text-white text-4xl sm:text-5xl font-bold drop-shadow-lg">
              About Us
            </h1>
          </div>
        </div>

        <div className="max-w-[1100px] w-[85%] sm:w-full mt-5">
          <h1 className="font-['Jura'] mt-5 text-gray-800 drop-shadow-sm text-3xl sm:text-5xl text-center" >
            Welcome to Artisan Dental Clinic</h1>
        </div>
        <div className='max-w-[1100px] w-[85%] sm:w-full grid grid-cols-1 sm:grid-cols-2 mt-5 sm:mt-10'>
          <div className="mx-5 mt-1 sm:mt-5">
            <div className="flex items-center justify-center mt-0">
              <img src="images/logo/adc1.png" alt="Artisan" className="w-120" />
            </div>
          </div>
          <div className="mt-2 sm:mt-12 mr-0 sm:mr-15">
            <h1 className="font-['Darker_Grotesque'] mt-5 text-gray-700 text-2xl sm:text-3xl text-justify sm:text-justify" >
              Where healthy smiles are crafted with care, comfort, and expertise. We’re here to make your dental journey 
              stress-free and give you every reason to smile with confidence.</h1>
          </div>
        </div>

        <div className="w-full">
          <NumberCounter />
        </div>

        <div className='mt-[10px]'>
          <Button />
        </div>

        {/* <section className="max-w-[1100px] w-full px-6 sm:px-0 mt-12 mx-auto ">
          <h3 className="font-['Jura'] text-2xl sm:text-3xl font-semibold text-center mb-6">
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
        </section> */}



      </div>
    </>
  )
}
