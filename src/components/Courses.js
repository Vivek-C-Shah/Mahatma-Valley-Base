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
          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course2} alt="" />
                <i className="far fa-heart"></i>
              </div>
              <div className="course-one__content">
                <a href="#none" className="course-one__category">
                  It &amp; Software
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
          <div className="col-lg-4">
            <div className="course-one__single">
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
          <div className="col-lg-4">
            <div className="course-one__single">
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
          <div className="col-lg-4">
            <div className="course-one__single">
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
          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course6} alt="" />
                <i className="far fa-heart"></i>
              </div>
              <div className="course-one__content">
                <a href="#none" className="course-one__category">
                  Health &amp; Fitness
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
        </div>
        <div className="post-pagination">
          <a href="#none">
            <i className="fa fa-angle-double-left"></i>
          </a>
          <a className="active" href="#none">
            1
          </a>
          <a href="#none">2</a>
          <a href="#none">3</a>
          <a href="#none">4</a>
          <a href="#none">
            <i className="fa fa-angle-double-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
