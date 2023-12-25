import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import video1 from "../assets/images/video-1-1.jpg";
import strech from "../assets/images/scratch-1-1.png";
class VideoOne extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <section className="video-one">
        <div className="container">
          <img src={strech} className="video-one__scratch" alt="" />
          <div className="row">
            <div className="col-lg-6 d-flex align-items-end">
              <div className="video-one__content">
                <h2 className="video-one__title">
                  Take a tour dolor <br />
                  sit amet, consect <br />
                  etur elit
                </h2>
                <a href="#none" className="thm-btn video-one__btn">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="video-one__img">
                <img src={video1} alt="" />
                <ModalVideo
                  channel="youtube"
                  isOpen={this.state.isOpen}
                  videoId="aitb---aDYM"
                  onClose={() => this.setState({ isOpen: false })}
                />
                <div
                  onClick={this.openModal}
                  onKeyDown={this.openModal}
                  role="button"
                  tabIndex={0}
                  className="video-one__popup"
                >
                  <i className="fas fa-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default VideoOne;
