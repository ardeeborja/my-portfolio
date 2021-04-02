import React from 'react';
import { Container, Row, Col, Card, CardDeck, Button } from 'react-bootstrap';

export default function Project() {
  return (
    <Container className="project" id="projectID">
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
                </Card.Text>
              </Card.Body>
              <Card.Footer>
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
