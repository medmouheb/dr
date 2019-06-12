import React, { Component } from 'react'
import { Route, Switch, Redirect, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Home from './Containers/Home';
import Liste from './Containers/Liste';
import Details from './Containers/Details/Details';
import Contact from './Containers/Contact';
import UserProfile from './Containers/UserProfile';
import Basket from './Containers/Basket';//

class App extends Component {

  render() {


    return (

      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Liste" component={Liste} />
          <Route path="/Details" component={Details} />
          <Route path="/Contact" component={Contact} />
          <Route path="/UserProfile" component={UserProfile} />
          <Route path="/Basket" component={Basket} />
          <Route path="/" component={Home} />
      </BrowserRouter>


    )
  }
}

export default App
