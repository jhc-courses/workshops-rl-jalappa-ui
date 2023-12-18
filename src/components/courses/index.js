import React, { useState, useEffect } from "react";
import "./style.css";

export default function Courses() {
  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://192.168.0.121:5002/all_courses")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCoursesData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container container-background">
          <div className="row">
            {coursesData &&
              coursesData.map(
                ({ heading, imgSrc, likes, dislikes, description }, idx) => (
                  <div className="col-lg-4 mb-4" key={idx}>
                    <div className="card">
                      <img
                        src={imgSrc}
                        className="card-img-top"
                        alt={heading}
                        style={{ height: "200px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{heading}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">
                          <i
                            className="material-icons"
                            style={{
                              marginRight: "8px",
                              verticalAlign: "middle",
                            }}
                          >
                            thumb_up
                          </i>{" "}
                          {likes} |
                          <i
                            className="material-icons"
                            style={{
                              marginLeft: "8px",
                              verticalAlign: "middle",
                            }}
                          >
                            thumb_down
                          </i>{" "}
                          {dislikes}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      )}
    </div>
  );
}
