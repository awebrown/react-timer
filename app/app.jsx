'use strict';

let React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    Main = require('Main');

//style!css! are chained loaders, look in webpack.config.js
require('style!css!foundation-sites/dist/foundation.min.css');
//using jquery to tie in foundation
$(document).foundation();
//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
