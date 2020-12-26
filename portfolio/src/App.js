import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from './components/Footer';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage"


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      title: "Huai Zhe",
      headerLinks:[
        {title:"Home", path:"/"},
        {title: "About", path:"/about"},
        {title:"Contact",path:"/contact"}
      ],// the links for the nav bar

      home:{
        title: "Huai Zhe's Page",
        subtitle: "Welcome to my website",
        text: "You can see my animes below"
      },

      about:{
        title:"About Me"//passing the title property into about page
      },
      contact:{
        title:"Contact Me"
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Huai Zhe</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/Contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={()=> <HomePage title={this.state.home.title} 
          subtitle={this.state.home.subtitle} text={this.state.home.text}/>}/> 

          <Route path="/About" exact render={()=> <AboutPage title={this.state.about.title}/>}/>

          <Route path="/Contact" exact render={()=> <ContactPage title={this.state.contact.title}/>}/>
          <Footer/>

        </Container>
      </Router>
    )
  }
}


export default App;
