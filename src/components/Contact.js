import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbx0WlF8K2rbosoAmmaSNGi89Ru4m1Qb0Ckl1R_Poore9y8RegRC45RGeTQGRT3yCVtZxA/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage("Thank you for your enquiry. We will get back to you soon.");
        setTimeout(() => {
          setMessage("");
        }, 5000);
        formEle.reset();
      })
      .catch((error) => {
        console.log(error);
        setMessage("Thank you for your enquiry. We will get back to you soon.");
        setTimeout(() => {
          setMessage("");
        }, 5000);
        formEle.reset();
      });
  }

  return (
    <div>
      <section className="contact-one">
        <div className="container">
          <h2 className="contact-one__title text-center">Enquiry Form</h2>
          <div>
            <form
              className="contact-one__form contact-form-validated"
              noValidate="novalidate"
              onSubmit={(e) => Submit(e)}
            >
              <input
                placeholder="Your Name"
                name="Name"
                type="text"
                required="true"
              />
              <input
                placeholder="Age"
                name="Age"
                type="number"
                required="true"
              />
              <input
                placeholder="Address"
                name="Address"
                type="text"
                required="true"
              />
              <input
                placeholder="Phone Number"
                name="Phone"
                type="text"
                required="true"
              />
              <input
                placeholder="Email Address"
                name="Email"
                type="email"
                required="true"
              />
              <textarea placeholder="Write Message" name="Message"></textarea>
              <button type="submit" className="contact-one__btn thm-btn">
                Submit Enquiry
              </button>
            </form>
            <p>{message}</p>
          </div>
        </div>
      </section>
      {/* Add code ends here */}
      <div>
        <div className="map-container">
          <div style={{ display: "flex" }}>
            <div className="map-container col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d117498.18953762426!2d72.4832037953829!3d23.030438266198995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x395e85567a2c74a1%3A0xdec09f69079c2e8d!2s1%2C%20Triveni%20Duplex%2C%20Mithakhali%20Cir%2C%20opp.%20Mangal%20Vidhyalay%2C%20Maharashtra%20Society%2C%20Navrangpura%2C%20Ahmedabad%2C%20Gujarat%20380009!3m2!1d23.0304596!2d72.5656054!5e0!3m2!1sen!2sin!4v1702454425718!5m2!1sen!2sin"
                className="google-map__contact"
                title="template google map"
                allowFullScreen=""
              ></iframe>
            </div>
            <div className="map-container col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d117427.38592857563!2d72.52158079795781!3d23.111521608099554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x678bb68e3d61ca97%3A0xec23598d7724ba81!2s44%2C%20Aditya%20Avenue%2C%20T%20P%20Rd%2C%20opposite%20Shrusti%20Arcade%2C%20Nigam%20Nagar%2C%20Chandkheda%2C%20Ahmedabad%2C%20Gujarat%20382424!3m2!1d23.111542999999998!2d72.60398239999999!5e0!3m2!1sen!2sin!4v1702454714158!5m2!1sen!2sin"
                className="google-map__contact"
                title="template google map"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>

          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Contact;
