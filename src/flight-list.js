import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './actions.js';


class FlightList extends Component  {

  constructor(props) {
    super()
    console.log("the request ran");
   
  }
  


  render () {
   
  	console.log(this.props);
    this.props.dispatch(actions.getFlightData());
    
  		return (
      <div>
  		<button className="Navigation"> Choose flight </button>
      <button className="Navigation"> About you </button>
      <button className="Navigation"> Payment </button>
      <h2> Flights for you. </h2>
      <div className="flight">
      <p className="day"> 31 </p>
      <p className="month"> Mar </p>
      <p className="aircraft"> Hawker 400XP </p>
      <img src="svg triangle" alt="Triangle UI"/>
      </div>
      <div className="flight">
      <p className="day"> 29 </p>
      <p className="month"> Mar </p>
      <p className="aircraft"> Cirrus SF50 </p>
      <img src="svg triangle" alt="Triangle UI"/>
      </div>
      <div className="flight">
      <p className="day"> 2 </p>
      <p className="month"> Apr </p>
      <p className="aircraft"> Eclipse 550 </p>
      <img src="svg triangle" alt="Triangle UI"/>
      </div>
      <div className="flight">
      <p className="day"> 8 </p>
      <p className="month"> Apr </p>
      <p className="aircraft"> Hawker 400XP </p>
      <img src="svg triangle" alt="Triangle UI"/>
        </div>
      </div>


      )
  	}



  }


const mapStateToProps = (state, props) => {
  return {

    flightData:state.flightData


  }
}



export default connect (mapStateToProps)(FlightList);