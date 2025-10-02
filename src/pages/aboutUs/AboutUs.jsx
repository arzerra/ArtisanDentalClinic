import NumberCounter from './components/NumberCounter.jsx';
import Button from './components/Button.jsx';
import ReviewsCarousel from './components/ReviewsCarousel.jsx';
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram   } from "react-icons/fa";



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
            <h1 className="font-['Archivo_Black'] text-white text-5xl sm:text-7xl font-bold drop-shadow-lg"             
            style={{
            textShadow: '1px 1px 0px black'
            }}>
              About Us
            </h1>
          </div>
        </div>

        <div className="max-w-[1100px] w-[85%] sm:w-full mt-5">
          <h1 className="font-['Jura'] mt-5 text-gray-800 drop-shadow-sm text-3xl sm:text-5xl text-center" data-aos="fade-up" >
            Welcome to Artisan Dental Clinic
          </h1>
        </div>
        <div className='max-w-[1100px] w-[85%] sm:w-full grid grid-cols-1 sm:grid-cols-2 mt-5 sm:mt-10'>
          <div className="mx-5 mt-1 sm:mt-5">
            <div className="flex items-center justify-center mt-0">
              <img src="images/logo/adc1.png" alt="Artisan" className="w-120" data-aos="fade-right"/>
            </div>
          </div>
          <div className="mt-2 sm:mt-12 mr-0 sm:mr-15">
            <h1 className="font-['Darker_Grotesque'] mt-5 text-gray-700 text-2xl sm:text-3xl text-justify sm:text-justify" data-aos="fade-right">
              Where healthy smiles are crafted with care, comfort, and expertise. We’re here to make your dental journey 
              stress-free and give you every reason to smile with confidence.</h1>
          </div>
        </div>

        <div className="w-full" data-aos="fade-up">
          <NumberCounter />
        </div>

        <div className='mt-[10px]' data-aos="zoom-in">
          <Button />
        </div>

        <div className="w-full bg-[url('/images/pages/about/2.jpg')] bg-fixed bg-cover bg-center mt-20 py-20">
          <section className="max-w-[1100px] w-full px-6 sm:px-0 mx-auto ">
            <h3 className="font-['Jura'] text-gray-800 drop-shadow-sm text-3xl sm:text-4xl text-center mb-6" data-aos="fade-down">
              Our Core Values
            </h3>
            <hr className="w-20 border-t-2 border-black mx-auto mt-2" data-aos="zoom-in-up" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center font-['Barlow_Condensed'] text-base sm:text-xl mt-7">
              <div className="p-4 border border-gray-500 rounded-lg shadow-sm" data-aos="fade-up">
                <h4 className="font-semibold text-gray-700" >Compassion & Comfort</h4>
                <p className="mt-2 text-gray-600">
                  We put your comfort first at every step of your dental journey.
                </p>
              </div>
              <div className="p-4 border border-gray-500 rounded-lg shadow-sm" data-aos="fade-up">
                <h4 className="font-semibold text-gray-700" >Expert Care</h4>
                <p className="mt-2 text-gray-600">
                  Our team applies the latest dental techniques with a gentle touch.
                </p>
              </div>
              <div className="p-4 border border-gray-500 rounded-lg shadow-sm" data-aos="fade-up">
                <h4 className="font-semibold text-gray-700" >Trust & Integrity</h4>
                <p className="mt-2 text-gray-600">
                  Delivering honest, personalized care that earns your smile and
                  trust.
                </p>
              </div>
            </div>
          </section>
        </div>

          <div className="max-w-[1080px] w-[90%] sm:w-full h-auto sm:h-[130px] bg-white shadow-md rounded-4xl mt-10 sm:mt-20 mx-auto flex flex-col sm:flex-row items-center sm:justify-between justify-center text-center px-6 sm:px-10 py-6 sm:py-6">
            <p className="text-gray-700 text-2xl sm:text-3xl font-medium mb-4 sm:mb-0" data-aos="fade-down">
            Visit us on Instagrams
            </p>
            <a
                href="https://www.instagram.com/artisandentalclinicdavao/"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-down"
                className="relative flex items-center gap-x-2 px-6 sm:px-8 py-3 sm:py-4 overflow-hidden group bg-[#EA5B6F] hover:bg-[#EA5B6F  ] text-white text-xl font-semibold rounded-full transition-all ease-out duration-300"
            >
                <span
                className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 -skew-x-12 group-hover:-translate-x-50 ease"
                ></span>

                <FaInstagram className="relative text-xl" />
                <span className="relative">@ArtisanDental</span>
            </a>
        </div>

        {/* <div className="max-w-[1100px] w-full mt-10 sm:mt-20">
          <h1 className="font-['Jura'] mt-5 text-gray-800 drop-shadow-sm text-2xl sm:text-4xl text-center" data-aos="fade-up">
            See How We Made Them Smile
          </h1>
          <div className='flex justify-center gap-2 mt-5' data-aos="fade-up">
          <img src="images/pages/about/star.png" alt="star" className='w-10 sm:w-13'/>
          <img src="images/pages/about/star.png" alt="star" className='w-10 sm:w-13'/>
          <img src="images/pages/about/star.png" alt="star" className='w-10 sm:w-13'/>
          <img src="images/pages/about/star.png" alt="star" className='w-10 sm:w-13'/>
          <img src="images/pages/about/star.png" alt="star" className='w-10 sm:w-13'/>
          </div>
          <div>
          <ReviewsCarousel/>
          </div>
        </div> */}

        {/* <div className="max-w-[1100px] w-full mt-10 sm:mt-20">
          <h1 className="font-['Jura'] mt-5 text-gray-800 drop-shadow-sm text-3xl sm:text-4xl text-center" >
            Take a Tour at our Clinic
          </h1>
        </div> */}


      </div>
    </>
  )
}
