import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MenuActions from '../actions/menu';

import styles from './home-page.css';

import TopBar from '../components/top-bar/index.js';
import Menu from '../components/menu/index.js';

export default class HomePage extends Component {

  state = {};

  componentDidMount () {
    const tag            = document.createElement('script');
    tag.src              = "https://apis.google.com/js/client.js?onload=init";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    const tag2           = document.createElement('script');
    tag2.src              = "https://www.youtube.com/iframe_api";
    const firstScriptTag2 = document.getElementsByTagName('script')[0];
    firstScriptTag2.parentNode.insertBefore(tag, firstScriptTag2);

    // Listener for loaded data from api call
    window.hackCall = (data) => {
      this.setState({ items: data.items});
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

  _renderList () {
    if (!Array.isArray(this.state.items)) {
      return <p>Loading....</p>;
    }


    return this.state.items.map((item, key) => {
      return (
        <div onClick={() => this._playVideo(item.id.videoId)} className={styles.item} key={key}>
          <p>{item.snippet.title}</p>
          <img src={item.snippet.thumbnails.default.url}/>
        </div>
      );
    });
  }

  render () {
    return (
      <div className={styles.container}>
        <TopBar />
        <div className={styles.content}>
          {this._renderList()}
        </div>
        <div id="player"></div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    menu: state.menu
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(MenuActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
