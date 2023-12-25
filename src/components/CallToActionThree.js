import React, { Component } from "react";
import cta1 from "../assets/images/cta-1.jpg";
class CallToActionThree extends Component {
  render() {
    return (
      <section className="cta-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 clearfix">
              <img src={cta1} className="cta-three__image" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="cta-three__content">
                <div className="block-title text-left">
                  <h2 className="block-title__title">
                    Benefits of learning with Mahatma Valley
                  </h2>
                </div>
                <p className="cta-three__text">
                  Enroll your child in our preschool program for a nurturing
                  environment that fosters early socialization, cognitive
                  development, creativity, and a strong foundation for future
                  academic success.
                </p>
                <div className="cta-three__single-wrap">
                  <div className="cta-three__single">
                    <i className="kipso-icon-strategy"></i>
                    <p className="cta-three__single-text">
                      Professional Courses
                    </p>
                  </div>
                  <div className="cta-three__single">
                    <i className="kipso-icon-training"></i>
                    <p className="cta-three__single-text">Live Learning</p>
                  </div>

                  <div className="cta-three__single">
                    <i className="kipso-icon-human-resources"></i>
                    <p className="cta-three__single-text">Expert Teachers</p>
                  </div>
                </div>
                <a href="#none" className="thm-btn">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CallToActionThree;
