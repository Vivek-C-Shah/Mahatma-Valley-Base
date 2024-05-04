import React from "react";
import footer1 from "../assets/images/footer-1-1.png";
import footer2 from "../assets/images/footer-1-2.png";
import footer3 from "../assets/images/footer-1-3.png";
import footer4 from "../assets/images/footer-1-4.png";
import footer5 from "../assets/images/footer-1-5.png";
import footer6 from "../assets/images/footer-1-6.png";
import { Link } from "gatsby";
// import logo from "../assets/images/logo-light.png";

const Footer = () => {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__link">
                  <h2 className="footer-widget__title">Explore</h2>
                  <div className="footer-widget__link-wrap">
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/admissions">Admissions</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ'S</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*<div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__gallery">
                  <h2 className="footer-widget__title">Gallery</h2>
                  <ul className="list-unstyled footer-widget__gallery-list">
                    <li>
                      <a href="#none">
                        <img src={footer1} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer2} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer3} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer4} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer5} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer6} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
  </div>*/}
              <div className="col-xl-6 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__about">
                  <h2 className="footer-widget__title">About</h2>
                  <p className="footer-widget__text">
                    Mahatma Valley is a pre-school that believes in the holistic
                    development of children. We believe in the importance of
                    education and its impact on the future of our children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <p className="site-footer__copy">
              &copy; Copyright by{" "}
              <a href="https://www.linkedin.com/company/venv-developers/">
                VenV
              </a>
            </p>
            <div className="site-footer__social">
              <div
                onClick={scrollTop}
                onKeyDown={scrollTop}
                role="button"
                tabIndex={0}
                className="scroll-to-target site-footer__scroll-top"
              >
                <i className="kipso-icon-top-arrow"></i>
              </div>
              <a href="https://www.facebook.com/share/KDobqSYobYwZ2Krc/?mibextid=LQQJ4d">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/mahatma_valley?igsh=MWpxd2QyY2Nnb3c1Yg%3D%3D&utm_source=qr">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="search-popup">
        <div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
        <div className="search-popup__inner">
          <form action="#" className="search-popup__form">
            <input
              type="text"
              name="search"
              placeholder="Type here to Search...."
            />
            <button type="submit">
              <i className="kipso-icon-magnifying-glass"></i>
            </button>
            <div className="cancel"></div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Footer;
