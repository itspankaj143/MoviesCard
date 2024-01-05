import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MoviesData from "../../moviesData";
import generateStarRating from "../Movies/GenerateStarRating "; // Import the updated function

const Movies = () => {
  // let api = "http://www.omdbapi.com/?apikey=61e576a4&t=";
  // fetch(api)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          {MoviesData.map((movie, index) => {
            return (
              <div className="col-md-4 " key={index}>
                <Card key={index} style={{ width: "18rem" }} className="mb-3">
                  <Card.Img variant="top" src={movie.cover} height={300} />
                  <Card.Body>
                    <Card.Title>{movie.name}</Card.Title>
                    <div>{generateStarRating(movie.rating)}</div>
                    <div>{movie.duration}</div>
                    <div>{movie.release}</div>
                    <Card.Text>{movie.description}</Card.Text>
                  </Card.Body>
                  <Button variant="primary">Book Now</Button>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movies;
