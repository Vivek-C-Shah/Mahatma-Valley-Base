import React from "react";
import team1 from "../assets/images/team-1-1.jpg";
import team2 from "../assets/images/team-1-2.jpg";
import team3 from "../assets/images/team-1-3.jpg";
import team4 from "../assets/images/team-1-4.jpg";
import team5 from "../assets/images/team-1-5.jpg";
import team6 from "../assets/images/team-1-6.jpg";
const CallToActionFive = () => {
  return (
    <section className="cta-five">
      <img src={team1} className="cta-five__members-1" alt="" />
      <img src={team2} className="cta-five__members-2" alt="" />
      <img src={team3} className="cta-five__members-3" alt="" />
      <img src={team4} className="cta-five__members-4" alt="" />
      <img src={team5} className="cta-five__members-5" alt="" />
      <img src={team6} className="cta-five__members-6" alt="" />
      <div className="cta-five__bubble-1">
        <i className="fas fa-rocket"></i>
      </div>
      <div className="cta-five__bubble-2">
        <i className="fas fa-bolt"></i>
      </div>
      <div className="container text-center">
        <h2 className="cta-five__title">
          Start growing with <br />
          the community
        </h2>
        <p className="cta-five__text">
          Duis aute irure dolor in reprehenderit in velit esse
        </p>
        <a href="#none" className="thm-btn cta-five__btn">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default CallToActionFive;
