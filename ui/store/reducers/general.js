import state from '../state';
import { LOAD_USER, LOAD_GAME, LOAD_ROOM } from './actions/general';

const reducer = (action, state = state) => {
  switch(action.type) {
    case LOAD_USER.type :
      return state = {
        ...state,
        userData: action.payload
      };
    case LOAD_GAME.type :
      return state = {
        ...state,
        gameData: action.payload
      };
    case LOAD_ROOM.type :
      return state = {
        ...state,
        roomData: action.payload
      };
    default :
      return state;
  }
};