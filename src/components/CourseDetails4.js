import React from "react";
import team1 from "../assets/images/logo.png";
import team2 from "../assets/images/team-1-1.jpg";
import courseD1 from "../assets/images/course-1-4 (Custom).jpg";
import lcImage1 from "../assets/images/course-1-1.jpg";
import lcImage2 from "../assets/images/course-1-2.jpg";
import lcImage3 from "../assets/images/course-1-3.jpg";
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
                  <h2 className="course-details__title">
                    Junior Kindergarten (Jr.kG)
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
                    Igniting a Passion for Learning (Age 4 years and above)
                  </h4>
                  <br />
                  <section
                    className="course-details__tab-text"
                    id="overview"
                    style={{ fontSize: "24px" }}
                  >
                    <h4>
                      <b>Overview:</b>
                    </h4>
                    <ul>
                      <li>
                        <b>Focus:</b> The Junior KG program builds upon the
                        foundation set in Nursery and ignites a passion for
                        learning across various subjects.
                        <li>
                          We achieve this by introducing more complex concepts
                          in a fun and engaging way, catering to different
                          learning styles and fostering a love for exploration
                          and discovery. Our curriculum aims to not only develop
                          core academic skills but also nurture a child's
                          natural curiosity and desire to understand the world
                          around them.
                        </li>
                      </li>
                    </ul>
                  </section>
                  <br />
                  <section
                    className="course-details__tab-text"
                    id="curriculum"
                    style={{ fontSize: "24px" }}
                  >
                    <h4>
                      <b>Curriculum:</b>
                    </h4>
                    <p>
                      Our curriculum offers a stimulating blend of activities
                      that cater to different learning styles:{" "}
                    </p>
                    <ul>
                      <li>
                        <b>Literacy Development:</b> Children engage in
                        activities that enhance reading comprehension, writing
                        skills, and phonics knowledge.
                      </li>
                      <li>
                        <b>Math Exploration:</b> We go beyond basic math
                        concepts and introduce addition, subtraction, and more
                        complex shapes in a fun and engaging way.
                      </li>
                      <li>
                        <b>Science Discovery: </b>Junior KG students participate
                        in hands-on science experiments that spark curiosity and
                        encourage exploration of the natural world.
                      </li>
                      <li>
                        <b>Creative Expression: </b>We provide ample
                        opportunities for children to express themselves
                        creatively through art, music, and storytelling
                        activities.
                      </li>
                      <li>
                        <b>Celebrating Indian Culture:</b> Our curriculum
                        continues to integrate elements of Indian culture,
                        fostering a sense of belonging and cultural pride.
                      </li>
                    </ul>
                  </section>
                  <br />
                  <section
                    className="course-details__tab-text"
                    id="outcomes"
                    style={{ fontSize: "24px" }}
                  >
                    <h4>
                      <b>Outcomes:</b>
                    </h4>
                    <p>The Junior KG program helps children: </p>
                    <ul>
                      <li>Develop strong reading and writing skills.</li>
                      <li>Gain a solid foundation in math concepts.</li>
                      <li>Cultivate a love for science and exploration.</li>
                      <li>
                        Express themselves creatively and develop critical
                        thinking skills.
                      </li>
                      <li>
                        Strengthen their cultural identity and appreciation for
                        Indian heritage.
                      </li>
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
                    <Link to="/course-details-six">Daycare Program</Link>
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
