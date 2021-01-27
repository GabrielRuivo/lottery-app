import React, {useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

/* import { useAuth } from '../context/AuthContext'; */

import Login from '../Pages/Login/index';
import ForgetPassword from '../Pages/forgotPassword/index';
import ChangePassword from '../Pages/ChangePassword/index';
import Register from '../Pages/Register/index';
import HistoryBets from '../Pages/HistoryBets/index.jsx';
import Games from '../Pages/Games/index.jsx';

const NotFoundBase = ({ type }) => <Redirect to={type === 'public' ? "/history-bets" : "/login"} />
const NotFoundPublic = () => <NotFoundBase type='public' />
const NotFoundPrivate = () => <NotFoundBase type='private' />

export default function Routes() {
	
	const [token, setToken] = useContext(AuthContext);
	const auth = localStorage.getItem('@tokenLottery')
	console.log('CONSOLE ROUTES: ', token)
	/* const auth = useAuth(); */
	return (
		<BrowserRouter>
			<Switch>

				<Route path="/change-password/:token" component={ChangePassword}/>

				{
					token && auth &&
					<React.Fragment>
						<Route path="/history-bets" component={HistoryBets}/>
						<Route path="/games" component={Games}/>
						<Route component={NotFoundPublic} />
					</React.Fragment> 
				} 

				{	!token && !auth &&
					<React.Fragment>
						<Route exact path="/"><Redirect to="/login" /></Route>
						<Route path="/login" component={Login}/>
						<Route path="/forgetPassword" component={ForgetPassword}/>
						<Route path="/register" component={Register}/>
						<Route component={NotFoundPrivate} />
					</React.Fragment>
				}
				
			</Switch>
		</BrowserRouter>
	)
}