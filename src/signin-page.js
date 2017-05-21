import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class SignIn extends Component  {

  constructor(props) {
    super()

    

  }

  
  

  render () { return (
   
  <div className="container">
  <h2 className="inst"> Pay for your ticket </h2>
  <form action="/charge" method="POST">
  <input type="text" placeholder="Email"/>
  <br/>
  <input type="number" placeholder="Card Number"/>
  <br/>
  <input type="text" placeholder="EXP"/>
  <br/>
  <input type="number" placeholder="CVC"/>
  <br/>
    <button className="pay"> Pay </button>
  </form>
</div>

      )
  	}

  }


const mapStateToProps = (state, props) => {
  return {

    user: state.user

  }
}



export default SignIn;
