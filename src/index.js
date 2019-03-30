import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import {Button} from 'antd-mobile';
import Login from './containers/login/login'
import Register from './containers/register/register'
import Main from './containers/main/main'


ReactDOM.render(
<Provider store={store}>
  <HashRouter>
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/" component={Main}></Route>
    </Switch>
  </HashRouter>
</Provider>

, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

