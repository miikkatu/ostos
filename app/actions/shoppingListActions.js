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

export function pick() {
  return {
    type: types.PICK
  };
}

export function unpick() {
  return {
    type: types.UNPICK
  };
}
