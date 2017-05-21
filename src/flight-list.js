import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './actions.js';
import {Link} from 'react-router-dom'


class FlightList extends Component  {

  constructor(props) {
    super()
    console.log("the request ran");
   
  }
  


  render () {
   

  		return (
      <div>
  		<nav>
      <button className="Navigation"> Choose flight </button>
      <button className="Navigation"> About you </button>
      <button className="Navigation"> Payment </button>
      </nav>

      <div className="Container">
      <img className="logo" src= "http://i.imgur.com/RluS3Vx.png" alt="Davai logo"/>
      <h2 className="flight-headline"> Flights for you. </h2>
      <div className="flight">
      <Link to={'/flightdetails'}>
      <p className="day"> 29 </p>
      <p className="month">Mar</p>
      <p className="aircraft"> Eclipse 500 </p>
      <i className="desc"> 10 passenger, light jet </i>
      </Link>
      </div>

      <div className="flight">
      <p className="day"> 29 </p>
      <p className="month">Mar</p>
      <p className="aircraft"> 901 jet </p>
      <i className="desc"> 10 passenger, light jet </i>
      </div>
      <div className="flight">
      <p className="day"> 27 </p>
      <p className="month">Mar</p>
      <p className="aircraft"> Fusion jet F50 </p>
      <i className="desc"> 10 passenger, light jet </i>
      
      </div>
      <div className="flight">
      <p className="day"> 28 </p>
      <p className="month">Mar</p>
      <p className="aircraft"> Honda fusion </p>
      <i className="desc"> 10 passenger, light jet </i>
          </div>
        </div>
      </div>


      )
  	}



  }


const mapStateToProps = (state, props) => {
  return {

    user:state.user,
    page:state.page,
    flightView: state.flightView,
    flightData:state.flightData,
    type:state.type,
    seats:state.seats,
    reserved:state.reserved,
    remaining:state.remaining,
    model:state.model,
    departurelocation:state.departurelocation,
    arrivallocation:state.arrivallocation,
    departuretime:state.departuretime,
    arrivaltime:state.arrivaltime


  }
}



export default connect (mapStateToProps)(FlightList);