import * as types from '../constants/actionTypes';

export default (state = {}, {
  type, payload, err, name,
}) => {
  switch (type) {
    case types.REQUEST: {
      return {
        ...state,
        [name]: {
          isFetching: true,
          payload: undefined,
        },
      };
    }
    case types.REQUEST_SUCCESS: {
      if (name === 'auth') localStorage.authToken = payload.token;
      return {
        ...state,
        [name]: {
          payload,
          isFetching: false,
        },

      };
    }
    case types.REQUEST_FAIL: {
      return {
        ...state,
        [name]: {
          err,
          isFetching: false,
        },
      };
    }
    case types.DELETE_DATA: {
      return {
        ...state,
        [name]: {
        },
      };
    }
    default: return state;
  }
};
