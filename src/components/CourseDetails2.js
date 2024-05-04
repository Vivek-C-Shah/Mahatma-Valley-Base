import React from "react";
import team1 from "../assets/images/logo.png";
import courseD1 from "../assets/images/course-1-2 (Custom).jpg";
import lcImage1 from "../assets/images/course-1-1.jpg";
import lcImage3 from "../assets/images/course-1-3.jpg";
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
                  <h2 className="course-details__title">Playgroup</h2>
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
                  <h4>Spark Curiosity Through Play (Age 2 years and above)</h4>
                  <br />
                  <section className="course-details__tab-text" id="overview">
                    <h4>Overview:</h4>
                    <uL>
                      <li>
                        <b>Focus:</b> This program creates a warm and nurturing
                        environment where toddlers can explore, discover, and
                        build social connections through play.
                      </li>
                      <li>
                        <b>Learning Through Play:</b> Our playgroup curriculum
                        is designed around the idea that play is the most
                        effective way for young children to learn. We provide a
                        variety of engaging activities that stimulate all five
                        senses.
                      </li>
                    </uL>
                  </section>
                  <br />
                  <section className="course-details__tab-text" id="curriculum">
                    <h4>Curriculum:</h4>
                    <ul>
                      <li>
                        <b>Sensory Exploration:</b> We offer a variety of
                        materials and activities that allow children to explore
                        textures, sounds, colors, and shapes. This helps them
                        develop their cognitive skills and understanding of the
                        world around them.{" "}
                      </li>
                      <li>
                        <b>Social Interaction:</b> Through small group
                        activities and playtime, children learn to share, take
                        turns, and communicate with their peers. This fosters
                        social skills and emotional development.
                      </li>
                      <li>
                        <b>Language Development:</b> We incorporate songs,
                        rhymes, and simple stories into our daily routine. This
                        helps children develop their listening skills,
                        vocabulary, and early communication skills.
                      </li>
                      <li>
                        <b>Fine and Gross Motor Skills:</b> Playgroup activities
                        like building with blocks, playing with dough, and
                        running around outdoors help children develop the small
                        and large muscle movements they need for everyday life.
                      </li>
                    </ul>
                  </section>
                  <br />
                  <section className="course-details__tab-text" id="outcomes">
                    <h4>Outcomes:</h4>
                    <ul>
                      <li>Develop a love for learning and exploration.</li>
                      <li>
                        Build strong social skills and emotional intelligence.
                      </li>
                      <li>
                        Enhance their communication and language abilities.
                      </li>
                      <li>Improve fine and gross motor skills.</li>
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
