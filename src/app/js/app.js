import React from 'react';
import withStyles from './decorators/withStyles';
import s from './App.scss';

//add the routers here
import Login from './components/login';
import Workspace from './components/workspace';

const App = (props) => (<div>
    <div> This app has started and below is login</div>
    <Login />
    <Workspace/>
</div>);

export default withStyles(s)(App);
