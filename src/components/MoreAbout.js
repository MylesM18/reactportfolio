import React from "react";
import { Popover } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./css/AboutStyle.css";




export const Example = () => (
    
  <OverlayTrigger trigger="click" placement="left" overlay={popover}>
    <Button variant="success">
      God comes first!
    </Button>
  </OverlayTrigger>
);


const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Luke 1:50</Popover.Title>
    <Popover.Content>
      "His mercy extends to those who fear him, from generation to generation".
      Nothing on this earth would be possible if it wasn't for Him! Never forget who started it all.
      It's easy to get caught up in the things of the world and get distracted from the main reasons why God has us here. 
      But never forgot God is all love and that is the reason we are here on earth. To experience His love and express that love to others! 
      Love = <strong>"John3:16",</strong>  <strong>"1 Corinthians 13:4"</strong>
    </Popover.Content>
  </Popover>
);


export default Example;
