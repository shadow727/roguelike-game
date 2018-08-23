import { GENERATE_MAP } from './actionTypes';

function mapGenerator() {
  let tiles = [];
  let a=0, b=0;
  for (let i = 0; i < 10; i++) {
    let temp = [];
    for (let j = 0; j < 20; j++) {
      if (!i && !j) {
        temp.push(0);
      } else {
        temp.push(Math.round(Math.random()*7-0.5));
      }
    }
    tiles.push(temp);
  }
  while(a < 7 || b < 15) {
    a = Math.round(Math.random()*10-0.5);
    b = Math.round(Math.random()*20-0.5);
  }
  tiles[a][b] = -1;
  return tiles;
}

function mapTester(tiles) {
  let a = 0, b = 0, flag = 1;
  while (tiles[a][b] !== -1) {
    if ( flag && a<9 && (tiles[a+1][b] < 5)) {
      a += 1;
    } else if (b<19 && (tiles[a][b+1] < 5)) {
      b += 1;
      flag = 1;
    } else if (a>0 && (tiles[a-1][b] < 5)) {
      a -= 1;
      flag = 0;
    } else {
      return false;
    }
  }
  return true;
} 

function generateMap() {
  let tiles = mapGenerator();
  mapTester(tiles);
  while (!mapTester(tiles)) {
    tiles = mapGenerator();
  }
  return tiles;
}

const initialState = {
  tiles: []
}

const mapReducer = (state = initialState, action) => {
  switch(action.type) {
    case GENERATE_MAP:
      return { ...state, tiles: generateMap() }
    default:
      return state;
  }
}

export default mapReducer;
