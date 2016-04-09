import * as types from './actionTypes';

export function add() {
  return {
    type: types.ADD
  };
}

export function remove() {
  return {
    type: types.REMOVE
  };
}

export function togglePick() {
  return {
    type: types.TOGGLEPICK
  };
}
