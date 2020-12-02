import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../Pages/Login/index';
import ForgetPassword from '../Pages/forgotPassword/index';
import Register from '../Pages/Register/index';
import HistoryBets from '../Pages/HistoryBets/index.jsx';
import Games from '../Pages/Games/index.jsx';

import PrivateRoute from './Privates.routes';
 
export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login}/>
				<Route path="/forgetPassword" component={ForgetPassword}/>
				<Route path="/register" component={Register}/>
				<PrivateRoute path="/historyBets" component={HistoryBets}/>
				<PrivateRoute path="/games" component={Games}/>
			</Switch>
		</BrowserRouter>
	)
}