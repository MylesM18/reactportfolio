import React from "react";
import { Accordion } from "react-bootstrap/";
import { Card } from "react-bootstrap/";
import { Button } from "react-bootstrap/";
import "./css/Contact.css";

function Contact() {
  return (
    <div className="container">
      <Accordion defaultActiveKey="0" className="box">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Contact me 
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body> 
            <ul>
            <li><a href="https://www.linkedin.com/in/myles-magee-086683187/" target="_blank">Linked in</a></li>
            <li><a href="https://www.facebook.com/mylesmagee24" target="_blank">Facebook</a></li>
            <li><a href="https://www.gmail.com" target="_blank">mylesmagee562@gmail.com</a></li>
            </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Contact;
