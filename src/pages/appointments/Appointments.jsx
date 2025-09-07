import SmsForm from "./components/smsForm.jsx";
import { FaFacebook   } from "react-icons/fa";


export default function Appointments(){
    return(
        <>
        <div className="w-full flex flex-col items-center justify-start bg-gray-100 pb-[100px]">
            <div className="relative w-full max-h-[900px] overflow-hidden">
                <img
                    src="/images/pages/appointment/bg/1.jpg"
                    loading="eager"
                    fetchPriority="high"
                    alt="background"
                    className="
                    object-cover object-[50%_53%] w-full blur-[0.7px]
                    h-[350px] sm:h-[600px] md:h-[600px] lg:h-[350px]
                    "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/10 to-black/40"></div>
                </div>

                <div  className="max-w-[1200px] mt-10 sm:mt-10 w-full px-6 px-10 py-0">
                <h2 className="font-['Barlow_Condensed'] text-gray-800 text-4xl sm:text-5xl font-semibold text-center mt-4" data-aos="zoom-in-up" >Appointment Guidelines</h2>
                <hr className="w-20 border-t-2 border-black mx-auto mt-5" data-aos="zoom-in-up"/>

                <ul className="font-['Quicksand'] text-gray-600 text-sm grid grid-cols-1 gap-10 place-items-center mt-10">
                    <li className="max-w-[1100px] w-full flex justify-center items-center py-8 gap-4 bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition">
                        <div className="flex flex-col w-full">
                            <h1 className="font-['Quicksand'] text-2xl sm:text-3xl font-semibold text-gray-900 text-center mt-3 mb-10" data-aos="zoom-in-up">
                            SMS FORM
                            </h1>

                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <div className="flex flex-col items-start text-left mt-0 sm:mt-3 mx-10">
                                    <img src="/images/pages/appointment/bg/sms.svg" alt="Appointment" className="w-50 sm:w-100 h-50 sm:h-100 mx-auto" data-aos="fade-up-right"/>
                                </div>
                                
                                <div className="flex flex-col justify-center text-sm sm:text-xl text-left" data-aos="fade-up-left">
                                    <SmsForm/>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="max-w-[1100px] w-full flex justify-center items-center mt-5 sm:mt-10 py-8 gap-4 bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition">
                    <div className="flex flex-col w-full">
                        <h1 className="font-['Quicksand'] text-2xl sm:text-3xl font-semibold text-gray-900 text-center mt-3" data-aos="zoom-in-up">
                        CALL US
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center">

                            <div className="w-auto sm:w-full flex flex-col mt-0 sm:mt-3 mx-5 sm:mx-10 order-2 sm:order-1" data-aos="fade-up-right">
                                
                                <div className="font-['Quicksand'] text-black text-xl sm:text-3xl text-center sm:text-start items-center sm:items-left mt-5 sm:mt-10">
                                <h3 className="mt-1">
                                To arrange your appointment, contact us through any of these numbers:
                                </h3>
                                </div>
                                <div className="text-2xl text-center items-center">
                                <h3 className="text-black mt-5 sm:mt-10">
                                SMART
                                </h3>
                                <h3 className="text-gray-600 mt-1">
                                0961-943-7592 
                                </h3>
                                <h3 className="text-black mt-5">
                                Globe
                                </h3>
                                <h3 className="text-gray-600 mt-1">
                                0917-717-5300
                                </h3>
                                </div>
                                <div className="text-gray-600 text-sm text-center items-left mt-5 sm:mt-10">
                                <h3 className="mt-1">
                                We’ll gladly assist you in arranging your preferred appointment schedule.
                                </h3>
                                </div>
                            </div>

                            <div className="flex flex-col items-start text-left mt-3 sm:-mt-3 mx-10 order-1 sm:order-2" data-aos="fade-up-left">
                                <img src="/images/pages/appointment/bg/call2.svg" alt="Appointment" className="w-60 sm:w-120 h-60 sm:h-120 mx-auto"/>
                            </div>
                        </div>
                    </div>
                    </li>
                </ul>

                <div className="w-[90%] sm:w-full max-w-[1080px] h-auto sm:h-[130px] bg-white shadow-md rounded-4xl mt-20 mx-auto flex flex-col sm:flex-row items-center sm:justify-between justify-center text-center px-6 sm:px-10 py-6 sm:py-6">
                <p className="text-gray-700 text-2xl sm:text-3xl font-medium mb-4 sm:mb-0" data-aos="fade-right">
                Follow us on Facebook
                </p>
                <a
                    href="https://www.facebook.com/iamartisandentalclinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-left"
                    className="relative flex items-center gap-x-2 px-6 sm:px-8 py-3 sm:py-4 overflow-hidden group bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold rounded-full transition-all ease-out duration-300"
                >
                    <span
                    className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 -skew-x-12 group-hover:-translate-x-40 ease"
                    ></span>
        
                    <FaFacebook className="relative text-xl" />
                    <span className="relative">@ArtisanDental</span>
                </a>
                </div>
            </div>
        </div>
        </>
    )
}