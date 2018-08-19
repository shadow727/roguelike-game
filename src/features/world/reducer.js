import {ADD_TILES} from './actionTypes';

const initialState = {
  tiles: []
}

const worldReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_TILES:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}
export default worldReducer;
