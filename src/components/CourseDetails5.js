import React from "react";
import team1 from "../assets/images/logo.png";
import team2 from "../assets/images/team-1-1.jpg";
import courseD1 from "../assets/images/course-1-5 (Custom).jpg";
import lcImage1 from "../assets/images/course-1-1.jpg";
import lcImage2 from "../assets/images/course-1-2.jpg";
import lcImage3 from "../assets/images/course-1-3.jpg";
import lcImage4 from "../assets/images/course-1-4.jpg";
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
                  <h2 className="course-details__title">
                    Senior Kindergarten (Sr.KG)
                  </h2>
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
                  <h4>
                    Preparing Confident Learners for Kindergarten (Age 5 years
                    and above)
                  </h4>
                  <br />
                  <section className="course-details__tab-text" id="overview">
                    <h4>Overview:</h4>
                    <p>
                      <b>Focus:</b> Our Senior KG program bridges the gap
                      between preschool and kindergarten. We provide a
                      curriculum that equips children with the academic,
                      social-emotional, and life skills they need to thrive in
                      the next stage of their education. This program focuses on
                      building confidence and fostering a sense of independence
                      in preparation for a smooth transition.
                    </p>
                  </section>
                  <br />
                  <section className="course-details__tab-text" id="curriculum">
                    <h4>Curriculum:</h4>
                    <ul>
                      <li>
                        <b>Advanced Literacy:</b> Children delve deeper into
                        reading comprehension, mastering phonics sounds and
                        progressing to more complex stories and writing
                        exercises.
                      </li>
                      <li>
                        <b> Math Mastery:</b> We solidify math concepts like
                        multiplication and simple division (optional) through
                        engaging activities and problem-solving exercises.
                      </li>
                      <li>
                        <b>Science Exploration:</b> Senior KG students take
                        their scientific curiosity to the next level with
                        in-depth experiments and projects that encourage
                        critical thinking and a deeper understanding of the
                        world around them.
                      </li>
                      <li>
                        <b>Social-Emotional Development:</b> We provide
                        opportunities for children to develop leadership skills,
                        conflict resolution techniques, and emotional regulation
                        through group discussions, role-playing activities, and
                        social interactions.
                      </li>
                      <li>
                        <b>Preparing for Kindergarten:</b> We help children get
                        acclimated to the structure and expectations of a
                        kindergarten classroom by incorporating routines,
                        independent learning activities, and group
                        presentations.
                      </li>
                    </ul>
                  </section>
                  <br />
                  <section className="course-details__tab-text" id="outcomes">
                    <h4>Outcomes:</h4>
                    <p>The Senior KG program helps children:</p>
                    <ul>
                      <li>
                        Develop strong reading fluency and advanced writing
                        skills.
                      </li>
                      <li>
                        Master foundational math concepts and explore more
                        advanced topics.
                      </li>
                      <li>
                        Cultivate a deeper understanding of science and the
                        scientific method.
                      </li>
                      <li>
                        Gain valuable social-emotional skills for navigating
                        kindergarten and beyond.
                      </li>
                      <li>
                        Develop basic computer literacy skills (optional
                        program).
                      </li>
                      <li>Feel confident and prepared for the transition.</li>
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

          <div className="col-lg-4 mt-5">
            <div className="course-details__list">
              <h2 className="course-details__list-title">More Programs</h2>

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
                  <img src={lcImage3} alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#none">
                    by <span>Mahatma Valley</span>
                  </a>
                  <h3>
                    {" "}
                    <Link to="/course-details-three">Nursery</Link>
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
                      Junior Kindergarten (Jr.KG)
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
