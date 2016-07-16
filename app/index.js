import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configure-store';
import './styles/global.css';

// Youtube api loaders
import { loadApiYoutube, loadYoutubePlayer } from './api/youtube.js';

const store   = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

import { setLoadedApis } from './actions/apis.js';

// Load api SDKs from all platforms
// and notify app once
Promise.all([
  loadApiYoutube(),
  loadYoutubePlayer()
]).then(([youtubeApi, youtubePlayer]) => {
  store.dispatch(setLoadedApis({
    youtubeApi,
    youtubePlayer
  }));
});

// Render app
render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
