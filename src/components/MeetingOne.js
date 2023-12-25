import React from "react";
import meeting1 from "../assets/images/meeting-1-1.jpg";
import chat1 from "../assets/images/chat-1-1.jpg";
import chat2 from "../assets/images/chat-1-2.jpg";
const MeetingOne = () => {
  return (
    <section className="meeting-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="meeting-one__image">
              <img src={meeting1} alt="Awesome alter text" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="meeting-one__content">
              <div className="block-title text-left">
                <h2 className="block-title__title">
                  Our latest news <br />& articles
                </h2>
              </div>
              <p className="meeting-one__block-text">
                There are many variations of passages of lorem ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <div className="meeting-one__box-wrap">
                <div className="meeting-one__box">
                  <div className="meeting-one__bubble">
                    Hello. I’m here to learn chemistry
                  </div>
                  <img src={chat1} alt="Awesome alter text" />
                  <h3 className="meeting-one__title">Rhonda Mcdermond</h3>
                  <p className="meeting-one__text">Student</p>
                </div>
                <div className="meeting-one__box">
                  <div className="meeting-one__bubble">Hello. Rhonda</div>
                  <img src={chat2} alt="Awesome alter text" />
                  <h3 className="meeting-one__title">Karleen Pedigo</h3>
                  <p className="meeting-one__text">Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingOne;
