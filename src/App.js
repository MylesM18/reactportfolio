import React from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
        <Route exact path='/' component={AboutMe} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
      </Router>
  )
}


export default App;
