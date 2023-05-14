import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col, Card, CardDeck, Button } from 'react-bootstrap';

import ModalComponent from './Modal';

export default function Project() {
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);

  const projects = [
    {
      id: 1,
      img: '../../profile.svg',
      desc: `My Portfolio is created using technologies like HTML, CSS and Bootstrap.
        This is the very first website I have created which includes a section for my first 2 projects. These 2 projects are just the same as the capstone 1 and 2 in my main portfolio.`,
      link: 'https://ardeeborja.gitlab.io/capstone1-borja/',
      setModalShow: setModalShow1,
    },
    {
      id: 2,
      img: '../../coursebooking.svg',
      desc: `Booking Service is a web app that is made using HTML, CSS, JavaScript, Node JS, Express JS and Mongo DB.
      Zuitt Booking Services is a booking web app for online courses. As a regular user, you can enroll to different courses offered by the app. You are allowed to enroll once only to a specific course. If you try to enroll again to the same course, an error message will be prompted. As a regular user, you can edit your profile as well. Moreover, you can see the list of courses you are enrolled into in your profile section.
      As an admin user (account: admin@mail.com, passsword: admin123), you can create new courses. You can edit activate or archive a course as well. Furthermore, you can also see the list of enrolled users to a specific course.`,
      link: 'https://ardeeborja.github.io/zuitter-booking/index.html',
      setModalShow: setModalShow1,
    },
    {
      id: 3,
      img: '../../budget.svg',
      desc: `Budget Tracker is built using Next JS, Node JS, Express JS and Mongo DB.
      The main objective of this Budget Tracker App is to help us track our daily financial transactions. This would help us monitor both our spending and income. This budget tracker is user-friendly and feature-packed which would truly make your daily use enjoyable and productive.
      With Budget Tracker, you can create expense and income categories. Using these categories, you can then create different transactions. You would also see the list of the created categories and transactions. There are charts available as well to help you visualize your monetary activites. These charts would help you discern where your income mostly comes from and where you primarily spend it.`,
      link: 'https://budget-tracker-sandy-five.vercel.app/',
      setModalShow: setModalShow3,
    },
    {
      id: 4,
      img: '../../todo.svg',
      desc: `To-do app is a front-end application built using React JS.
      To-do app is a simple web app that lets you make a list of activities.
      With this app, you can also edit a task by clicking the edit icon. Or you can mark it complete by simply clicking the task. You can even delete the task if you want to.`,
      link: 'https://ardeeborja.github.io/to-do/',
      setModalShow: setModalShow4,
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <>
      <Container
        className={`project ${inView ? 'onscroll onscroll-zoom' : 'onscroll'}`}
        ref={ref}
      >
        <h2 className="text-center bottom cardTextColor">Projects</h2>
        <Row xs={1} md={2} lg={4} className="g-4 mt-4">
          {projects.map((project) => (
            <Col key={project.id} className="mb-3">
              <Card className="cardProject">
                <Card.Img
                  className="imageSize mt-3"
                  variant="top"
                  src={project.img}
                />
                <Card.Body>
                  <Card.Title>Capstone {project.id}</Card.Title>
                  <Card.Text className="text-justify">
                    {project.desc.substring(0, 100)}

                    {project.id === 1 && (
                      <>
                        <button
                          className="link-button"
                          onClick={() => setModalShow1(true)}
                        >
                          <div className="seeMoreDiv"> See more...</div>
                        </button>
                        <ModalComponent
                          show={modalShow1}
                          onHide={() => setModalShow1(false)}
                          description={project.desc}
                          heading={`Capstone ${project.id}`}
                        />
                      </>
                    )}
                    {project.id === 2 && (
                      <>
                        <button
                          className="link-button"
                          onClick={() => setModalShow2(true)}
                        >
                          <div className="seeMoreDiv"> See more...</div>
                        </button>
                        <ModalComponent
                          show={modalShow2}
                          onHide={() => setModalShow2(false)}
                          description={project.desc}
                          heading={`Capstone ${project.id}`}
                        />
                      </>
                    )}
                    {project.id === 3 && (
                      <>
                        <button
                          className="link-button"
                          onClick={() => setModalShow3(true)}
                        >
                          <div className="seeMoreDiv"> See more...</div>
                        </button>
                        <ModalComponent
                          show={modalShow3}
                          onHide={() => setModalShow3(false)}
                          description={project.desc}
                          heading={`Capstone ${project.id}`}
                        />
                      </>
                    )}
                    {project.id === 4 && (
                      <>
                        <button
                          className="link-button"
                          onClick={() => setModalShow4(true)}
                        >
                          <div className="seeMoreDiv"> See more...</div>
                        </button>
                        <ModalComponent
                          show={modalShow4}
                          onHide={() => setModalShow4(false)}
                          description={project.desc}
                          heading={`Capstone ${project.id}`}
                        />
                      </>
                    )}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    size="sm"
                    block
                    target="_blank"
                    href={project.link}
                    className="btn-primary"
                  >
                    Go to Capstone {project.id}
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
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
