import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

import Login from '../Pages/Login/index';
import ForgetPassword from '../Pages/forgotPassword/index';
import Register from '../Pages/Register/index';
import HistoryBets from '../Pages/HistoryBets/index.jsx';
import Games from '../Pages/Games/index.jsx';
import Spinner from '../components/Spinner/Spinner'

const NotFoundBase = ({ type }) => <Redirect to={type === 'public' ? "/history-bets" : "/login"} />
const LoadingBase = () => <Redirect to={"/loading"} />
const NotFoundPublic = () => <NotFoundBase type='public' />
const NotFoundPrivate = () => <NotFoundBase type='private' />
const Loading = () => <LoadingBase />

export default function Routes() {
	const auth = useAuth();
	return (
		<BrowserRouter>
			<Switch>

				{
					auth.loading && 	
						<React.Fragment>
							<Route path="/loading" component={Spinner}/>
							<Route component={Loading} />
						</React.Fragment> 
				}

				{
					auth.currentUser && !auth.loading &&
					<React.Fragment>
						<Route path="/history-bets" component={HistoryBets}/>
						<Route path="/games" component={Games}/>
						<Route component={NotFoundPublic} />
					</React.Fragment> 
				} 

				{	!auth.currentUser && !auth.loading &&
					<React.Fragment>
						<Route exact path="/"><Redirect to="/login" /></Route>
						<Route component={NotFoundPrivate} />
						<Route path="/login" component={Login}/>
						<Route path="/forgetPassword" component={ForgetPassword}/>
						<Route path="/register" component={Register}/>
					</React.Fragment>
				}
				
			</Switch>
		</BrowserRouter>
	)
}