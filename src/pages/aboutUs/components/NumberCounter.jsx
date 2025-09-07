import React from 'react'
import CountUp from 'react-countup'

function NumberCounter() {
  return (
    <>
        {/* bg-[url('/images/pages/about/bg/3.jpg')] bg-cover bg-center */}
      <div className="font-['Barlow_Condensed'] text-gray-700 py-12 mt-20">
        <div className="max-w-[1100px] w-full mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center">
                <p className='text-5xl'>
                <CountUp 
                end={1} 
                duration={3} 
                enableScrollSpy={true} 
                scrollSpyOnce={true}/>
                </p>    
                <p className='text-lg mt-1'>Expert Dentist</p>    
            </div >
            <div className="flex flex-col items-center justify-center">
                <p className='text-5xl'>
                <CountUp 
                end={7} 
                duration={3} 
                enableScrollSpy={true} 
                scrollSpyOnce={true}/>
                </p>     
                <p className='text-lg mt-1'>Years in Service</p>    
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='text-5xl'>
                <CountUp 
                start={0} 
                end={3} 
                duration={3} 
                enableScrollSpy={true} 
                scrollSpyOnce={true}/>
                </p>    
                <p className='text-lg mt-1'>Friendly Staff</p>    
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='text-5xl'>
                <CountUp 
                end={1800}
                separator=','
                suffix='+' 
                duration={3} 
                enableScrollSpy={true} 
                scrollSpyOnce={true}/>
                </p>     
                <p className='text-lg mt-1'>Satisfied Patients</p>    
            </div>
        </div>
      </div>
    </>
  )
}

export default NumberCounter
