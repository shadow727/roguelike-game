import React from 'react';
import { connect } from 'react-redux';
import StartScene from './startScene';
import GameOver from './Gameover';
import World from './world';

function Game(props){
  let screenShow = (<div></div>);
  if (props.gamePre) {
    screenShow = <StartScene />
  }else if (props.gameStart) {
    screenShow = <World />
  }else if (props.gameOver) {
    screenShow = <GameOver />
  }
  // let screenShow = <World />
  return (
  <div>
    {screenShow}
  </div>
  )
}

function mapStateToProps(state) {
  return {
    gamePre: state.game.gamePre,
    gameStart: state.game.gameStart,
    gameOver: state.game.gameOver
  }
}

export default connect(mapStateToProps)(Game);
