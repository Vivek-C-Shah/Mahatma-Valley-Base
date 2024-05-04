import React from "react";
import team1 from "../assets/images/team-1-1.jpg";
import team2 from "../assets/images/team-1-1.jpg";
import courseD1 from "../assets/images/course-d-1.jpg";
import lcImage1 from "../assets/images/lc-1-1.jpg";
import lcImage2 from "../assets/images/lc-1-2.jpg";
import lcImage3 from "../assets/images/lc-1-3.jpg";
import { Link } from "gatsby";

const CourseDetails = () => {
  return (
    <section className="course-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="course-details__content">
              <ul className="course-details__tab-navs list-unstyled nav nav-tabs">
                <li style={{ width: "25%", textAlign: "center" }}>
                  <a
                    className="active  "
                    role="tab"
                    data-toggle="tab"
                    href="#overview"
                  >
                    About Us
                  </a>
                </li>
                <li style={{ width: "25%", textAlign: "center" }}>
                  <a className="" role="tab" data-toggle="tab" href="#vision">
                    Vision
                  </a>
                </li>
                <li style={{ width: "25%", textAlign: "center" }}>
                  <a className="" role="tab" data-toggle="tab" href="#outcomes">
                    Curriculum Structure
                  </a>
                </li>
                <li style={{ width: "25%", textAlign: "center" }}>
                  <a
                    className=""
                    role="tab"
                    data-toggle="tab"
                    href="#Student Life"
                  >
                    Student Life
                  </a>
                </li>
              </ul>
              <div className="tab-content course-details__tab-content ">
                <div
                  className="tab-pane show active  animated fadeInUp"
                  role="tabpanel"
                >
                  <section
                    className="course-details__tab-text pt-2"
                    id="overview"
                  >
                    <h4 className="pb-3 ">
                      <b>
                        <u>About Us:</u>
                      </b>
                    </h4>
                    <p>
                      Welcome to Mahatma Valley, an Innovative Initiative of IIM
                      Ahmedabad Alumni, designed for children's growth and
                      learning life skills. At Mahatma Valley Innovative
                      Preschool, we focus on nurturing young minds through
                      engaging and thoughtful activities.
                    </p>
                    <p>
                      Our approach is simple yet effective, ensuring that
                      parents can easily understand and support their child's
                      learning journey. We believe in a student-centered
                      approach, drawing from research- backed educational
                      methods to create a learning environment that is both
                      stimulating and developmentallv appropriate.
                    </p>
                    <p>
                      With a focus on teaching for understanding, multiple
                      intelligences, differentiated instruction, project-based
                      learning, and habits of mind, we lay the foundation for
                      21st-century skills in our students.
                    </p>
                    <p>
                      Our dedicated team of experienced educators is committed
                      to helping a child "learn to learn." Through observation,
                      curiosity, critical thinking, investigation, and
                      collaborative learning, we instill a lifelong love for
                      learning in our students. Our teachers take on various
                      roles - facilitator, observer, and partner in the learning
                      process, ensuring that every child receives the support
                      and guidance they need to thrive.
                    </p>
                    <p>
                      Join us at Mahatma Valley, where learning is not just a
                      lesson but a joyful journey of exploration and discovery
                      for the child.
                    </p>
                  </section>
                  <br />

                  <section
                    className="course-details__tab-text pt-2"
                    id="vision"
                  >
                    <h4 className="pb-3 pt-4">
                      <b>
                        <u>Vision:</u>
                      </b>
                    </h4>
                    <ul>
                      <li>
                        At Mahatma Valley we envision cultivating young minds
                        that are brimming with creativity and independent
                        thinking, driving mindful action and reflection. We aim
                        to empower our students to become change-makers and
                        innovators, equipped with the skills and mindset to make
                        a positive impact in the world.
                      </li>
                      <li>
                        We aspire to nurture global citizens who transcend
                        self-concern to embrace their responsibility to
                        themselves, their community, the environment, and
                        humanity as a whole. Through our holistic approach to
                        education, we instill in our students a sense of duty
                        and compassion, preparing them to make meaningful
                        contributions to society and lead fulfilling lives.
                      </li>
                    </ul>
                  </section>
                  <br />
                  <section
                    className="course-details__tab-text pt-2"
                    id="outcomes"
                  >
                    <h4 className="pb-3 pt-4">
                      <b>
                        <u>Curriculum Structure:</u>
                      </b>
                    </h4>
                    <p>
                      At Mahatma Valley, we blend the best practices from
                      renowned educational philosophies such as Reggio Emilia,
                      Montessori, and Waldorf to create a unique and enriching
                      curriculum that caters to the diverse needs of our young
                      learners. Our curriculum structure is thoughtfully
                      designed to provide a nurturing and stimulating
                      environment where children can thrive and reach their tull
                      potential.
                    </p>

                    <h4>
                      <b>
                        <ul>
                          <u>Our approach:</u>
                        </ul>
                      </b>
                    </h4>
                    <ul>
                      <li>
                        <b>Reggio Emilia Approach:</b> Inspired by the Reggio
                        Emilia philosophy, our curriculum emphasizes the
                        importance of child-led learning and the role of the
                        environment as the "third teacher." We believe that
                        children are capable, curious individuals who learn best
                        through hands-on experiences and exploration. Our campus
                        is designed to be inviting and reflective spaces that
                        encourage creativity, and collaboration.
                      </li>
                      <li>
                        <b> Montessori Method:</b> We incorporate principles of
                        independence, freedom within limits, and respect for the
                        child into our curriculum. Through carefully curated
                        materials and self-directed activities, we foster the
                        development of concentration, problem-solving skills,
                        and a love for learning.
                      </li>
                      <li>
                        <b>Waldorf Education: </b>Rooted in the principles of
                        holistic education, our curriculum reflects the Waldorf
                        approach by addressing the intellectual, artistic, and
                        practical dimensions of child development. We place a
                        strong emphasis on creativity, imagination, and rhythm
                        in learning. Through storytelling, music, art, and
                        movement, we engage children's senses and cultivate a
                        deep connection to the natural world.
                      </li>
                    </ul>
                  </section>

                  <section
                    className="list-unstyled course-details__overview-list pt-2"
                    id="Student Life"
                  >
                    <h4 className="pb-3 pt-4">
                      <b>
                        <u>Life At Mahatma Valley</u>
                      </b>
                    </h4>
                    <p>
                      At Mahatma Valley, every day is an adventure filled with
                      laughter, learning, and new discoveries. Our vibrant
                      community fosters a warm and inclusive atmosphere where
                      children feel safe, valued, and empowered to explore the
                      world around them. Here's a glimpse into life at Mahatma
                      Valley:
                    </p>
                  </section>
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
