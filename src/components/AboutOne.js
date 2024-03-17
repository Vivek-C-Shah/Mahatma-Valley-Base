import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import ClientStripe from "../assets/images/circle-stripe.png";
import aboutImage1 from "../assets/images/about-2-1.jpg";
import aboutImage2 from "../assets/images/about-2-2.jpg";
import { Link } from "gatsby";
class AboutOne extends Component {
  constructor() {
    super();
    this.state = {
      startCounter: false,
    };
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };

  render() {
    return (
      <section className="about-one ">
        <div style={{ display: "flex" }}>
          <div className="col-lg-6">
            <div className="about-one__content">
              <div
                className="container text-center"
                style={{
                  fontSize: "200%",
                  color: "#000000",
                  fontWeight: "bolder",
                }}
              >
                <br />
                Mahatma Valley: <br />
                Nurturing Tomorrow's Leaders
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-one__content">
              <div
                className="container text-center"
                style={{
                  fontSize: "125%",
                  color: "#000000",
                  fontWeight: "bold",
                }}
              >
                At Mahatma Valley - An International Pre School, we are
                committed to cultivating a love for learning and a strong
                connection to Indian values in every child. Our dynamic and
                experienced team of educators and visionaries provides an
                environment that supports both personal and academic growth in
                children.
              </div>
            </div>
          </div>
        </div>

        <section className="contact-info-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-info-one__single">
                  <div className="contact-info-one__icon">
                    <i className="kipso-icon-black-graduation-cap-tool-of-university-student-for-head"></i>
                  </div>
                  <h2 className="contact-info-one__title">
                    <Link to="/about" style={{ color: "black" }}>
                      About Page
                    </Link>{" "}
                  </h2>
                  <p
                    className="contact-info-one__text p-2"
                    style={{ textAlign: "justify" }}
                  >
                    Mahatma Valley is a pre-school focused on the holistic
                    development of children, emphasizing the importance of
                    education for their future.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-info-one__single">
                  <div className="contact-info-one__icon">
                    <i className="kipso-icon-knowledge"></i>
                  </div>
                  <h2 className="contact-info-one__title">
                    <Link to="/about" style={{ color: "black" }}>
                      Our Vision
                    </Link>
                  </h2>
                  <p
                    className="contact-info-one__text p-2"
                    style={{ textAlign: "justify" }}
                  >
                    Fostering compassionate leaders at <br /> Mahatma Valley, we
                    cultivate Indian values <br /> in a global context,
                    preparing for diverse challenges and opportunities.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-info-one__single">
                  <div className="contact-info-one__icon">
                    <i className="kipso-icon-targeting"></i>
                  </div>
                  <h2 className="contact-info-one__title">
                    <Link to="/about" style={{ color: "black" }}>
                      Life at Mahatma Valley
                    </Link>
                  </h2>
                  <p
                    className="contact-info-one__text p-2"
                    style={{ textAlign: "justify" }}
                  >
                    At Mahatma Valley, each day is an adventure of laughter,
                    learning, and discoveries in a warm, inclusive environment
                    that empowers children's exploration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <img src={ClientStripe} className="about-one__circle" alt="" />
        <div className="container text-center">
          <div className="block-title text-center">
            <h2 className="block-title__title">
              Let’s do study with <br />
              expert teachers
            </h2>
          </div>
          <div className="about-one__img">
            <div className="row">
              <div className="col-lg-6">
                <img src={aboutImage1} alt="" />
              </div>
              <div className="col-lg-6">
                <img src={aboutImage2} alt="" />
              </div>
            </div>
            <div className="about-one__review">
              <p className="about-one__review-count counter">
                <VisibilitySensor
                  onChange={this.onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={this.state.startCounter ? 88750 : 0} />
                </VisibilitySensor>
              </p>
              <div className="about-one__review-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="about-one__review-text">students loved us</p>
            </div>
          </div>
          <p className="about-one__text">
            There are many variations of passages of lorem ipsum available, but
            the majority have
            <br />
            suffered alteration in some form, by injected humour words which
            don't look even slightly <br /> believable. Lorem Ipsn gravida nibh
            vel velit auctor aliquetn auci elit cons.
          </p>
          <a href="#none" className="thm-btn about-one__btn">
            Start Learning Now
          </a>
        </div> */}
      </section>
    );
  }
}

export default AboutOne;
