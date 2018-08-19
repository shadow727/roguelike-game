import React from 'react';
import Map from '../map';
import Player from '../player';
import store from '../../store/store';
import { addTiles } from './action';

function World(props){
  store.dispatch(addTiles());
  return(
    <div 
      style = {{
        position: 'relative',
        width: '800px',
        height: '400px',
        margin: '20px auto'
      }} 
    >
      <Map />
      <Player />
    </div>
  )
}

export default World
