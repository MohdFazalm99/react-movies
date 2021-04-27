import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import CountUp from "react-countup";
import "./MovieGrid.css";
const IMAGE_URL = "https://image.tmdb.org/t/p/w185";

const MovieGrid = ({ title, image, release_date, overview, popularity }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div class="col-md-3 pb-3">
        <Card style={{ width: "auto" }}>
          <div className="card-image" onClick={handleShow}>
            <Card.Img
              variant="top"
              src={IMAGE_URL + image}
              className="img-fluid"
              alt="Image not available"
            />
          </div>
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>About Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12">
                <div
                  className="movie-overview"
                  style={{ width: "auto", textAlign: "center" }}
                >
                  <h3>{title}</h3>
                  <p>{overview}</p>
                </div>
                <p>Release Date: {release_date}</p>
                <p>
                  Popularity:
                  <CountUp start={1} end={popularity} duration={2.75}></CountUp>
                </p>
              </div>
            </div>
            <div className="row"></div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default MovieGrid;
