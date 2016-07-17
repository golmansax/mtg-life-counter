import { UPDATE_LIFE, RESET_LIFE } from './constants';

export const updateLife = (player, amount) => ({ type: UPDATE_LIFE, player, amount });
export const resetLifeTotals = () => ({ type: RESET_LIFE });
