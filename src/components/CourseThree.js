import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import course1 from "../assets/images/course-1-1.jpg";
import course2 from "../assets/images/course-1-2.jpg";
import course3 from "../assets/images/course-1-3.jpg";
import course4 from "../assets/images/course-1-4.jpg";
import course5 from "../assets/images/course-1-5.jpg";
import course6 from "../assets/images/course-1-6.jpg";
import team1 from "../assets/images/team-1-1.jpg";
import team2 from "../assets/images/team-1-2.jpg";
import team3 from "../assets/images/team-1-3.jpg";
import team4 from "../assets/images/team-1-4.jpg";
import team5 from "../assets/images/team-1-5.jpg";
import team6 from "../assets/images/team-1-6.jpg";

import { Link } from "gatsby";

const CourseThree = () => {
  const params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return (
    <div>
      <section className="course-one__top-title home-three">
        <div className="container">
          <div className="block-title">
            <h2 className="block-title__title">
              Explore our <br />
              popular courses
            </h2>
          </div>
        </div>
      </section>
      <section className="course-one course-one__teacher-details home-three">
        <div className="container">
          <div className="course-one__carousel">
            <Swiper {...params}>
              <div className="item">
                <div className="course-one__single color-1">
                  <div className="course-one__image">
                    <img src={course1} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      development
                    </a>
                    <div className="course-one__admin">
                      <img src={team1} alt="" />
                      by <Link to="/teacher-details">Lou Guerrero</Link>
                    </div>
                    <h2 className="course-one__title">
                      <Link to="/course-details">New react bootcamp</Link>
                    </h2>
                    <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div>
                    <a href="#none" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-2">
                  <div className="course-one__image">
                    <img src={course2} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      It & Software
                    </a>
                    <div className="course-one__admin">
                      <img src={team2} alt="" />
                      by <Link to="/teacher-details">Cora Diaz</Link>
                    </div>
                    <h2 className="course-one__title">
                      <Link to="/course-details">Improve editing sk</Link>
                    </h2>
                    <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div>
                    <a href="#none" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-3">
                  <div className="course-one__image">
                    <img src={course3} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      marketing
                    </a>
                    <div className="course-one__admin">
                      <img src={team3} alt="" />
                      by <Link to="/teacher-details">Ernest Rodriquez</Link>
                    </div>
                    <h2 className="course-one__title">
                      <Link to="/course-details">Basics of photogra</Link>
                    </h2>
                    <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div>
                    <a href="#none" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-4">
                  <div className="course-one__image">
                    <img src={course4} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      Photography
                    </a>
                    <div className="course-one__admin">
                      <img src={team4} alt="" />
                      by <Link to="/teacher-details">Katherine Collins</Link>
                    </div>
                    <h2 className="course-one__title">
                      <Link to="/course-details">Healthy workout ti</Link>
                    </h2>
                    <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div>
                    <a href="#none" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-5">
                  <div className="course-one__image">
                    <img src={course5} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      marketing
                    </a>
                    <div className="course-one__admin">
                      <img src={team5} alt="" />
                      by <Link to="/teacher-details">Isabella Stanley</Link>
                    </div>
                    <h2 className="course-one__title">
                      <Link to="/course-details">Affiliate bootcamp</Link>
                    </h2>
                    <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div>
                    <a href="#none" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-6">
                  <div className="course-one__image">
                    <img src={course6} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      Health & Fitness
                    </a>
                    <div className="course-one__admin">
                      <img src={team6} alt="" />
                      by <Link to="/teacher-details">Katherine Collins</Link>
                    </div>
                    <h2 className="course-one__title">
                      <Link to="/course-details">Healthy workout ti</Link>
                    </h2>
                    <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div>
                    <a href="#none" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-1">
                  <div className="course-one__image">
                    <img src={course1} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      development
                    </a>
                    <div className="course-one__admin">
                      <img src={team1} alt="" />
                      by <Link to="/teacher-details">Lou Guerrero</Link>
                    </div>
                    <h2 className="course-one__title">
                      <Link to="/course-details">New react bootcamp</Link>
                    </h2>
                    <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div>
                    <a href="#none" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-2">
                  <div className="course-one__image">
                    <img src={course2} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      It & Software
                    </a>
                    <div className="course-one__admin">
                      <img src={team2} alt="" />
                      by <Link to="/teacher-details">Cora Diaz</Link>
                    </div>
                    <h2 className="course-one__title">
                      <Link to="/course-details">Improve editing sk</Link>
                    </h2>
                    <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div>
                    <a href="#none" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-3">
                  <div className="course-one__image">
                    <img src={course3} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      marketing
                    </a>
                    <div className="course-one__admin">
                      <img src={team3} alt="" />
                      by <Link to="/teacher-details">Ruth Becker</Link>
                    </div>
                    <h2 className="course-one__title">
                      <Link to="/course-details">Marketing strategi</Link>
                    </h2>
                    <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div>
                    <a href="#none" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CourseThree;
