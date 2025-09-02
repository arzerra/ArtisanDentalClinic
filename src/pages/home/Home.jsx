import Carousel from "./segments/Carousel.jsx";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-start bg-gray-100 pb-[100px]">
      <div className="max-w-[1100px] w-full h-auto border border-red-500">
        {/* TITLE */}
        <div className="h-[350px] mt-40">
          <h1 className="text-4xl">
            "Time Heals Everything" Except cavities, those need a dentist,
          </h1>
        </div>

        {/* <Carousel /> */}
      </div>
    </div>
  );
}
