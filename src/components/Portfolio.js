import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./css/Portfolio.css";

function Portfolio() {
  return (
    
    <div className="grid">
      <Card className="inspire" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://videohive.img.customer.envatousercontent.com/files/103820931/Inspire_Preview_Image_590x330.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=dc689e0081d66729e7d2aff2559a3ab8" />
        <Card.Body>
          <Card.Title>Inspire</Card.Title>
          <Card.Text>
          See my git hub for the code:  https://github.com/MylesM18/Project2.git . Click button to see the app.
          </Card.Text>
          <Button variant="primary" href="https://inspire-pro.herokuapp.com/" target="_blank">Check it out</Button>
        </Card.Body>
      </Card>

      <Card className="workout" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-sfSpan.png" />
        <Card.Body>
          <Card.Title>Workout Tracker</Card.Title>
          <Card.Text>
          See my git hub for the code: https://github.com/MylesM18/workout_tracker.git . Click button to see the app.
          </Card.Text>
          <Button variant="danger" href="https://trackyourworkout2020.herokuapp.com/?id=5f1a8c253a64f647a1144f45" target="_blank">Check it out</Button>
        </Card.Body>
      </Card>

      <Card className="budget" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://www.workflowmax.com/hubfs/budget%20900x400v2.png" />
        <Card.Body>
          <Card.Title>Progressive Budget</Card.Title>
          <Card.Text>
          See my git hub for the code: https://mylesm18.github.io/budgetTracker/ . Click button to see the app.
          </Card.Text>
          <Button variant="success" href="https://budgetyour.herokuapp.com/" target="_blank">Check it out</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Portfolio;
