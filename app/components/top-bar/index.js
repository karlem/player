import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

export default class TopBar extends Component {

  _onSubmit = () => (
    this.props.searchItems(this.refs.input.value)
  );

  render() {
    const isSearchDisabled = this.props.areApisLoaded === false;

    return (
      <div className={styles.topBar}>
        <span>Show menu</span>
        <p>My Music</p>
        <div>
          <form onSubmit={this._onSubmit}>
            <input disabled={isSearchDisabled} ref="input" type="text" />
            <button disabled={isSearchDisabled}>Search</button>
          </form>
        </div>
      </div>
    );
  }
}
