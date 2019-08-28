import React, { Component } from 'react';
import './Signin.css';

class Signin extends Component {
  render() {
    return (
      <div>
        <h2> เข้าสู่ระบบ</h2>
        <form>
          <label for="username"> Username
          <input type="text" name="username" className="input-field" />
          </label>

          <label for="password"> Password
           <input type="password" name="password" className="input-field" />
          </label>
          
          <button className="btn"> Sing In </button>
        </form>
      </div>
    )
  }
}
export default Signin;