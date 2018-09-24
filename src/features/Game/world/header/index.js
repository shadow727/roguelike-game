import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

function Header(props) {
  return(
    <div className = 'header'>
      <h1 className = 'header-title'>Roguelike Game</h1>
      <p className = 'header-round'>Round: {props.Rounds}</p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    Rounds: state.world.rounds
  }
}

export default connect(mapStateToProps)(Header);
