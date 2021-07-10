// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import CustomizedTables from './components/Table'
// import CustomizedTimeline from './components/forum/forum'
// import RecipeReviewCard from './components/forum/card'
// import Appointment from './components/forum/appointment'

function App() {
  return (
    <div style = {{ maxWidth : "90%", margin : "4rem auto" }}>
    <div className="App">
     
    </div>
    <Router>

      <switch>
        {/* <Route exact path = "/Table" component = {CustomizedTables} />
        <Route exact path = "/forum/forum" component = {CustomizedTimeline} />
        <Route exact path = "/forum/card" component = {RecipeReviewCard} />
        <Route exact path = "/forum/appointment" component = {Appointment} /> */}
      </switch>
    </Router>
   
    </div>
   

  );
}

export default App;
