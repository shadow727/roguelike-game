import { MOVE_PLAYER, PLAYER_RESET, PLAYER_NEXT } from './actionTypes';

const initialState = {
  position: [0, 0],
  spriteLocation: '0px 0px',
  direction: 'DOWN',
  walkIndex: 0,
  level: 0,
  hp: 500,
  experience: 0,
  attack: 100,
  foots: 100
}

const playerReducer = (state=initialState, action) => {
  switch(action.type) {
    case MOVE_PLAYER:
      return {
        ...state,
        ...action.payload,
        foots: state.foots-1
      }
    case PLAYER_NEXT:
      return {
        ...state,
        position: [0, 0],
        direction: 'DOWN',
        walkIndex: 0
      }
    case PLAYER_RESET:
      return initialState
    default:
      return state
  }
}

export default playerReducer;
