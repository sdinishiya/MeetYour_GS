// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectReviewCard from './components/cards/PresentProjects'
import SimplePaper1 from './components/grid/PresentProjects'

function App() {
  return (
    <div style = {{ maxWidth : "90%", margin : "4rem auto" }}>
    <div className="App">
     
    </div>
    <Router>

      <switch>
      <Route exact path = "/cards/PresentProjects" component = {ProjectReviewCard} />
      <Route exact path = "/grid/PresentProjects" component = {SimplePaper1} />

      
      </switch>
    </Router>
   
    </div>
   

  );
}

export default App;
