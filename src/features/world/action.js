import { GENERATE_MAP, GAME_RESET } from './actionTypes';

export const generateMap = () => ({
  type: GENERATE_MAP
});

export const gameReset = () => ({
  type: GAME_RESET
});
