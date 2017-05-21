import * as actions from './actions';

export const initialState = {
	user:undefined,
	page:"FlightList",
	flightView: "1",
	flightData:undefined,
	type:undefined,
	seats:undefined,
	reserved:undefined,
	remaining:undefined,
	model:undefined,
	departurelocation:undefined,
	arrivallocation:undefined,
	departuretime:undefined,
	arrivaltime:undefined
}

export default function reducer (state = initialState, action) {
	console.log("made it to the reducer the state is  ", state);
	switch(action.type) {

	case actions.GOT_FLIGHT_DATA :
		state = Object.assign({}, state, {flightData: action.flightData});
		console.log('state with flightData', state);
		return state;


	default: 
		return state;
	}
}

//Our Ai takes running total as an parameter and if it its not equal to the winning set pick a random number between one and three
//one way have a lifecycle method triggered when the player is number 2 and have the AI function run