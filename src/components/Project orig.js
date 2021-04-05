import React, { useEffect, useState } from 'react';

import { Container, Row, Col, Card, CardDeck, Button } from 'react-bootstrap';

import ModalComponent from './Modal';

export default function Project() {
  const [modalShow, setModalShow] = useState(false);
  const [descCapstone1, setDescCapstone1] = useState('');
  const [descCapstone2, setDescCapstone2] = useState('');
  const [descCapstone3, setDescCapstone3] = useState('');

  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="extra-content">
        My Portfolio includes links for my first 2 projects. It includes a
        Contact Section as well.
      </p>
    </div>
  );
  const linkName = readMore ? 'Read Less << ' : 'Read More >> ';

  useEffect(() => {
    setDescCapstone1(
      'My Portfolio includes links for my first 2 projects. It includes a Contact Section as well.'
    );

    setDescCapstone2(
      `Zuitt Booking Services is a booking web app for online courses. As a regular user, you can enroll to different courses offered by the app. You are allowed to enroll once only to a specific course. If you try to enroll again to the same course, an error message will be prompted. As a regular user, you can edit your profile as well. Moreover, you can see the list of courses you are enrolled into in your profile section. As an admin user (account: admin@mail.com, passsword: admin123), you can create new courses. You can edit, activate or archive a course as well. Furthermore, you can also see the list of enrolled users to a specific course.`
    );
    setDescCapstone3(
      `The main objective of this Budget Tracker App is to help us track our daily financial transactions. This would help us monitor both our spending and income.
      This budget tracker is user-friendly and feature-packed which would truly make your daily use of it enjoyable and productive.
      With Budget Tracker, you can create categories of your expenses and income transactions. Using these categories, you can create list of your income and purchases. You would also see the history of the created categories and transactions. There are charts available as well to help you visualize your monetary activites. These charts would help you discern where your income mostly comes from and where you primarily spend it.`
    );
  }, []);
  console.log(descCapstone1);

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
                  <div className="read-more-link">
                    <a
                      className="read-more-link"
                      onClick={() => {
                        setReadMore(!readMore);
                      }}
                    >
                      <h2 className="read-more-link">{linkName}</h2>
                    </a>
                    {readMore && extraContent}
                  </div>
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
                    onClick={() => setModalShow(true)}
                  >
                    <div className="seeMoreDiv"> See more...</div>
                  </button>
                  <ModalComponent
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    description={descCapstone2}
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
                    onClick={() => setModalShow(true)}
                  >
                    <div className="seeMoreDiv"> See more...</div>
                  </button>
                  <ModalComponent
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    description={descCapstone3}
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
