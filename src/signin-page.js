import React, { Component } from 'react';

class SignIn extends Component  {

  constructor(props) {
    super()

  }
  

  render () {
   
  	if(this.props.user === undefined) {
  		return (
  		<form class="signup">
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
    			 <input type="text" placeholder="Areas of interest"/>
          </label>
          <label> Submit
          <input type="submit"/>
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
