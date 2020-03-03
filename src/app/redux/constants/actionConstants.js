
import * as types from './actionTypes';

export default {
  Request(name) {
    return {
      type: types.REQUEST,
      name,
    };
  },
  RequestSuccess(payload, name) {
    return {
      type: types.REQUEST_SUCCESS,
      payload,
      name,
    };
  },
  RequestFail(err, name) {
    return {
      type: types.REQUEST_FAIL,
      err,
      name,
    };
  },
};
