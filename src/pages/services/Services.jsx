import styles from './Services.module.css';

export default function Services(){

    return(
        <>
            <div className="w-full flex flex-col items-center justify-start bg-gray-100 pb-[100px]">
                <div className=" relative w-full max-h-[800px] overflow-hidden">
                            <img
                            src="/images/pages/services/bg/1.jpg"
                            loading="eager"
                            fetchPriority="high"
                            alt="background"
                            className="
                                object-cover object-[50%_100%]  w-full  blur-[1px] lg:blur-[1.6px]
                                h-[550px] sm:h-[600px] md:h-[600px] lg:h-[500px]                             "
                            />
                </div>
            </div>
        </>
    );
}