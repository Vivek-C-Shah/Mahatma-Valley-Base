import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import qoute1 from "../assets/images/qoute-1-1.png";
import team1 from "../assets/images/team-1-1.jpg";
import team2 from "../assets/images/team-1-2.jpg";
import team3 from "../assets/images/team-1-3.jpg";
import team4 from "../assets/images/team-1-4.jpg";
import team5 from "../assets/images/team-1-5.jpg";
import team6 from "../assets/images/team-1-6.jpg";

const TestimonialOne = () => {
  const params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <section className="testimonials-one testimonials-one__home-three">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            What our students <br />
            have to say
          </h2>
        </div>
        <div className="testimonials-one__carousel">
          <Swiper {...params}>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  Anaya enjoys going to school.
                </p>
                <img src={team1} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Ravi</h3>
                <p className="testimonials-one__designation">Anaya's Father</p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  Rohan loves his preschool.
                </p>
                <img src={team2} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Sunita</h3>
                <p className="testimonials-one__designation">Rohan's Mother</p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  Aarav's learning has improved.
                </p>
                <img src={team3} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Priya</h3>
                <p className="testimonials-one__designation">
                  Aarav's Elder Sister
                </p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  Kavya adores her teachers.
                </p>
                <img src={team4} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Deepak</h3>
                <p className="testimonials-one__designation">
                  Student's Father
                </p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  Ishaan is excited for school.
                </p>
                <img src={team5} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Meena</h3>
                <p className="testimonials-one__designation">
                  Student's Mother
                </p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  Aditi's progress is noticeable.
                </p>
                <img src={team1} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Anil</h3>
                <p className="testimonials-one__designation">
                  Student's elder brother
                </p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  Riya is always excited for school.
                </p>
                <img src={team2} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Rajesh</h3>
                <p className="testimonials-one__designation">
                  Student's Father
                </p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  Arjun has learned so much.
                </p>
                <img src={team3} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Sunita</h3>
                <p className="testimonials-one__designation">
                  Student's Mother
                </p>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialOne;
