import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as allActions from '../actions/index';

import styles from './home-page.css';

import TopBar from '../components/top-bar/index.js';
import Menu from '../components/menu/index.js';

export default class HomePage extends Component {

  state = {};

  componentDidMount () {
    // Listener for loaded data from api call
    window.hackCall = (data) => {
      this.setState({items: data.items});
    };
  }

  onPlayerReady () {
    this.player.playVideo();
  }

  _playVideo (videoId) {
    if (!this.player) {
      this.player = new YT.Player('player', {
        // Set Player height and width
        height:  '600',
        width:   '400',
        // Set the id of the video to be played
        videoId: videoId,
        // Setup event listeners
        // These are covered in the next section
        events:  {
          'onReady': () => this.onPlayerReady()
        }
      });

      return;
    }

    this.player.loadVideoById(videoId);
  }

  _renderList (isSearching, items) {
    const hasNoItems = (
      Array.isArray(items) === false ||
      items.length === 0
    );

    if (hasNoItems && isSearching) {
      return <p>Searching...</p>;
    }

    if (hasNoItems) {
      return <p>No songs.</p>;
    }

    return items.map((item, key) => {
      return (
        <div onClick={() => this._playVideo(item.id.videoId)} className={styles.item} key={key}>
          <p>{item.snippet.title}</p>
          <img src={item.snippet.thumbnails.default.url}/>
        </div>
      );
    });
  }

  render () {
    const { apis, search, searchItems } = this.props;

    return (
      <div className={styles.container}>
        <TopBar
          searchItems={searchItems}
          areApisLoaded={apis.areAllLoaded}/>

        <div className={styles.content}>
          {(apis.areAllLoaded) ? this._renderList(search.isSearching, search.items) : <p>Connection to APIs</p>}
        </div>
        <div id="player"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menu:   state.menu,
  search: state.search,
  apis:   state.apis
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(allActions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
