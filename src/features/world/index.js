import React from 'react';
import Map from '../map';
import Player from '../player';
import store from '../../store/store';
import { generateMap } from './action';

function World(props){
  store.dispatch(generateMap());
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

export default World;
