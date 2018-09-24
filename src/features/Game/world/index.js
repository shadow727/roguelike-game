import React from 'react';
import Map from './map';
import Player from './player';
import StatusBar from './statusBar';
import Header from './header';
import store from '../../../store/store';
import { generateMap } from './action';

import './styles.css';

function World(){
  store.dispatch(generateMap());
  return(
    <div className = 'world'>
      <Header />
      <StatusBar />
      <Map />
      <Player />
    </div>
  )
}

export default World;
