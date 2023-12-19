import React, { useState, useEffect } from "react";
import RatingStars from './components/ratingStars'; 
import "./style.css";

export default function Courses() {
  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = "http://192.168.1.74:5001";
  const apiEndpoint = `${baseUrl}/courses`;

  const handleRating = (courseId, userRating) => {
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userRating,
      }),
    };

    fetch(`${baseUrl}/courses/${courseId}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from backend:", data);
      })
      .catch((error) => {
        console.error("Error sending rating:", error);
      });
  };

  useEffect(() => {
    fetch(apiEndpoint)
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
  }, [apiEndpoint]);

  return (
    <div>
      <h1>Courses</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container container-background">
          <div className="row">
            {coursesData &&
              coursesData.map(({ id, title, photo, likes, dislikes, total_rating }) => (
                <div className="col-lg-4 mb-4" key={id}>
                  <div className="card">
                    <div className="total-rating">{total_rating}/5</div>
                    <RatingStars totalRating={total_rating} /> 
                    <img src={photo} className="card-img-top" alt={title} />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">
                        <i
                          onClick={() => handleRating(id, "like")}
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
                          onClick={() => handleRating(id, "dislike")}
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
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
