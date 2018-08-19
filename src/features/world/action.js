import {ADD_TILES} from './actionTypes';
import { tiles } from '../../data/maps/1';

export const addTiles = () => ({
  type: ADD_TILES,
  payload: {tiles: tiles}
})
