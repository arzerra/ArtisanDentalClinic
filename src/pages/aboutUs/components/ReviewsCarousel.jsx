import React from 'react';
import { FacebookEmbed } from 'react-social-media-embed';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      absolute top-1/2 right-2 -translate-y-1/2 z-10
      w-10 h-10 flex items-center justify-center
      bg-white text-black rounded-full shadow-lg
      opacity-80 hover:opacity-100 hover:bg-gray-300
      transition duration-300 ease-in-out
      hidden sm:flex
    "
  >
    <span className="text-xl font-bold">&rarr;</span>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      absolute top-1/2 left-2 -translate-y-1/2 z-10
      w-10 h-10 flex items-center justify-center
      bg-white text-black rounded-full shadow-lg
      opacity-80 hover:opacity-100 hover:bg-gray-300
      transition duration-300 ease-in-out
      hidden sm:flex
    "
  >
    <span className="text-xl font-bold">&larr;</span>
  </button>
);


function ReviewsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,       
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const posts = [
    "https://www.facebook.com/paulote88/posts/pfbid0288srnwzUrr8XgcKpxnc4rLHGjdMQEybnvrs7a9eNRwfn9hyqaVpf4TrSgUtDQb9ul",
    "https://www.facebook.com/heidemay.velez/posts/pfbid0EiEu1tReA4yj7QgpZ7mfd1Hh6KW5oCs4HTK8GqGQ5MsXCawnyA2B6fNM3LYjb4tRl",
    "https://www.facebook.com/sabeth.murphy/posts/pfbid02wY8e5g3qo89HJuWwHWdpbV1ApyYD6HuLWBUKsiKkHyvfpRbH3ZUZ8VSD5EsDPW75l",
    "https://www.facebook.com/daisymae.babiera/posts/pfbid02WRGcuKXRBn7gYQZPii4dsUYg47Rb56dAGyPGe9ss2vLZeg6hUNpAng54hDn1jzb4l"
  ];

  return (
    <div className="mt-10 max-w-[1200px] mx-auto relative overflow-hidden">
      <Slider {...settings}>
        {posts.map((url, index) => (
          <div key={index} className="flex justify-center px-4">
            <div className="w-full max-w-[400px] sm:max-w-[500px]">
              <FacebookEmbed url={url} width="100%" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ReviewsCarousel;
