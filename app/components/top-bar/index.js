import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

export default class TopBar extends Component {

  _onClick () {
    // prepare the request
    var request = gapi.client.youtube.search.list({
      part: "snippet",
      type: "video",
      q: encodeURIComponent(this.refs.input.value).replace(/%20/g, "+"),
      maxResults: 20,
      order: "viewCount",
      publishedAfter: "2015-01-01T00:00:00Z"
    });
    // execute the request
    request.execute(function(response) {
      var results = response.result;

      window.hackCall(results);
    });
  }

  render() {
    return (
      <div className={styles.topBar}>
        <span>Show menu</span>
        <p>My Music</p>
        <div>
          <form onSubmit={() => this._onClick()}>
            <input ref="input" type="text" />
            <button>Search</button>
          </form>
        </div>
      </div>
    );
  }
}
