import { UPDATE_LIFE } from './constants';

export const updateLife = (player, amount) => ({ type: UPDATE_LIFE, player, amount });
