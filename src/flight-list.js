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
      <p className="day"> {this.props.dateofdeparture[0]} </p>
      <p className="month"> Mar </p>
      <p className="aircraft"> {this.props.type[0]} </p>
      <img src="svg triangle" alt="Triangle UI"/>
      </div>
      <div className="flight">
      <p className="day"> {this.props.dateofdeparture[1]} </p>
      <p className="month"> Mar </p>
      <p className="aircraft"> {this.props.type[1]} </p>
      <img src="svg triangle" alt="Triangle UI"/>
      </div>
      <div className="flight">
      <p className="day"> {this.props.dateofdeparture[2]} </p>
      <p className="month"> Apr </p>
      <p className="aircraft"> {this.props.type[2]} </p>
      <img src="svg triangle" alt="Triangle UI"/>
      </div>
      <div className="flight">
      <p className="day"> {this.props.dateofdeparture[3]} </p>
      <p className="month"> Apr </p>
      <p className="aircraft"> {this.props.type[3]} </p>
      <img src="svg triangle" alt="Triangle UI"/>
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