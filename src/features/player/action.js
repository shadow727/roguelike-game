import { MOVE_PLAYER } from './actionTypes';

export const movePlayer = (position, direction, spriteLocation, walkIndex) => ({
  type: MOVE_PLAYER,
  payload: {
    position: position,
    direction: direction,
    spriteLocation: spriteLocation,
    walkIndex: walkIndex
  }
})
