import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../assets/images/logo-dark.png";
class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();

    //Search Toggle
    // this.serachButton();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false,
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display !== "block" ? "block" : "none";
    });
  };

  render() {
    return (
      <header className="site-header site-header__header-one ">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <Link to="/" className="navbar-brand">
                <img
                  src={logo}
                  className="main-logo"
                  width="180"
                  alt="Awesome alter text"
                />
              </Link>

              <button className="menu-toggler">
                <span className="kipso-icon-menu"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" navigation-box">
                {/*  <li className="current">
                  <Link to="/">Home</Link>
        </li>*/}
                {/*<li>
                  <a href="#none">About</a>
      <ul className="sub-menu">*/}

                <li>
                  <Link to="/about">About Us</Link>
                </li>

                {/*<li>
                      <Link to="/faq">FAQ'S</Link>
                    </li>
                  </ul>
    </li>*/}
                {/*<li>
                  <a href="/courses">Courses</a>
  <ul className="sub-menu">*/}
                <li>
                  <Link to="/courses">Programs</Link>
                </li>
                {/*
                    <li>
                      <Link to="/course-details">Courses Details</Link>
                    </li>
                  </ul>
            </li>
*/}

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
        </nav>
        <div className="site-header__decor">
          <div className="site-header__decor-row">
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-1"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-2"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-3"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NavOne;
