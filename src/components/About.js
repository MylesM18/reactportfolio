import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./css/AboutStyle.css";
import Example from "./MoreAbout";
import ExampleTwo from "./EvenMoreAbout";

export const AboutMe = () => {

  return (
    <div className="app">
      <div className="grid">
        <Card
          className="bg-dark text-white aboutOne"
          style={{
            width: "25rem",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            // boxShadow: "0px 20px 20px -0.5px rgba(247, 19, 30, 0.3)",
          }}
        >
          <Image
            variant="top"
            src="/img/portfolioPic.jpeg"
            style={{ width: "200px", height: "150px" }}
            roundedCircle
          />
          <h1>A lil About Me..</h1>
          <Card.Body>
            <blockquote className="blockquote mb-0 card-body">
              <p>
                I am just a developer based out of Riverside, CA. I know
                Javascript and am consistently learning new languages. I am a
                React JS fanactic! Lol makes programming life 0.2% better, and
                that's good enough for me haha. I love to build and express my
                creativity. That is why I love programming because it gives me a
                platform to express myself and help people for the good of the
                world. The internet is the biggest enviornment to help influence
                the next generation and the generations to come. That is why I
                chose this as a career. I just want the ability to help impact
                the world in a better way.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Myles' Of Development in{" "}
                  <cite title="Source Title">All major platforms</cite>
                </small>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <div className="buttonAboutGod">
          <Example />
          <div className="buttonAboutFamily">
            <ExampleTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
