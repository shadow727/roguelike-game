import store from '../../store/store';
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../../store/constants';
import { movePlayer } from './action';

export default function handleMovement(player) {

  function getNewPosition(oldPos, direction) {
    switch(direction) {
      case 'LEFT': 
        return [oldPos[0]-SPRITE_SIZE, oldPos[1]];
      case 'RIGHT': 
        return [oldPos[0]+SPRITE_SIZE, oldPos[1]];
      case 'UP': 
        return [oldPos[0], oldPos[1]-SPRITE_SIZE];
      case 'DOWN': 
        return [oldPos[0], oldPos[1]+SPRITE_SIZE];
      default: 
        return('Problem happened in player position');
    }
  }

  function getSpriteLocation(direction, walkIndex) {
    switch(direction) {
      case 'UP':
        return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*3}px`;
      case 'DOWN':
        return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*0}px`;
      case 'LEFT':
        return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*2}px`;
      case 'RIGHT':
        return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*1}px`;
      default:
        return '0px 0px';
    }
  }

  function getWalkIndex() {
    const walkIndex = store.getState().player.walkIndex + 1;
    return walkIndex >= 8 ? 0 : walkIndex
  }

  function observeBoundaries(newPos) {
    return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH) && (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT); 
  }

  function observeImpassable(newPos) {
    const tiles = store.getState().world.tiles;
    const y = newPos[1] / SPRITE_SIZE;
    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];
    return nextTile < 5;
  }

  function dispatchMove(direction, newPos) {
    const walkIndex = getWalkIndex();
    const spriteLocation = getSpriteLocation(direction, walkIndex);
    store.dispatch(movePlayer(newPos, direction, spriteLocation, walkIndex));
  }

  function attemptMove(direction) {
    const oldPos = store.getState().player.position;
    const newPos = getNewPosition(oldPos, direction);
    if (observeBoundaries(newPos) && observeImpassable(newPos)) {
      dispatchMove(direction, newPos)
    }
  }

  function handleKeyDown(e) {
    e.preventDefault();
    switch(e.keyCode) {
      case 37:               //left
        return attemptMove('LEFT');
      case 38:              //up
        return attemptMove('UP');
      case 39:              //right
        return attemptMove('RIGHT');
      case 40:              //down
        return attemptMove('DOWN');
      default:
        console.log(e.keyCode)
    }
  }

  window.addEventListener('keydown', e => {
    handleKeyDown(e);
  })

  return player;
}
