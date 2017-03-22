import React from 'react';
import ReactDOM from 'react-dom';
var Route = require('react-router').Route;
var Router = require('react-router').Router;
var {browserHistory,hashHistory} = require ('react-router');
var IndexRoute=require('react-router').IndexRoute;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import Main from 'Main';
import About from 'About';
import Signup from 'Signup';
import Login from 'Login';
import DashBoard from 'DashBoard';
import Dialogue from 'Dialogue';
import Entities from 'Entities';
import Intents from 'Intents';

ReactDOM.render(
<MuiThemeProvider>
  <Router history={hashHistory}>
		<Route path="/" component={Main}>
    <Route path="/DashBoard" component={DashBoard}/>
    <Route path="/Login" component={Login}/>
    <Route path="/Dialogue" component={Dialogue}/>
    <Route path="/Entities" component={Entities}/>
    <Route path="/Intents" component={Intents}/>

		<IndexRoute component={Signup}></IndexRoute>
		</Route>
	</Router>
  </MuiThemeProvider>,

  document.getElementById('app')
);
