import * as types from '../constants/actionTypes';

export default (name) => ({
  type: types.DELETE_DATA,
  name,
});
