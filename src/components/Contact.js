import React, { useState } from "react";
import course1 from "../assets/images/mithakali.jpeg";
import course2 from "../assets/images/motera.jpeg";
import '@fontsource/patrick-hand';


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
          <p style={{ fontFamily: "Patrick Hand", fontSize: "22px" }}>
            Ready to embark on a journey of discovery, laughter, and learning at
            Mahatma Valley Innovative Preschool? Contact us today to schedule a
            tour and experience the vibrant life of our preschool community
            firsthand.
          </p>
          <section
            className="list-unstyled course-details__overview-list pt-2"
            id="Student Life"
          >
            <h4 className="pb-3 pt-4">
              <b>
                <u>Contact Us</u>
              </b>
            </h4>
            <p>
              <b>Email : mahatmavalley@gmail.com</b>
              <br></br>
              <b>Phone no : +91 9099921467</b>
            </p>
          </section>

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
      {/* Add code starts here */}
      <div>
        <div className="map-container">
          <h2 className="contact-one__title text-center" style={{ fontFamily: "Patrick Hand", fontSize: "24px" }}>
            Our Branches
          </h2>
          <div style={{ display: "flex" }}>
            <div className="map-container col-lg-6">
              <h3 style={{ fontFamily: "Patrick Hand" }}>Mithakali School: Triveni Duplex, Opp. Mangal Vidhyalay, Mithakhali Six Road, Navrangpura, Ahmedabad-380009 Gujarat, India</h3>
              <a href="https://maps.app.goo.gl/wmbYc4HhSfS8ckHf6" target="_blank" rel="noreferrer"> Click here for directions</a>
              <img
                src={course1}
                className="google-map__contact"
                alt="Mithakali School"
              />
            </div>
            <div className="map-container col-lg-6">
              <h3 style={{ fontFamily: "Patrick Hand" }}>Motera School: Opposite Shrusti Arcade, T.P. 44, Visat Gandhinagar Highway Chandkheda, Ahmedabad - 382424 Gujarat, India</h3>
              <a href="https://maps.app.goo.gl/wmbYc4HhSfS8ckHf6" target="_blank" rel="noreferrer"> Click here for directions</a>
              <img
                src={course2}
                className="google-map__contact"
                alt="Motera School"
              />
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
