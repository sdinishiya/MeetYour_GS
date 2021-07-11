import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import ProjectReviewCard from './components/cards/PresentProjects'
import SimplePaper1 from './components/grid/PresentProjects'
=======
import ForumDiscussion from './components/Forum/admin_view_post'
import ForumView from './components/Forum/public_view_post'
import Navbar from './components/navbar/index';
import Footer from './components/navbar/footer';
import About from './components/navbar/pages/about';
import Donations from './components/navbar/pages/donations';
import projects from './components/navbar/pages/projects';
import contact from './components/navbar/pages/contact';
import Login from './components/navbar/pages/login';
import signup from './components/navbar/pages/signup';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
      


>>>>>>> origin/master

function App() {
  return (
    <div style = {{ maxWidth : "90%", margin : "4rem auto" }}>
    <div className="App">
    <AppContainer>
      <AccountBox />
    </AppContainer>
    </div>
    <Router>
      <div> 
      <Navbar /> 
      <Footer /> 

      <switch>
<<<<<<< HEAD
      <Route exact path = "/cards/PresentProjects" component = {ProjectReviewCard} />
      <Route exact path = "/grid/PresentProjects" component = {SimplePaper1} />

      
=======
        <Route path='/navbar' exact component={Navbar} />
        <Route path='/navbar/footer' exact component={Footer} />
        <Route exact path = "./about" component = {About} />
        <Route exact path = "./donations" component = {Donations} />
        <Route exact path = "./projects" component = {projects} />
        <Route exact path = "./contact" component = {contact} />
        <Route exact path = "./login" component = {Login} />
        <Route exact path = "./signup" component = {signup} />
        <Route exact path = "/Forum/admin_view_post" component = {ForumDiscussion} />
        <Route exact path = "/Forum/public_view_post" component = {ForumView} />

>>>>>>> origin/master
      </switch>
      </div>
    </Router>
   
    </div>
   

  );
}

export default App;
