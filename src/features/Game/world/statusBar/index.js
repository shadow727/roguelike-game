import React from 'react';
import { connect } from 'react-redux';
import store from '../../../../store/store';
import { gameOver } from '../../action';

import './styles.css';

function StatusBar(props) {
  if (!props.foots) {
    over();
  }
  return(
    <div className = 'status-bar'>
        <h2 className = 'sb-title'>Player Stats</h2>
        <p className = 'sb-content'>Level: {props.level}</p>
        <p className = 'sb-content'>HP: {props.hp}</p>
        <p className = 'sb-content'>Experience: {props.experience}</p>
        <p className = 'sb-content'>Attack:{props.attack}</p>
        <p className = 'sb-content'>foots: {props.foots}</p>
        <button className = 'sb-button' onClick = {() => over()}>Game Over</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    level: state.player.level,
    hp: state.player.hp,
    experience: state.player.experience,
    attack: state.player.attack,
    foots: state.player.foots
  }
}

function over() {
  store.dispatch(gameOver())
}

export default connect(mapStateToProps)(StatusBar);
