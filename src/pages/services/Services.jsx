export default function Services() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-start bg-gray-100 pb-[100px]">
        <div className="relative w-full max-h-[800px] overflow-hidden">
          <img
            src="/images/pages/services/bg/2.jpg"
            loading="eager"
            fetchPriority="high"
            alt="background"
            className="
              object-cover object-[50%_10%] w-full blur-[1px] lg:blur-[5px]
              h-[350px] sm:h-[600px] md:h-[600px] lg:h-[350px]
            "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/10 to-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center pt-0 sm:pt-20">
            <h1 className="font-['Archivo_Black'] text-white text-5xl sm:text-7xl font-bold drop-shadow-lg"             
            style={{
            textShadow: '1px 1px 0px black'
            }}>
              Our Services
            </h1>
          </div>
        </div>
        
        <div className="max-w-[1100px] w-[85%] sm:w-full mt-2 sm:mt-5">
            <h1 className="font-['Barlow_Condensed'] mt-5 text-gray-500 text-xl sm:text-3xl text-justify sm:text-center" data-aos="zoom-in-up">
                At Artisan Dental, we provide comprehensive care to keep your smile healthy and confident. 
                From preventive checkups to advanced treatments, our team is here to meet your dental needs 
                with compassion and expertise.</h1>
        </div>

        <div  className="max-w-[1200px] mt-10 sm:mt-10 w-full px-6 ">

            <div id="preventive" className="scroll-mt-50 bg-white shadow-lg rounded-2xl px-10 py-10 hover:shadow-xl transition ">
            <img src="/images/icon/tooth/Preventive.png" alt="Preventive Care" className="w-25 h-25 mx-auto" data-aos="zoom-in-up"/>
            <h2 className="text-xl font-semibold text-center mt-4" data-aos="zoom-in-up">Preventive Care</h2>
            <hr className="w-20 border-t-2 border-black mx-auto mt-3" data-aos="zoom-in-up" />
                <ul className="text-gray-600 text-sm grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-start mt-10">
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <hr />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Dental Checkups & Exams
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Regular exams help detect issues early for better oral health.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 30–45 mins
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-left">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Professional Teeth Cleaning
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Removal of plaque, tartar, and stains for a healthy smile.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 45–60 mins
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Fluoride Treatments
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Application of fluoride to strengthen teeth and prevent cavities.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 10–15 mins
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-left">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Sealants
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Protective coatings applied to molars to prevent decay.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 20–30 mins per tooth
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Oral Cancer Screenings
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Quick checks for early signs of cancer in the mouth.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 5–10 mins, usually part of exam
                        </span>
                    </div>
                    </li>
                </ul>
            </div>

            <div id="restorative" className="scroll-mt-50 bg-white shadow-lg rounded-2xl px-10 py-10 hover:shadow-xl transition mt-20">
            <img src="/images/icon/tooth/Restorative.png" alt="Preventive Care" className="w-25 h-25 mx-auto" data-aos="zoom-in-up" />
            <h2 className="text-xl font-semibold text-center mt-4" data-aos="zoom-in-up">Restorative Dentistry</h2>
            <hr className="w-20 border-t-2 border-black mx-auto mt-3" data-aos="zoom-in-up" />
                <ul className="text-gray-600 text-sm grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-start mt-10">
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Fillings
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Repairing small holes in teeth with tooth-colored material.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 20–45 mins per tooth
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-left">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Crowns & bridges
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Caps or replacements to restore damaged or missing teeth.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 1–2 hrs over 2 visits
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Dentures & partials
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Removable options to replace missing teeth.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ Several visits, 2–4 weeks total
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-left">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Root canal therapy
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Treating infected tooth pulp to save the tooth.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 60–90 mins, may need 2 visits
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Dental implants
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Permanent replacements for missing teeth with titanium posts.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ Several visits over 3–6 months
                        </span>
                    </div>
                    </li>
                </ul>
            </div>

            <div id="cosmetic" className="scroll-mt-50 bg-white shadow-lg rounded-2xl px-10 py-10 hover:shadow-xl transition mt-20">
            <img src="/images/icon/tooth/Cosmetic.png" alt="Preventive Care" className="w-25 h-25 mx-auto" data-aos="zoom-in-up" />
            <h2 className="text-xl font-semibold text-center mt-4" data-aos="zoom-in-up">Cosmetic Dentistry</h2>
            <hr className="w-20 border-t-2 border-black mx-auto mt-3" data-aos="zoom-in-up" />
                <ul className="text-gray-600 text-sm grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-start mt-10">
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Teeth whitening
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Brightening stained or discolored teeth.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 60–90 mins
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-left">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Veneers
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Thin porcelain covers to enhance tooth shape and color.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 1–2 hrs over 2 visits
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Bonding
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Composite material to fix chips, gaps, or discoloration.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 30–60 mins per tooth
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-left">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Smile makeovers
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Customized treatment plan combining multiple cosmetic procedures.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ weeks to months
                        </span>
                    </div>
                    </li>
                </ul>
            </div>

            <div id="orthodontics" className="scroll-mt-50 bg-white shadow-lg rounded-2xl px-10 py-10 hover:shadow-xl transition mt-20">
            <img src="/images/icon/tooth/Orthodontics.png" alt="Preventive Care" className="w-25 h-25 mx-auto" data-aos="zoom-in-up" />
            <h2 className="text-xl font-semibold text-center mt-4" data-aos="zoom-in-up">Orthodontics</h2>
            <hr className="w-20 border-t-2 border-black mx-auto mt-3" data-aos="zoom-in-up" />
                <ul className="text-gray-600 text-sm grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-start mt-10">
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Braces
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Traditional system to straighten teeth and correct bite.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 18–24 months average
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-left">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Clear aligners
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Removable trays for discreet teeth straightening.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 12–18 months average
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Retainers
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Custom appliances to maintain teeth position after treatment.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ Worn nightly, ongoing
                        </span>
                    </div>
                    </li>
                </ul>
            </div>

            <div id="periodontal" className="scroll-mt-50 bg-white shadow-lg rounded-2xl px-10 py-10 hover:shadow-xl transition mt-20">
            <img src="/images/icon/tooth/Periodontal.png" alt="Preventive Care" className="w-25 h-25 mx-auto" data-aos="zoom-in-up" />
            <h2 className="text-xl font-semibold text-center mt-4" data-aos="zoom-in-up">Periodontal Care</h2>
            <hr className="w-20 border-t-2 border-black mx-auto mt-3" data-aos="zoom-in-up" />
                <ul className="text-gray-600 text-sm grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-start mt-10">
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Scaling & root planing
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Thorough cleaning below the gumline to treat gum disease.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 1–2 hrs
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-left">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Gum grafts
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Surgery to restore receding gums and protect teeth.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 1–2 hrs per area
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Periodontal maintenance
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Regular deep cleanings to control gum disease.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 45–60 mins every 3–4 months
                        </span>
                    </div>
                    </li>
                </ul>
            </div>

            <div id="oral" className="scroll-mt-50 bg-white shadow-lg rounded-2xl px-10 py-10 hover:shadow-xl transition mt-20">
            <img src="/images/icon/tooth/Oral.png" alt="Preventive Care" className="w-25 h-25 mx-auto" data-aos="zoom-in-up" />
            <h2 className="text-xl font-semibold text-center mt-4" data-aos="zoom-in-up">Oral Surgery</h2>
            <hr className="w-20 border-t-2 border-black mx-auto mt-3" data-aos="zoom-in-up" />
                <ul className="text-gray-600 text-sm grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-start mt-10">
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Tooth extractions
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Removal of damaged or impacted teeth.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 20–60 mins per tooth
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-left">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Dental implant surgery
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Placing implant posts in the jawbone.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 1–2 hrs per implant, plus healing time
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Bone grafting
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Rebuilding bone to support implants.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 45–90 mins, several months to heal
                        </span>
                    </div>
                    </li>
                </ul>
            </div>

            <div id="pediatric" className="scroll-mt-50 bg-white shadow-lg rounded-2xl px-10 py-10 hover:shadow-xl transition mt-20">
            <img src="/images/icon/tooth/Pediatric.png" alt="Preventive Care" className="w-25 h-25 mx-auto" data-aos="zoom-in-up" />
            <h2 className="text-xl font-semibold text-center mt-4" data-aos="zoom-in-up">Pediatric Dentistry</h2>
            <hr className="w-20 border-t-2 border-black mx-auto mt-3" data-aos="zoom-in-up" />
                <ul className="text-gray-600 text-sm grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-start mt-10">
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Child-friendly exams
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Gentle checkups designed for children’s comfort.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 20–30 mins
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-left">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Fluoride & sealants for kids
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Preventive treatments to protect young teeth.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 15–30 mins
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Space maintainers
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Devices to hold space for permanent teeth if baby teeth are lost early.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 30–45 mins
                        </span>
                    </div>
                    </li>
                </ul>
            </div>

            <div id="emergency" className="scroll-mt-50 bg-white shadow-lg rounded-2xl px-10 py-10 hover:shadow-xl transition mt-20">
            <img src="/images/icon/tooth/Emergency.png" alt="Preventive Care" className="w-25 h-25 mx-auto" data-aos="zoom-in-up" />
            <h2 className="text-xl font-semibold text-center mt-4" data-aos="zoom-in-up">Emergency Dentistry</h2>
            <hr className="w-20 border-t-2 border-black mx-auto mt-3" data-aos="zoom-in-up" />
                <ul className="text-gray-600 text-sm grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-start mt-10">
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Toothache relief
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Fast care to ease pain and identify the cause.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 30–60 mins
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-left">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Broken or chipped tooth
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Repair with bonding, crown, or veneer depending on severity.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 30–90 mins
                        </span>
                    </div>
                    </li>
                    <li className="max-w-[520px] w-full flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition" data-aos="zoom-in-right">
                    <img
                        src="/images/icon/tooth/general.png"
                        alt="Preventive Care"
                        className="w-20 h-20 sm:w-25 sm:h-25 object-contain mt-5 sm:mt-1"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                        Dental trauma care
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                        Emergency treatment for knocked-out or injured teeth.
                        </p>
                        <span className="text-[#EEE6CA]-600 font-medium text-sm mt-2">
                        ⏱ 60 mins, varies by injury
                        </span>
                    </div>
                    </li>
                </ul>
            </div>

        <div className="max-w-[1100px] w-full mt-2 sm:mt-10">
            <h1 className="font-['M_PLUS_Rounded_1c'] mt-10 text-gray-800 text-md sm:text-xl text-center sm:text-center" data-aos="zoom-in-up">
                The times listed are approximate and may vary depending on each patient’s needs.</h1>
        </div>

        </div>
      </div>
    </>
  );
}
