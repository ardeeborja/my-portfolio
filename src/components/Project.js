import React, { useEffect, useState } from 'react';

import { Container, Row, Col, Card, CardDeck, Button } from 'react-bootstrap';

import ModalComponent from './Modal';

export default function Project() {
  const [modalShowFirst, setModalShowFirst] = useState(false);
  const [modalShowSecond, setModalShowSecond] = useState(false);
  const [modalShowThird, setModalShowThird] = useState(false);
  const [descCapstone1, setDescCapstone1] = useState('');
  const [descCapstone2, setDescCapstone2] = useState('');
  const [descCapstone3, setDescCapstone3] = useState('');

  useEffect(() => {
    setDescCapstone1(
      'My Portfolio includes links for my first 2 projects. It includes a Contact Section as well.'
    );

    const descCap2 = (
      <>
        <span>
          Zuitt Booking Services is a booking web app for online courses. As a
          regular user, you can enroll to different courses offered by the app.
          You are allowed to enroll once only to a specific course. If you try
          to enroll again to the same course, an error message will be prompted.
          As a regular user, you can edit your profile as well. Moreover, you
          can see the list of courses you are enrolled into in your profile
          section.
        </span>
        <br />
        <span>
          As an admin user (account: admin@mail.com, passsword: admin123), you
          can create new courses. You can edit, activate or archive a course as
          well. Furthermore, you can also see the list of enrolled users to a
          specific course.
        </span>
      </>
    );
    setDescCapstone2(descCap2);

    setDescCapstone3(
      <>
        <span>
          The main objective of this Budget Tracker App is to help us track our
          daily financial transactions. This would help us monitor both our
          spending and income. This budget tracker is user-friendly and
          feature-packed which would truly make your daily use enjoyable and
          productive.
        </span>
        <br />
        <span>
          With Budget Tracker, you can create expense and income categories.
          Using these categories, you can then create different transactions.
          You would also see the list of the created categories and
          transactions. There are charts available as well to help you visualize
          your monetary activites. These charts would help you discern where
          your income mostly comes from and where you primarily spend it.
        </span>
      </>
    );
  }, []);
  // console.log(descCapstone1);

  return (
    <Container className="project">
      <h4 className="text-center bottom">Projects</h4>
      <Row className="mt-4">
        <Col>
          <CardDeck>
            <Card className="cardProject">
              <Card.Img variant="top" src="../../profile.png" />
              <Card.Body>
                <Card.Title>Capstone 1</Card.Title>
                <Card.Text>
                  My Portfolio is created using technologies like HTML, CSS and
                  Bootstrap.
                  <button
                    className="link-button"
                    onClick={() => setModalShowFirst(true)}
                  >
                    <div className="seeMoreDiv"> See more...</div>
                  </button>
                  <ModalComponent
                    show={modalShowFirst}
                    onHide={() => setModalShowFirst(false)}
                    description={descCapstone1}
                    heading="Capstone 1"
                  />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="secondary"
                  size="sm"
                  block
                  target="_blank"
                  href="https://ardee.borja.gitlab.io/capstone1-borja/"
                >
                  Go to Capstone 1
                </Button>
              </Card.Footer>
            </Card>
            <Card className="cardProject">
              <Card.Img variant="top" src="../../coursebooking.png" />
              <Card.Body>
                <Card.Title className="mt-2">Capstone 2</Card.Title>
                <Card.Text>
                  Booking Service is a web app that is made using HTML, CSS,
                  JavaScript, Node JS, Express JS and Mongo DB.
                  <button
                    className="link-button"
                    onClick={() => setModalShowSecond(true)}
                  >
                    <div className="seeMoreDiv"> See more...</div>
                  </button>
                  <ModalComponent
                    show={modalShowSecond}
                    onHide={() => setModalShowSecond(false)}
                    description={descCapstone2}
                    heading="Capstone 2"
                  />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="secondary"
                  size="sm"
                  block
                  target="_blank"
                  href="https://ardee.borja.gitlab.io/capstone2-borja/index.html"
                >
                  Go to Capstone 2
                </Button>
              </Card.Footer>
            </Card>
            <Card className="cardProject">
              <Card.Img variant="top" src="../../budget.png" />
              <Card.Body>
                <Card.Title className="mt-2">Capstone 3</Card.Title>
                <Card.Text>
                  Budget Tracker is built using Next JS, Node JS, Express JS and
                  Mongo DB.
                  <button
                    className="link-button"
                    onClick={() => setModalShowThird(true)}
                  >
                    <div className="seeMoreDiv"> See more...</div>
                  </button>
                  <ModalComponent
                    show={modalShowThird}
                    onHide={() => setModalShowThird(false)}
                    description={descCapstone3}
                    heading="Capstone 3"
                  />
                </Card.Text>
              </Card.Body>
              <Card.Footer id="contactID">
                <Button
                  variant="secondary"
                  size="sm"
                  block
                  target="_blank"
                  href="https://capstone-3-client-borja.vercel.app/"
                >
                  Go to Capstone 3
                </Button>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
}

/*
import { useHistory } from 'react-router-dom';
const history = useHistory();

const routeChange = () => {
  let path = `https://ardee.borja.gitlab.io/capstone1-borja/`;
  history.push(path);
};
<Button color="primary" className="px-4" onClick={routeChange}>
Go to Capstone 1
</Button>
*/
