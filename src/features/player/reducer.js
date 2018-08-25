import { MOVE_PLAYER, PLAYER_RESET } from './actionTypes';

const initialState = {
  position: [0, 0],
  spriteLocation: '0px 0px',
  direction: 'DOWN',
  walkIndex: 0
}

const playerReducer = (state=initialState, action) => {
  switch(action.type) {
    case MOVE_PLAYER:
      return {
        ...action.payload
      }
    case PLAYER_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default playerReducer;
