import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Contact.css";

function Contact() {
  return (
    <section className="form-container">
      <Card style={{ padding: "3%" }}>
        <Card.Title>
          <h1>Contact Me</h1>
        </Card.Title>
        <Form>
          <Form.Group>
            <Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control size="lg" type="text" placeholder="First Name" />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Last Name" />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control size="lg" type="email" placeholder="Enter Email" />
            <Form.Text className="text-muted">
              Your email will never be shared anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control size="lg" type="text" as="textarea" rows="8" />
          </Form.Group>
          <Button variant="primary" type="submit" size="lg">
            Submit
          </Button>
        </Form>
      </Card>
    </section>
  );
}

export default Contact;
