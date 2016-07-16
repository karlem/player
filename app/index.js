import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configure-store';
import './styles/global.css';

const store   = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

require('./api/youtube');

var player;
// Callback for when the YouTube iFrame player is ready
window.onYouTubeIframeAPIReady = () => {
  //player = new YT.Player('player', {
  //  // Set Player height and width
  //  height:  '390',
  //  width:   '640',
  //  // Set the id of the video to be played
  //  videoId: 'Xkm8mGlfm9w',
  //  // Setup event listeners
  //  // These are covered in the next section
  //  events:  {
  //    'onReady': onPlayerReady
  //  }
  //});
};

function onPlayerReady () {
  //player.playVideo();
  //setTimeout(pauseVideo, 4000);
  //setTimeout(loadNewVideo, 6000);
  //setTimeout(stopVideo, 8500);
  //setInterval(getContent, 1000);
};

function pauseVideo () {
  player.pauseVideo();
}

function loadNewVideo () {
  player.loadVideoById("me91AGSVsyo");
}

function stopVideo () {
  player.stopVideo();
}

function getContent () {
  var content
  content                                      = player.INSERT_METHOD_HERE;
  document.getElementById('content').innerText = content
}

const tag            = document.createElement('script');
tag.src              = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
