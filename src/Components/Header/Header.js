import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
     var  Navbar ={
         display:'',
         backgroundColor:'#76ffff',
         color:'#ff79ff',
         fontSize:25,
         padding:10
     }


      return (
          <div style={{display: 'block',backgroundColor:'#444', fontSize:25, padding:20 }}>
              <Link to="/" style ={Navbar}> Home </Link>
              <Link to="/about"style={Navbar}> About </Link>
              <Link to="/signin"style={Navbar}> Signin </Link>
              <Link to="/signup" style={Navbar} > Signup </Link>
          </div>
      )
      }
    }
    export default Header;
