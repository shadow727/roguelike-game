import { GENERATE_MAP } from './actionTypes';

function mapGenerator() {
  let tiles = [];
  for (let i = 0; i < 10; i++) {
    let temp = [];
    for (let j = 0; j < 20; j++) {
      temp.push(Math.round(Math.random()*7-0.5));
    }
    tiles.push(temp);
  }
  return tiles;
}

const initialState = {
  tiles: []
}

const mapReducer = (state = initialState, action) => {
  switch(action.type) {
    case GENERATE_MAP:
      return { ...state, tiles: mapGenerator() }
    default:
      return state;
  }
}

export default mapReducer;
