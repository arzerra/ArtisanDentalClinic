import React, { useEffect } from "react";

const BentoInsta = () => {
  const posts = [
    "https://www.instagram.com/p/DOPP1j_DHSD/",
    "https://www.instagram.com/p/DNiOfKjSlZz/",
    "https://www.instagram.com/p/DJVGwFut_xE/",
  ];

  useEffect(() => {
    // Load Instagram embed script only once
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Re-process embeds on render
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
      {posts.map((link, index) => (
        <div
          key={index}
          className="rounded-2xl shadow-md bg-white overflow-hidden 
                     transition-transform transform hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="aspect-[4/5] flex items-center justify-center">
            <blockquote
              className="instagram-media w-full h-full"
              data-instgrm-permalink={link}
              data-instgrm-version="14"
              style={{
                background: "#fff",
                border: 0,
                borderRadius: "12px",
                width: "100%",
                height: "100%",
              }}
            ></blockquote>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BentoInsta;
