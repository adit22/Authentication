import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Main from './components/main';
import Login from './components';
import SignIn from './components/SignIn';
const Routes=()=>{
    <Switch>
        <Route exact path='/sigin' component={SignIn}/>

        <Route exact path='/login' component={LogIn}/>

        <Route exact path='/' component={Main}/>

    </Switch>
} 