import SmsForm from "./components/smsForm.jsx";

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
                    object-cover object-[50%_53%] w-full blur-[0.5px] lg:blur-[0.5px]
                    h-[350px] sm:h-[600px] md:h-[600px] lg:h-[350px]
                    "
                />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/10 to-black/40"></div>
            </div>

            <div  className="max-w-[1200px] mt-10 sm:mt-10 w-full px-6 px-10 py-0">
            <h2 className="text-3xl sm:text-5xl font-semibold text-center mt-4">Appointment Guidelines</h2>
            <hr className="w-20 border-t-2 border-black mx-auto mt-5"/>
                <ul className="text-gray-600 text-sm grid grid-cols-1 gap-10 place-items-center mt-10">

                <li className="max-w-[1100px] w-full flex justify-center items-center py-8 gap-4 bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition">
                    <div className="flex flex-col w-full">
                        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mt-3 mb-10">
                        SMS FORM
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div className="flex flex-col items-start text-left mt-0 sm:mt-3 mx-10">
                                <img src="/images/pages/appointment/bg/sms.svg" alt="Appointment" className="w-50 sm:w-100 h-50 sm:h-100 mx-auto"/>
                            </div>
                            
                            <div className="flex flex-col justify-center text-sm sm:text-xl text-left">
                                <SmsForm/>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="max-w-[1100px] w-full flex justify-center items-center py-8 gap-4 bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition">
                <div className="flex flex-col w-full">
                    <h1 className="text-lg sm:text-3xl font-semibold text-gray-900 text-center mt-3">
                    CALL US
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center">

                        <div className="flex flex-col items-start  text-2xl text-left mt-3 mx-10 order-2 sm:order-1">
                            <h3 className="text-gray-600 mt-1 text-start items-left">
                            Name: 
                            </h3>
                            <h3 className="text-gray-600 mt-1 text-start items-left">
                            Contact Number: 
                            </h3>
                            <h3 className="text-gray-600 mt-1 text-start items-left">
                            Preferred Date: 
                            </h3>
                            <h3 className="text-gray-600 mt-1 text-start items-left">
                            Preferred Time Slot: (10am - 12pm / 1pm - 5pm) 
                            </h3>
                            <h3 className="text-gray-600 mt-1 text-start items-left">
                            Type of Service Need: asdfasdf
                            </h3>
                        </div>

                        <div className="flex flex-col items-start text-left mt-3 mx-10 order-1 sm:order-2">
                            <img src="/images/pages/appointment/bg/call2.svg" alt="Appointment" className="w-60 sm:w-100 h-60 sm:h-100 mx-auto"/>
                        </div>

                    </div>
                </div>
                </li>
            </ul>
        </div>

        </div>
        </>
    )
}