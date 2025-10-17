import React from "react";
import loaderGif from "../../assets/loader.gif";

export default function Preloader() {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[9999]">
      <img
        src={loaderGif}
        alt="Loading..."
        className="w-[150px] h-[150px] animate-pulse"
      />
    </div>
  );
}
