 import React, { Component } from 'react';

export default  function FlightDetails() {

 	return (

 <div className="flightinfo">
      <img src="routepiture.jpg" alt="picutre of the route"/>
    <div className="jettype">
      <h2 className="aircraft"> Hawker 400XP </h2>
      <p className="plane-details"> 10 passenger, light jet </p>
    </div>
    <div className="date">
    <p>March 31, 2016 </p>
    </div>
 	<div className="Ticket">
 		<h2 className="times"> 9:00 AM (CST) </h2>
 		<p className="Airport"> Depart: Chicago Midway International Airport(MDW) </p>
 		<p className="duration"> 2 hours </p>
 		<p className="price"> $500 </p>
 		<h2 className="times"> 12:00 PM (EST) </h2>
 		<p className="Airport"> Long Island Macarthur Airport(ISP) </p>
 	</div>
 		<div className="Arrival">
 			<p> Arriving 12:00 PM on Monday, March, 31 2017 </p>
    </div>
    <p className="seats"> SEATING DETAILS </p>
    <img src="circle.svg" alt="unfilled seat icon"/>
    <p> Availible </p>
    <img src = "bluecircle.svg" alt="filled seat icon"/>
    <p> Reserved </p>
    <img src = "planepicture.jpg" alt="plane passenger view"/>
    <p className="cost"> $500 </p> 
    <button className="reserve"> Reserve </button>

    </div>
	

	)

};
