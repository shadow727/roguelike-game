import React from 'react';
import { connect } from 'react-redux';
import { SPRITE_SIZE } from '../../../../store/constants';

import './styles.css';

function getTileSprite(type) {
  switch(type) {
    case 0 :
      return 'grass';
    case 5 : 
      return 'rock';
    case 6 : 
      return 'tree';
    case -1 :
      return 'chest';
    default :
      return 'ground';
  }
}

function MapTile(props) {
  return <div className={`tile ${getTileSprite(props.tile)}`} 
    style={{
      height:SPRITE_SIZE,
      width:SPRITE_SIZE
  }} />
}

function MapRow(props) {
  let id = 0;
  return <div className = "row" style={{height: SPRITE_SIZE}}>
  {
    props.tiles.map( tile => <MapTile tile={tile} key = {'rows' + id++}/>)
  }
  </div>
}

function Map(props) {
  let id = 0;
  return(
    <div className = 'map'>
      {
        props.tiles.map( row =><MapRow tiles={row} key = {'tiles' + id++} />)
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    tiles: state.world.tiles
  }
}

export default connect(mapStateToProps)(Map);
