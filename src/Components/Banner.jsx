import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDarkTheme = document.documentElement.classList.contains("dark");
      setIsDark(isDarkTheme);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

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
      quote: (
        <Typewriter
          words={[
            "“Discover Hobby Groups Near You.”",
            "“Explore. Engage. Enjoy.”",
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      ),
      author: "HobbyHub Community",
      image: "https://i.ibb.co/LX423w05/linli-xu-GDo-Ehs8p-FWo-unsplash.jpg",
    },
    {
      quote: "“Turn your passion into a thriving community.”",
      author: "HobbyHub",
      image: "https://i.ibb.co/N2x5bCMT/herlambang-tinasih-gusti-e-C7hs-HKbg8-Q-unsplash.jpg",
    },
    {
      quote: "“Join circles that share your heartbeat – paint, game, cook!”",
      author: "Your Next Group",
      image: "https://i.ibb.co/KxHqKN44/duy-pham-Cecb0-8-Hx-o-unsplash.jpg",
    },
  ];

  return (
    <div className="w-11/12 mx-auto mt-6">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div
              className={`min-h-[400px] md:min-h-[550px] flex items-center justify-center bg-cover bg-center rounded-xl overflow-hidden shadow-md relative`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div
                className={`absolute inset-0 ${
                  isDark ? "bg-base bg-opacity-60" : " bg-opacity-40"
                } z-0`}
              ></div>

              {/* Text */}
              <div className="relative z-10 text-center px-6 md:px-12 text-base max-w-3xl mx-auto">
                <Fade>
                  <h2 className="text-xl md:text-3xl lg:text-4xl italic font-semibold leading-snug mb-4">
                    {slide.quote}
                  </h2>
                  <p className="text-sm md:text-base font-light">
                    — {slide.author}
                  </p>
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
