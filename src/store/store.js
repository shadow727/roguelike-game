import { createStore } from 'redux';
import { combineReducers } from '../../node_modules/redux';
import playerReducer from '../features/player/reducer';
import worldReducer from '../features/world/reducer';

const rootReducer = combineReducers({
  player: playerReducer,
  world: worldReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
