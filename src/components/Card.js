import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
// import NavBar from './NavBar';

export default function Card() {
  return (
    <>
      <Jumbotron className="jumbo jumbotron-fluid">
        <div className="upper-container container-fluid">
          <h1 className="jumboTextHeader">Welcome to my portfolio!</h1>
          <div className="image-container">
            <Image
              className="mx-auto d-block img-fluid img-border"
              src="../ardee.jfif"
              height="130px"
              width="130px"
              roundedCircle
            />
          </div>
        </div>
        <div className="lower-container text-center cardTextColor">
          <h2>Ardee Borja</h2>
          <h5 id="projectID">Full Stack Web Developer</h5>
        </div>
      </Jumbotron>
    </>
  );
}
