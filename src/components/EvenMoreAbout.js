import React from "react";
import { Popover } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./css/AboutStyle.css";


const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">The Magee Family</Popover.Title>
      <Popover.Content>
        My wife Natalie Angela Magee and my son Zacari Saint Magee are everything to me. They mean more than anything on this earth. All that I do its with them in mind 1st
        and I hope to be able to provide them with all that they desire. I want them to become what God has called them to become and with my help and leadership, I am a big part in
        making sure that they have God's will for them fullfilled.
      </Popover.Content>
    </Popover>
  );
  
  const ExampleTwo = () => (
    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
      <Button variant="primary">My Family is the World!</Button>
    </OverlayTrigger>
  );
  
 
export default ExampleTwo;