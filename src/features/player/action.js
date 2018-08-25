import { MOVE_PLAYER, PLAYER_RESET } from './actionTypes';

export const movePlayer = (position, direction, spriteLocation, walkIndex) => ({
  type: MOVE_PLAYER,
  payload: {
    position: position,
    direction: direction,
    spriteLocation: spriteLocation,
    walkIndex: walkIndex
  }
})

export const playerReset = () => ({
  type: PLAYER_RESET
})
