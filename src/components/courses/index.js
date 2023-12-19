import React, { useState, useEffect } from "react";
import RatingStars from './components/ratingStars'; 
import "./style.css";
import baseUrl from "../../config"

export default function Courses() {
  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRatings, setSelectedRatings] = useState({});

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
        
        // Re-fetch the updated data from the server
        fetch(apiEndpoint)
          .then((response) => response.json())
          .then((updatedData) => {
            console.log("Updated data from server:", updatedData);
            setCoursesData(updatedData);
          })
          .catch((error) => {
            console.error("Error re-fetching data:", error);
          });
  
        // Update selected rating for the course
        setSelectedRatings(prevState => ({ ...prevState, [courseId]: userRating }));
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
                    <div className="total-rating"><RatingStars totalRating={total_rating} />{total_rating}/5</div>
                     
                    <img src={photo} className="card-img-top" alt={title} />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">
                        <i
                          onClick={() => handleRating(id, "like")}
                          className={`material-icons ${selectedRatings[id] === 'like' ? 'selected' : ''}`}
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
                          className={`material-icons ${selectedRatings[id] === 'dislike' ? 'selected' : ''}`}
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