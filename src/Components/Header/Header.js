import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
      return (
          <div className="navbar">

              <Link to="/" className="navlink"> Home </Link>
              <Link to="/about" className="navlink"> About </Link>
              <Link to="/categories"className="navlink"> categories </Link>
              <Link to="/signin" className="navlink" style={{float: 'right'}}> Signin </Link>
              <Link to="/signup" className="navlink"  style={{float: 'right'}}> Signup </Link>
              <Link to="/profile" className="navlink" style={{float: 'right'}}> Profile </Link>
          </div>
      )
      }
    }
    export default Header;
