import FeesChart from "../assets/images/fees-chart.jpg";
import FeesChart2 from "../assets/images/fees-chart-2.jpg";

import React, { useState } from "react";
// import "./styles.css";

const Pricing = () => {
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("");
  const [standard, setStandard] = useState(""); // Add state for Standard

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbz6Um957gq4IGNyxkPBhkYg4WiiZq23zhw6euvDquUAaXYrA90UBhw2ccTsaxEPFoh3Qw/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage("Form submitted successfully!");
        formEle.reset();
      })
      .catch((error) => {
        console.log(error);
        setMessage("Form submitted successfully!");
        formEle.reset();
      });
  }

  return (
    <section className="contact-one" style={{ fontFamily: "Patrick Hand" }}>
      <div className="">
      <head dangerouslySetInnerHTML={{ __html: `<link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet">` }} />
        <h2 className="contact-one__title text-center" style={{ fontFamily: "'Patrick Hand', cursive" }}>Admission Form</h2>
        <div style={{ fontFamily: "'Patrick Hand', cursive" }}>
          <form
            className="contact-one__form contact-form-validated"
            noValidate="novalidate"
            onSubmit={(e) => Submit(e)}
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            <div className="flex" style={{ display: "flex" }}>
              <div className="row low-gutters p-5">
                <h2
                  className="text-center"
                  style={{ color: "#000000", fontWeight: "bold" }}
                >
                  Student Information
                </h2>
                <input
                  placeholder="First Name"
                  name="FirstName"
                  type="text"
                  required
                />
                <input
                  placeholder="Middle Name"
                  name="MiddleName"
                  type="text"
                  required
                />
                <input
                  placeholder="Last Name"
                  name="LastName"
                  type="text"
                  required
                />
                <select
                  name="Gender"
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  style={{ width: "100%", height: "40px" }}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  placeholder="Blood Group"
                  name="BloodGroup"
                  type="text"
                  required
                />
                <input
                  placeholder="Session"
                  name="Session"
                  type="text"
                  required
                />
                <input placeholder="Shift" name="Shift" type="text" required />
                <select
                  name="Standard"
                  value={standard}
                  onChange={(e) => setStandard(e.target.value)}
                  required
                  style={{ width: "100%", height: "40px" }}
                >
                  <option value="">Select Standard</option>
                  <option value="Mother Toddler">Mother Toddler</option>
                  <option value="Play Group">Play Group</option>
                  <option value="Nursery">Nursery</option>
                  <option value="Jr. Kg.">Jr. Kg.</option>
                  <option value="Sr. Kg.">Sr. Kg.</option>
                  <option value="Day Care">Day Care</option>
                </select>
                <input placeholder="Date of Birth" name="DOB" type="date" />
                <input placeholder="Age" name="Age" type="number" required />
                <input
                  placeholder="Birth Country"
                  name="BirthCountry"
                  type="text"
                />
                <input
                  placeholder="Birth State"
                  name="BirthState"
                  type="text"
                  required
                />
                <input
                  placeholder="Birth City"
                  name="BirthCity"
                  type="text"
                  required
                />
                <input placeholder="Present Area" name="PresentArea" />
                <input placeholder="Pin Code" name="PinCode" type="number" />
                <input
                  placeholder="Address"
                  name="Address"
                  type="text"
                  required
                />
                <input
                  placeholder="Phone Number"
                  name="Phone"
                  type="number"
                  required
                />
                <input
                  placeholder="Mobile Number(for SMS and Whatsapp)"
                  name="Mobile"
                  type="number"
                  required
                />
                <input
                  placeholder="Approximate Distance from Mahatma Valley School"
                  name="Distance"
                  type="text"
                  required
                />
                <input
                  placeholder="Primary Email"
                  name="Email"
                  type="email"
                  required
                />
                <input
                  placeholder="Name as per Birth Certificate"
                  name="LegalName"
                  type="text"
                  required
                />
                <input
                  placeholder="Student Aadhar Number"
                  name="StudentAadharNumber"
                  type="number"
                  required
                />
                <input
                  placeholder="Mother Tongue"
                  name="MotherTongue"
                  type="text"
                  required
                />
                <input
                  placeholder="Name of Previous School"
                  name="NameOfPreviousSchool"
                  type="text"
                />
                <input
                  placeholder="Previous School Address"
                  name="PreviousSchoolAddress"
                  type="text"
                />
                <input
                  placeholder="Proof of Previous School (Add link)"
                  name="ProofOfPreviousSchool"
                  type="text"
                />
                <input
                  placeholder="Proof of Residence (Add link)"
                  name="ProofOfResidence"
                  type="text"
                  required
                />
              </div>
              <div
                className="row low-gutters pr-5"
                style={{ paddingTop: "40px" }}
              >
                <h2
                  className="text-center"
                  style={{ color: "#000000", fontWeight: "bold" }}
                >
                  Siblings Information
                </h2>
                <input
                  placeholder="Sibling Name"
                  name="SiblingName"
                  type="text"
                />
                <select
                  name="RelationType"
                  required
                  style={{ width: "100%", height: "40px" }}
                >
                  <option value="">Select Relation Type</option>
                  <option value="brother">Brother</option>
                  <option value="sister">Sister</option>
                </select>
                <input
                  placeholder="Sibling School Name"
                  name="SiblingSchoolName"
                  type="text"
                />
                <input
                  placeholder="Sibling Class"
                  name="SiblingClass"
                  type="text"
                />
                <h2
                  className="text-center"
                  style={{ color: "#000000", fontWeight: "bolder" }}
                >
                  Family Information
                </h2>
                <select
                  name="ParentalStatus"
                  required
                  style={{ width: "100%", height: "40px" }}
                >
                  <option value="">Select Parental Status</option>
                  <option value="Single Father">Single Father</option>
                  <option value="Single Mother">Single Mother</option>
                  <option value="Both">Both</option>
                </select>
                <h2
                  className="text-center"
                  style={{ color: "#000000", fontWeight: "bold" }}
                >
                  Father's Information
                </h2>
                <input
                  placeholder="First Name"
                  name="FatherFirstName"
                  type="text"
                />
                <input
                  placeholder="Middle Name"
                  name="FatherMiddleName"
                  type="text"
                />
                <input
                  placeholder="Last Name"
                  name="FatherLastName"
                  type="text"
                />
                <input placeholder="Email" name="FatherEmail" type="email" />
                <input
                  placeholder="Mobile Number"
                  name="FatherMobile"
                  type="number"
                />
                <input
                  placeholder="Medium Of Instruction"
                  name="FatherMediumOfInstruction"
                  type="text"
                />
                <input
                  placeholder="Educational Qualification"
                  name="FatherEducationalQualification"
                  type="text"
                />
                <input
                  placeholder="Annual Income"
                  name="FatherAnnualIncome"
                  type="number"
                />
                <h2
                  className="text-center"
                  style={{ color: "#000000", fontWeight: "bold" }}
                >
                  Mother's Information
                </h2>
                <input
                  placeholder="First Name"
                  name="MotherFirstName"
                  type="text"
                />
                <input
                  placeholder="Middle Name"
                  name="MotherMiddleName"
                  type="text"
                />
                <input
                  placeholder="Last Name"
                  name="MotherLastName"
                  type="text"
                />
                <input placeholder="Email" name="MotherEmail" type="email" />
                <input
                  placeholder="Mobile Number"
                  name="MotherMobile"
                  type="number"
                />
                <input
                  placeholder="Medium Of Instruction"
                  name="MotherMediumOfInstruction"
                  type="text"
                />
                <input
                  placeholder="Educational Qualification"
                  name="MotherEducationalQualification"
                  type="text"
                />
                <input
                  placeholder="Annual Income"
                  name="MotherAnnualIncome"
                  type="number"
                />
                <input
                  className="mb-3"
                  placeholder="Mother’s Full Name before Marriage (For Document Check)"
                  name="MothersFullNameBeforeMarriage"
                  type="text"
                />
                <h2
                  className="text-center"
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                  }}
                >
                  How did you find us
                </h2>
                <select
                  name="Howdidyoureachus"
                  required
                  style={{ width: "100%", height: "40px" }}
                >
                  <option value="">Select Option</option>
                  <option value="From Parents">From Parents</option>
                  <option value="From Teacher's or Staff">
                    From Teacher's or Staff
                  </option>
                  <option value="From Students">From Students</option>
                  <option value="Referred by some person">
                    Referred by some person
                  </option>
                  <option value="Google Advertisement">
                    Google Advertisement
                  </option>
                  <option value="Hoarding">Hoarding</option>
                  <option value="Newspaper Advertisement">
                    Newspaper Advertisement
                  </option>
                  <option value="Online Search">Online Search</option>
                  <option value="Searched Myself">Searched Myself</option>
                  <option value="Other">Other</option>
                </select>
                <br />
                <br />
                <br />
              </div>
            </div>
            <button
              type="submit"
              className="contact-one__btn thm-btn"
              style={{
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Submit Admission Form
            </button>
          </form>
          <br />

          {message && (
            <h1
              style={{
                backgroundColor: "#333",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              {message}
            </h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
