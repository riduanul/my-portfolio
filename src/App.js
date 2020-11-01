import React from "react";
import './App.css';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Contact from './Components/Contact/Contact';
import NavBar from './Components/Home/NavBar/NavBar';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';






function App() {
  return (
    <Router >
      <NavBar></NavBar>
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="/projects">
         <ProjectDetails />
       </Route>
       <Route path="/blog">
         <Blog />
       </Route>
       <Route path="/about">
         <About />
       </Route>
       <Route path="/contact">
         <Contact />
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
