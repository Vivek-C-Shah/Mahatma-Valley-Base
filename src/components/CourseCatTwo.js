import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
// import "../assets/images/playground.png";
//import playground image as playground
import playground from "../assets/images/playground.png";
import farm from "../assets/images/farm.png";
import audi from "../assets/images/audi.png";
import kitchen from "../assets/images/kitchen.png";
import pool from "../assets/images/pool.png";
import park from "../assets/images/park.png";
import library from "../assets/images/library.png";
import gadget from "../assets/images/gadget.png";
import sports from "../assets/images/sports.png";
const CourseCatTwo = () => {
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <section className="course-category-two">
      <div className="container text-center">
        <div className="inner-container">
          <h2>Facilities</h2>
          <div className="course-category-two__carousel">
            <Swiper {...params}>
              <div className="item">
                <div className="course-category-two__single color-1">
                  <div className="course-category-two__icon">
                    <a href="#none">
                      <img src={playground}></img>
                    </a>
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#none">Playground</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-2">
                  <div className="course-category-two__icon">
                    <img src={farm}></img>
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#none">Farming</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-3">
                  <div className="course-category-two__icon">
                    <i className="kipso-icon-music-player"></i>
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#none">Music Room</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-4">
                  <div className="course-category-two__icon">
                    <img src={audi}></img>
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#none">Auditorium</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-5">
                  <div className="course-category-two__icon">
                    <img src={kitchen}></img>
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#none">Kitchen</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-6">
                  <div className="course-category-two__icon">
                    <img src={pool}></img>
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#none">Pool</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-1">
                  <div className="course-category-two__icon">
                    <img src={park}></img>
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#none">Pet Park</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-2">
                  <div className="course-category-two__icon">
                    <img src={library}></img>
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#none">Library</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-3">
                  <div className="course-category-two__icon">
                    <i className="kipso-icon-music-player"></i>
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#none">Music</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-4">
                  <div className="course-category-two__icon">
                    <img src={gadget}></img>
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#none">Gadgets</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-5">
                  <div className="course-category-two__icon">
                    <img src={sports}></img>
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#none">Sports</a>
                  </h3>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCatTwo;
