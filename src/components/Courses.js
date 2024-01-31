import React from "react";
import { Link } from "gatsby";
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

const Courses = () => {
  return (
    <section className="course-one course-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course1} alt="" />
              </div>
              <div className="course-one__content">
                <a href="#none" className="course-one__category">
                  Foundation{" "}
                </a>
                <div className="course-one__admin">
                  <img src={team1} alt="" />
                  by <Link to="/teacher-details">Mahatma Valley</Link>
                </div>
                <h2 className="course-one__title">
                  <Link to="/course-details">Primary Year Program</Link>
                </h2>
                <Link to="/course-details" className="course-one__link">
                  See Preview
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course2} alt="" />
              </div>
              <div className="course-one__content">
                <a href="#none" className="course-one__category">
                  Early Learning
                </a>
                <div className="course-one__admin">
                  <img src={team2} alt="" />
                  by <Link to="/teacher-details">Mahatma Valley</Link>
                </div>
                <h2 className="course-one__title">
                  <Link to="/course-details-two">Mom &amp; Tot Program</Link>
                </h2>
                <Link to="/course-details-two" className="course-one__link">
                  See Preview
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course3} alt="" />
                <i className="far fa-heart"></i>
              </div>
              <div className="course-one__content">
                <a href="#none" className="course-one__category">
                  Growth &amp; Joy
                </a>
                <div className="course-one__admin">
                  <img src={team3} alt="" />
                  by <Link to="/teacher-details">Mahatma Valley</Link>
                </div>
                <h2 className="course-one__title">
                  <Link to="/course-details-three">Day Care Program</Link>
                </h2>
                <Link to="/course-details-three" className="course-one__link">
                  See Preview
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
