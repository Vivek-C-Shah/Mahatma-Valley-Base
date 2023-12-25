import React from "react";
import Countdown from "react-countdown";

const CountdownKipso = () => {
  return (
    <section className="countdown-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="countdown-one__content">
              <h2 className="countdown-one__title">Register now </h2>
              <p className="countdown-one__tag-line">
                get premium online courses for free!
              </p>
              <p className="countdown-one__text">
                Lorem ipsum gravida nibh vel velit auctor aliquetnean
                sollicitudin, lorem quis bibendum auci elit consequat is simply
                free text available in the psutis sem nibh id eis sed odio sit
                amet.
              </p>
              <div className="countdown-one__list list-unstyled">
                <Countdown date={Date.now() + 5000000000} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="become-teacher__form">
              <div className="become-teacher__form-top">
                <h2 className="become-teacher__form-title">Get free courses</h2>
              </div>
              <form
                action="#"
                method="POST"
                className="become-teacher__form-content contact-form-validated"
              >
                <input type="text" placeholder="Your Name" name="name" />
                <input type="text" placeholder="Email Address" name="email" />
                <input type="text" placeholder="Phone Number" name="phone" />
                <input type="text" placeholder="Comment" name="message" />
                <button
                  type="submit"
                  className="thm-btn become-teacher__form-btn"
                >
                  Apply For It
                </button>
              </form>
              <div className="result text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CountdownKipso;
