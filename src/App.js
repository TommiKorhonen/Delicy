import './App.css';
import React, {useState} from 'react';
import Home from "./pages/home"
import About from './pages/about';
import Contact from './pages/contact';
import {HashRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import ScrollToTop from './components/ScrollToTop';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Router >
      <ScrollToTop />
      <Navbar toggle={toggle}/>
      <Dropdown toggle={toggle} isOpen={isOpen}/>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
