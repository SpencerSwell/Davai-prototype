

// export const MAKE_NEW_GAME = "MAKE_NEW_GAME";
// export const makeNewGame = (gameMode, players) => ({
// 	type: MAKE_NEW_GAME,
// 	gameMode,
// 	players
// });

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