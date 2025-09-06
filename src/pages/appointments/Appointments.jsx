
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
                    object-cover object-[50%_10%] w-full blur-[1px] lg:blur-[5px]
                    h-[350px] sm:h-[600px] md:h-[600px] lg:h-[350px]
                    "
                />
            </div>
        </div>
        </>
    )
}