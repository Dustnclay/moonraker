import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import Examples from './components/Examples'
import About from './components/Capturing'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'


function App() {
  return (
  <>
    <Router>
      
      <Header/>
        <div class="page">
          {/* <Route path='/About' component={About}/> */}
          <About/>
          {/* <Route path='/Merchandise' component={Moonraker}/> */}
          <AboutMe/>
          <Route path='/Contact' component={Contact}/>
          {/* <Contact/>           */}
          {/* <Route exact path='/' component={Examples}/> */}
          <Examples/>
        </div>
      <Footer/>        


    </Router>
  </>
  );
}

export default App;
