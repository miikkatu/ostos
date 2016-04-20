export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const PICK = 'PICK';
export const UNPICK = 'UNPICK';

export function add(data) {
  return {
    type: ADD,
    data: data
  };
}

export function remove(name) {
  return {
    type: REMOVE,
    name: name
  };
}

export function pick(name) {
  return {
    type: PICK,
    name: name
  };
}

export function unPick(name) {
  return {
    type: UNPICK,
    name: name
  };
}
