import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
// import NavBar from './NavBar';

export default function Card() {
  return (
    <>
      <Jumbotron
        className="jumbo jumbotron-fluid"
        style={{ backgroundColor: `steelblue` }}
      >
        <div className="upper-container container-fluid">
          <div className="image-container">
            <Image
              className="mx-auto d-block img-fluid"
              src="../ardee.jfif"
              height="130px"
              width="130px"
              roundedCircle
            />
          </div>
        </div>
        <div className="lower-container text-center">
          <h4>Ardee Borja</h4>
          <h6>Full Stack Web Developer</h6>
        </div>
      </Jumbotron>
    </>
  );
}
