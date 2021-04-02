import React from 'react';
import { useState } from 'react';
import { Form, Button, Card, Row, Col, Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { IconContext } from 'react-icons';
import { FaLinkedin } from 'react-icons/fa';
import { FaPhoneSquare } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { IoMail } from 'react-icons/io5';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_90xmtch',
        'template_tf94g2b',
        e.target,
        'user_IoSvx4TpTZD0t8iGWvNPm'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <Container>
      <h4 className="sendMessage text-center bottom">Contact Me</h4>
      <Row>
        <Col className="mt-2" md="6">
          <Card>
            <Card.Body className="cardContact">
              <Form onSubmit={(e) => sendEmail(e)}>
                <Form.Group controlId="Full Name">
                  <Form.Label className="mt-4">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="userEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="subject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    name="subject"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    required
                  />
                </Form.Group>
                <Button
                  variant="secondary"
                  type="submit"
                  className="btn-block mb-4"
                >
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2" md="6">
          <Card>
            <IconContext.Provider
              value={{ color: 'rgba(109, 73, 167, 0.897)' }}
            >
              <Card.Body className="cardContact iconList">
                <h4>
                  <a
                    className="aLink"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/ardee-borja-8b76bb88/"
                  >
                    <FaLinkedin />
                    <span className="iconLabelFont"> Ardee Borja</span>
                  </a>
                </h4>
                <h4>
                  <a className="aLink" href="mailto:ardee.borja@gmail.com">
                    <IoMail />
                    <span className="iconLabelFont">
                      {' '}
                      ardee.borja@gmail.com
                    </span>
                  </a>
                </h4>
                <h4>
                  <a className="aLink" href="tel:+639662141567">
                    <FaPhoneSquare />
                    <span className="iconLabelFont"> +63 966 214 1567</span>
                  </a>
                </h4>
                <h4>
                  <ImLocation2 />
                  <span className="iconLabelFont"> San Felipe, Zambales</span>
                </h4>
              </Card.Body>
            </IconContext.Provider>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

/*
              <Card.Title className="text-center mt-3">Work With Me</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  Send Message
                </Card.Subtitle>
*/
