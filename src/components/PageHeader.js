import React from "react";
import { Link } from "gatsby";

const PageHeader = (props) => {
  return (
    <section className="inner-banner">
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href="#none">{props.title}</a>
          </li>
        </ul>
        <h2 className="inner-banner__title">{props.title}</h2>
      </div>
    </section>
  );
};

export default PageHeader;
