
import * as types from '../constants/actionTypes';

export const deleteOrders = (name) => ({
  type: types.DELETE_DATA,
  name,
});
