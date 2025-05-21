import React from "react";
import Slider from "react-slick";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const isDark = document.documentElement.classList.contains("dark");

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
  };

  const slides = [
    {
      title: (
        <Typewriter
          words={["Discover Hobby Groups Near You", "Explore. Engage. Enjoy."]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      ),
      description: "Connect with like-minded people who share your passion.",
      image: "https://i.ibb.co/LX423w05/linli-xu-GDo-Ehs8p-FWo-unsplash.jpg",
    },
    {
      title: "Turn Your Passion into Community",
      description: "Start a group for your favorite hobby and meet regularly.",
      image: "https://i.ibb.co/N2x5bCMT/herlambang-tinasih-gusti-e-C7hs-HKbg8-Q-unsplash.jpg",
    },
    {
      title: "Join Exciting Hobby Circles",
      description: "Groups like painting, gaming, running, cooking, and more!",
      image: "https://i.ibb.co/KxHqKN44/duy-pham-Cecb0-8-Hx-o-unsplash.jpg",
    },
  ];

return (
  <div className="w-11/12 mx-auto mt-4">
    <Slider {...settings}>
      {slides.map((slide, idx) => (
        <div key={idx}>
          <div
            className={`min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-cover bg-center ${
              isDark ? "bg-gray-900" : "bg-white"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-gray-400  bg-opacity-60 rounded-lg px-4 md:px-10 py-6 max-w-4xl w-full mx-4 md:mx-8 text-center text-white">
              <Fade>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg">{slide.description}</p>
              </Fade>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);
};

export default Banner;
