import React from 'react';
import TransitionGroup from 'react-addons-css-transition-group';
import store from '../../../store/store';
import { gameStart } from '../action';

import './styles.css';

function StartScene(){
  let startComponent = (
    <div className = 'start-body'>
      <h1 className = 'start-title' onClick = {() => window.open('https://en.wikipedia.org/wiki/Roguelike')}>RogueLike Game</h1>
      <button className = 'start-button' onClick = {() => start()}> Game Start! </button>
    </div>
  )
  return (
    <TransitionGroup
      transitionName = "startScreen"
      transitionAppear = {true}
      transitionAppearTimeout = {500} 
      transitionEnterTimeout = {500} 
      transitionLeaveTimeout = {500}
    >
      {startComponent}
    </TransitionGroup>
  )
}

function start() {
  store.dispatch(gameStart())
}


export default StartScene;
