import { createStore } from 'redux';
import { combineReducers } from '../../node_modules/redux';
import playerReducer from '../features/Game/world/player/reducer';
import worldReducer from '../features/Game/world/reducer';
import gameReducer from '../features/Game/reducer';

const rootReducer = combineReducers({
  player: playerReducer,
  world: worldReducer,
  game: gameReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
