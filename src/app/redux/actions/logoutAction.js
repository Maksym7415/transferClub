
import * as types from '../constants/actionTypes';

export default (name) => ({
  type: types.LOGOUT,
  name,
});
