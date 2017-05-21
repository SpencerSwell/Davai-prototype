import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class SignIn extends Component  {

  constructor(props) {
    super()

    this.submitUserDetails = this.submitUserDetails.bind();
    

  }

  submitUserDetails(e) {

  }
  
  

  render () {
   
  	if(this.props.user === undefined) {
  		return (
  		<form className="signup">
          <label> Email
    			 <input type="text" placeholder="Email" className="email"/>
          </label>
          <label> Password
    			 <input type="password" className="password"/>
          </label>
          <label> Confirm Password
    			 <input type="password" className="password"/>
          </label>
          <label> First name
    			 <input type="text" placeholder="First" className="firstName"/>
          </label>
          <label> Last name
    			 <input type="text" placeholder="Last"className="lastName"/>
          </label>
          <label> City
    			 <input type="text" className="City" placeholder="City"/>
          </label>
          <label> State
    			 <input type="text" className="State" placeholder="State"/>
          </label>
          <label>  Billing Address
    			 <input type="text" placeholder="Address"/>
          </label>
          <label> Cites of interest
    			 <input type="text"className="citesOfInterest" placeholder="Areas of interest"/>
          </label>
          <label> Submit
          <Link to={'/flightdetails'}>
          <input type="submit" />
          </Link>
    			</label>
          </form>

      )
  	}
   	 if(this.props.user !== undefined) {
    	return (
    		<form className="signin">
          <label> Email
    			<input type="text" placeholder="Email" className="email"/>
          </label>
          <label> Password
    			 <input type="password" className="password"/>
          </label>
    			</form>
    		)
    }
  }
}


const mapStateToProps = (state, props) => {
  return {

    user: state.user

  }
}



export default SignIn;
