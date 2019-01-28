
const LOAD_USER = (data) => {
  return {
    type: 'LOAD_USER',
    payload: data
  };
}
const LOAD_GAME = (data) => {
  return {
    type: 'LOAD_GAME',
    payLoad: data
  };
}
const LOAD_ROOM = (data) => {
  return {
    type: 'LOAD_ROOM',
    payload: data
  }
}

export default {LOAD_USER, LOAD_GAME, LOAD_ROOM};