import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./logo.svg";
import "./header.css";

export default function Header() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={img} alt="Logo" width="300" height="54" className="d-inline-block align-text-top" />
          </a>
          <div className="header">
              Course Rater
            </div>
        </div>
      </nav>
    </div>
  );
}
