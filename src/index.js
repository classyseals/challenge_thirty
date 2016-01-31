import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
import Home from './containers/Home';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const store = configureStore();

render(
  <Provider store={store}>
  	<Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
