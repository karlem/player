import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MenuActions from '../actions/menu';

import styles from './home-page.css';

import TopBar from '../components/top-bar/index.js';
import Menu from '../components/menu/index.js';

export default class HomePage extends Component {
  render () {
    return (
      <div className={styles.container}>
        <TopBar />
        <Menu selectedItem={this.props.menu.selectedItem} selectMenuItem={this.props.selectMenuItem}/>
        <div className={styles.content}>
          Test
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MenuActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
