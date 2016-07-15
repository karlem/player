import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

export default class Menu extends Component {
  static propTypes = {
    selectedItem: PropTypes.string.isRequired
  };

  _renderItem (item, i) {
    const { selectMenuItem, selectedItem } = this.props;
    const className = (item === selectedItem) ? `${styles.item} ${styles.selected}` : styles.item;

    return (
      <li key={i} onClick={() => selectMenuItem(item)} className={className}>{item}</li>
    );
  }

  render () {
    const items = ['Playlists', 'Artits', 'Albums', 'Tracks'];

    return (
      <ul className={styles.menu}>
        {items.map((item, i) => this._renderItem(item, i))}
      </ul>
    );
  }
}
