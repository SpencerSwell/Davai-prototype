import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './signin-page.js';
import FlightDetails from './flight-details'
import FlightList from './flight-list.js';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';





const routes =(
 <div>
 <Provider store={store}>
 <Router>
 <div>
 <Route path='/flights' component={FlightList}/>
 <Route path='/flightdetails' component={FlightDetails}/>
 <Route path='/payment' component={SignIn}/>
  </div>
  </Router>
  </Provider> 
  </div>
  );


document.addEventListener('DOMContentLoaded' , () => 
ReactDOM.render(

  routes

  ,document.getElementById('root'))
);

registerServiceWorker();
