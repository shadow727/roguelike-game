import { GAME_START, GAME_OVER, GAME_RETRY} from './actionTypes';

const initialState = {
  gamePre: true,
  gameStart: false,
  gameOver: false
}

const gameReducer = (state = initialState, action) => {
  switch(action.type){
    case GAME_START:
      return {...state, gamePre: false, gameStart: true};
    case GAME_OVER:
      return {...state, gameStart: false, gameOver: true};
    case GAME_RETRY:
      return {...state, gameOver: false, gamePre: true};
    default:
      return state;
  }
}

export default gameReducer;
