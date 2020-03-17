
import * as types from './actionTypes';

export default {
  Request(name) {
    return {
      type: types.REQUEST,
      name,
    };
  },
  RequestSuccess(name, payload) {
    return {
      type: types.REQUEST_SUCCESS,
      payload,
      name,
    };
  },
  RequestFail(name, error) {
    return {
      type: types.REQUEST_FAIL,
      error,
      name,
    };
  },
};
