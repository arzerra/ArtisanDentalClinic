import Carousel from "./components/Carousel.jsx";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-start bg-gray-100 pb-[100px]">
        {/* Background */}
<div className="w-full max-h-[200px] overflow-hidden">
  <img
    src="/images/pages/home/bg/1.jpg"
    alt="background"
    className="w-full h-[200px] object-cover"
  />
</div>


      <div className="max-w-[1100px] w-full h-auto">
        {/* TITLE */}
        <div className="container h-[350px] mt-40">
          <h1 className="text-4xl text-center">
            "Time Heals Everything" Except cavities, those need a dentist,
          </h1>
        </div>

        {/* <Carousel /> */}
      </div>
    </div>
  );
}
