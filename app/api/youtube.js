import fs from 'fs';
import path from 'path';

const OAUTH2_CLIENT_ID = fs.readFileSync(path.join(process.cwd(), 'key.txt'), 'UTF8');

function loadScript (src) {
  const tag            = document.createElement('script');
  tag.src              = src;
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

export const loadApiYoutube = () => (
  new Promise((resolve, reject) => {
    window.youtubeApiInit = () => {
      gapi.client.setApiKey(OAUTH2_CLIENT_ID);
      gapi.client.load('youtube', 'v3', () => resolve(gapi));
    };

    loadScript('https://apis.google.com/js/client.js?onload=youtubeApiInit');
  })
);

export const loadYoutubePlayer = () => (
  new Promise((resolve, reject) => {
    window.onYouTubeIframeAPIReady = () => resolve(YT);

    loadScript('https://www.youtube.com/iframe_api');
  })
);

export const search = (query) => (
  new Promise((resolve, reject) => {
    if (!gapi) {
      reject('Youtube api is not initialized yet');
    }

    const request = gapi.client.youtube.search.list({
      part: 'snippet',
      type: 'video',
      q: encodeURIComponent('london electricity').replace(/%20/g, '+'),
      maxResults: 10,
      order: 'viewCount',
      publishedAfter: '2015-01-01T00:00:00Z'
    });

    request.execute((response) => {
      console.log('execute is done');

      resolve(response.result);
    });
  })
);
