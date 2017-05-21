import ReduxThunk from 'redux-thunk';

export const GET_FLIGHT_DATA = "GET_FLIGHT_DATA";
export function getFlightData  (city="Chicago",dispatch) {
	return function(dispatch) {
 {
	const url =  '/getFlightData';

	return fetch(url).then(response => {
			
			return response.json();
		}).then(flightdata => {
			return dispatch(gotFlightData(flightdata));
			 
		})
	}

}

}

export const GOT_FLIGHT_DATA = "GOT_FLIGHT_DATA";
export const gotFlightData = (flightData) => {
	console.log("GOT THE FLIGHT DATA", flightData);
	return {
		
		type:GOT_FLIGHT_DATA,
		flightData:flightData,

		
	}

};



// export const SAVE_GAME_SUCCESS = 'SAVE_GAME_SUCCESS';
// export const saveGameSuccess = (gameId) => ({
// 	type: SAVE_GAME_SUCCESS,
// 	gameId
// });

// export const SAVE_GAME_ERROR = 'SAVE_GAME_ERROR';
// export const saveGameError = (error) => ({
// 	type: SAVE_GAME_ERROR,
// 	error
// });

// export const asyncSaveGame = (game) => (dispatch) => {
// 	const URL = 'api/games';
// 	fetch(URL, {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify(game)
//   })
// 	.then(res => {
// 		return res.json();
// 	})
// 	.then(data => {
// 		console.log('game endpoint data: ', data);
// 		dispatch(saveGameSuccess(data.id));
// 	})
// 	.catch(err => {
// 		console.log('game endpoint error: ', err);
// 		dispatch(saveGameError(err));
// 	})
// }

// export const getUserInfo = userId => (dispatch) => {
// 	const url = `api/users/${userId}`;

// 	fetch(url)
// 	.then(response => {
// 		console.log(response);
// 		return response.json();
// 	})
// 	.then(user => {
// 		dispatch(userInfoSuccess(user));
// 		return true;
// 	})
// 	.catch(error => {
// 		console.log(error);
// 		dispatch(userInfoError(error));
// 		return false;
// 	})
// }