import React from "react";
import circleStripe from "../assets/images/circle-stripe-1.png";
import lineStripe from "../assets/images/line-stripe-1.png";
const CallToActionFour = () => {
  return (
    <section className="cta-four">
      <img src={circleStripe} className="cta-four__stripe" alt="" />
      <img src={lineStripe} className="cta-four__line" alt="" />
      <div className="container text-center">
        <div className="block-title">
          <h2 className="block-title__title">
            We’ve best teachers <br />
            in every subject
          </h2>
        </div>
        <p className="cta-four__text">
          Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,
          lorem quis bibendum auci elit <br /> consequat is simply free text
          available in the psutis sem nibh id eis sed odio sit amet.
        </p>
      </div>
    </section>
  );
};

export default CallToActionFour;
