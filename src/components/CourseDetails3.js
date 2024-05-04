import React from "react";
import team1 from "../assets/images/logo.png";
import team2 from "../assets/images/team-1-1.jpg";
import courseD1 from "../assets/images/course-1-3 (Custom).jpg";
import lcImage1 from "../assets/images/course-1-1.jpg";
import lcImage2 from "../assets/images/course-1-2.jpg";
import lcImage4 from "../assets/images/course-1-4.jpg";
import lcImage5 from "../assets/images/course-1-5.jpg";
import { Link } from "gatsby";

const CourseDetails = () => {
  return (
    <section className="course-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="course-details__content">
              <p className="course-details__author">
                <img src={team1} alt="" />
                by <a href="#none">Mahatma Valley</a>
              </p>

              <div className="course-details__top">
                <div className="course-details__top-left">
                  <h2 className="course-details__title">Nursery</h2>
                </div>
                <div className="course-details__top-right">
                  <a href="#none" className="course-one__category">
                    Foundation{" "}
                  </a>
                </div>
              </div>
              <div className="course-one__image">
                <img src={courseD1} alt="" />
              </div>

              <ul className="course-details__tab-navs list-unstyled nav nav-tabs">
                <li>
                  <a
                    className="active"
                    role="tab"
                    data-toggle="tab"
                    href="#overview"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    role="tab"
                    data-toggle="tab"
                    href="#curriculum"
                  >
                    Curriculum
                  </a>
                </li>
                <li>
                  <a className="" role="tab" data-toggle="tab" href="#outcomes">
                    Outcomes
                  </a>
                </li>
              </ul>
              <div className="tab-content course-details__tab-content ">
                <div
                  className="tab-pane show active  animated fadeInUp"
                  role="tabpanel"
                  id="overview"
                >
                  <h4>Building a Strong Foundation (Age 3 years and above)</h4>
                  <br />
                  <section className="course-details__tab-text" id="overview">
                    <h4>Overview:</h4>
                    <ul>
                      <li>
                        <b>Focus:</b> Our Nursery program lays the groundwork
                        for future academic success by nurturing a love for
                        learning in a play-based environment.
                      </li>
                      <li>
                        <b>Holistic Development: </b>We focus on a holistic
                        approach to development, addressing children's
                        intellectual, social, emotional, physical, and creative
                        needs.
                      </li>
                    </ul>
                  </section>
                  <br />
                  <section className="course-details__tab-text" id="curriculum">
                    <h4>Curriculum:</h4>
                    <ul>
                      <li>
                        <b> Pre-Literacy Skills:</b> We introduce children to
                        letters, sounds, and basic concepts like rhyming and
                        letter recognition through interactive activities like
                        story time, songs, and games.
                      </li>
                      <li>
                        <b> Early Math: </b>Children learn to count, sort, and
                        recognize shapes through play-based activities that make
                        learning math fun and engaging.
                      </li>
                      <li>
                        <b>Creative Expression:</b> We provide opportunities for
                        children to express themselves creatively through art
                        projects, music, and dramatic play. This fosters
                        imagination and problem-solving skills.{" "}
                      </li>
                      <li>
                        <b>Social and Emotional Development:</b> Nursery
                        provides a safe and supportive environment where
                        children can learn to share, cooperate, and manage their
                        emotions through interaction with peers and teachers.
                      </li>
                      <li>
                        <b>Introduction to Indian Culture:</b> We integrate
                        stories, festivals, and art forms from Indian culture
                        into our curriculum, fostering a sense of identity and
                        appreciation for their heritage.
                      </li>
                    </ul>
                  </section>
                  <br />
                  <section className="course-details__tab-text" id="outcomes">
                    <h4>Outcomes:</h4>
                    <p>Our Nursery program helps children: </p>
                    <ul>
                      <li>Develop strong language and communication skills.</li>
                      <li>Gain a foundation for reading and writing. </li>
                      <li>
                        Develop basic math concepts in a fun and interactive
                        way.{" "}
                      </li>
                      <li>Build social skills and emotional intelligence.</li>
                      <li>Explore and celebrate their Indian heritage.</li>
                    </ul>
                  </section>
                </div>
                <div
                  className="tab-pane  animated fadeInUp"
                  role="tabpanel"
                  // id="curriculum"
                >
                  <p className="course-details__tab-text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since.
                  </p>
                  <br />
                  <ul className="course-details__curriculum-list list-unstyled">
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                          <i className="fas fa-play"></i>
                        </div>
                        <a href="#none">Introduction to Editing</a>
                        <span>Preview</span>
                      </div>
                      <div className="course-details__curriculum-list-right">
                        16 minutes
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon file-icon">
                          <i className="fas fa-folder"></i>
                        </div>
                        <a href="#none">Basic Editing Technology</a>
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon quiz-icon">
                          <i className="fas fa-comment"></i>
                        </div>
                        <a href="#none">Quiz</a>
                      </div>
                      <div className="course-details__curriculum-list-right">
                        6 questions
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="course-details__list mt-5">
              <h2 className="course-details__list-title">Other Programs</h2>

              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src={lcImage1} alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#none">
                    by <span>Mahatma Valley</span>
                  </a>
                  <h3>
                    {" "}
                    <Link to="/course-details">Toddler Program</Link>
                  </h3>
                </div>
              </div>

              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src={lcImage2} alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#none">
                    by <span>Mahatma Valley</span>
                  </a>
                  <h3>
                    {" "}
                    <Link to="/course-details-two">Playgroup</Link>
                  </h3>
                </div>
              </div>

              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src={lcImage4} alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#none">
                    by <span>Mahatma Valley</span>
                  </a>
                  <h3>
                    {" "}
                    <Link to="/course-details-four">
                      Junior Kindergarten(Jr.KG)
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src={lcImage5} alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#none">
                    by <span>Mahatma Valley</span>
                  </a>
                  <h3>
                    {" "}
                    <Link to="/course-details-five">
                      Senior Kindergarten (Sr.KG)
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
