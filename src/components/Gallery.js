import React from "react";
import gallery1 from "../assets/images/gallery-1-1.jpg";
import gallery2 from "../assets/images/gallery-1-2.jpg";
import gallery3 from "../assets/images/gallery-1-3.jpg";
import gallery4 from "../assets/images/gallery-1-4.jpg";
import gallery5 from "../assets/images/gallery-1-5.jpg";
import gallery6 from "../assets/images/gallery-1-6.jpg";
import gallery7 from "../assets/images/gallery-1-7.jpg";
import gallery8 from "../assets/images/gallery-1-8.jpg";
import gallery9 from "../assets/images/gallery-1-9.jpg";

const Gallery = () => {
  return (
    <section className="gallery-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery1} alt="" />
              <a href={gallery1} className="gallery-one__popup img-popup">
                <i className="kipso-icon-plus-symbol"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery2} alt="" />
              <a href={gallery2} className="gallery-one__popup img-popup">
                <i className="kipso-icon-plus-symbol"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery3} alt="" />
              <a href={gallery3} className="gallery-one__popup img-popup">
                <i className="kipso-icon-plus-symbol"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery4} alt="" />
              <a href={gallery4} className="gallery-one__popup img-popup">
                <i className="kipso-icon-plus-symbol"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery5} alt="" />
              <a href={gallery5} className="gallery-one__popup img-popup">
                <i className="kipso-icon-plus-symbol"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery6} alt="" />
              <a href={gallery6} className="gallery-one__popup img-popup">
                <i className="kipso-icon-plus-symbol"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery7} alt="" />
              <a href={gallery7} className="gallery-one__popup img-popup">
                <i className="kipso-icon-plus-symbol"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery8} alt="" />
              <a href={gallery8} className="gallery-one__popup img-popup">
                <i className="kipso-icon-plus-symbol"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery9} alt="" />
              <a href={gallery9} className="gallery-one__popup img-popup">
                <i className="kipso-icon-plus-symbol"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
