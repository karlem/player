import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

export default class TopBar extends Component {
  render() {
    return (
      <div className={styles.topBar}>
        <span>Show menu</span>
        <p>My Music</p>
        <span>Search</span>
      </div>
    );
  }
}
