import React, { Component } from "react";

class Topbar extends Component {
  render() {
    return (
      <div className="topbar-one">
        <div className="container">
          <div className="topbar-one__left">
            <a href="mailto:mahatmavalley@gmail.com">Send Mail</a>
            <a href="tel:+919099921467">Call us</a>
          </div>
          <div className="topbar-one__right">
            <a href="#none">Login</a>
            <a href="#none">Register</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
