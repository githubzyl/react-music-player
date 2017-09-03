import React, { render } from 'react';
import { Router, IndexRoute, Route, hashHistory} from 'react-router';

import PlayerPage from '../pages/player';
import listPage from '../pages/list';
import App from './App'

export default class Root extends React.Component {
	render() {
	    return (
		    <Router history={hashHistory}>
		        <Route path="/" component={App}>
                <IndexRoute component={PlayerPage}/>
		            <Route path="/list" component={listPage} />
		        </Route>
		    </Router>
		);
	}
}
