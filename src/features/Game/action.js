import { GAME_START, GAME_OVER, GAME_RETRY } from './actionTypes';

export const gameStart = () => ({
  type: GAME_START
});

export const gameOver = () => ({
  type: GAME_OVER
});

export const gameRetry = () => ({
  type: GAME_RETRY
});
