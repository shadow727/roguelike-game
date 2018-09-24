import { MOVE_PLAYER, PLAYER_RESET, PLAYER_NEXT } from './actionTypes';

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

export const playerNext = () => ({
  type: PLAYER_NEXT
})
