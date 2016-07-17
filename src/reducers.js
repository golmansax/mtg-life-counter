import { combineReducers } from 'redux';
import { UPDATE_LIFE, RESET_LIFE, ME, YOU } from './constants';

const initialLifeTotals = {
  [ME]: 20,
  [YOU]: 20,
};

const lifeTotals = (state = initialLifeTotals, action) => {
  switch (action.type) {
    case UPDATE_LIFE:
      return Object.assign({}, state, {
        [action.player]: state[action.player] + action.amount,
      });

    case RESET_LIFE:
      return initialLifeTotals;

    default:
      return state;
  }
};

export const lifeCounterApp = combineReducers({ lifeTotals });
