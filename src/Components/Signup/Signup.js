import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
  render() {
    return (
      <div>
        <form className="myForm">
           <h2> สมัครสมาชิก</h2>
          <label for="username" className="myLabel"> <span>Username</span>
            <input type="text" name="username" className="myInput" />
          </label>

          <label for="password" className="mylabel"> <span>Password</span>
            <input type="password" name="password" className="input-field" />
          </label>

          <label for="confirmpassword"className="mylabel"> <span> Confirm Password </span>
            <input type="password" name=" confirmpassword" className="input-field" />
          </label>
          
          <label for="firstname"className="mylable"><span>First Name</span>
            <input type="text"  name="firstname " className="input-field" />
          </label>

          <label for="lastname"className="mylable"> <span>Last Name</span>
            <input type= "text" name=" lastname" className="input-field" />
          </label>

          <span></span>
          <button className="myButton"> Sing Up </button>
        </form>

      </div>
    )
  }
}
export default Signup;