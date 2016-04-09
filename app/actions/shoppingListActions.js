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

export function pick(name) {
  return {
    type: types.PICK,
    name: name
  };
}

export function unPick() {
  return {
    type: types.UNPICK
  };
}
