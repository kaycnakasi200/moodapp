import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Profile from './Components/Profile/Profile';
import Categories from './Components/Categories/Categories';

class App extends Component {
  render() {
    return(
    <div>
      <Header />
      <Route exact ={true} path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/categories' component={Categories}/>
      <Route path='/signin' component={Signin}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/profile' component={Profile}/>
      
      <Footer />
      </div>
  
  
    
    );
  }
}
export default App;
