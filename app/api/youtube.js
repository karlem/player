import fs from 'fs';
import path from 'path';

const key = fs.readFileSync(`${process.cwd()}/key.txt`, 'UTF8');

var OAUTH2_CLIENT_ID = key;

function tryToCall () {
  // prepare the request
  var request = gapi.client.youtube.search.list({
    part: "snippet",
    type: "video",
    q: encodeURIComponent('london electricity').replace(/%20/g, "+"),
    maxResults: 10,
    order: "viewCount",
    publishedAfter: "2015-01-01T00:00:00Z"
  });
  // execute the request
  request.execute(function(response) {
    var results = response.result;

    window.hackCall(results);
  });
}

window.init = () => {
  gapi.client.setApiKey(OAUTH2_CLIENT_ID);
  gapi.client.load("youtube", "v3", function() {
    //tryToCall();
  });
};
