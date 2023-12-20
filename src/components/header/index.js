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
          <div className="header-left">
          <div className="icon" style={{width:20, height:25}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1c3484" class="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
          </div>
          <div className="num">
            <h5 style={{marginBottom:"0"}}>+91 9886611117</h5>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
