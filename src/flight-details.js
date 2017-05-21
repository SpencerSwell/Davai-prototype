 import React, { Component } from 'react';
 import { connect } from "react-redux";

  class FlightDetails extends Component {


 	render() { return (

      <div>
      <nav>
      <button className="Navigation"> Choose flight </button>
      <button className="Navigation"> About you </button>
      <button className="Navigation"> Payment </button>
      </nav>
      <img className="route" src="http://i.imgur.com/TN82KwB.png" alt="picutre of the route"/>
    <div className="flightinfo">
    <div className="jettype">
      <h2 className="craft"> Eclipse 500 </h2>
      <p className="plane-details"> 10 passenger, light jet </p>
    </div>
    <div className="date">
    <p>March 31, 2017 </p>
    </div>
 	<div className="Ticket">
 		<h2 className="times">Departs at 9:00 AM (EST) </h2>
 		<p className="Airport"> Depart: Chicago Midway International Airport(MDW) </p>
 		<h2 className="times">  Arrival at 11:00 PM (CST) </h2>
 		<p className="Airport"> Arriving at Long Island Macarthur Airport(ISP) </p>
 		<p> Arriving 11:00 PM on Monday, March, 31 2017 </p>
    </div>
    <p className="seats"> 7 Seats left </p>


    
    <p className="cost"> $575 </p> 
    <button className="reserve"> Reserve </button>
      
      <img src="http://i.imgur.com/oPQ7LQ6.jpg" alt="Jet"/>

      </div>
    </div>

	)}

};






const mapStateToProps = (state, props) => {
  return {

    flightData:state.flightData


  }
}



export default connect (mapStateToProps)(FlightDetails);

