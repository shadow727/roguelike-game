import React from 'react';
import { connect } from 'react-redux';
import walkSprite from './player_walk.png';
import handleMovement from './movement';

function Player(props) {
  return (
    <div
       style = {{
         position: 'absolute',
         top: 100 + props.position[1],
         left: `calc(30% + ${props.position[0]}px )`,
         backgroundImage: `url('${walkSprite}')`,
         backgroundPosition: props.spriteLocation,
         width:'40px',
         height: '40px'
       }}
    />
  )
}

function mapStateToProps(state) {
  return {
    ...state.player
  }
}

export default connect(mapStateToProps)(handleMovement(Player));
