import React from "react";
import ctabg1 from "../assets/images/cta-bg-1-1.jpg";
const CallToActionOne = () => {
  return (
    <section
      className="cta-one cta-one__home-one"
      style={{ backgroundImage: `url(${ctabg1})` }}
    >
      <div className="container">
        <h2 className="cta-one__title">
          Mahatma Valley <br />
          An Innovative Pre School
          <br />
        </h2>
        <div className="cta-one__btn-block">
          <a href="#none" className="thm-btn cta-one__btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionOne;
