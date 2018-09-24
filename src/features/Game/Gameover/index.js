import React from 'react';
import { connect } from 'react-redux';
import TransitionGroup from 'react-addons-css-transition-group';
import store from '../../../store/store';
import { gameRetry } from '../action';

//need to revise later
import { playerReset } from '../world/player/action';
import { generateMap } from '../world/action';

import './style.css';

function Gameover(props) {
  let overComponent = (
    <div className = 'over-body'>
      <h1 className = 'over-title'>Game Over</h1>
      <div className = 'over-article'>
        <p className = 'over-main'>You Have Conquered {props.rounds - 1} Round</p>
        <p className = 'over-main'>You Have Reached {props.level} Level</p>
        <p className = 'over-main'>Try Again ?</p>
      </div>
      <div className = 'button-area'>
        <button onClick={() => retry()} className = 'over-button'>Try Again!</button>
      </div>
    </div>
  )
  return(
    <TransitionGroup
      transitionName = "overSceen"
      transitionEnterTimeout = {500} 
      transitionLeaveTimeout = {500}
      transitionAppear={true}
      transitionAppearTimeout={500}
    >
     {overComponent}
    </TransitionGroup>
  )
}

function retry() {
  store.dispatch(gameRetry());
  reset();
}

function reset() {
  store.dispatch(playerReset());
  store.dispatch(generateMap());
}

function mapStateToProps(state) {
  return {
    level: state.player.level,
    rounds: state.world.rounds
  }
}

export default connect(mapStateToProps)(Gameover);
